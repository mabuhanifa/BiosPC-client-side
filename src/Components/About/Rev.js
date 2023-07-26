import React from 'react';

const Rev = ({rev }) => {
    return (
        <div className='w-full p-10 bg-gray-200 rounded-lg'>

            <img className='w-10 h-10 sm:w-20 sm:h-20 mx-auto rounded-full' src={rev?.img} alt="" />
            <p className='text-lg text-center my-5'>Name: { rev?.name} </p>
            <p className='text-lg text-center my-5'>Rating: { rev?.rating} </p>
            <p className='text-lg '>Review: { rev?.review} </p>
            
        </div>
    );
};

export default Rev;