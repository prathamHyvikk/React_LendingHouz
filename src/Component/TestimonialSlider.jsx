import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './Utility.css'
import './Main.css'

const TestimonialSlider = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Swiper
        loop={true}     
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={1.1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
      >
        {testimonials.map((t, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide key={index} className="!overflow-visible  h-full p-3 items-center flex justify-center">
              
              <div
                className={`transition-all duration-500 w-full h-full max-w-md p-6 rounded-xl border bg-white ${
                  isActive ? "scale-102  " : "scale-95 opacity-80"
                }`}
              >
                <p className="text-gray-700 italic mb-4">“{t.text}”</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold primary-text">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
 
      <div className="custom-pagination mt-8 flex justify-center space-x-2" />
    </div>
  );
};

export default TestimonialSlider;
