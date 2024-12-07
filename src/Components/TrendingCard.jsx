import React from 'react';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import Rating from 'react-rating';

const TrendingCard = ({trender}) => {
    const { itemName,category, mainRating, image, price, description, stock } = trender || {}
    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
        <figure className=" py-0 bg-slate-300">
            <img
                src={image}
                alt={itemName}
                className=" w-full h-80 " />
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
            <p><span className='text-lg font-semibold text-gray-500'>Stock : </span><span className='text-xl badge badge-ghost text-amber-500'>{stock}</span></p>

            <p className='font-medium text-gray-400'>{description}</p>
        </div>
    </div>
    );
};

export default TrendingCard;