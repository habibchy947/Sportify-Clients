import React, { useEffect, useState } from 'react';
import TrendingCard from './TrendingCard';

const Trending = () => {
    const [trend,setTrend] = useState([])
    useEffect(()=>{
        fetch('/trending.json')
        .then(res => res.json())
        .then(data => setTrend(data))
    },[])
    return (
        <div className='w-10/12 mx-auto py-10'>
            <h2 className='text-4xl md:text-5xl text-center font-semibold'>Trending Now</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-14'>
                {
                    trend.map((trender,idx) => <TrendingCard key={idx} trender={trender}></TrendingCard> )
                }
            </div>
        </div>
    );
};

export default Trending;