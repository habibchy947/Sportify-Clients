import React from 'react';
import faqs from '../assets/faqs.webp'
const FAQs = () => {
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 py-12 gap-10'>
            <div className='space-y-2'>
                <p className='text-amber-500 font-semibold'>Equipments Related Queries</p>
                <h2 className='text-3xl font-semibold'>Equipments and services</h2>
                <div className="collapse collapse-arrow rounded-md">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-amber-500">What types of sports equipment do you offer?</div>
                    <div className="collapse-content">
                        <p>We offer equipment for a wide range of sports,
                            including badminton, cricket, soccer, tennis,
                            boxing, and more. Browse our categories to
                            find the gear you need!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow rounded-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-amber-500">Do you sell equipment for beginners and professionals?</div>
                    <div className="collapse-content">
                        <p>Yes, we cater to all skill levels,
                            from beginner-friendly items to
                            professional-grade equipment.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow rounded-md ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-amber-500 ">Can I find kids' sports gear on your website?</div>
                    <div className="collapse-content">
                        <p>Absolutely! We have a dedicated section
                            for kids' sports gear, featuring child-sized
                            equipment and safety-focused products.</p>
                    </div>
                </div>
            </div>
            <div><img className='h-full rounded-md' src={faqs} alt="" /></div>
        </div>
    );
};

export default FAQs;