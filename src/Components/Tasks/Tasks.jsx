import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomField,
  addNewOption,
  changeCustomFieldLabel,
  changeCustomFieldType,
  changeName,
  deleteCustomField,
  deleteOption,
} from "../../redux/actionCreators/optionPlusActions";
import { BsFillBackspaceFill, BsFillTrashFill } from "react-icons/bs";
import toast, { Toaster, useToaster } from "react-hot-toast";

const Tasks = () => {
  const options = useSelector((state) => state.options);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  const testToast = () => {
    toast.error("OK");
  };

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
      <button onClick={testToast}>Test</button>
      <Flex py={2}>
        <Button
          onClick={() => {
            dispatch(addNewOption(generateRandomString()));
          }}
        >
          Add New
        </Button>
      </Flex>

      <Accordion m={1} border={"none"} borderStyle={"none"} allowMultiple>
        {options.map((option, i) => (
          <AccordionItem border={"none"} borderStyle={"none"} key={option.key}>
            <Card my={1}>
              <Flex justifyContent={"space-between"} w={"full"}>
                <AccordionButton
                  borderStyle={"none"}
                  m={1}
                  borderRadius={"lg"}
                  _expanded={{ bg: "#FFB84C", color: "white" }}
                  w={"auto"}
                >
                  <AccordionIcon />
                </AccordionButton>
                <Flex p={1} alignItems={"center"} w={"full"}>
                  <Box as="span" flex="1" textAlign="left">
                    <Flex justify={"space-between"}>
                      <Input
                        p={2}
                        borderRadius={"lg"}
                        border={'none'}
                        _hover={{ backgroundColor: "blackAlpha.200" }}
                        focusBorderColor="white"
                        placeholder="Add a title"
                        defaultValue={option.name}
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

              <AccordionPanel bg={"#FFB84C"} m={2} borderRadius={"lg"}>
                <Accordion allowMultiple>
                  {options[i].customField.map((item, customFieldIndex) => {
                    return (
                      <AccordionItem
                        border={"none"}
                        borderStyle={"none"}
                        key={item.key}
                      >
                        <Flex justifyContent={"space-between"} w={"full"}>
                          <AccordionButton
                            m={1}
                            borderRadius={"lg"}
                            _expanded={{ bg: "#FFB84C", color: "white" }}
                            w={"auto"}
                          >
                            <AccordionIcon />
                          </AccordionButton>
                          <Flex alignItems={"center"} w={"full"}>
                            <Box as="span" flex="1" textAlign="left">
                              <Flex justify={"space-between"}>
                                <Input
                                  p={1}
                                  borderRadius={"lg"}
                                  _hover={{ backgroundColor: "whiteAlpha.400" }}
                                  focusBorderColor="white"
                                  color={"black"}
                                  variant={"flushed"}
                                  defaultValue={item.name}
                                  onChange={(e) => {
                                    dispatch(changeName(i, e.target.value));
                                  }}
                                  width={"80%"}
                                  border={"none"}
                                ></Input>
                              </Flex>
                            </Box>
                            <Button
                              size={"sm"}
                              onClick={() => {
                                // delete custom field
                                dispatch(deleteCustomField(i, item.key));
                              }}
                            >
                              <BsFillBackspaceFill></BsFillBackspaceFill>
                            </Button>
                          </Flex>
                        </Flex>
                        <AccordionPanel
                          bg={"whiteAlpha.900"}
                          m={1}
                          borderRadius={"lg"}
                        >
                          <Flex gap={2}>
                            <FormControl>
                              <FormLabel>Label on product</FormLabel>
                              <Input
                                onChange={(e) => {
                                  dispatch(
                                    changeCustomFieldLabel(
                                      i,
                                      customFieldIndex,
                                      e.target.value
                                    )
                                  );
                                }}
                                type="text"
                              ></Input>
                              <FormHelperText>
                                <p> This will be shown on the product page</p>
                              </FormHelperText>
                            </FormControl>
                            <FormControl>
                              <FormLabel>Type of input</FormLabel>
                              <Select onChange={(e)=> dispatch(changeCustomFieldType(i, customFieldIndex, e.target.value))}>
                                <option value="text">Text</option>
                                <option value="dropdown">Drop Down list</option>
                                <option value="swatch">Swatches</option>
                              </Select>
                              <FormHelperText>
                                <p> Type of content</p>
                              </FormHelperText>
                            </FormControl>
                          </Flex>
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
                  <Button
                    variant={"solid"}
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
            </Card>
          </AccordionItem>
        ))}
      </Accordion>

      <Toaster></Toaster>
    </Box>
  );
};

export default Tasks;
