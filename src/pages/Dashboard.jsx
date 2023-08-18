import { Box } from '@chakra-ui/layout';
import React from 'react';
import MealRate from '../Components/Charts/MealRate';
import MemberDashboard from '../Components/Charts/MemberDashboard';

const Dashboard = () => {
    return (
        <Box display={'flex'} gap={3} flexDirection={'column'} width={'full'}>
            <MealRate></MealRate>
            <MemberDashboard></MemberDashboard>
        </Box>
    );
};

export default Dashboard;