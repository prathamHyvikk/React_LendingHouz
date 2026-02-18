import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ConfirmFinance from "./ConfirmFinance";
import { styled } from "@mui/material/styles";
import VerifyContact from "./VerifyContact";
import EmploymentAndIncom from "./EmploymentAndIncom";
import { useLocation } from "react-router-dom";

const steps = ["", "", ""];

export default function CustomeStepper() {
  const loacation = useLocation();
  const arrivedCategory = loacation?.state?.category?.replaceAll("_", " ");
  const [activeStep, setActiveStep] = React.useState(0);
  const [confirmFinance, setConfirmFinance] = React.useState();
  const [verifyContact, setVerifyContact] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    address_1: "",
    address_2: "",
    zipcode: "",
    city: "",
    state: "",
    chk_correct: false,
  });

  const [employmentAndIncom, setEmploymentAndIncom] = React.useState({
    grossIncome: "",
    netIncome: "",
    requestedIncome: "",
    lastPayDate: "",
    nextPayDate: "",
    paymentFrequency: "",
    dob: "",
    ssn: "",
    check: false,
  });

 

  React.useEffect(() => {
    if (arrivedCategory) {
      
      setConfirmFinance(arrivedCategory);
    }
  }, [arrivedCategory]);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <ConfirmFinance
            setActiveStep={setActiveStep}
            setConfirmFinance={setConfirmFinance}
            confirmFinance={confirmFinance}
          />
        );
      case 1:
        return (
          <VerifyContact
            setActiveStep={setActiveStep}
            verifyContact={verifyContact}
            setVerifyContact={setVerifyContact}
          />
        );
      case 2:
        return (
          <EmploymentAndIncom
            setActiveStep={setActiveStep}
            setEmploymentAndIncom={setEmploymentAndIncom}
            employmentAndIncom={employmentAndIncom}
            confirmFinance={confirmFinance}
            verifyContact={verifyContact}
          />
        );
      default:
        return null;
    }
  };
  const Title = (step) => {
    switch (step) {
      case 0:
        return <div>Confirm Your Financing Option</div>;
      case 1:
        return <div>Verify Contact Information</div>;
      case 2:
        return <div>Employment and income</div>;
      default:
        return null;
    }
  };

  const CustomStepIcon = styled("div")(({ theme, ownerState }) => ({
    width: 35,
    height: 35,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 600,

    backgroundColor: ownerState.active
      ? "#002e6d"
      : ownerState.completed
        ? "#002e6d"
        : "#D5D5D5",

    color: "#fff",

    border: "2px solid",
    borderColor: ownerState.active
      ? "#002e6d"
      : ownerState.completed
        ? "#002e6d"
        : "#D5D5D5",
  }));

  return (
    <>
      <Box
        sx={{
          fontSize: "24px",
          fontWeight: 900,
          textAlign: "center",
          mb: 4,
          color: "#002e6d",
        }}
      >
        {Title(activeStep)}
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "40%", mx: "auto" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel
                  StepIconComponent={(props) => (
                    <CustomStepIcon ownerState={props}>
                      {props.icon}
                    </CustomStepIcon>
                  )}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box sx={{ width: "100%", mt: 4 }}>{getStepContent(activeStep)}</Box>
        {/* 
        <Box sx={{ display: "flex", pt: 3 }}>
          <Button
            disabled={activeStep === 0}
            onClick={() => setActiveStep((s) => s - 1)}
          >
            Back
          </Button>

          <Box sx={{ flex: "1 1 auto" }} />

          <Button onClick={() => setActiveStep((s) => s + 1)}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box> */}
      </Box>
    </>
  );
}
