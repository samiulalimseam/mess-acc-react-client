import { Box, WrapItem } from "@chakra-ui/layout";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import React, { useState } from "react";
import { useUserData } from "../../context/UserProvider";
import { Avatar, Spinner } from "@chakra-ui/react";

const MemberList = () => {
  const { userState } = useUserData();
  
  if (userState.loading) {
    return (
      <div style={{width:'40px', margin:'auto'}}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }
  return (
    <Box borderRadius={"lg"} border={"1px solid lightGray"}>
      <TableContainer>
        <Table variant="striped">
          <TableCaption>Users with their details</TableCaption>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th>Hometown</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userState?.users?.map((user, i) => (
              <Tr key={`row_${i}`}>
                <Td>
                  <WrapItem>
                    <Avatar
                      name={user.first_name + " " + user.last_name}
                      src={user.avatar}
                    />
                  </WrapItem>
                </Td>
                <Td>{user.first_name + " " + user.last_name}</Td>
                <Td>{user.phone_number}</Td>
                <Td>{user.address.city}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MemberList;
