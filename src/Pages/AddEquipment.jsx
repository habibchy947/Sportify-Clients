import React, { useContext, useState } from 'react';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import Rating from 'react-rating';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const AddEquipment = () => {
    const { user } = useContext(AuthContext)
    const [rating, setRating] = useState(0)
    const handleRatingChange = (value) => {
        setRating(value)
    }
    const handleAddEquipment = (e) => {
        e.preventDefault()
        const form = e.target
        const itemName = form.name.value
        const category = form.category.value
        const price = parseInt(form.price.value)
        const mainRating = rating
        const description = form.description.value
        const customization = form.customization.value
        const processing = form.processing.value
        const stock = form.stock.value
        const photo = form.photo.value
        const userName = form.userName.value
        const email = form.email.value
        const newEquipment = {
            itemName,
            category,
            price,
            mainRating,
            description,
            customization,
            processing,
            stock,
            photo,
            userName,
            email
        }
        fetch("https://sportify-server-mu.vercel.app/equipments", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset()
                setRating(0)
                toast.success('equipment added')
            })

    }
    return (
        <>
            <Helmet>
                <title>
                    Sportify | Add Equipment
                </title>
            </Helmet>
            <div className='bg-addEquipmentBg bg-center bg-cover bg-no-repeat bg-[#494242cc] bg-blend-overlay'>
                <div className='w-11/12 md:w-7/12 mx-auto text-center py-28 md:py-32 space-y-4'>
                    <h2 className='text-5xl md:text-6xl text-white leading-tight font-bold'>Add New <span className='text-amber-500'>Sports</span> Equipment</h2>
                    <p className='text-xl md:text-2xl font-semibold text-gray-200'>Easily add new sports equipment to your inventory.
                        Fill in the required details to ensure accurate
                        tracking and availability for your store.</p>
                </div>
            </div>
            <div className='my-5 w-10/12 md:w-9/12 mx-auto shadow-2xl rounded-md p-7 md:p-16'>
                <h2 className='text-3xl text-amber-500 font-bold text-center mb-5'>Add equipment</h2>
                <form onSubmit={handleAddEquipment}>
                    {/* row-1 */}
                    <div className='md:flex gap-5'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Item name</span>
                            </div>
                            <input name='name' type="text" placeholder="Item name" required className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Category</span>
                            </div>
                            <input name='category' type="text" placeholder="Category name" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* row-2 */}
                    <div className='md:flex gap-5'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Price</span>
                            </div>
                            <input name='price' type="number" placeholder="item price" required className="input input-bordered w-full" />
                        </label>
                        <label className="w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Rating</span>
                            </div>
                            <Rating
                                className='text-2xl'
                                required
                                initialRating={rating}
                                emptySymbol={<MdOutlineStarOutline />}
                                fullSymbol={<MdOutlineStarPurple500 className='text-yellow-400' />}
                                onChange={handleRatingChange}
                                fractions={2}
                            />
                        </label>
                    </div>
                    {/* row-3 */}
                    <div className='md:flex gap-5'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Description</span>
                            </div>
                            <input name='description' type="text" required placeholder="description" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Customization</span>
                            </div>
                            <input name='customization' type="text" required placeholder="customization" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* row-4 */}
                    <div className='md:flex gap-5'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Processing Time</span>
                            </div>
                            <input name='processing' type="text" required placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Stock</span>
                            </div>
                            <input name='stock' type="text" required placeholder="stock status" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* row-5 */}
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </div>
                            <input name='photo' type="text" required placeholder="item photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* row-6 */}
                    <div className='md:flex gap-5'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">User Name</span>
                            </div>
                            <input name='userName' type="text" placeholder="write your name" value={user?.displayName} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Email</span>
                            </div>
                            <input name='email' type="text" placeholder="write your email" value={user?.email} className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* row-7 */}
                    <div>
                        <label className="form-control w-full pt-4">
                            <button className='btn bg-amber-500 text-white font-semibold'>Add Equipment</button>
                        </label>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddEquipment;