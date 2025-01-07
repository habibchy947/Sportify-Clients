import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Card from '../Components/Card';
import { Helmet } from 'react-helmet-async';
import myequipment from '../assets/my-equipments-banner-image.jpg'
const MyEquipment = () => {
    const { user, theme } = useContext(AuthContext)
    const [myEquipment, setMyEquipment] = useState([])
    useEffect(() => {
        fetch(`https://sportify-server-mu.vercel.app/equipments/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyEquipment(data)
            })
    }, [])
    return (
        <div className={`bg-slate-50 dark:bg-neutral`}>
            <Helmet>
                <title>
                    Sportify | My Equipment
                </title>
            </Helmet>
            <div style={{ backgroundImage: `url(${myequipment})` }} className='bg-no-repeat bg-cover bg-center bg-[#494242cc] bg-blend-overlay'>
                <div className='w-11/12 md:w-7/12 mx-auto text-center py-24 md:py-28 space-y-4'>
                    <h2 className='text-5xl md:text-6xl text-white leading-tight font-bold'>My Equipment</h2>
                </div>
            </div>
            <div className='px-5 mx-auto py-10'>

                <div className="overflow-x-auto rounded-md bg-white dark:bg-neutral">
                    <table className="table border-2 dark:text-white">
                        {/* head */}
                        <thead className='md:text-lg font-semibold dark:text-white bg-slate-100 dark:bg-gray-800'>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myEquipment.length ? myEquipment.map((product, idx) => <Card key={idx} index={idx} myEquipment={myEquipment} setMyEquipment={setMyEquipment} product={product}></Card>)
                                    :
                                    <h1 className='text-4xl font-bold text-center'>Add Sports equipment</h1>
                            }
                        </tbody>
                    </table>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {/* {
                        myEquipment.length ? myEquipment.map((product, idx) => <Card key={idx} myEquipment={myEquipment} setMyEquipment={setMyEquipment} product={product}></Card>)
                            :
                            <h1 className='text-4xl font-bold text-center'>Add Sports equipment</h1>
                    } */}
                </div>

            </div>
        </div>
    );
};

export default MyEquipment;