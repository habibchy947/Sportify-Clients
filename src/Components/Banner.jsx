import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Banner = () => {
    const {theme} = useContext(AuthContext)
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
            <SwiperSlide>
                <div className='bg-bannerImg bg-cover bg-no-repeat bg-[#494242cc] bg-blend-overlay py-24'>
                    <div className='w-11/12 md:w-7/12 mx-auto text-center'>
                        <Fade cascade>
                            <h2 className='text-lg text-white'>Game On! Equip Yourself for Victory.</h2>
                            <h2 className='text-4xl md:text-5xl font-semibold text-white leading-tight'>Elevate Every Play with Premium Sports Equipment</h2>
                            <p className='text-white mt-3 font-semibold'>Your ultimate destination for top-quality sports gear and apparel.
                                Shop now to elevate your performance and achieve your goals!</p>
                            <div className='space-x-3 mt-5'>
                                <button className={`btn rounded-sm ${theme === 'dark'? 'text-white' : 'text-black'}  border-none`}>Read More</button>
                                <button className='btn rounded-sm bg-amber-500 border-none text-white'><Link to='/addEquipment'>Add Equipment</Link></button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-bannerImg2 bg-no-repeat bg-cover bg-[#494242cc] bg-blend-overlay py-24'>
                    <div className='w-11/12 md:w-7/12 mx-auto text-center'>
                        <Fade cascade>
                            <h2 className='text-lg text-white'>Equip. Perform. Excel.</h2>
                            <h2 className='text-4xl md:text-5xl font-semibold text-white leading-tight'>The Gear You Need, the Performance You Deserve</h2>
                            <p className='text-white mt-3 font-semibold'>Find everything you need to excel in your sport.
                                From high-performance equipment to durable apparel, we offer quality gear for athletes of all levels.
                                Shop now and take your skills to the next level!</p>
                            <div className='space-x-3 mt-5'>
                                <button className='btn rounded-sm text-black border-none'>Read More</button>
                                <button className='btn rounded-sm bg-amber-500 border-none text-white'><Link to='/addEquipment'>Add Equipment</Link></button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-bannerImg3 bg-no-repeat bg-cover bg-center  bg-[#494242cc] bg-blend-overlay py-24'>
                    <div className='w-11/12 md:w-7/12 mx-auto text-center'>
                        <Fade cascade>
                            <h2 className='text-lg text-white'>Unlock Your Full Athletic Potential.</h2>
                            <h2 className='text-4xl md:text-5xl font-semibold text-white leading-tight'>Push Beyond Limits with Premium Equipment</h2>
                            <p className='text-white mt-3 font-semibold'>Your trusted source for top-tier
                                sports gear and apparel. Whether you're training, competing, or staying active,
                                we provide the equipment you need to perform at your best. Shop now and get
                                ready to conquer your goals!
                            </p>
                            <div className='space-x-3 mt-5'>
                                <button className='btn rounded-sm text-black border-none'>Read More</button>
                                <button className='btn rounded-sm bg-amber-500 border-none text-white'><Link to='/addEquipment'>Add Equipment</Link></button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;