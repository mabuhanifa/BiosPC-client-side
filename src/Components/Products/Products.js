import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../hooks/useProducts';
import Product from '../Puchase/Product';

const Products = () => {
    const [products] = useProducts([]);
    const [user]= useAuthState(auth);
    return (
        <div>
            <div className='grid sm:grid-cols-3'>
            {products.slice(0,6).map(product => <Product key={product.id } 
                                            product={product}
                                            ></Product>
                )}
                
            </div>


        </div>
    );
};

export default Products ;