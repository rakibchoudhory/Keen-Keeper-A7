import React from 'react';
import Navbar from '../Component/navbar/Navbar';
import { Outlet } from 'react-router';


const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
         
        </div>
    );
};

export default Layout;