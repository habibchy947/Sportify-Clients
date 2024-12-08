import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import OurProduct from '../Components/OurProduct';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';
import Trending from '../Components/Trending';
import { AuthContext } from '../Provider/AuthProvider';
import FAQs from '../Components/FAQs';
import { Helmet } from 'react-helmet-async';

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
            <section className='w-10/12 mx-auto'>
                <Categories></Categories>
            </section>
            <section className={`${theme === 'dark' ? 'bg-neutral' :'bg-gray-50'} mt-3`}>
                <OurProduct products={products}></OurProduct>
            </section>
            <section>
                <FAQs></FAQs>
            </section>
            <section className={`${theme === 'dark' ? 'bg-neutral' :'bg-slate-100'}`}>
                <Trending></Trending>
            </section>
        </div>
    );
};

export default Home;