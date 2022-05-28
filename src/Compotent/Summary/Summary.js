import React from "react";
import { AiOutlineFlag } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
const Summary = () => {
  return (
    <>
      <div className="text-center text-gray-500">
        <h1 className="sm:stat-value sm:text-5xl m-4">Millions Business Trust Us</h1>
        <h2 className="sm:stat-value sm:text-3xl">
          We always try to understand our user expectations.
        </h2>
      </div>
      <div class="divider"></div>

      <div className="grid grid-rows-1 sm:grid-cols-4 gap-4 mt-6">
        <div className="mx-auto p-4 ">
          <span className="text-6xl text-accent">
            <AiOutlineFlag></AiOutlineFlag>
          </span>
          <h4 className="stat-value text-4xl text-neutral">32</h4>
          <p className="text-xl text-accent">Countries</p>
        </div>
        <div className="mx-auto p-4">
          <span className="text-6xl text-accent">
            <FaUsers></FaUsers>
          </span>
          <h4 className="stat-value text-4xl text-neutral">246+</h4>
          <p className="text-xl text-accent">Happy Clients</p>
        </div>
        <div className="mx-auto p-4">
          <span className="text-6xl text-accent">
            <VscFeedback></VscFeedback>
          </span>
          <h4 className="stat-value text-4xl text-neutral">324+</h4>
          <p className="text-xl text-accent">Feedback</p>
        </div>
        <div className="mx-auto p-4">
          <span className="text-6xl text-accent">
            <MdLocalShipping></MdLocalShipping>
          </span>
          <h4 className="stat-value text-4xl text-neutral">438+</h4>
          <p className="text-xl text-accent">Shipment</p>
        </div>
      </div>
      <div class="divider"></div>

      <div className="mx-40 p-10 flex shadow-lg q_n">
          <div>
            <h2 className="sm:stat-value sm:text-2xl text-accent"> Have any question about us or 
            got a product request?</h2>
            <p className="sm:text-xl text-neutral">
                Don't hesitate to contact us.
            </p>
          </div>
          <div className="mx-auto ">
              <button className="btn btn-accent text-white ml-10 text-xs">Request For Quote</button>
              <button className="btn btn-dark ml-10 sm:text-xs">Contact Us</button>
          </div>
      </div>
    </>
  );
};

export default Summary;
