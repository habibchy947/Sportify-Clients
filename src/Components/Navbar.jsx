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
            <NavLink to='/contact' className={({ isActive }) => `px-4 font-medium text-lg ${isActive ? 'text-warning' : ""}`}>Contact</NavLink>
            <NavLink to='/about' className={({ isActive }) => `px-4 font-medium text-lg ${isActive ? 'text-warning' : ""}`}>About Us</NavLink>

        </>

    const [toggle, setToggle] = useState(false)
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    const themeCheck = () => {
        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.documentElement.classList.add("dark")
            return
        }
    }
    const themeSwitch = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            return
        }
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }
    themeCheck()
    return (
        <div className="navbar px-6 sticky top-0 mx-auto">
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
                        onChange={() => themeSwitch()}
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
                {user ?
                    <div className='flex items-center'>
                        <button className='py-2 px-3 rounded-md font-semibold bg-neutral dark:bg-slate-200 text-white dark:text-black' onClick={logOut}>LogOut</button>
                        {/* profile */}
                        <div className="dropdown dropdown-end z-50">
                            <div onClick={() => setToggle(!toggle)} tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div data-tooltip-id='tooltipName' className="w-10 rounded-full">
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt={user?.displayName}
                                        src={user && user?.photoURL} />
                                <ReactTooltip
                                    id="tooltipName"
                                    className='z-20'
                                    place="bottom"
                                    variant="info"
                                    content={user?.displayName}
                                />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className={`${!toggle && 'hidden'}  menu menu-sm dropdown-content text-black bg-white rounded-md z-[1] mt-2 w-52 p-2 shadow`}>
                                <li><NavLink to="/addEquipment" className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ""}`}>Add Equipment</NavLink></li>
                                <li><NavLink to="/myEquipment" className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ""}`}>My Equipment</NavLink></li>
                            </ul>
                        </div>
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