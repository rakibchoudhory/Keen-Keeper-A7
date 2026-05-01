import React from 'react';
import Navbar from '../Component/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/footer/Footer';


const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;