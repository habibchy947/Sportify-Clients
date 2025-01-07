import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-zinc-500 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-4 px-5 mx-auto gap-8 overflow-hidden'>
                <div className='space-y-3'>
                    <Link className="text-5xl font-bold">
                        <span className='text-amber-500'>Sport</span>
                        <span className='text-white'>ify</span>
                    </Link>
                    <p className='text-gray-200'>Join our community of sports enthusiasts!
                        Follow us on social media for the latest
                        updates, exclusive offers, and expert
                        tips to help you perform at your best.
                    </p>
                    <div className='flex gap-4'>
                        <span className='text-white text-xl'><Link to='https://www.facebook.com/prince.jihan.779'><FaFacebook /></Link></span>
                        <span className='text-white text-xl'><Link to='https://x.com/HAlquaderi34259'><FaTwitter /></Link></span>
                        <span className='text-white text-xl'><Link to='https://www.instagram.com/chowdhuryjihan30/'><FaInstagram /></Link></span>
                        <span className='text-white text-xl'><Link to='https://www.youtube.com/watch?v=YXmB1o4AZdY'><FaYoutube /></Link></span>
                    </div>
                </div>
                <div>
                    <h2 className='text-lg font-semibold text-amber-500 mb-4'>Quick links</h2>
                    <ul className='text-gray-200'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allSportsEquipment'>All Equipments</Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-semibold text-amber-500 mb-4'>Legal</h2>
                    <ul className='text-gray-200'>
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Cookie policy</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-semibold text-amber-500 mb-4'>Newsletter</h2>
                    <label className="label">
                        <span className="label-text font-semibold text-white">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="email"
                            className="input rounded-sm w-full join-item" />
                        <button className="btn border-none text-white bg-amber-500 join-item">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='text-center text-gray-100 pt-3'>
                <div className='divider '></div>
                <p className='text-white'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;