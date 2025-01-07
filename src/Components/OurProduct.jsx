import React from 'react';
import ProductCard from './ProductCard';

const OurProduct = ({products}) => {
    return (
        <div className='px-5 mx-auto pb-20'>
            <h2 className='text-4xl md:text-5xl  font-semibold text-center pb-4'>Featured Products</h2>
            <p className='text-center text-lg'>Check & Get Your Desired Product!</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-20 gap-4'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default OurProduct;