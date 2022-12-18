import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProducts = () => {
    const[products,setProducts] = useState([]);

    useEffect(() => {
        fetch('https://biospc-server-side-production.up.railway.app/products')
        .then(res => res.json())
        .then(data => { 
            setProducts(data);
        });
    },[]);
    const deleteItem = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if(proceed){
            const url = `https://biospc-server-side-production.up.railway.app/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){   
                    const remaining = products.filter(products => products._id !== id);
                    setProducts( remaining );
                    toast.success("Item deleted successfully", { type: "success" });
                }
            });
        }
    };
    return (
        <div className='w-fit mx-auto mt-20'>
            <ToastContainer></ToastContainer>
            <div className='mt-10' >
            <table className="table">
  <thead>
    <tr>
    <th scope="col">Image</th>
      <th scope="col">Product Name</th>
      <th scope="col">Supplier</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col"><small className='t-xs'>Minimum <br /> Order <br />  Quantity</small></th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
  {products.map(products => <tr key={products._id}>
                    <td><img className='w-10' src={products.img} alt="" /></td> 
                    <td>{products.name}</td> 
                    <td>{products.supplier}</td>
                    <td>${products.price}</td>
                    <td>{products.quantity}</td>
                    <td>{products.moq}</td>
                    <td><button className='btn btn-error' onClick={() => deleteItem(products._id)}> Delete</button></td>
                    </tr>)}
  </tbody>
</table>
            </div>
        </div>
        
    );
};

export default AllProducts;