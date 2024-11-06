import React from 'react';
import Navbar from '../Componant/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
        <div className='h-16'>
            <Navbar/>
        </div>
            <Outlet/>
        </>
    );
};

export default MainLayout;