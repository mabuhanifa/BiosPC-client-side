import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    return (

      
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
  <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>
      <h4 className='text-4xl text-center mt-10'>DashBoard</h4>
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 text-base-content bg-slate-200 rounded-lg">
      {/* <-- Sidebar content here --> */}
      <li className='bg-gray-300 font-bold'><Link to="/dashboard/additem">Add Product</Link></li>
      <li className='bg-gray-300 font-bold'><Link to="/dashboard/allproducts">All Produtcs</Link></li>
      <li className='bg-gray-300 font-bold'><Link to="/dashboard/users">Users</Link></li>
      <li className='bg-gray-300 font-bold'><Link to="/dashboard/reviews">Add Review</Link></li>
      <li className='bg-gray-300 font-bold'><Link to="/dashboard/sold">Sold Products</Link></li>
    </ul>
  
  </div>
</div>
        
    );
};

export default Dashboard;