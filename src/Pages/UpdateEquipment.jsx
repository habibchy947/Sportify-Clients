import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Rating from 'react-rating';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const UpdateEquipment = () => {
    const data = useLoaderData()
    const { user, theme } = useContext(AuthContext)
    const [rating, setRating] = useState(0)
    const handleRatingChange = (value) => {
        setRating(value)
    }
    const handleUpdateEquipment = (e) => {
        e.preventDefault()
        const form = e.target
        const itemName = form.name.value
        const category = form.category.value
        const price = form.price.value
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
        fetch(`https://sportify-server-mu.vercel.app/equipments/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success(`The data of ${itemName} updated successfully`)
                }
            })

    }
    return (
        <div>
            <Helmet>
                <title>
                    Sportify | Update
                </title>
            </Helmet>
            <div className='bg-UpdateEquipmentBg bg-no-repeat bg-cover bg-center bg-[#494242cc] bg-blend-overlay'>
                <div className='w-11/12 md:w-7/12 mx-auto text-center py-24 md:py-28 space-y-4'>
                    <h2 className='text-5xl md:text-6xl text-white leading-tight font-bold'>Update Equipment</h2>
                </div>
            </div>
            <div className={`${theme === 'dark' ? 'bg-neutral' : 'bg-slate-50'} my-5 w-10/12 md:w-9/12 mx-auto  shadow-2xl rounded-md p-7 md:px-16 pt-5`}>
                <form onSubmit={handleUpdateEquipment}>
                    {/* row-1 */}
                    <div className='md:flex gap-5'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Item name</span>
                            </div>
                            <input name='name' type="text" placeholder="Item name" defaultValue={data.itemName} required className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Category</span>
                            </div>
                            <input name='category' type="text" placeholder="Category name" defaultValue={data.category} required className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* row-2 */}
                    <div className='md:flex gap-5'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Price</span>
                            </div>
                            <input name='price' type="number" placeholder="item price" defaultValue={data.price} required className="input input-bordered w-full" />
                        </label>
                        <label className="w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Rating</span>
                            </div>
                            <Rating
                                className='text-2xl'
                                required
                                initialRating={data.mainRating}
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
                            <input name='description' type="text" required placeholder="description" defaultValue={data.description} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Customization</span>
                            </div>
                            <input name='customization' type="text" required placeholder="customization" defaultValue={data.customization} className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* row-4 */}
                    <div className='md:flex gap-5'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Processing Time</span>
                            </div>
                            <input name='processing' type="text" required placeholder="Processing Time" defaultValue={data.processing} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Stock</span>
                            </div>
                            <input name='stock' type="text" required placeholder="stock status" defaultValue={data.stock} className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* row-5 */}
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </div>
                            <input name='photo' type="text" required placeholder="item photo URL" defaultValue={data.photo} className="input input-bordered w-full" />
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
                            <button className='btn bg-amber-500 text-white font-semibold'>Update Equipment</button>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEquipment;