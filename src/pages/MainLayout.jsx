import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import Sidebar from '../Components/Shared/Sidebar';

const MainLayout = () => {
    return (
        <div style={{width:'100%'}}>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            This is main layout
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;