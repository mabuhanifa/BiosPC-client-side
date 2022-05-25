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
    
    const user = {name,price,supplier,quantity,img,info};

    fetch("http://localhost:5000/products", {
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
      <div className="w-2/4">
        <h4>Add items</h4>
        <ToastContainer />
      </div>
      <div className="m-20 w-2/4 h-full mx-auto">
        <form onSubmit={handleAddItem}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            class="block input input-bordered w-full max-w-xs mb-4"
          />

          <input
            type="Number"
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
