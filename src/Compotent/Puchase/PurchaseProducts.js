import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const PurchaseProducts = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [errorClass,seterrorClass] = useState('hidden');
 const {moq, quantity} =products;
 const moqNumber = parseInt(moq);
 const quantityNumber = parseInt(quantity);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const purchase = (event) => {
    event.preventDefault();
    const moq = event.target.moq.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    console.log(name, email, phone, moq);
    if (moq < moqNumber) {
      seterrorClass('text-error');
      return;
    } else if (moq > quantityNumber) {
        seterrorClass('text-error');
        return;
    }
    const buyer = { name, email, phone, moq };
    fetch(`http://localhost:5000/purchase/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(buyer),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    toast.success('Item added successfully');
    event.target.reset();

    };

  return (
      <>
      <ToastContainer></ToastContainer>
    <div className="bg-gray-300 rounded-xl my-10 sm:mx-40">
      <div className="grid sm:grid-cols-2 justify-center items-center">
        <div className="m-20 w-fit">
          <img className="rounded-xl" src={products.img} alt="" />
        </div>
        <div className="p-20 leading-10">
          <h2 className="text-xl font-bold my-5"> Product Name : {products.name}</h2>
          <p className="text-xl my-5">Brand: {products.supplier}</p>
          <p className="font-bold my-5">Price: {products.price} </p>
          <p className="my-5">Available Quantity : {products.quantity} </p>
          <p className="my-5">Minimum Order Quantity : {products.moq} </p>
          <p>Description: {products.info}</p>
        </div>
      </div>
    </div>
    <div>
        <div>
            
        </div>


        <div className="w-96 mx-auto bg-slate-200 p-10 my-10 rounded-lg">

            <h2 className="text-2xl font-bold text-center">Purchase</h2>

            <form onSubmit={purchase}>

            <div className="w-full mx-auto">
                    <label class="label">
                    <span class="label-text inline">Enter Quantity</span>
                     </label>
                <input name="moq" type="Number" placeholder={products.moq} class="input input-bordered  w-2/4 "/>
                
            </div>
            <p className={errorClass}> Please enter a quantity which is more than Minimum Order Quantity and less than avialable quantity </p>
            <input name="name" type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs my-5 block" />
            <input name="email" type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs my-5 block" />
            <input name="phone" type="number" placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs my-5 block" />
            <input  type="submit" value="Buy Now" class="btn btn-primary input input-bordered w-full max-w-xs my-5 block" />
            </form>
        </div>
        
    </div>
    </>
  );
};

export default PurchaseProducts;
