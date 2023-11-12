import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  BsFillChatDotsFill,
  BsFillShareFill,
  BsFillStickiesFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { useUserData } from "../../context/UserProvider";

const Profile = () => {
  const { userProfileState } = useUserData();

  const user = userProfileState?.users;
  if (userProfileState.loading) {
    return (
      <div style={{ margin: "auto", width: "40px" }}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        ></Spinner>
      </div>
    );
  }
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name={user.first_name + "  " + user.last_name}
              src={user.avatar}
            />

            <Box>
              <Heading size="sm">
                {user.first_name + " " + user.last_name}
              </Heading>
              <Text>{user.employment.title}</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
      <CardBody boxShadow={"md"}>
        <Text>Email : </Text> <Input disabled defaultValue={user.email}></Input>
        <Text>Phone no:</Text>{" "}
        <Input disabled defaultValue={user.phone_number}></Input>
        <Text>Username: </Text>
        <Input disabled defaultValue={user.username}></Input>
        <Text>Hometown: </Text>
        <Input disabled defaultValue={user.address.city}></Input>
      </CardBody>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<BsFillStickiesFill />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BsFillChatDotsFill />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BsFillShareFill />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Profile;
