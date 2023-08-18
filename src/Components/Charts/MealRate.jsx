import { Card, CardBody } from "@chakra-ui/card";
import { Box, Divider, Text } from "@chakra-ui/layout";
import React from "react";
import {
 
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MealRate = () => {
  const data = [
    { name: "Aug 1 ", avg: 40 },
    { name: "Aug 2 ", avg: 50 },
    { name: "Aug 3 ", avg: 21 },
    { name: "Aug 4 ", avg: 70 },
    { name: "Aug 5 ", avg: 40 },
    { name: "Aug 6 ", avg: 40 },
    { name: "Aug 7 ", avg: 21 },
    { name: "Aug 8 ", avg: 10 },
    { name: "Aug 9 ", avg: 40 },
    { name: "Aug 10 ", avg: 77 },
    { name: "Aug 11 ", avg: 21 },
    { name: "Aug 12 ", avg: 20 },
    { name: "Aug 13 ", avg: 40 },
    { name: "Aug 14 ", avg: 40 },
    { name: "Aug 15 ", avg: 51 },
    { name: "Aug 16 ", avg: 50 },
  ];
  return (
    <Card w={"100%"} p={5} className="mealrate">
      {" "}
      <Box
        w={"100%"}
        margin={"auto"}
        justifyContent={"center"}
        marginBottom={5}
        display={"flex"}
        gap={2}
      >
        <Card maxW={"xs"}>
          <CardBody>
            <Text fontSize={"xs"} color={"gray"} fontStyle={""}>
              Total Consumer
            </Text>
            <Divider />

            <Text fontSize={"xl"} align={"center"} fontWeight={"light"}>
              7
            </Text>
          </CardBody>
        </Card>
        <Card maxW={"xs"}>
          <CardBody>
            <Text fontSize={"xs"} color={"gray"}>
              Maximum rate
            </Text>
            <Divider />
            <Text fontSize={"xl"} align={"center"} fontWeight={"light"}>
              76
            </Text>
          </CardBody>
        </Card>
        <Card maxW={"xs"}>
          <CardBody>
            <Text fontSize={"xs"} color={"gray"}>
              Lowest rate
            </Text>
            <Divider />
            <Text fontSize={"xl"} align={"center"} fontWeight={"light"}>
              34
            </Text>
          </CardBody>
        </Card>
        <Card maxW={"xs"}>
          <CardBody>
            <Text fontSize={"xs"} color={"gray"}>
              Total Meals
            </Text>
            <Divider />
            <Text fontSize={"xl"} align={"center"} fontWeight={"light"}>
              233
            </Text>
          </CardBody>
        </Card>
      </Box>
      <ResponsiveContainer width={"100%"} height={200}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="natural" dataKey="avg" stroke="#8884d8" />

          <XAxis dataKey="name" />
          <YAxis stroke="0"  />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default MealRate;
