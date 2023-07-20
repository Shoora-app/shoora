import { Center, Button, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <Center w="full">
      <Button w="full" variant={"outline"} leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign up with Google</Text>
        </Center>
      </Button>
    </Center>
  );
};

export default GoogleButton;
