import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosFootball } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { MdSportsCricket } from 'react-icons/md';
import { FaBaseball, FaBasketball, FaVolleyball } from 'react-icons/fa6';
import { FaSkating, FaSwimmer, FaTableTennis } from 'react-icons/fa';
import badminton from '../assets/badminton.png'
const Categories = () => {

    return (
        <div className='px-5 dark:bg-neutral'>
            <div className=''>
                <h2 className='text-3xl md:text-5xl font-semibold text-center pb-4'>Featured category</h2>
                <p className='text-center text-lg'>Get Your Desired Product from Featured Category!</p>
            </div>
            <div className='mt-10'>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                                500: {
                                    slidesPerView: 2, 
                                },
                                768: {
                                    slidesPerView: 3, 
                                },
                                1024: {
                                    slidesPerView: 5, 
                                },
                            }}
                >
                    <SwiperSlide>
                        <div className='p-4 h-40 flex flex-col items-center justify-center shadow-xl rounded-md dark:bg-gray-900 bg-white'>
                            <div className='text-6xl mb-4'>
                            <MdSportsCricket />
                            </div>
                            <p className='text-2xl font-semibold'>Cricket</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-4 h-40 flex flex-col items-center justify-center shadow-xl rounded-md dark:bg-gray-900 bg-white'>
                            <div className='text-6xl v'>
                            <IoIosFootball />
                            </div>
                            <p className='text-2xl font-semibold'>Football</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-4 h-40 flex flex-col items-center justify-center shadow-xl rounded-md dark:bg-gray-900 bg-white'>
                            <div className='text-6xl mb-4'>
                            <FaVolleyball />
                            </div>
                            <p className='text-2xl font-semibold'>VolleyBall</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-4 h-40 flex flex-col items-center justify-center shadow-xl rounded-md dark:bg-gray-900 bg-white'>
                            <div className='text-6xl mb-4'>
                            <FaBasketball/>
                            </div>
                            <p className='text-2xl font-semibold'>Basketball</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-4 h-40 flex flex-col items-center justify-center shadow-xl rounded-md dark:bg-gray-900 bg-white'>
                            <div className='text-6xl mb-4'>
                            <FaBaseball/>
                            </div>
                            <p className='text-2xl font-semibold'>Baseball</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-4 h-40 flex flex-col items-center justify-center shadow-xl rounded-md dark:bg-gray-900 bg-white'>
                            <div className='text-6xl mb-4'>
                            <FaSkating/>
                            </div>
                            <p className='text-2xl font-semibold'>Skating</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-4 h-40 flex flex-col items-center justify-center shadow-xl rounded-md dark:bg-gray-900 bg-white'>
                            <div className='text-6xl mb-4'>
                            <FaTableTennis/>
                            </div>
                            <p className='text-2xl font-semibold'>Tennis</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-4 h-40 flex flex-col items-center justify-center shadow-xl rounded-md dark:bg-gray-900 bg-white'>
                            <div className='text-6xl mb-4'>
                            <FaSwimmer/>
                            </div>
                            <p className='text-2xl font-semibold'>Swimming</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-4 h-40 flex flex-col items-center justify-center shadow-xl rounded-md dark:bg-gray-900 bg-white'>
                            <div className='text-6xl mb-4'>
                            <img src={badminton} alt="" />
                            </div>
                            <p className='text-2xl font-semibold'>Badminton</p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>

    );
};

export default Categories;