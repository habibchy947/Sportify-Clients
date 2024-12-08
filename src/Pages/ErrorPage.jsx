import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center min-h-screen justify-center space-y-4'>
            <Helmet>
                <title>
                    Sportify | Error
                </title>
            </Helmet>
            <h1 className='text-9xl font-semibold'>4<span className='text-amber-500'>0</span>4</h1>
            <p className='text-4xl font-semibold text-black'>Oops ! that page can't be found</p>
            <p className='text-2xl font-semibold text-gray-400'>The page you are looking for doesn't exist</p>
            <Link to='/'><button className='btn rounded-md bg-amber-500 text-white font-bold'>Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;