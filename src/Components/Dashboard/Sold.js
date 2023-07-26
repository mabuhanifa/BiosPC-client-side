import React, { useEffect, useState } from 'react';

const Sold = () => {
    const [sold , setSold] = useState([]);
    useEffect(() => {
        fetch('https://bios-pc.onrender.com/sold')
            .then(res => res.json())
            .then(data => setSold(data));
    }, []);

    return (
        <div className='w-fit my-10 mx-10'>
            <h2 className="text-2xl text-center font-bold my-10"> Sold Items </h2>
            <table className="table">
  <thead>
    <tr>
    <th scope="col">Product Name</th>
    <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Ordered Quantity</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
  {sold.map(sold => 
                    <tr key={sold._id}>


                   <td> {sold?.productName}</td> 
                    <td> {sold?.name}</td> 
                    <td>{sold?.email}</td> 
                    <td> {sold.orderedQuantity}</td>
                    <td>{sold.phone}</td>

                    </tr>)}
  </tbody>
</table>

        </div>
    );
};

export default Sold;