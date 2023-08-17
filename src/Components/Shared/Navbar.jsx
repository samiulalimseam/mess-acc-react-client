import { BsFillBellFill, BsSearch } from "react-icons/bs";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Input,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box
      bg={"blackAlpha.900"}
      textColor={"white"}
      width={"full"}
      display={"flex"}
      p={2}
      justifyContent={"space-between"}
    >
      <Box
        w={"32%"}
        mx={2}
        display={"flex"}
        gap={2}
        justifyContent={"left"}
        alignItems={"center"}
      >
        <Text textTransform={"uppercase"} fontSize="2xl">
          Beautiful Logo
        </Text>
        <Text
        color={'teal.200'}
          p={1}
          width={"auto"}
          fontSize="3xs"
          border={"1px solid white"}
          borderRadius={"md"}
        >
          Summer 2023
        </Text>
      </Box>
      <Box w={"32%"} display={"flex"} justifyContent={"center"}>
        <ButtonGroup isAttached>
          <Button p={0} cursor={"text"} disabled>
            <Input border={"none"} placeholder={`Search`} />
          </Button>
          <Button>
            <BsSearch></BsSearch>
          </Button>
        </ButtonGroup>
      </Box>
      <Box
        w={"32%"}
        display={"flex"}
        gap={2}
        justifyContent={"right"}
        alignItems={"center"}
      >
        <Box border={"1px solid lightGray"} borderRadius={"md"} p={1}>
          <BsFillBellFill color={"white"} w={5} h={5}></BsFillBellFill>
        </Box>
        <WrapItem>
          <Avatar size="sm" name="Samiul" src="" />{" "}
        </WrapItem>
      </Box>
    </Box>
  );
};

export default Navbar;
