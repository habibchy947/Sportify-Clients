import React from 'react';
import about from '../assets/aboutus.jpg'
import { MdAttachEmail } from 'react-icons/md';
const About = () => {
    return (
        <section className="">
            <div style={{ backgroundImage: `url(${about})` }} className='bg-no-repeat  bg-cover bg-center bg-[#494242cc] bg-blend-overlay'>
                <div className='w-11/12 md:w-7/12 mx-auto text-center py-24 md:py-28 space-y-4'>
                    <h2 className='text-5xl md:text-6xl text-white leading-tight font-bold'>About Us</h2>
                </div>
            </div>
            <div className="px-5 mx-auto text-center py-10 ">

                {/* Content Section */}
                <div className="space-y-6 text-gray-700 max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-black">
                        Sporting Goods Store
                    </h3>
                    <p className="text-base md:text-lg dark:text-gray-200 leading-relaxed">
                        Sports world is the full line Sporting goods, Gym and Fitness
                        Equipment's chain shop since 1990. We constantly stay ahead in
                        selling over sporting goods gym and fitness equipment to provide
                        our customers with the best satisfaction for sustainable competitive
                        advantage. The company is led by a strong management team and
                        knowledgeable sporting goods, Gym, and fitness knowledge worker
                        with experience in various areas of this sector. With the experience,
                        “Sports world” will be able to help the customers define and
                        implement their desire and ability. Sports world is the sole Agent of
                        the following famous and branded companies. Hence, offer the
                        sporting goods Gym and fitness equipment to the customer.
                    </p>
                </div>

                {/* Statistics Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-amber-500">
                    <div className="flex flex-col items-center">
                        <h4 className="text-4xl md:text-5xl font-bold">90</h4>
                        <p className="text-lg font-medium">Years Of Experience</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className="text-4xl md:text-5xl font-bold">20K</h4>
                        <p className="text-lg font-medium">Happy Customers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className="text-4xl md:text-5xl font-bold">100%</h4>
                        <p className="text-lg font-medium">Clients Satisfaction</p>
                    </div>
                </div>
            </div>
            <div className='py-20 px-5 mx-auto bg-slate-50 dark:bg-gray-800 grid grid-cols-1 gap-10 md:grid-cols-2'>
                <div className='flex items-center gap-5'>
                    <MdAttachEmail className='text-6xl' />
                    <div>
                        <h2 className='text-2xl md:text-3xl'>Newsletter and Get Updates</h2>
                        <p>Sign up for our newsletter to get up-to-date from us</p>
                    </div>
                </div>
                <div>
                    <div className="join w-full">
                        <input
                            type="text"
                            placeholder="Enter your mail here"
                            className="input input-bordered w-2/3 join-item" />
                        <button className="btn border-none text-white bg-amber-500 join-item">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;