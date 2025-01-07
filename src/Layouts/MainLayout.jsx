import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className={`dark:text-white  max-w-screen-2xl mx-auto`}>
            {/* navbar */}
            <header className='shadow-lg py-2 sticky top-0 bg-white dark:bg-neutral z-50'>
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