import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import Sidebar from '../Components/Shared/Sidebar';
import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/layout';

const MainLayout = () => {
    return (
        <div style={{width:'100%' , height:'100%'} }>
            <Navbar></Navbar>
           <Flex >
            <Sidebar></Sidebar>
            <Outlet>
                
            </Outlet>
           </Flex>
         
        </div>
    );
};

export default MainLayout;