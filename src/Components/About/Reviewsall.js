import React, { useEffect, useState } from 'react';
import Rev from './Rev';

const Reviewsall = () => {
    const [reviewz, setReviewz] = useState([]);
    
    useEffect(() => {
        fetch('https://bios-pc.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviewz(data));
    }, []);

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 m-10 '>
                {reviewz.slice(0,6).map(rev => <Rev key={reviewz._id} rev={rev}></Rev>)}

                 </div>

            
        </div>
    );
};

export default Reviewsall;