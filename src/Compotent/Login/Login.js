import React from "react";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center ">
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title font-bold">Login</h2>
                   <div class="divider">OR</div>
                       <button className="btn btn-primary text-white">
                            <span className="text-2xl mr-4">
                                 <BsGoogle></BsGoogle>
                            </span>{" "}
                             Continue With Google{" "}
                        </button>
                    </div>
                </div>
             </div>
  );
};

export default Login;
