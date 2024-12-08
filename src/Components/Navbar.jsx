import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { IoPersonCircle } from "react-icons/io5";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import logo from '../assets/shoes.png'
const Navbar = () => {
    const { user, logOut, handleTheme } = useContext(AuthContext)
    const links =
        <>
            <NavLink to='/' className={({ isActive }) => `px-4  font-medium text-lg ${isActive ? 'text-warning' : ""}`}>Home</NavLink>
            <NavLink to='/allSportsEquipment' className={({ isActive }) => `px-4 font-medium text-lg ${isActive ? 'text-warning' : ""}`}>All sports equipment</NavLink>
            <NavLink to='/addEquipment' className={({ isActive }) => `px-4 font-medium text-lg ${isActive ? 'text-warning' : ""}`}>Add equipment</NavLink>
            <NavLink to='/myEquipment' className={({ isActive }) => `px-4 font-medium text-lg ${isActive ? 'text-warning' : ""}`}>My equipment list</NavLink>

        </>
    
    const [toggle, setToggle] = useState(false)
    return (
        <div className="navbar px-0 w-11/12 md:w-10/12 mx-auto">
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
                <Link className="text-3xl flex gap-1 md:text-4xl font-bold"><span><img className='h-12 w-12' src={logo} alt="" /></span><span className='text-amber-500 hidden md:block'>Sport</span><span className='hidden md:block'>ify</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <label className="grid cursor-pointer place-items-center">
                    <input
                        type="checkbox"
                        onChange={handleTheme}
                        value="synthwave"
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
                {
                    !user ? <span className='text-4xl md:text-5xl'><IoPersonCircle /></span> : ''
                }
                {
                    user && user?.email ?
                        <div className='flex gap-2'>
                            <div data-tooltip-id='tooltipName'><img className='h-12 w-12 rounded-full object-cover' src={user.photoURL} alt={user?.name} /></div>
                            <span><button onClick={logOut} className='btn bg-neutral text-white'>Logout</button></span>
                            <ReactTooltip
                                id="tooltipName"
                                className='z-20'
                                place="bottom"
                                variant="info"
                                content={user?.displayName}
                            />
                        </div>
                        :
                        <>
                            <Link to='/register' className='btn btn-sm md:btn-md bg-amber-500 text-white'>Register</Link>
                            <Link to='/login' className='btn btn-sm md:btn-md bg-amber-700 text-white'>Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;