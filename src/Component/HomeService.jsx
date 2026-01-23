import React from "react";

const HomeService = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="primary-heading text-3xl sm:text-[50px] mb-4">Our Services</h2>
      </div>
      <div className="grid sm:gap-6 gap-2 gap-y-4 grid-cols-12 max-w-6xl mx-auto">
        <div className="group col-span-6 sm:col-span-4 flex flex-col items-center text-center bg-white rounded-2xl p-1 py-2 sm:p-3 lg:px-6 border border-neutral-200 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <div className="w-11 h-11 my-2 sm:mt-0 sm:mb-4 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="text-[#f5bf11]"
              viewBox="0 0 640 512"
            >
              <path d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"></path>
            </svg>
          </div>
          <h3 className="sm:text-lg text-sm font-semibold text-neutral-900 mb-2">
            Real Estate
          </h3>
          <p className="text-neutral-600 sm:text-sm text-xs">
            Home purchases, refinancing, and equity lines of credit.
          </p>
        </div>

        <div className="group col-span-6 sm:col-span-4 flex flex-col items-center text-center bg-white rounded-2xl p-1 py-2 sm:p-3 lg:px-6 border border-neutral-200 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <div className="w-11 h-11 my-2 sm:mt-0 sm:mb-4 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="text-[#f5bf11]"
              viewBox="0 0 640 512"
            >
              <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7-169.4 169.4c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"></path>
            </svg>
          </div>
          <h3 className="sm:text-lg text-sm font-semibold text-neutral-900 mb-2">
            Business &amp; Growth
          </h3>
          <p className="text-neutral-600 sm:text-sm text-xs">
            Industrial equipment, machinery, and commercial expansion.
          </p>
        </div>

        <div className="group col-span-6 sm:col-span-4 flex flex-col items-center text-center bg-white rounded-2xl p-1 py-2 lg:px-6 sm:p-3 border border-neutral-200 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <div className="w-11 h-11 my-2 sm:mt-0 sm:mb-4 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="text-[#f5bf11]"
              viewBox="0 0 640 512"
            >
              <path d="M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z"></path>
            </svg>
          </div>
          <h3 className="sm:text-lg text-sm font-semibold text-neutral-900 mb-2">
            Lifestyle &amp; Tech
          </h3>
          <p className="text-neutral-600 sm:text-sm text-xs">
            Cell phones, laptops, and high-end electronics.
          </p>
        </div>

        <div className="group col-span-6 sm:col-start-3 sm:col-span-4 flex flex-col items-center text-center bg-white rounded-2xl p-1 py-2 sm:p-3 lg:px-6 border border-neutral-200 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <div className="w-11 h-11 my-2 sm:mt-0 sm:mb-4 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="text-[#f5bf11]"
              viewBox="0 0 640 512"
            >
              <path d="M448 240l19.9 0c15.5 0 28.1-12.6 28.1-28.1 0-7.6-3.1-14.9-8.6-20.2L283.5-4.9C276.1-12 266.3-16 256-16s-20.1 4-27.5 11.1L24.6 191.7C19.1 197 16 204.3 16 211.9 16 227.4 28.6 240 44.1 240l19.9 0 0 144c0 35.3 28.7 64 64 64l85.7 0c7.4-6.6 16.4-11.4 26.3-14l0-130c0-5.5 .7-10.9 2-16l-10 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 24 144 0zM352 352l160 0 0 128-160 0 0-128zm-64-32l0 160-32 0c-8.8 0-16 7.2-16 16 0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48 0-8.8-7.2-16-16-16l-32 0 0-160c0-17.7-14.3-32-32-32l-224 0c-17.7 0-32 14.3-32 32z"></path>
            </svg>
          </div>
          <h3 className="sm:text-lg text-sm font-semibold text-neutral-900 mb-2">
            Home Essentials
          </h3>
          <p className="text-neutral-600 sm:text-sm text-xs">
            Appliances, HVAC systems, and home improvement projects.
          </p>
        </div>

        <div className="group  sm:col-start-auto col-span-12 sm:col-span-4 flex flex-col items-center text-center bg-white rounded-2xl p-1 py-2 sm:p-3 lg:px-6 border border-neutral-200 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <div className="w-11 h-11 my-2 sm:mt-0 sm:mb-4 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#f5bf11]"
              fill="currentColor"
              viewBox="0 0 576 512"
            >
              <path d="M256.7 135.7l56.4 16.1c8.8 2.5 14.9 10.6 14.9 19.7 0 11.3-9.2 20.5-20.5 20.5h-36.9c-8.2 0-16.1-2.6-22.6-7.3-3-2.2-7.2-1.5-9.8 1.2l-11.4 11.4c-3.5 3.5-2.9 9.2 1 12.2 12.3 9.4 27.2 14.5 42.9 14.5h1.4v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24h1.4c22.8 0 44.3-13.6 51.7-35.2 10.1-29.6-7.3-59.8-35.1-67.8L263 104.1c-8.8-2.5-14.9-10.6-14.9-19.7 0-11.3 9.2-20.5 20.5-20.5h36.9c8.2 0 16.1 2.6 22.6 7.3 3 2.2 7.2 1.5 9.8-1.2l11.4-11.4c3.5-3.5 2.9-9.2-1-12.2C336 37.1 321.1 32 305.4 32H304V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h-3.5c-30.6 0-55.1 26.3-52.2 57.5 2 22.1 19 40.1 40.4 46.2zm301.6 197.9c-19.7-17.7-49.4-17.6-69.9-1.2l-61.6 49.3c-1.9 1.5-4.2 2.3-6.7 2.3h-41.6c4.6-9.6 6.5-20.7 4.8-32.3-4-27.9-29.6-47.7-57.8-47.7H181.3c-20.8 0-41 6.7-57.6 19.2L85.3 352H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h88l46.9-35.2c11.1-8.3 24.6-12.8 38.4-12.8H328c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88c-8.8 0-16 7.2-16 16s7.2 16 16 16h180.2c9.7 0 19.1-3.3 26.7-9.3l61.6-49.2c7.7-6.1 20-7.6 28.4 0 10.1 9.1 9.3 24.5-.9 32.6l-100.8 80.7c-7.6 6.1-17 9.3-26.7 9.3H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h400.5c17 0 33.4-5.8 46.6-16.4L556 415c12.2-9.8 19.5-24.4 20-40s-6-30.8-17.7-41.4z"></path>
            </svg>
          </div>
          <h3 className="sm:text-lg text-sm font-semibold text-neutral-900 mb-2">
            Personal Loans
          </h3>
          <p className="text-neutral-600 sm:text-sm text-xs">
            Debt consolidation, medical expenses, or special events.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeService;
