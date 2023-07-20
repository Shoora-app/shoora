import { Center, Button, Text } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";

const FacebookButton = () => {
  return (
    <Center w="full">
      <Button
        w={"full"}
        variant={"outline"}
        leftIcon={<BsFacebook />}

      >
        <Center>
          <Text>Sign up with Facebook</Text>
        </Center>
      </Button>
    </Center>
  );
};

export default FacebookButton;
