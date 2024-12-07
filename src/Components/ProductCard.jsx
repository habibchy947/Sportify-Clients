import React from 'react';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { category, itemName, mainRating, photo, price, description } = product || {}
    return (
        <div className="card bg-base-100  shadow-xl rounded-none">
            <figure className="px-0 py-0 p-2">
                <img
                    src={photo}
                    alt={itemName}
                    className="object-cover w-full h-80" />
            </figure>
            <div className="card-body p-4 ">
                <h2 className="card-title font-semibold text-2xl">{itemName}</h2>
                <div className='flex flex-wrap justify-between items-center'>
                    <p><span className='text-lg font-semibold'>Price : </span><span>{price}$</span></p>
                    <p className='flex gap-1 items-center justify-end'> <span className='text-lg font-semibold'>Rating :</span>
                        <Rating
                            className='text-xl'
                            initialRating={mainRating}
                            emptySymbol={<MdOutlineStarOutline />}
                            fullSymbol={<MdOutlineStarPurple500 className='text-yellow-400' />}
                            fractions={2}
                        />
                    </p>
                </div>
                <p className='font-medium text-gray-400'>{description}</p>
                <div className="card-actions py-1">
                    <Link><button className="btn text-white rounded-md  bg-amber-500">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;