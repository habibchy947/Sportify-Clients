import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("https://sportify-server-mu.vercel.app/equipments")
            .then(res => res.json())
            .then(data => {
                const category = [...new Set(data.map(cate => cate.category))]
                setCategories(category)
            })
    }, [])
    return (
        <>
            <div className='pt-6'>
                <h2 className='text-5xl font-semibold text-center pb-14'>Sports categories</h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 text-black'>
                {
                    categories.map((category,idx) => <div key={idx} className="px-10 py-6 shadow-lg hover:text-amber-500 bg-gray-100 text-center rounded-lg font-semibold hover:scale-110 text-xl border-gray-50 border-2">
                        {category}
                    </div>)
                }
            </div>
        </>

    );
};

export default Categories;