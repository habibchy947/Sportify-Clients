import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import bgImg1 from '../assets/sportify-banner-1.jpg'
import bgImg2 from '../assets/sportify-banner-2.jpg'
// import bgImg3 from '../assets/sportify-banner-3.jpg'
const Slider = () => {
    return (
        <div>
        <Swiper
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Slide
                    image={bgImg1}
                    subTitle="Game On! Equip Yourself for Victory."
                    title='Elevate Every Play with Premium Sports Equipment'
                    description="Your ultimate destination for top-quality sports gear and apparel.Shop now to elevate your performance and achieve your goals!"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slide
                    image={bgImg2}
                    subTitle='Equip. Perform. Excel.'
                    title='The Gear You Need, the Performance You Deserve'
                    description="Find everything you need to excel in your sport.From high-performance equipment to durable apparel, we offer quality gear for athletes of all levels.Shop now and take your skills to the next level!"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slide
                    image={'https://i.ibb.co.com/fMd8sPR/sportify-banner-3.jpg'}
                    subTitle="Unlock Your Full Athletic Potential."
                    title='Push Beyond Limits with Premium Equipment'
                    description="Your trusted source for top-tier sports gear and apparel. Whether you're training, competing, or staying active, we provide the equipment you need to perform at your best. Shop now and get ready to conquer your goals!"
                />
            </SwiperSlide>

        </Swiper>
    </div>
    );
};

export default Slider;