import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const Slide = ({ image, subTitle, title, description }) => {
    return (
        <div className='bg-blend-overlay relative bg-gray-700/70 bg-no-repeat bg-center bg-cover md:h-[30rem] lg:h-[28rem] h-[28rem]'
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className='w-11/12 md:w-6/12 lg:w-7/12 mx-auto text-center space-y-6 py-12'>
                <Fade cascade>
                    <h2 className='text-lg text-white'>{subTitle}</h2>
                    <h2 className='text-4xl md:text-5xl font-semibold text-white leading-tight'>{title}</h2>
                    <p className='text-white mt-3 font-semibold'>{description}
                    </p>
                    <div className='space-x-3 mt-5'>
                       <Link to='/addEquipment' className='btn rounded-sm bg-amber-500 border-none text-white'>Add Equipment</Link>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Slide;