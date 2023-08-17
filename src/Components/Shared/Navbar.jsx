import { BsBell, BsSearch } from "react-icons/bs";
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
    <Box position={'sticky'}
    top={0}
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
          color={"teal.200"}
          p={1}
          width={"auto"}
          fontSize="3xs"
          border={"1px solid white"}
          borderRadius={"md"}
        >
          Summer `23
        </Text>
      </Box>
      <Box w={"32%"} display={"flex"} justifyContent={"center"} alignItems={'center'}>
        <Box width={"100%"}>
          <ButtonGroup width={"100%"} isAttached>
            <Button  width={"80%"} p={0} cursor={"text"} disabled>
              <Input border={"none"} placeholder={`Search`} />
            </Button>
            <Button  width={"20%"}>
              <BsSearch></BsSearch>
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Box
        w={"32%"}
        display={"flex"}
        gap={2}
        justifyContent={"right"}
        alignItems={"center"}
      >
        <Button
          size={"sm"}
          variant={"solid"}
          bg={"gray.700"}
          borderRadius={"md"}
        >
          <BsBell color={"white"} w={5} h={5}></BsBell>
        </Button>
        <WrapItem
          borderLeftRadius={"lg"}
          borderRightRadius={"2xl"}
          bg={"gray.700"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
        >
          <Text marginLeft={2} fontSize={"xs"}>
            Samiul Alim
          </Text>
          <Avatar size="sm" name="Samiul Alim" src="" />{" "}
        </WrapItem>
      </Box>
    </Box>
  );
};

export default Navbar;
