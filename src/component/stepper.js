import * as React from "react";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";

const steps = ["User Information", "Address Details", "Thank you"];

const HorizontalStepper = ({ step }) => {
  return (
    <Box sx={{ width: "100%", marginBottom: "25px" }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
export default HorizontalStepper;
