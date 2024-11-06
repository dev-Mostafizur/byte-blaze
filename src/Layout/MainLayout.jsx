import React from 'react';
import Navbar from '../Componant/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Componant/Footer/Footer';

const MainLayout = () => {
    return (
        <>
        <div className='h-16'>
            <Navbar/>
        </div>
           <div className='min-h-[calc(100vh-116px)]'>
           <Outlet/>
           </div>
            <Footer/>
        </>
    );
};

export default MainLayout;