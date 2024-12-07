import React from 'react';
import ProductCard from './ProductCard';

const OurProduct = ({products}) => {
    return (
        <div className='w-10/12 mx-auto py-16'>
            <h2 className='text-4xl md:text-5xl  font-bold text-center'>Featured Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 pt-20 gap-6'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default OurProduct;