import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    console.log(categories)
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
               categories.map(category => <NavLink className={({isActive})=> `px-10 py-3 hover:bg-slate-400 text-center rounded-md font-semibold text-xl ${isActive? 'bg-amber-500 text-white rounded-3xl' : ""}`} key={category}>
                {category}
               </NavLink>)
            }
        </div>
    );
};

export default Categories;