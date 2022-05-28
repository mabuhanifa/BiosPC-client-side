import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Items = () => {
  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const supplier = event.target.supplier.value;
    const quantity= event.target.quantity.value;
    const img= event.target.img.value;
    const info= event.target.info.value;
    const moq= event.target.moq.value;
    
    const user = {name,price,supplier,quantity,img,info,moq};

    fetch("https://murmuring-brushlands-50505.herokuapp.com/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

    toast.success('Item added successfully');
    event.target.reset();
  };
  return (
    <div className="flex">
      
        <ToastContainer />
      
      <div className="m-20 w-96 h-full mx-auto">
        <h4 className="text-2xl text-center my-10"> Add Products</h4>
        <form onSubmit={handleAddItem}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            class="block input input-bordered w-full max-w-xs mb-4"
          />

          <input
            type="number"
            placeholder="Price"
            name="price"
            class="block input input-bordered w-full max-w-xs mb-4"
          />

          <input
            type="number"
            placeholder="Quantity"
            name="quantity"
            class="block input input-bordered w-full max-w-xs mb-4"
          />
          <input
            type="number"
            placeholder="Minimum Order Quantity"
            name="moq"
            class="block input input-bordered w-full max-w-xs mb-4"
          />

          <input
            type="text"
            placeholder="Description"
            name="info"
            class="block input input-bordered w-full max-w-xs mb-4"
          />

          <input
            type="text"
            placeholder="Supplier"
            name="supplier"
            class="block input input-bordered w-full max-w-xs mb-4"
          />

          <input
            type="text"
            placeholder="Image"
            name="img"
            class="block input input-bordered w-full max-w-xs mb-4"
          />
          <input className="btn btn-primary mt-4" type="submit" value="Add New Item" />
        </form>
      </div>
    </div>
  );
};

export default Items;
