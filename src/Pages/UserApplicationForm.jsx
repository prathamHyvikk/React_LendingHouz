import React from "react";
import CustomeStepper from "../Component/CustomeStepper";
import AdminLayout from "../Component/AdminLayout";
import ConfirmFinance from "../Component/ConfirmFinance";

const UserApplicationForm = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  return (
    <>
      <AdminLayout>
        <div className="">
          <CustomeStepper  />
        </div>
      </AdminLayout>
    </>
  );
};

export default UserApplicationForm;
