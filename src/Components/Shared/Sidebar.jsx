import React from "react";
import {
  MenuList,
  MenuItem,
  MenuButton,
  Menu,
  IconButton,
  Box,
  Button,
  Link as Chakralink,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  BsBagCheckFill,
  BsCardChecklist,
  BsFillPieChartFill,
  BsPersonCheckFill,
} from "react-icons/bs";
import { PiBowlFoodFill } from "react-icons/pi";
import { Link as RouterLink } from "react-router-dom";

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
      position={"relative"}
      top={0}
      bottom={0}
      width={"17%"}
      bg={"gray.50"}
      style={{ height: "100%" }}
      padding={2}
    >
      <Box
        display={"flex"}
        gap={1}
        flexDirection={"column"}
        alignItems={"left"}
        justifyContent={"center"}
      >
        {sideBarItems.map((item,i) => {
          return (
            <div  key={`link_${i}`}>
              <RouterLink to={item.link}>
                <Button w={'full'}
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
    </Box>
  );
};

export default Sidebar;
