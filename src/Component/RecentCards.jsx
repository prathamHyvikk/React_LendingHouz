import React from "react";

const RecentCards = ({ data }) => {
 console.log(data)
  return (
    <>
      <div className="flex items-center gap-2 bg-[#F4F4F4] p-2 rounded-md shadow-md">
        <div className="w-38 h-24 overflow-hidden rounded-sm">
          <img className="w-full h-full object-cover" src={data.img} alt="" />
        </div>
        <div className="text-[13px]">
          <p>{data.name}</p>
          <p>{data.day}</p>
          <p>{data.orderID}</p>
          <p>{data.finance}</p>
          <p>{data.status}</p>
        </div>
      </div>
    </>
  );
};

export default RecentCards;
