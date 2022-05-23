import React from "react";

const Nav = () => {
  return (
    <div className="sm:flex items-center justify-around nav_main">
      <div>Logo</div>
      <nav>
        <ul className="navbar nav_i">
          <li className="mx-4">
            <a href="/">Home</a>
          </li>
          <li className="mx-4">
            <a href="/">Contact</a>
          </li>
          <li className="mx-4">
            <a href="/">Blog</a>
          </li>
          <li className="mx-4">
            <a href="/">About</a>
          </li>
          <li className="mx-4">
            <a href="/">Services</a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="btn btn-primary px-10 mx-4">Login</button>
        <button className="btn btn-error px-10">Sign Up</button>
      </div>
    </div>
  );
};

export default Nav;
