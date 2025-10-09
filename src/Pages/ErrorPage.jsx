import React from 'react';
import { Link, useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errorImage from '../assets/error-404.png'

const ErrorPage = () => {
    const error = useRouteError();
  
    return (
        <div>
            <Navbar></Navbar>
                <div className='flex flex-col justify-center items-center text-center p-5 lg:p-20'>
                    <img className='' src={errorImage} alt="" />
                    <h1 className='lg:text-5xl text-3xl font-bold'>Oops, page not found!</h1>
                    <p className='font-medium text-xl'>The page you are looking for is not available.</p>
                    <Link to='/'>
                    <button className='btn my-5 btn-primary'>Go Back</button>
                    </Link>
                </div>
                <div>{error.message}</div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;