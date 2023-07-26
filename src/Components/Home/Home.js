import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
      
      <About></About>
      <h2 className='text-4xl text-center'> Our Products</h2>
      <Products></Products>

      <span className='text-center text-blue-700 w-fit mx-auto block text-xl mb-10 font-bold'><Link to='/purchase'> View More Products</Link></span>
        </div>
    );
};

export default Home;