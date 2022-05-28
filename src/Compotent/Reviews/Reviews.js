import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Items = () => {
  const addReview = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const img= event.target.img.value;
    const review = event.target.review.value;
    const  rating = event.target.rating.value;
    
    const reviews = {name,img, review, rating};

    fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( reviews),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

    toast.success('Review added successfully');
    event.target.reset();
  };
  return (
    <div className="flex">
      
        <ToastContainer />
      
      <div className="m-20 w-96 h-full mx-auto">
        <h4 className="text-2xl text-center my-10"> Add Products</h4>
        <form onSubmit={addReview}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            class="block input input-bordered w-full max-w-xs mb-4"
          />
          

          <input
            type="text"
            placeholder="Image"
            name="img"
            class="block input input-bordered w-full max-w-xs mb-4"
          />

          <input
            type="text"
            placeholder="Write Your Review"
            name="review"
            class="block input input-lg input-bordered w-full max-w-xs mb-4"
          />

          <input
            type="text"
            placeholder="Give a rating"
            name="rating"
            class="block input input-bordered w-full max-w-xs mb-4"
          />
          <input className="btn btn-primary mt-4 w-fit mx-auto" type="submit" value="Submit Your Review" />
        </form>
      </div>
    </div>
  );
};

export default Items;
