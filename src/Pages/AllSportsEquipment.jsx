import React, { useContext, useEffect, useState } from 'react';
import Table from '../Components/Table';
import { Helmet } from 'react-helmet-async';
import Loading from '../Components/Loading';
import { AuthContext } from '../Provider/AuthProvider';
const AllSportsEquipment = () => {
    const {loadingSpinner,setLoadingSpinner} = useContext(AuthContext)
    const [equipments, setEquipments] = useState([])
    const [sortOrder, setSortOrder] = useState('asc')
    const fetchEquipment = () => {
        fetch(`https://sportify-server-mu.vercel.app/equipments?sort=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                setLoadingSpinner(true)
                setTimeout(()=>{
                    setEquipments(data)
                    setLoadingSpinner(false)
                },2000)
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
                <div className='w-11/12 md:w-7/12 mx-auto text-center py-24 md:py-28 space-y-4'>
                    <h2 className='text-5xl md:text-6xl text-white leading-tight font-bold'><span className='text-amber-500'>Gear Up</span> for Every Game</h2>
                    <p className='text-xl md:text-2xl font-semibold text-gray-200'>Discover top-quality sports equipment for every sport and every level. From professional-grade gear to essentials for beginners, we’ve got you covered. Play your best—shop now</p>
                </div>
            </div>
            <div className=' w-11/12 md:w-10/12 mx-auto py-20'>
                <h2 className='text-4xl text-center font-semibold pb-7'>All Equipments</h2>
                <div className='flex justify-end mb-4'>
                    <button onClick={handleSort} className='bg-amber-500 btn text-white'>Sort By Price</button>
                </div>
                <div className="overflow-x-auto shadow-md">
                    <table className="table">
                        {/* head */}
                        <thead className='shadow-sm text-base  bg-slate-50'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                               loadingSpinner ? <tr><td><Loading></Loading></td></tr> :  equipments.length ? equipments.map((equipment, idx) => <Table equipment={equipment} idx={idx} key={idx}></Table>) : <tr className='text-2xl text-red-500'><td>No Data Found</td></tr>
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default AllSportsEquipment;