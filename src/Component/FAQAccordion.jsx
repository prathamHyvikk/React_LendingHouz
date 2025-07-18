import React, { useState } from "react";
import "../Component/Utility.css";

const FAQAccordion = ({ faqs = [], title = "Frequently Asked Questions" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl sora-regular text-center mb-12">{title}</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((item, index) => {
          const isOpen = index === activeIndex;

          return (
            <div key={index} className="w-full">
              <div
                onClick={() => toggleIndex(index)}
                className="bg-white rounded-lg shadow-md cursor-pointer transition-all duration-300"
              >
                {/* Header with fixed height */}
                <div className="px-6 flex justify-between items-center min-h-[84px]">
                  <h6 className="font-semibold text-lg">{item.question}</h6>
                  <i
                    className={`text-xl transition-transform duration-300 ${
                      isOpen
                        ? "ri-subtract-line text-blue-600"
                        : "ri-add-line text-black"
                    }`}
                  ></i>
                </div>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-blue-600">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQAccordion;
