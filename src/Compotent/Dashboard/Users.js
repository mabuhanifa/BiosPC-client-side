import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className='w-96 mx-auto my-10'>
            <table className="table">
  <thead>
    <tr>
    <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
  {users.map(user => 
                    <tr key={user._id}>

                    <td> {user?.name}</td> 
                    <td>{user?.email}</td> 
                    <td> {user.role !== 'admin'  && <button className='btn-sm btn-primary'>Make Admin</button>} </td>

                    </tr>)}
  </tbody>
</table>
<ToastContainer></ToastContainer>
        </div>
 
    );
};

export default Users;