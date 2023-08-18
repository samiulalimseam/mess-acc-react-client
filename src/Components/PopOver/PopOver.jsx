import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";

const PopOver = ({children}) => {
  return (
    
      
      <PopoverContent mt={3} border={'none'}  bg={'blackAlpha.900'}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Noitifications</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>

  );
};

export default PopOver;
