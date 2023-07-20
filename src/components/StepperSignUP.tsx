import {
  Box,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepNumber,
  StepIcon,
  StepDescription,
  StepSeparator,

} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  activeStep: number;
  onSetActiveStep: (index: number) => void;
  steps: { title: string; description: string }[];
}

const StepperSignUP = ({ activeStep, onSetActiveStep, steps }: Props) => {
  return (
    <Stepper index={activeStep} w="100%" display="flex" gap="4.8rem">
      {steps.map((step, index) => {
        return (
          <Link to={`${step.title.toLowerCase()}`}>
            <Step key={index} onClick={() => onSetActiveStep(index)}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink={0}>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          </Link>
        );
      })}
    </Stepper>
  );
};

export default StepperSignUP;
