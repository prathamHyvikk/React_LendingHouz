import React from "react";

const ImagePoints = ({data}) => {
  return (
    <>
      <section
        id=""
        className="max-w-[1320px] pt-8 lg:pt-16 mx-auto lg:px-10 md:px-8 px-4 flex lg:flex-row flex-col items-center justify-between gap-[30px]"
      >
        <div className="hero-right lg:w-[50%]">
          <img
            src={data?.image}
            className="rounded-2xl"
            alt="Hero-Image"
          />
        </div>

        <div className="hero-left sm:space-y-[20px] space-y-[16px] lg:w-[50%]">
          <h1 className="primary-heading text-[50px] mb-8 leading-15">
            {data?.title}
          </h1>
          <p className="sm:text-[18px] font-normal sm:pr-18 text-sm text-[var(--light-gray)] sm:leading-[150%] tracking-[-2%]">
            {data?.subLine}
          </p>
          <ul className="space-y-6 lg:text-lg font-normal">
            {data?.points.map((data, i) => (
              <li key={i} className="flex items-center gap-2">
                <img src="/assets/Images/starIcon.png" alt="star" />
                <span className="md:text-lg">{data}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ImagePoints;
