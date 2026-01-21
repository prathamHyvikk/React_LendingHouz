import React from "react";

const TitleSubtitle = ({ data }) => {
  return (
    <>
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="primary-heading text-3xl sm:text-3xl sm:text-[50px]  mb-4">
          {data?.title}
        </h2>
        <p className="sm:text-[18px] font-normal sm:pr-18 text-sm text-[var(--light-gray)] sm:leading-[150%] tracking-[-2%]">
          {data?.subTitle}
        </p>
      </div>
    </>
  );
};

export default TitleSubtitle;
