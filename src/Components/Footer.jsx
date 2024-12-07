import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-zinc-500 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-4 w-10/12 mx-auto gap-8 overflow-hidden'>
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
                        <span className='text-white text-xl'><FaFacebook /></span>
                        <span className='text-white text-xl'><FaTwitter /></span>
                        <span className='text-white text-xl'><FaInstagram /></span>
                        <span className='text-white text-xl'><FaYoutube /></span>
                    </div>
                </div>
                <div>
                    <h2 className='text-lg font-semibold text-amber-500 mb-4'>Quick links</h2>
                    <ul className='text-gray-200'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About us</li>
                        <li>Contact us</li>
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