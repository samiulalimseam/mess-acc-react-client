import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Text, Select, Input, Checkbox } from "@chakra-ui/react";


const Grocery = () => {
  const [productData, setProductData] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [shopName, setShopName] = useState('samiul-dev-store.myshopify.com');

  useEffect(() => {
    // Replace this URL with your API endpoint
    const apiUrl = `https://option-app-server-samiulalimseam.vercel.app/api/shopdata/${shopName}`;

    // Fetch data from the API
    fetch(apiUrl).then((response) => {
      setProductData(response.data);
      // Set the default color based on the API data
      setSelectedColor(response.data.options[0].customField[1].defaultValue);
    });
  }, [shopName]);

  const handleSubmit = () => {
    // Replace this URL with your API endpoint
    const apiUrl = `https://option-app-server-samiulalimseam.vercel.app/api/shopdata/${shopName}`;

    // Fetch data from the API
    axios.get(apiUrl).then((response) => {
      setProductData(response.data);
      // Set the default color based on the API data
      setSelectedColor(response.data.options[0].customField[1].defaultValue);
    });
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  // Extract relevant data from productData
  const { shop, options } = productData;

  // Function to handle color selection
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <Box>
      <Flex gap={2}>
        <Text>Enter Shop Name</Text>
        <Input onBlur={(e) => setShopName(e.target.value)} type="text" />
        <Button onClick={handleSubmit}>Submit</Button>
      </Flex>
      <Box mx={"auto"} maxW="400px" p="4" borderWidth="1px" borderRadius="md">
        <Text fontSize="xl" fontWeight="bold" mb="4">
          {shop}
        </Text>
        {options.map((option) => (
          <Box key={option.key} mb="4">
            <Text fontWeight="bold">{option.name}</Text>
            {option.customField.map((field) => (
              <Box key={field.key} mb="2">
                {field.inputType === "text" && (
                  <Input
                    type="text"
                    placeholder={field.placeHolderText}
                    defaultValue={field.defaultValue}
                    maxLength={field.characterLimit}
                  />
                )}
                {field.inputType === "swatches" && (
                  <Box>
                    <Text>{field.labelOnProduct}</Text>
                    <Select
                      value={selectedColor}
                      onChange={handleColorChange}
                      mb="2"
                    >
                      {field.options.map((colorOption) => (
                        <option
                          key={colorOption.key}
                          value={colorOption.color}
                          style={{ backgroundColor: colorOption.color }}
                        >
                          {colorOption.optionName}
                        </option>
                      ))}
                    </Select>
                    <Box
                      w="24px"
                      h="24px"
                      bg={selectedColor}
                      borderWidth="1px"
                      borderRadius="md"
                    />
                  </Box>
                )}
                {field.inputType === "checkbox" && (
                  <Box>
                    <Text>{field.labelOnProduct}</Text>
                    {field.options.map((checkboxOption) => (
                      <Checkbox
                        key={checkboxOption.key}
                        defaultChecked={checkboxOption.defaultValue === "true"}
                      >
                        {checkboxOption.optionName}
                      </Checkbox>
                    ))}
                  </Box>
                )}
                {field.inputType === "dropdown" && (
                  <Box>
                    <Text>{field.labelOnProduct}</Text>
                    <Select
                      defaultValue={field.defaultValue}
                      placeholder={field.placeHolderText}
                    >
                      {field.options.map((dropdownOption) => (
                        <option
                          key={dropdownOption.key}
                          value={dropdownOption.optionName}
                        >
                          {dropdownOption.optionName}
                        </option>
                      ))}
                    </Select>
                  </Box>
                )}
                {field.inputType === "products" && (
                  <Box>
                    <Text>{field.labelOnProduct}</Text>
                    <Select
                      defaultValue={field.defaultValue}
                      placeholder={field.placeHolderText}
                    >
                      {field.options.map((productOption) => (
                        <option
                          key={productOption.key}
                          value={productOption.optionName}
                        >
                          {productOption.optionName}
                        </option>
                      ))}
                    </Select>
                  </Box>
                )}
                {/* Add more conditional rendering for other input types */}
              </Box>
            ))}
          </Box>
        ))}
        <Button colorScheme="blue" size="md">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Grocery;
