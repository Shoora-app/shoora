// components
import { Outlet, useParams } from "react-router-dom";
import StepperSignUP from "../components/StepperSignUP";

// chakra ui components
import { AbsoluteCenter, Box, Button, Flex, useSteps } from "@chakra-ui/react";

const steps = [
  { title: "Email", description: "Enter your email" },
  { title: "Profile", description: "Basic profile information" },
  { title: "Password", description: "Create your password" },
];

const SignUpPage = () => {
  const params = useParams();
  console.log(params);
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });


  return (
    <Box position="relative" h="100vh">
      <AbsoluteCenter axis="both">
        <Flex
          flexDir="column"
          w="100%"
          mx="auto"
          alignItems="center"
          justifyContent="center"
          shadow="md"
          p="2.4rem"
          gap="1.2rem"
        >
          <StepperSignUP
            activeStep={activeStep}
            onSetActiveStep={setActiveStep}
            steps={steps}
          />
          <Outlet />
        </Flex>
      </AbsoluteCenter>
    </Box>
  );
};

export default SignUpPage;
