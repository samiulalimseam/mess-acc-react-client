import Navbar from "../Components/Shared/Navbar";
import Sidebar from "../Components/Shared/Sidebar";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/layout";

const MainLayout = () => {
  return (
    <Box bg={"gray.50"} style={{ width: "100%", height: "100%" }}>
      <Navbar></Navbar>
      <Flex marginTop={0}>
        <Sidebar></Sidebar>
        <Box p={5} mx={"auto"} w={"100%"} marginTop={"60px"}>
          <Outlet></Outlet>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainLayout;
