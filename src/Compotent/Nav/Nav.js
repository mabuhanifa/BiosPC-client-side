import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
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
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mx-4">
            <Link to="/items">Add Item</Link>
          </li>
           </ul>
      </div>
    </div>
    
  );
};

export default Nav;
