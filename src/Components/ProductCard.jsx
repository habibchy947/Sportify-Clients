import React from 'react';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { category, itemName, mainRating, photo, price, description, _id } = product || {}
    return (
        <div className="card hover:scale-95 transition-transform shadow-xl rounded-none">
            <figure className="px-0 py-0">
                <img
                    src={photo}
                    alt={itemName}
                    className="h-44 md:h-52 w-44 md:w-52 px-0 py-0" />
            </figure>
            <div className="divider"></div>
            <div className="card-body px-3 pb-1 pt-0">
                <h2 className="card-title font-semibold text-xl md:text-xl py-0">{itemName}</h2>
                <div className='flex flex-wrap justify-between items-center'>
                    <p><span className='text-2xl font-bold text-amber-500'>${price}</span></p>
                    <p className='flex gap-1 items-center justify-end'>
                        <Rating
                            className='text-lg md:text-xl'
                            initialRating={mainRating}
                            emptySymbol={<MdOutlineStarOutline />}
                            fullSymbol={<MdOutlineStarPurple500 className='text-yellow-400' />}
                            fractions={2}
                        />
                    </p>
                </div>
                <div className="card-actions py-1">
                    <Link to={`/productDetails/${_id}`}><button className="btn border-none btn-sm md:btn-md text-white rounded-md  bg-amber-500">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;