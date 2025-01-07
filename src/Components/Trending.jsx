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
        <div className='px-5 mx-auto pb-20'>
            <h2 className='text-4xl md:text-5xl  font-semibold text-center pb-4'>Trending Now</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-14'>
                {
                    trend.map((trender,idx) => <TrendingCard key={idx} trender={trender}></TrendingCard> )
                }
            </div>
        </div>
    );
};

export default Trending;