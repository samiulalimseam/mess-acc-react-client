import React from "react";
import {
  Box,
  Button,
  Link as Chakralink,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";

import {
  BsBagCheckFill,
  BsCardChecklist,
  BsFillPieChartFill,
  BsGearFill,
  BsPersonCheckFill,
} from "react-icons/bs";
import { PiBowlFoodFill } from "react-icons/pi";
import { Link, Outlet, Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  const sideBarItems = [
    {
      label: "Dashboard",
      icon: <BsFillPieChartFill></BsFillPieChartFill>,
      link: "/",
    },
    {
      label: "Members",
      icon: <BsPersonCheckFill></BsPersonCheckFill>,
      link: "/",
    },
    { label: "Meal", icon: <PiBowlFoodFill></PiBowlFoodFill>, link: "/" },
    { label: "Grocery", icon: <BsBagCheckFill></BsBagCheckFill>, link: "/" },
    { label: "Tasks", icon: <BsCardChecklist></BsCardChecklist>, link: "/" },
  ];
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      className="sidebar"
      position={"sticky"}
      top={"56px"}
      style={{ width: "17%", height: "92vh" }}
      bg={"gray.50"}
      padding={2}
    >
      <Box
        display={"flex"}
        gap={1}
        flexDirection={"column"}
        alignItems={"left"}
        justifyContent={"center"}
      >
        {sideBarItems.map((item, i) => {
          return (
            <div key={`link_${i}`}>
              <RouterLink to={item.link}>
                <Button
                  w={"full"}
                  display={"flex"}
                  fontSize={"sm"}
                  size={"sm"}
                  justifyContent={"left"}
                  gap={3}
                  variant={"ghost"}
                >
                  {item.icon}
                  {item.label}
                </Button>
              </RouterLink>
            </div>
          );
        })}
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={1}>
        <Box>
          <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
            <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
              <Text fontSize={"xs"}>1 hour ago</Text>
            </Box>
            <Heading size="sm" my="2">
              <LinkOverlay href="#">Mehedi just updated the meal!</LinkOverlay>
            </Heading>
            <Text fontSize={"sm"}>
              Update your account regularly to avoid conflicts of calculation
            </Text>
          </LinkBox>
        </Box>
        <Link>
          <Button alignItems={'center'} display={'flex'} gap={1} width={'full'} size={'sm'}><BsGearFill></BsGearFill>Settings</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
