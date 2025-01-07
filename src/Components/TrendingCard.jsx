import React from 'react';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import Rating from 'react-rating';

const TrendingCard = ({trender}) => {
    const { itemName,category, mainRating, image, price, description, stock } = trender || {}
    return (
        <div className="card shadow-xl rounded-none">
        <figure className=" py-0">
            <img
                src={image}
                alt={itemName}
                className="h-52 w-52" />
        </figure>
        <div className="card-body p-3 ">
            <h2 className="card-title font-semibold text-xl">{itemName}</h2>
                    <p className='font-medium text-gray-400'>{description}</p>
                    <p><span className='text-lg font-semibold text-gray-500'>Stock : </span><span className='text-xl badge badge-ghost text-amber-500'>{stock}</span></p>
            <div className='flex flex-wrap justify-between items-center'>
                <p><span className='text-2xl text-amber-500 font-semibold'>{price}$</span></p>
                <p className='flex gap-1 items-center justify-end'>
                    <Rating
                        className='text-xl'
                        initialRating={mainRating}
                        emptySymbol={<MdOutlineStarOutline />}
                        fullSymbol={<MdOutlineStarPurple500 className='text-yellow-400' />}
                        fractions={2}
                    />
                </p>
            </div>
        </div>
    </div>
    );
};

export default TrendingCard;