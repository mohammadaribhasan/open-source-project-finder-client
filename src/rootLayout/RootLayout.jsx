import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navber';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-auto min-h-screen ">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;
