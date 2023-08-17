import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Box height={'10'} bg={'blackAlpha.900'} width={'full'} textColor={'white'}  bottom={0}>
            <Text  align={'center'} fontSize={'xs'}>
                Copyright- 2023@ Samiul Alim
            </Text>
        </Box>
    );
};

export default Footer;