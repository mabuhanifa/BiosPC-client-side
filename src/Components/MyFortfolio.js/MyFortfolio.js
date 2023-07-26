import React from 'react';

const MyFortfolio = () => {
    return (
        <div className='m-40'>
            <h1>My Fortfolio</h1>

                <p className='my-10'>
                    Name : Mohammed Abuhanifa
                </p>
                <p>
                Email: moh.abuhanifa@gmail.com
                </p>
                <h4 className='my-10'>List of technologies and skills :</h4>
                <ol >
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>React</li>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>MongoDb</li>

                </ol>
                <h4 className='my-10 '>List of projects :</h4>
                <p className='link text-blue-500 '> <a href="https://mern-assignment-01.web.app" target="_blank" rel="noreferrer">Gadget Arena</a>   </p>
                <p className='link text-blue-500 my-10'> <a href="https://react-firebase-assignment-09.firebaseapp.com" target="_blank" rel="noreferrer">SnapMaster</a></p>
                <p className='link text-blue-500 '> <a href="https://sonyheadset.netlify.app" target="_blank" rel="noreferrer">HeadSet Arena</a></p>

        </div>
    );
};

export default MyFortfolio;