import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdEdit, MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ product, myEquipment, setMyEquipment, index }) => {
    const { itemName, photo, price, _id, stock } = product || {}
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
        <>
            <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={photo}
                                    alt={itemName} />
                            </div>
                        </div>
                    </div>
                </td>
                <td>{itemName}</td>
                <td>
                    {price}$
                </td>
                <td>{stock}</td>
                <th className='text-3xl flex items-center gap-2 font-bold'>
                    <Link to={`/updateEquipment/${_id}`} className='btn btn-ghost rounded-md btn-xs bg-amber-500 text-white'><MdEdit /></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost rounded-md btn-xs bg-red-500 text-white"><FaTrashAlt /></button>
                </th>
            </tr>
            
        </>
    );
};

export default Card;