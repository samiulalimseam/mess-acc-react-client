import { Box } from '@chakra-ui/layout';
import React from 'react';
import MealRate from '../Components/Charts/MealRate';
import MemberDashboard from '../Components/Charts/MemberDashboard';

const Dashboard = () => {
    return (
        <Box display={'flex'} gap={5} flexDirection={'column'} height={'6xl'} width={'full'}>
            <MealRate></MealRate>
            <MemberDashboard></MemberDashboard>
        </Box>
    );
};

export default Dashboard;