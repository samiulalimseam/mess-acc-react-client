import { Box } from '@chakra-ui/layout';
import React from 'react';
import Sidebar from '../Components/Shared/Sidebar';
import { Outlet } from 'react-router';

const Center = () => {
    return (
        <Box display={'flex'}>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </Box>
    );
};

export default Center;