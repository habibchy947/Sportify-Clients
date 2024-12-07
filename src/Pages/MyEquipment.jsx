import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Card from '../Components/Card';
import { useLoaderData } from 'react-router-dom';

const MyEquipment = () => {
    const {user,theme,setLoading} = useContext(AuthContext)
    const [myEquipment, setMyEquipment] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/equipments/email/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyEquipment(data)
        })
    },[])
    return (
        <div className={`${theme === 'dark'? 'bg-neutral' : 'bg-slate-50'}`}>
            <div className='w-8/12 mx-auto py-10'>
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