import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from '../Components/Table';
const AllSportsEquipment = () => {
    const allEquipments = useLoaderData()

    return (
        <>
            <div className='bg-allSportEquipmentBg bg-no-repeat bg-cover bg-center bg-[#494242cc] bg-blend-overlay'>
                <div className='w-11/12 md:w-7/12 mx-auto text-center py-24 md:py-28 space-y-4'>
                    <h2 className='text-5xl md:text-6xl text-white leading-tight font-bold'><span className='text-amber-500'>Gear Up</span> for Every Game</h2>
                    <p className='text-xl md:text-2xl font-semibold text-gray-200'>Discover top-quality sports equipment for every sport and every level. From professional-grade gear to essentials for beginners, we’ve got you covered. Play your best—shop now</p>
                </div>
            </div>
            <div className=' w-11/12 md:w-10/12 mx-auto py-20'>
            <h2 className='text-4xl text-center font-semibold pb-7'>All Equipments</h2>
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
                                allEquipments.length ? allEquipments.map((equipment, idx) => <Table equipment={equipment} idx={idx} key={idx}></Table>): <p className='text-2xl text-red-500'>No Data Found</p>
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default AllSportsEquipment;