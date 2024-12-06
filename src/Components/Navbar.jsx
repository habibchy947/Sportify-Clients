import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { IoPersonCircle } from "react-icons/io5";
import { Tooltip as ReactTooltip } from 'react-tooltip'
const Navbar = () => {
    const { user , logOut} = useContext(AuthContext)
    const links =
        <>
            <NavLink to='/' className={({ isActive }) => `px-4  font-medium text-lg ${isActive ? 'text-warning' : ""}`}>Home</NavLink>
            <NavLink to='/allSportsEquipment' className={({ isActive }) => `px-4 font-medium text-lg ${isActive ? 'text-warning' : ""}`}>All sports equipment</NavLink>
            <NavLink to='/addEquipment' className={({ isActive }) => `px-4 font-medium text-lg ${isActive ? 'text-warning' : ""}`}>Add equipment</NavLink>
            <NavLink to='/myEquipment' className={({ isActive }) => `px-4 font-medium text-lg ${isActive ? 'text-warning' : ""}`}>My equipment list</NavLink>

        </>
    const [toggle, setToggle] = useState(false)
    return (
        <div className="navbar bg-white px-0 w-11/12 md:w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div onClick={() => setToggle(!toggle)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        className={`menu ${toggle && 'hidden'} menu-sm dropdown-content  bg-white rounded-box z-[20] mt-3 w-52 p-2 shadow`}>
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
                {
                    !user ? <span className='text-5xl'><IoPersonCircle /></span> : ''
                }
                {
                    user && user?.email ?
                        <div className='flex gap-2'>
                            <div data-tooltip-id='tooltipName'><img className='h-12 w-12 rounded-full object-cover' src={user.photoURL} alt={user?.name} /></div>
                            <span><button onClick={logOut} className='btn bg-neutral text-white'>Logout</button></span>
                            <ReactTooltip
                                id="tooltipName"
                                place="bottom"
                                variant="info"
                                content={user?.displayName }
                            />
                        </div>
                        :
                        <>
                            <Link to='/register' className='btn bg-amber-500 text-white'>Register</Link>
                            <Link to='/login' className='btn bg-amber-700 text-white'>Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;