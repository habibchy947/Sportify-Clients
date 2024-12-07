import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import OurProduct from '../Components/OurProduct';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';

const Home = () => {
    const products = useLoaderData()
    return (
        <div className=''>
            <Banner></Banner>
            <section>
                <OurProduct products={products}></OurProduct>
            </section>
            <section className='w-10/12 mx-auto'>
                <Categories></Categories>
            </section>
        </div>
    );
};

export default Home;