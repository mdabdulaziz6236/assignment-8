import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
                <div className='flex-1 w-11/12 mx-auto'>
                    <Outlet ></Outlet>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default MainLayout;