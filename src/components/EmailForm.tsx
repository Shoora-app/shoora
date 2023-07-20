import { useState } from "react";
import {
  Divider,
  AbsoluteCenter,
  Box,
  Input,
  Text,
  chakra,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";

const RouterForm = chakra(Form);

const EmailForm = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <RouterForm w="100%">
      <Text mb="0.2rem" color="primary.900">
        What's your email ?
      </Text>
      <Input
        value={email}
        placeholder="Enter your email address"
        onChange={(e) => setEmail(e.target.value)}
        w="100%"
        mb="1.2rem"
      />

      <Button
        w="100%"
        bg="primary.400"
        color="primary.100"
        _hover={{ bg: "primary.300" }}
        mb="2.4rem"
      >
        Next
      </Button>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          OR
        </AbsoluteCenter>
      </Box>
      <Flex justifyContent="center" mb="2.4rem" w="100%" gap="1.8rem">
        <GoogleButton />
        <FacebookButton />
      </Flex>
    </RouterForm>
  );
};

export default EmailForm;
