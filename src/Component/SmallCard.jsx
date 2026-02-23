import React from "react";

const SmallCard = ({
  data,
  imageUrl,
  editProduct,
  updateProduct,
  deleteProduct,
}) => {
  return (
    <>
      <div className="flex items-start justify-between gap-2 bg-[#F4F4F4] p-2 rounded-md shadow-md">
        <div className="flex  items-center gap-2">
          <div className="w-38 h-24 overflow-hidden rounded-sm">
            <img
              className="w-full h-full object-cover"
              src={imageUrl ? data.image_url : data.image}
              alt={data.name}
            />
          </div>
          <div className="text-[13px]">
            <p className=" font-bold capitalize ">{data.name}</p>
            <p>{data.date}</p>
            <p>{data.category}</p>

            <p
              className={`${data.status === "active" ? "text-green-600" : "text-red-600"} font-bold`}
            >
              {data.status}
            </p>
          </div>
        </div>

        {updateProduct && (
          <div
            onClick={() => editProduct(data.id)}
            className="space-y-2 flex flex-col min-[350px]:flex-row gap-2 "
          >
            <div className="cursor-pointer">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="#155dfc"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </div>

            <div
              onClick={() => deleteProduct(data.id)}
              className="cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="#e7000b"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SmallCard;
