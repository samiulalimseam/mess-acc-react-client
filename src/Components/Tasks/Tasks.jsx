import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewOption,
  deleteOption,
} from "../../redux/actionCreators/optionPlusActions";
import { BsFillTrashFill } from "react-icons/bs";

const Tasks = () => {
  const options = useSelector((state) => state.options);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <Box>
      <Flex py={2}>
        <Button
          onClick={() => {
            dispatch(addNewOption());
          }}
        >
          Add New
        </Button>
      </Flex>
      {options.map((option, i) => (
        <Accordion key={`option_${i}`} allowToggle allowMultiple>
          <AccordionItem>
            <Flex  justifyContent={'space-between'} w={'full'}>
              <AccordionButton w={'auto'}>
                <AccordionIcon />
              </AccordionButton>
              <Flex alignItems={'center'} w={'full'}>
                <Box as="span" flex="1" textAlign="left">
                 <Input outline={'none'} border={'none'} width={'auto'} defaultValue={`Optionset ${option.name+1}`}></Input>
                </Box>
                <Button size={'sm'}
                  onClick={() => {
                    dispatch(deleteOption(i));
                  }}
                >
                  <BsFillTrashFill></BsFillTrashFill>
                </Button>
              </Flex>
            </Flex>
            <AccordionPanel>
              <Accordion allowToggle allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 1 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <FormControl>
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" />
                      <FormHelperText>
                        <p> We'll never share your email.</p>
                      </FormHelperText>
                    </FormControl>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Box>
  );
};

export default Tasks;
