import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links =
        <>
            <NavLink to='/' className={({isActive})=> `px-4  font-medium text-lg ${isActive ? 'text-warning' :""}`}>Home</NavLink>
            <NavLink to='/allSportsEquipment' className={({isActive})=> `px-4 font-medium text-lg ${isActive ? 'text-warning' :""}`}>All sports equipment</NavLink>
            <NavLink to='/addEquipment' className={({isActive})=> `px-4 font-medium text-lg ${isActive ? 'text-warning' :""}`}>Add equipment</NavLink>
            <NavLink to='/myEquipment' className={({isActive})=> `px-4 font-medium text-lg ${isActive ? 'text-warning' :""}`}>My equipment list</NavLink>

        </>
    return (
        <div className="navbar bg-white px-0 w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                    </ul>
                </div>
                <Link className="text-3xl font-bold"><span className='text-amber-500'>Sport</span>ify</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link className='btn'>Register</Link>
                <Link className='btn'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;