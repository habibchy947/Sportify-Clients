import React, { useEffect, useState } from 'react';

const Categories = () => {
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
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
            {
               categories.map(category => <div className="px-10 py-4 hover:bg-slate-400 text-center rounded-md font-semibold text-xl  bg-gray-200">
                {category}
               </div>)
            }
        </div>
    );
};

export default Categories;