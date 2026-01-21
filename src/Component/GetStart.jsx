import React from "react";
import "./Utility.css";
import BtnGetStart from "./BtnGetStart";

function GetStart({ title, subtitle, btncategory }) {
  return (
    <div className="bg-white max-w-[890px] mx-auto    pb-10 text-center">
      <h1 className="text-3xl sm:text-[50px]  max-lg:leading-11 max-sm:text-[30px] mb-2 sora-regular ">
        {title}
      </h1>
      <h6 className=" sora-regular primary-text mb-6">{subtitle}</h6>
      <div className="flex justify-center">
        <BtnGetStart category={btncategory} />
      </div>
    </div>
  );
}

export default GetStart;
