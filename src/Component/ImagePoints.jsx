import React from "react";

const ImagePoints = ({
  data,
  pointIcon = "/assets/Images/starIcon.png",
  order,
}) => {
  return (
    <>
      <section
        className="max-w-[1320px] pt-8 lg:pt-16 mx-auto lg:px-10 md:px-8 px-4
  flex lg:flex-row flex-col items-stretch justify-between gap-14"
      >
        <div className="hero-right lg:w-[50%] flex">
          <img
            src={data?.image}
            alt="Hero-Image"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div
          className={`hero-left ${order} sm:space-y-[20px] space-y-[16px] lg:w-[50%]`}
        >
          <h1 className="primary-heading text-3xl sm:text-[50px] mr-12 mb-8 md:leading-15">
            {data?.title}
          </h1>

          <p className="sm:text-[18px] font-normal sm:pr-18 text-sm text-[var(--light-gray)] sm:leading-[150%] tracking-[-2%]">
            {data?.subLine}
          </p>

          <ul className="space-y-6 lg:text-lg font-normal ">
            {data?.points.map((point, i) => (
              <li key={i} className="flex items-center gap-2 md:mr-5">
                <img src={pointIcon} alt="star" />
                <span className="md:text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ImagePoints;
