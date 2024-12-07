import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Card from '../Components/Card';

const MyEquipment = () => {
    const {user} = useContext(AuthContext)
    const [myEquipment, setMyEquipment] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/equipments/email/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyEquipment(data))
    },[])
    console.log(myEquipment)
    return (
        <div className='w-8/12 mx-auto py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    myEquipment.length ? myEquipment.map((product,idx) => <Card key={idx} product={product}></Card> )
                     :
                     <h1 className='text-4xl font-bold text-center'>Add your equipment</h1> 
                }
            </div>
            
        </div>
    );
};

export default MyEquipment;