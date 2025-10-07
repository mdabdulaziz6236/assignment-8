import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    const error = useRouteError();
  
    return (
        <div>
            <Navbar></Navbar>
                <div>{error.message}</div>
                <h1>This is Error page.</h1>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;