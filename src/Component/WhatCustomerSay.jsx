import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../App.css";

import "swiper/css";
import "swiper/css/pagination";

const WhatCustomerSay = ({ whatSay }) => {
  return (
    <section className="max-w-[1250px] mx-auto  px-4">
      <h1 className="primary-heading text-center mb-4">{whatSay?.title}</h1>

      <p className="text-center text-[var(--light-gray)] max-w-3xl mx-auto leading-[150%]">
        {whatSay?.subLine}
      </p>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-10 pb-12"
      >
        {whatSay?.testimonials?.map((item, index) => (
          <SwiperSlide key={index} className="yellowSlider">
            <div className="h-full  p-8 mb-10 bg-white shadow-xl rounded-xl space-y-4">
              <p className="text-[#494949] text-sm leading-relaxed">
                “{item.text}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[var(--primary-color2)]">
                    {item.name}
                  </p>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatCustomerSay;
