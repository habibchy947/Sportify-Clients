import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [eye, setEye] = useState(false)
    const handleSignIn=(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value 
        const photo = form.photo.value 
        const password = form.password.value 
        const user = {name,email,password,photo}
        console.log(user)
        if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
            toast.error('Your password must have a lowerCase , an upperCase letter and at least 6 character')
            return
        }else{
            toast.success('your account has been created')
        }
    }
    return (
        <div className="bg-loginImg bg-no-repeat bg-cover flex items-center justify-center py-10">
            <div className="card bg-base-100 rounded-md w-10/12   max-w-md shrink-0 shadow-2xl">
                <div className='px-10 pt-5 text-center space-y-4'>
                    <h1 className='text-4xl font-bold'>Register</h1>
                    <p className='text-lg'>Please, enter your details to sign in</p>
                    <div className='flex items-center hover:cursor-pointer hover:bg-slate-100 gap-2 justify-center w-48 mx-auto px-1 py-2 border-2 rounded-md'><span><FcGoogle /></span>Sign in with Google</div>
                    <div className="divider">OR</div>
                    <p className='text-xl'>Create an account</p>
                </div>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type={eye ? 'text':'password'} name='password' placeholder="password" className="input  input-bordered" required />
                        <span onClick={() => setEye(!eye)} className='absolute right-4 bottom-4 text-lg'>
                            {
                                eye ? <FaEyeSlash/> : <FaEye/>
                            }
                        </span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-amber-500 text-white font-semibold">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;