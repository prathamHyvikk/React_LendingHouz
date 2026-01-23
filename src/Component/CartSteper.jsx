import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaymentOptionButton from "./PaymentOptionButton";
import OrderDetailStep from "./OrderDetailStep";

const steps = ["", ""];

export default function CartSteper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [alignment, setAlignment] = React.useState("cash");
  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PaymentOptionButton
            setAlignment={setAlignment}
            alignment={alignment}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      case 1:
            return (
            <OrderDetailStep/>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        sx={{
          "& .MuiStepIcon-root": {
            color: "#cfd8e3",
            width: 30,
            height: 30,
          },
          "& .MuiStepIcon-root.Mui-active": {
            color: "#002e6d",
          },
          "& .MuiStepIcon-root.Mui-completed": {
            color: "#002e6d",
          },
          "& .MuiStepConnector-line": {
            borderColor: "#002e6d",
          },
        }}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep)}</Box>

      {/* <Box sx={{ display: "flex", pt: 2 }}>
        <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          onClick={handleNext}
          sx={{
            backgroundColor: "#002e6d",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#001f4d",
            },
          }}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box> */}
    </Box>
  );
}
