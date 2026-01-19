import React from "react";

const ReadyToExplore = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-4 max-w-[1320px] py-8 lg:py-16 mx-auto lg:px-10 md:px-8 px-4">
        <h1 className="primary-heading text-center">
          Ready to explore home loan options that fit your budget?
        </h1>

        <p className="text-[var(--light-gray)] sm:leading-[150%] tracking-[-2%] text-center font-normal">
          Get pre-qualified and compare home financing paths with
          confidence—purchase or refinance, with a process designed to stay
          clear from start to finish.
        </p>
        <button className="py-3 px-6 rounded-lg hidden items-center gap-2 font-semibold lg:flex bg-[var(--primary-color2)] hover:bg-black hover:text-white transition">
          <span>Get Pre-Qualified</span>
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
        <div className="bg-[var(--primary-color2)] rounded-lg px-4 py-1">
          <p className="text-center">
            © {new Date().getFullYear()} Copyright By Lending Houz
          </p>
        </div>
      </footer>
    </>
  );
};

export default ReadyToExplore;
