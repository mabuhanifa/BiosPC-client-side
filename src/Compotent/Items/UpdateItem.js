import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const UpdateItem = () => {
  const { id } = useParams();
  const[products,setProducts] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => { 
            setProducts(data);
        });
    },[id]);

console.log(products);

  const restock = (event) => {
    event.preventDefault();
    const restock = parseInt(event.target.restock.value);
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: products.name,
        img: products.img,
        price: products.price,
        supplier: products.supplier,
        quantity: parseInt(products.quantity) + restock,
        info: products.info,
      }),
    });
    event.target.reset();
  };
  
  const deliver = (event) => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: products.name,
        img: products.img,
        price: products.price,
        supplier: products.supplier,
        quantity: products.quantity - 1,
        info: products.info,
      }),
    });
  };
  const UpdateProducts = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const img = event.target.img.value;
    const price = event.target.price.value;
    const supplier = event.target.supplier.value;
    const info = event.target.info.value;
    const quantity = event.target.quantity.value;

    const updatedProducts = { name,img, price, supplier, quantity,info };

    // send data to the server
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast.success("users added successfully!!!");
        event.target.reset();
      });
  };
  return (
      <div className="about container-lg d-flex">
        <div className="p_info ">
          <h3 className="ms-5">Deliver or Restock Products</h3>
        <div className='d_productss' key={products._id}>

                 <img className='d_img' src={products.img} alt="" />   
                <div className='d-flex-column'>
                <h4>Product Name : {products.name}</h4>
                <p>Info : {products.info}</p>
                <p>Price : {products.price}</p>
                <p>Stock Quantity : {products.quantity}</p>
                <p>Brand : {products.supplier} </p>
                </div>
                <button className="d-btn" onClick={deliver}> Deliver </button>
        <br />
      <form className="restock" onSubmit={restock}>
      <input type="number" name='restock' placeholder='Amount' required/>
            <br />
        <input className="i-btn" type="submit" value="Restock" />
      </form>

                </div>
        
        </div>


        {/* ----------------Update Form--------------------- */}

        <div className="d-block f_info ">
      <h2 className="text-center mb-5">Update Whole Products </h2>
      <form className="update-form " onSubmit={UpdateProducts}>
      <input type="text" name='name' placeholder='Name' required/>
            <br />
            <input type="number" name='price' placeholder='Price' required/>
            <br />
            <input type="number" name='quantity' placeholder='Quantity' required/>
            <br />
            <input type="text" name='supplier' placeholder='Supplier' required/>
            <br />
            <input type="text" name='info' placeholder='Info' required/>
            <br />
            <input type="text" name='img' placeholder='Image' required/>
            <br />
            
        <input className="i-btn" type="submit" value="Update User" />
      </form>
    </div>
    <ToastContainer />
      </div>
  );
};

export default UpdateItem;