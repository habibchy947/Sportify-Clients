import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Card from '../Components/Card';
import { Helmet } from 'react-helmet-async';

const MyEquipment = () => {
    const {user,theme} = useContext(AuthContext)
    const [myEquipment, setMyEquipment] = useState([])
    useEffect(()=>{
        fetch(`https://sportify-server-mu.vercel.app/equipments/email/${user?.email}`)
        .then(res => res.json())
        .then(data => {
                setMyEquipment(data)
        })
    },[])
    return (
        <div className={`${theme === 'dark'? 'bg-neutral' : 'bg-slate-50'}`}>
            <Helmet>
                <title>
                    Sportify | My Equipment
                </title>
            </Helmet>
            <div className='w-10/12 md:w-9/12 mx-auto py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    myEquipment.length ? myEquipment.map((product,idx) => <Card key={idx} myEquipment={myEquipment} setMyEquipment={setMyEquipment} product={product}></Card> )
                     :
                     <h1 className='text-4xl font-bold text-center'>Add Sports equipment</h1> 
                }
            </div>
            
        </div>
        </div>
    );
};

export default MyEquipment;