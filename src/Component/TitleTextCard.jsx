import React from "react";

const TitleTextCard = ({ data, blackLine }) => {
  return (
    <>
      <div className="grid  gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto ">
        {data.map((item, i) => (
          <div
            key={i}
            className="group relative p-8 mx-4 rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]"
          >
            {blackLine && (
              <span className="absolute top-0 left-8 h-[2px] w-10 bg-neutral-900"></span>
            )}
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              {item.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TitleTextCard;
