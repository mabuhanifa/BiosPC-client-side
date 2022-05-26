import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from './Product';

const Purchase = () => {
    const [products] = useProducts([]);
    return (
        <div>
            <div className='grid sm:grid-cols-3'>
            {products.map(product => <Product key={product.id } 
                                            product={product}
                                            ></Product>
                )}
                
            </div>


        </div>
    );
};

export default Purchase;