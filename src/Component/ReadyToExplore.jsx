import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ReadyToExplore = ({ category, data, maxWidth }) => {
  const authenticate = useSelector((state) => state.auth.value);
  const navigate = useNavigate();

  const handleClick = () => {
    if (authenticate == false) {
      navigate("/app/signin");
    } else {
      navigate("/app/dashboard/applications/new-application", {
        state: {
          category: category,
        },
      });
    }
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-4 max-w-[1320px] py-8 lg:py-16 mx-auto lg:px-10 md:px-8 px-4">
        <h1 className="primary-heading text-center md:pr-7">{data?.title}</h1>

        <p
          className={`text-[var(--light-gray)] sm:leading-[150%] tracking-[-2%] text-center font-normal ${maxWidth} text-lg`}
        >
          {data?.description}
        </p>
        <button
          onClick={handleClick}
          className="py-3 cursor-pointer px-6 rounded-lg hidden items-center gap-2 font-semibold lg:flex primary-bg hover:bg-black text-white transition"
        >
          <span>{data?.btnText || "Get Pre-Qualified"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="size-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </div>

      <footer className="lg:px-10 md:px-8 px-4 pb-4 max-w-[1320px] mx-auto ">
        <div className="primary-bg text-white rounded-lg px-4 py-1">
          <p className="text-center">
            © {new Date().getFullYear()} Copyright By Lending Houz
          </p>
        </div>
      </footer>
    </>
  );
};

export default ReadyToExplore;
