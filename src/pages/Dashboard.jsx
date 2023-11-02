import { MdProductionQuantityLimits } from "react-icons/md"; 
import { Box, Text, Button, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Flex, Image } from "@chakra-ui/react";
import { PiShoppingBagFill } from "react-icons/pi";
import brandLogo from "../../public/maxify-pre-order-logo.png"
export default function dashboard() {
    return <Box display={"flex"} gap={8} flexDirection={"column"} width={"full"}>
        <Flex direction={['column', 'row']} justifyContent={"space-between"}>
            <Flex
                direction={"column"}
                w={"full"}
                mx={2}
                my={2}
                minH={"200px"}
                gap={2}
            >
                <Flex alignItems={'center'} gap={2}>
                    <Box
                        className="logoandname"
                        borderRadius={"md"}

                        textAlign={"center"}
                        color={"white"}

                    >
                        <Image w={'80px'} src={brandLogo}>

                        </Image>
                    </Box>
                    <Flex
                        justifyContent={"space-between"}
                        h={"78px"}
                        direction={"column"}
                    >
                        <Text fontSize={"37px"}>Maxify Pre-Order</Text>
                        <Text>Advanced Accounting | 650+ intsalls</Text>
                    </Flex>
                </Flex>
                <Box fontWeight={400} color={"blackAlpha.600"}>
                    Maxify Pre-Order: Elevate Your Shop! Transform 'Out of Stock' to 'Pre-Order Now' for a captivating shopping experience. Boost sales, AOV, and customer anticipation effortlessly!
                </Box>
            </Flex>

            <Flex
                bg={"#DCFCE7"}
                w={"full"}
                mx={2}
                my={2}
                minH={"200px"}
                p={4}
                borderRadius={"md"}
            >
                <Flex
                    direction={"column"}
                    w={"full"}
                    justifyContent={"space-between"}
                >
                    <Flex>
                        {" "}
                        <Flex w={"full"} direction={"column"}>
                            <Text fontWeight={500} fontSize={"20px"}>
                                Total Orders
                            </Text>{" "}
                            <Text fontWeight={700} fontSize={"40px"}>
                                20
                            </Text>{" "}
                        </Flex>{" "}
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            w={"80px"}
                            h={"80px"}
                            borderRadius={"lg"}
                            bg={"#5BA775"}
                        >
                            <PiShoppingBagFill size={"40px"} color="white" />
                        </Box>
                    </Flex>
                    <Button
                        borderRadius={"xl"}
                        fontWeight={"light"}
                        bg={'#92CEA7'}
                        w={"20%"}
                        fontSize={'12px'}
                        px={4}
                        color={'white'}
                    >
                        View More
                    </Button>
                </Flex>
            </Flex>
            <Flex
                bg={"#FFF4DE"}
                w={"full"}
                mx={2}
                my={2}
                minH={"200px"}
                p={4}
                borderRadius={"md"}
            >
                <Flex
                    direction={"column"}
                    w={"full"}
                    justifyContent={"space-between"}
                >
                    <Flex>
                        {" "}
                        <Flex w={"full"} direction={"column"}>
                            <Text fontWeight={500} fontSize={"20px"}>
                                Total Pre-order Product
                            </Text>{" "}
                            <Text fontWeight={700} fontSize={"40px"}>
                                220
                            </Text>{" "}
                        </Flex>{" "}
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            w={"80px"}
                            h={"80px"}
                            borderRadius={"lg"}
                            bg={"#FFBB32"}
                        >
                            <MdProductionQuantityLimits size={"40px"} color="white" />
                        </Box>
                    </Flex>
                    <Button
                        borderRadius={"xl"}
                        fontWeight={"light"}
                        bg={'#CAB276'}
                        w={"20%"}
                        fontSize={'12px'}
                        px={4}
                        color={'white'}
                    >
                        View More
                    </Button>
                </Flex>
            </Flex>
        </Flex>
        <Flex direction={['column', 'row']} gap={4} justifyContent={"space-between"}>
            <Box w={'full'}>
                <Flex justifyContent={'space-between'}>
                    <Box bg={'white'} p={2}>Recent Pre-Orders</Box>
                    <Box> <Button colorScheme={'blackAlpha'} bg={'black'} size={'sm'}>See all</Button> </Box>
                </Flex>
                <TableContainer p={0} m={0} bg={'white'}>
                    <Table size='sm'>
                        <Thead>
                            <Tr>
                                <Th>Order</Th>
                                <Th>Date</Th>
                                <Th  >Fulfillment Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td >25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td >30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td >0.91444</Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td >25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td >30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td >0.91444</Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td >25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td >30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td >0.91444</Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td >25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td >30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td >0.91444</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th >multiply by</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
            <Box w={'full'}>
                <Flex justifyContent={'space-between'}>
                    <Box bg={'white'} p={2}>Recent Pre-Products</Box>
                    <Box> <Button colorScheme={'blackAlpha'} bg={'black'} size={'sm'}>See all</Button> </Box>
                </Flex>
                <TableContainer p={0} m={0} bg={'white'}>
                <Table size='sm'>
                        <Thead>
                            <Tr>
                                <Th>Order</Th>
                                <Th>Date</Th>
                                <Th  >Fulfillment Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td >25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td >30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td >0.91444</Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td >25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td >30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td >0.91444</Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td >25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td >30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td >0.91444</Td>
                            </Tr>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td >25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td >30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td >0.91444</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th >multiply by</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>

        </Flex>
    </Box>
}



export function loader() {
    return 0;
}