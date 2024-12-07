import React from 'react';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ product ,myEquipment, setMyEquipment}) => {
    const { itemName, mainRating, photo, price, description, _id, stock } = product || {}
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sportify-server-mu.vercel.app/equipments/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = myEquipment.filter(equip => equip._id !== _id)
                        setMyEquipment(remaining)
                    })
            }
        });
    }
    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure className="px-0 py-0 w-full p-2">
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
                <p><span className='text-lg font-semibold text-gray-500'>Stock : </span><span className='text-xl badge badge-ghost text-amber-500'>{stock}</span></p>

                <p className='font-medium text-gray-400'>{description}</p>
                <div className="card-actions py-1 justify-between">
                    <Link to={`/updateEquipment/${_id}`}><button className='btn text-white bg-amber-500'>Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className='btn text-white bg-red-500'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Card;