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
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomField,
  addNewOption,
  changeName,
  deleteCustomField,
  deleteOption,
} from "../../redux/actionCreators/optionPlusActions";
import { BsFillBackspaceFill, BsFillTrashFill } from "react-icons/bs";

const Tasks = () => {
  const options = useSelector((state) => state.options);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  function generateRandomString() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 8;
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  }
  return (
    <Box>
      <Flex py={2}>
        <Button
          onClick={() => {
            dispatch(addNewOption(generateRandomString()));
          }}
        >
          Add New
        </Button>
      </Flex>
      <Accordion allowMultiple>
        {options.map((option, i) => (
          <AccordionItem key={option.key}>
            <Flex justifyContent={"space-between"} w={"full"}>
              <AccordionButton m={1} borderRadius={'lg'} _expanded={{ bg: '#d3deff', color: 'white' }} w={"auto"}>
                <AccordionIcon />
              </AccordionButton>
              <Flex alignItems={"center"} w={"full"}>
                <Box as="span" flex="1" textAlign="left">
                  <Flex justify={"space-between"}>
                    
                    <Input
                      color={"blue.400"}
                      variant={"unstyled"}
                      defaultValue={"Option Set"}
                      onChange={(e) => {
                        dispatch(changeName(i, e.target.value));
                      }}
                      width={"80%"}
                    ></Input>
                  </Flex>
                </Box>
                <Button
                  size={"sm"}
                  onClick={() => {
                    dispatch(deleteOption(i));
                  }}
                >
                  <BsFillTrashFill></BsFillTrashFill>
                </Button>
              </Flex>
            </Flex>
            <AccordionPanel>
              <Accordion allowMultiple>
                {options[i].customField.map((item, customFieldIndex) => {
                  return (
                    <AccordionItem key={item.key}>
                      <Flex justifyContent={"space-between"} w={"full"}>
                        <AccordionButton m={1} borderRadius={'lg'} _expanded={{ bg: '#90ee90', color: 'white' }}  w={"auto"}>
                          <AccordionIcon />
                        </AccordionButton>
                        <Flex alignItems={"center"} w={"full"}>
                          <Box as="span" flex="1" textAlign="left">
                            <Flex justify={"space-between"}>
                              
                              <Input
                                color={"green.400"}
                                variant={"unstyled"}
                                defaultValue={"Custom Field"}
                                
                                width={"80%"}
                              ></Input>
                            </Flex>
                          </Box>
                          <Button
                            size={"sm"}
                            onClick={() => {
                              // delete custom field
                              dispatch(deleteCustomField(i,item.key))
                            }}
                          >
                            <BsFillBackspaceFill></BsFillBackspaceFill>
                          </Button>
                        </Flex>
                      </Flex>
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
                  );
                })}
                <Button
                  onClick={() =>
                    dispatch(addCustomField(i, generateRandomString()))
                  }
                  size={"xs"}
                  m={1}
                >
                  Add Custom field
                </Button>
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Tasks;
