import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({equipment,idx}) => {
    const {itemName, photo, category, price, stock , _id} = equipment || {}
    return (
        <tr>
            <td>{idx + 1}</td>
            <td>
                <div className="md:flex items-center gap-4">
                    <div className="avatar">
                        <div className="mask mask-squircle h-20 w-20">
                            <img
                                src={photo}
                                alt={itemName} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{itemName}</div>
                    </div>
                </div>
            </td>
            <td className=''>
                <span className="badge badge-ghost rounded-md py-4 badge-lg font-semibold">{category}</span>
            </td>
            <td className='font-semibold'>{price} $</td>
            <td className='font-semibold'>{stock}</td>
            <th>
                <Link to={`/productDetails/${_id}`}><button className="btn btn-sm md:btn-md  bg-amber-500 text-white">View Details</button></Link>
            </th>
        </tr>
    );
};

export default Table;