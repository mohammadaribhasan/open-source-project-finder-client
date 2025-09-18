import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navber';
import Footer from '../components/Footer';

const RootLayout = () => {
    const location = useLocation();

    // Routes where Navbar and Footer should be hidden
    const hideNavFooter = ["/login", "/register", "/forget"];
    const hideLayout = hideNavFooter.includes(location.pathname);

    return (
        <div>
            {!hideLayout && <Navbar />}
            <div className="mx-auto min-h-screen">
                <Outlet />
            </div>
            {!hideLayout && <Footer />}
        </div>
    );
};

export default RootLayout;
