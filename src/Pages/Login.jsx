import React, { useContext, useState } from 'react';
// import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [eye, setEye] = useState(false)
    const {setUser,googleSignIn,signInUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleGoogleLogin = (e) => {
        e.preventDefault()
        googleSignIn()
        .then(() => {
            toast.success('you are logged in')
            navigate(location?.state? location.state : "/")
        })
        .catch((error)=>{
            toast.error(error)
        })
    }
    const handleSignIn = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const password = form.password.value 
        signInUser(email,password)
        .then(result => {
            setUser(result.user)
            toast.success('you are logged in')
            e.target.reset()
            navigate(location?.state? location.state : "/")
        })
        .catch(err => {
            toast.error('your password or email is not valid')
        })
    }
    return (
        <div className="bg-loginImg bg-no-repeat bg-cover flex items-center justify-center py-10">
            <Helmet>
                <title>
                    Sportify | Login
                </title>
            </Helmet>
            <div className="card bg-base-100 rounded-md w-10/12   max-w-md shrink-0 shadow-2xl">
                <div className='px-10 pt-5 text-center space-y-4'>
                    <h1 className='text-4xl font-bold'>Login</h1>
                    <p className='text-lg'>Please, enter your details to sign in</p>
                    <div onClick={handleGoogleLogin} className='flex items-center hover:cursor-pointer hover:bg-slate-100 gap-2 justify-center w-48 mx-auto px-1 py-2 border-2 rounded-md'><span><FcGoogle /></span>Sign in with Google</div>
                    <div className="divider">OR</div>
                </div>
                <form onSubmit={handleSignIn} className="card-body pb-1">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type={eye ? 'text' : 'password'} name='password' placeholder="password" className="input  input-bordered" required />
                        <span onClick={() => setEye(!eye)} className='absolute right-4 bottom-4 text-lg'>
                            {
                                eye ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-amber-500 text-white font-semibold">Login</button>
                    </div>
                </form>
                <p className='text-center pb-5'>New to this website ? please <Link className='text-amber-500' to='/register'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;