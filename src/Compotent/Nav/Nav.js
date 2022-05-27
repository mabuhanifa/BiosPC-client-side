import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Nav = () => {
  const [user]= useAuthState(auth);
  return (
    
    <div className="sm:flex items-center justify-around nav_main text-lg">
      <div>
        <p>
          <span className="text-violet-600 font-bold text-2xl">Bios</span>
          <span className="text-blue-600 font-bold text-2xl">PC</span> 
        </p>
        </div>
      <nav>
        <ul className="navbar nav_i font-bold">
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/purchase">Purchase</Link>
          </li>
          <li className="mx-4">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>
           <ul className="navbar font-bold">
           
          <li className="mx-4">
            <Link to="/items">Add Item</Link>
          </li>
           
          <li className="mx-4">
            <Link to="/dashboard">Dashboard</Link>
          </li> 
          {user ? <button className="btn btn-error" onClick={()=>signOut(auth)}>Logout</button> : <li className="mx-4">
            <Link to="/login">Login</Link>
          </li> }
           </ul>
      </div>
    </div>
    
  );
};

export default Nav;
