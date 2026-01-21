import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FinanceOptionHero = ({ data, category }) => {
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
      <div>
        <section
          id=""
          className="max-w-[1320px] pt-8 lg:pt-16 mx-auto lg:px-10 md:px-8 px-4 flex lg:flex-row flex-col items-center justify-between gap-[30px]"
        >
          <div className="hero-left sm:space-y-[20px] space-y-[16px] lg:w-[50%]">
            <h1
              className="primary-heading text-3xl sm:text-[50px]  mb-5 md:leading-15 "
              dangerouslySetInnerHTML={{ __html: data?.title }}
            ></h1>
            <p className="sm:text-[18px] font-normal sm:pr-18 text-sm text-[var(--light-gray)] sm:leading-[150%] tracking-[-2%]">
              {data?.description}
            </p>

            <button
              onClick={handleClick}
              className="py-3 px-6 rounded-lg hidden items-center gap-2 font-semibold lg:flex bg-[#f5bf11] hover:bg-black hover:text-white transition cursor-pointer"
            >
              <span>{data?.btnText}</span>
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
          <div className="hero-right lg:w-[50%] ">
            <img
              className="rounded-[20px]"
              src={`${data?.image}`}
              alt="Hero-Image"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default FinanceOptionHero;
