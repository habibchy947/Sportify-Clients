import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const MainLayout = () => {
    const {theme} = useContext(AuthContext)
    return (
        <div className={`${theme === 'dark' ? 'text-white' : 'black'}`}>
            {/* navbar */}
            <header className='shadow-lg py-2'>
                <Navbar></Navbar>
            </header>
            {/* dynamic content */}
            <Outlet></Outlet>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;