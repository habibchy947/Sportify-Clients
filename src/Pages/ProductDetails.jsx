import React, { useContext } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const ProductDetails = () => {
    const data = useLoaderData()
    const {theme} = useContext(AuthContext)
    const { itemName, category, photo, customization, processing, description, mainRating, price, stock } = data || {}
    return (
        <div className={`${theme === 'dark' ? 'bg-neutral':'bg-slate-50'} py-5`}>
            <Helmet>
                <title>
                    Sportify | Equipment Details
                </title>
            </Helmet>
            <div className='w-10/12 md:w-9/12 bg-base-100 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 items-center shadow-md'>
                <div className='flex justify-center'>
                    <Zoom>
                        <img className='h-80' src={photo} alt="" />
                    </Zoom>
                </div>
                <div className='space-y-2'>
                    <p className='badge badge-ghost rounded-md py-3 px-4'>{category}</p>
                    <h2 className='text-4xl font-thin pb-5'>{itemName}</h2>
                    <p className='flex gap-1 items-center'> <span className='text-lg text-gray-500 font-semibold'>Reviews :</span>
                        <Rating
                            className='text-xl'
                            initialRating={mainRating}
                            emptySymbol={<MdOutlineStarOutline />}
                            fullSymbol={<MdOutlineStarPurple500 className='text-yellow-400' />}
                            fractions={2}
                        />
                    </p>
                    <div className='flex items-center space-x-5'>
                        <p className='flex items-center gap-2'><span className='text-lg font-semibold text-gray-500'>Price : </span><span className='text-4xl text-amber-500'>{price}$</span></p>
                        <p><span className='text-lg font-semibold text-gray-500'>Stock : </span><span className='text-xl badge badge-ghost text-amber-500'>{stock}</span></p>
                    </div>
                    <p className='text-lg font-semibold text-gray-500'>Description :</p>
                    <p>{description}</p>
                    <p><span className='text-lg font-semibold text-gray-500'>Customization : </span><span className=''>{customization}</span></p>
                    <p><span className='text-lg font-semibold text-gray-500'>Processing Time : </span><span className='text-xl text-amber-500'>{processing}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;