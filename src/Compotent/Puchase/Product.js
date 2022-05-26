import React, { useState } from 'react';

const Product = ({product} ) => {
    const {name, price,quantity,moq, supplier,img,info} = product;
    const [read,setRead] = useState(true);
    const readmore = () => {
        setRead(!read);
    };
    const readText = read ? info.slice(0,200) : info;


    
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto border-2 my-20">
  <figure><img src={img} alt="Shoes" className='p-4'/></figure>
  <div class="card-body">
    <h2 class="card-title"> Product Name : {name}</h2>
    <p>Brand: {supplier}</p>
    <p>Price : {price} </p>
    <p>Available Quantity : {quantity} </p>
    <p>Minimum Order Quantity : { moq} </p>
    <p>Description: {readText}<span className='btn btn-info btn-xs'  onClick={readmore}>{read ? "...Read more" : "...Read Less" }</span></p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary block mx-auto text-white w-full my-5">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;