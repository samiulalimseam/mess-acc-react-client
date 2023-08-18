import { BsBell, BsSearch } from "react-icons/bs";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Popover,
  PopoverTrigger,
  Text,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Profile from "../Profile/Profile";
import PopOverTrigger from "../PopOver/PopOverTrigger";
import PopOver from "../PopOver/PopOver";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      position={"sticky"}
      zIndex={9999}
      top={0}
      bg={"blackAlpha.900"}
      textColor={"white"}
      width={"full"}
      display={"flex"}
      p={2}
      justifyContent={"space-between"}
    >
      <Box>
        <Drawer
          marginTop={10}
          size={"md"}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader marginTop={12}>Profile</DrawerHeader>

            <DrawerBody marginTop={0}>
             
              <Profile></Profile>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box
        w={"32%"}
        mx={2}
        display={"flex"}
        gap={2}
        justifyContent={"left"}
        alignItems={"center"}
      >
        <Text textTransform={"uppercase"} fontSize="2xl">
          Logo
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
      <Box
        w={"32%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box width={"100%"}>
          <ButtonGroup width={"100%"} isAttached>
            <Button width={"80%"} p={0} cursor={"text"} disabled>
              <Input border={"none"} placeholder={`Search`} />
            </Button>
            <Button width={"20%"}>
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
        <Popover placement="bottom">
          <PopoverTrigger
            size={"sm"}
            variant={"solid"}
            bg={"gray.700"}
            borderRadius={"md"}
          >
            <Box bg={"gray.700"} p={1} borderRadius={"lg"} cursor={"pointer"}>
              <BsBell color={"white"} w={5} h={5}></BsBell>
            </Box>
          </PopoverTrigger>

          <PopOver></PopOver>
        </Popover>
        <WrapItem
          cursor={"pointer"}
          ref={btnRef}
          onClick={() => {
            if (!isOpen) {
              onOpen();
            } else {
              onClose();
            }
          }}
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

          <Avatar size="sm" name="Samiul Alim" src="" />
        </WrapItem>
      </Box>
    </Box>
  );
};

export default Navbar;
