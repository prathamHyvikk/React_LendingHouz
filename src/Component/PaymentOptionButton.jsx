import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AllApplicationStatus from "./AllApplicationStatus";

export default function PaymentOptionButton({
  setAlignment,
  alignment,
  activeStep,
  setActiveStep,
}) {
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [financePopup, setFinancePopup] = React.useState(false);
  localStorage.setItem("method", alignment);

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="cash">Cash</ToggleButton>

        <ToggleButton value="finance" onClick={() => setFinancePopup(true)}>
          Finance
        </ToggleButton>
      </ToggleButtonGroup>

      <div className="w-full flex justify-end mt-5">
        <button
          className="bg-[#002e6d] text-white cursor-pointer sora-bold py-2 px-4 rounded"
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Next
        </button>
      </div>

      <AllApplicationStatus
        isOpen={financePopup}
        setFinancePopup={setFinancePopup}
        onClose={() => setFinancePopup(false)}
        setAlignment={setAlignment}
        setActiveStep={setActiveStep}
      />
    </>
  );
}
