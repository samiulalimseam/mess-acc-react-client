import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import MealRate from "../Components/Charts/MealRate";
import MemberDashboard from "../Components/Charts/MemberDashboard";
import { Button, Switch, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { PiBowlFood, PiShoppingBagFill } from "react-icons/pi";

const DashboardBackup = () => {
  return (
    <Box display={"flex"} gap={8} flexDirection={"column"} width={"full"}>
      <Flex justifyContent={"space-between"}>
        <Flex
          direction={"column"}
          w={"full"}
          mx={2}
          my={2}
          minH={"200px"}
          gap={2}
        >
          <Flex gap={2}>
            <Box
              className="logoandname"
              borderRadius={"md"}
              h={"80px"}
              w={"80px"}
              textAlign={"center"}
              color={"white"}
              bg={"purple"}
            >
              <Text
                fontFamily={"monospace"}
                fontSize={"xxx-large"}
                fontWeight={"light"}
              >
                BM
              </Text>
            </Box>
            <Flex
              justifyContent={"space-between"}
              h={"80px"}
              direction={"column"}
            >
              <Text fontSize={"37px"}>BachelorMate</Text>
              <Text>Advanced Accounting | 650+ intsalls</Text>
            </Flex>
          </Flex>
          <Box color={"blackAlpha.600"}>
            BachelorMate is a revolutionary accounting app tailored specifically
            for bachelors, making financial management hassle-free and
            convenient. Say goodbye to messy spreadsheets and complex accounting
            software. With BachelorMate, you can effortlessly keep track of your
            expenses and stay on top of your finances.
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
                  Meals
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
                <PiBowlFood size={"40px"} color="white" />
              </Box>
            </Flex>
            <Button
              borderRadius={"xl"}
              fontWeight={"light"}
              colorScheme="purple"
              w={"20%"}
            >
              Add More
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
                  Total Meals
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
                <PiBowlFood size={"40px"} color="white" />
              </Box>
            </Flex>
            <Button
              borderRadius={"xl"}
              fontWeight={"light"}
              colorScheme="purple"
              w={"20%"}
            >
              View More
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap={4} justifyContent={"space-between"}>
    <Box>
    <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </Box>
    <Box>
        b
    </Box>

      </Flex>
    </Box>
  );
};

export default DashboardBackup;
