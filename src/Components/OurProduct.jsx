import React, { useEffect, useState } from 'react';
import Categories from './Categories';

const OurProduct = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/equipments")
        .then(res => res.json())
        .then(data => {
            const category = [...new Set(data.map(cate => cate.category))]
            setCategories(category)
        })
    },[])
    return (
        <div className='w-10/12 mx-auto py-10'>
            <h2 className='text-5xl  font-bold text-center'>Our Products</h2>
            <p className='text-3xl font-thin pt-4 pb-6 text-center'>Browse Products by category</p>
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default OurProduct;