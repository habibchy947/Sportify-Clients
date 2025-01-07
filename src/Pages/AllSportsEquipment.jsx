import React, { useContext, useEffect, useState } from 'react';
import Table from '../Components/Table';
import { Helmet } from 'react-helmet-async';
import Loading from '../Components/Loading';
import { AuthContext } from '../Provider/AuthProvider';
import ProductCard from '../Components/ProductCard';
const AllSportsEquipment = () => {
    const { loadingSpinner, setLoadingSpinner } = useContext(AuthContext)
    const [equipments, setEquipments] = useState([])
    const [sortOrder, setSortOrder] = useState('asc')
    const fetchEquipment = () => {
        fetch(`https://sportify-server-mu.vercel.app/equipments?sort=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                setLoadingSpinner(true)
                setTimeout(() => {
                    setEquipments(data)
                    setLoadingSpinner(false)
                }, 2000)
            })
    }
    const handleSort = () => {
        setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    }
    useEffect(() => {
        fetchEquipment()
    }, [sortOrder])
    return (
        <>
            <Helmet>
                <title>
                    Sportify | All equipment
                </title>
            </Helmet>
            <div className='bg-allSportEquipmentBg bg-no-repeat bg-cover bg-center bg-[#494242cc] bg-blend-overlay'>
                <div className='w-11/12 md:w-7/12 mx-auto text-center py-20 md:py-28 space-y-5'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-bold'><span className='text-amber-500'>Gear Up</span> for Every Game</h2>
                    <p className='text-lg font-semibold text-gray-200'>Discover top-quality sports equipment for every sport and every level. From professional-grade gear to essentials for beginners, we’ve got you covered. Play your best—shop now</p>
                </div>
            </div>
           <div className='bg-slate-50 dark:bg-neutral'>
           <div className='px-5 mx-auto py-20'>
                <h2 className='text-4xl text-center font-semibold pb-7'>All Equipments</h2>
                <div className='flex justify-start mb-4'>
                    <button onClick={handleSort} className='bg-amber-500 btn border-none text-white'>Sort By Price</button>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-4 gap-4'>
                    {
                        equipments.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>

            </div>
           </div>
        </>
    );
};

export default AllSportsEquipment;