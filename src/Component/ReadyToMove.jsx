import React from "react";
import { useNavigate } from "react-router-dom";

const ReadyToMove = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="px-4 md:px-8 lg:px-10 mt-12 lg:mt-16 py-12 bg-amber-100">
        <div className="max-w-6xl mx-auto text-center text-black">
          <h2 className="primary-heading text-3xl sm:text-[50px] mb-4">
            Ready to move forward?
          </h2>

          <p className="sm:text-[18px] font-normal  text-sm text-center text-[var(--light-gray)] sm:leading-[150%] tracking-[-2%] mb-8">
            From <span className="font-semibold">$500</span> to
            <span className="font-semibold">$500,000+</span>, find the right
            financing at the right rate
          </p>

          <button
            onClick={() =>
              navigate("/app/dashboard/applications/new-application")
            }
            className="py-3 px-4 text-sm cursor-pointer rounded-lg items-center gap-2 font-semibold inline-flex primary-bg hover:bg-black hover:text-white transition"
          >
            <span>Explore Financing Options</span>
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
      </section>
    </>
  );
};

export default ReadyToMove;
