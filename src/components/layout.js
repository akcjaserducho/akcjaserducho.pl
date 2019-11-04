import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
        {/* <Navbar name={name ? name : ""}/> */}
        <Navbar />
        {children}
        <Footer/>
        </>
    )
};

export default Layout
