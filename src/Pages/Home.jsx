import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import OurProduct from '../Components/OurProduct';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';
import Trending from '../Components/Trending';
import { AuthContext } from '../Provider/AuthProvider';
import FAQs from '../Components/FAQs';
import { Helmet } from 'react-helmet-async';
import Slider from '../Components/Slider';

const Home = () => {
    const products = useLoaderData()
    const {theme} = useContext(AuthContext)
    return (
        <div className=''>
            <Helmet>
                <title>
                    Sportify | Home
                </title>
            </Helmet>
            <Banner></Banner>
            {/* <Slider></Slider> */}
            <section className='py-20 mx-auto bg-slate-50 dark:bg-neutral'>
                <Categories></Categories>
            </section>
            <section className='bg-slate-50 dark:bg-neutral'>
                <OurProduct products={products}></OurProduct>
            </section>
            <section className='bg-slate-50 dark:bg-neutral'>
                <FAQs></FAQs>
            </section>
            <section className="bg-slate-50 dark:bg-neutral">
                <Trending></Trending>
            </section>
        </div>
    );
};

export default Home;