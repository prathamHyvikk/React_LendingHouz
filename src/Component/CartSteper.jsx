import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaymentOptionButton from "./PaymentOptionButton";
import OrderDetailStep from "./OrderDetailStep";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const steps = ["", ""];

export default function CartSteper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [alignment, setAlignment] = React.useState("cash");
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const [financeData, setFinanceData] = useState();
  const [totalAmount, setTotalAmount] = useState();

  const LoginToken = localStorage.getItem("LoginToken");
  const application_id = localStorage.getItem("application_id");
  const method = localStorage.getItem("method");
  const userId = useSelector((state) => state.person.id);
  const [loading, setLoading] = useState(false);
  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const fetchDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/order-detail-cash`,
        {
          user_id: userId,
          method: method,
          application_id: alignment !== "cash" ? application_id : null,
        },
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      setUser(response?.data?.user);
      setCart(response?.data?.cart);
      setFinanceData(response?.data.finance);
      setTotalAmount(response?.data?.total_amount);
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        Object.entries(errors).forEach(([field, messages]) => {
          messages.forEach((msg) => {
            toast.error(` ${msg}`);
          });
        });
      } else {
        toast.error(error?.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeStep === 1) {
      fetchDetails();
    }
  }, [activeStep, alignment]);
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
          <OrderDetailStep
            alignment={alignment}
            user={user}
            cart={cart}
            financeData={financeData}
            totalAmount={totalAmount}
            setActiveStep={setActiveStep}
          />
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

      <Box sx={{ mt: 2, mb: 1 }}>
        {" "}
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px",
            }}
          >
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#002e6d]"></div>
          </Box>
        ) : (
          getStepContent(activeStep)
        )}
      </Box>

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
