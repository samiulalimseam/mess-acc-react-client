import { Box, Card, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Meal = () => {
  const [mealAray, setMeals] = useState([]);
  const { test } = useSelector((state) => state);
//   sorted meal
  const sortedMealArray = mealAray.sort((a,b)=> {
   const  dateA = new Date(a.meal_date)
   const  dateB = new Date(b.meal_date)
    return dateA - dateB;
  }) 

  let dateWiseMeal = [];
  
  console.log('datewisemeal-',dateWiseMeal);

  let day=[];
  useEffect(() => {
    fetch("/src/MOCK_DATA.json")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);


  let meals = []
  return (
    <Box display={"flex"} gap={1} flexWrap={"wrap"}>
      <Text>Meal account of January</Text>
      {meals.map((day, i) => {

        if(meals[i].meal_date)
        return (
          <Box p={2} border={"1px"} borderRadius={"md"} key={`day_${i + 1}`}>
            {" "}
            {day.meal_date}
            <Box>MemberID: {day.member_id}</Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Meal;
