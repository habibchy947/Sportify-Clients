import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <header className='shadow-lg py-2'>
                <Navbar></Navbar>
            </header>
            {/* dynamic content */}
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;