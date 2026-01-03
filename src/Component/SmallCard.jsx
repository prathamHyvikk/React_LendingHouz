import React from "react";

const SmallCard = ({ data }) => {
  return (
    <>
      <div className="flex items-center gap-2 bg-[#F4F4F4] p-2 rounded-md shadow-md">
        <div className="w-38 h-24 overflow-hidden rounded-sm">
          <img
            className="w-full h-full object-cover"
            src={data.image}
            alt={data.name}
          />
        </div>
        <div className="text-[13px]">
          <p className=" font-bold capitalize ">{data.name}</p>
          <p>{data.date}</p>
          <p>{data.category}</p>

          <p className={`${data.status === "active" ? "text-green-600" : "text-red-600"} font-bold`}>{data.status}</p>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
