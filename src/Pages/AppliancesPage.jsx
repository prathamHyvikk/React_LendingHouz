import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import FinanceOptionHero from "../Component/FinanceOptionHero";
import ImagePoints from "../Component/ImagePoints";
import FAQAccordion from "../Component/FAQAccordion";

import { heroSection } from "../../public/data/appliancePage.json";
import { applicationsType } from "../../public/data/appliancePage.json";
import { rightForYou } from "../../public/data/appliancePage.json";
import { why } from "../../public/data/appliancePage.json";
import { howWork } from "../../public/data/appliancePage.json";
import { faqs } from "../../public/data/appliancePage.json";
import { whatSay } from "../../public/data/appliancePage.json";
import { readySection } from "../../public/data/appliancePage.json";
import WhatCustomerSay from "../Component/WhatCustomerSay";
import ReadyToExplore from "../Component/ReadyToExplore";
const AppliancesPage = () => {
  return (
    <>
      <Header btncategory="Appliances" />
      <div>
        <FinanceOptionHero data={heroSection} category="Appliances" />
      </div>

      <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 pt-20">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="primary-heading text-3xl sm:text-[50px]  mb-5 md:leading-15">
            What appliances can you finance?
          </h2>
          <p className="text-neutral-600 text-base">
            Whether it’s one essential replacement or a full home upgrade,
            Lending Houz helps you explore financing options across the
            appliances you rely on every day.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {applicationsType.map((data, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center  bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {data.title}
              </h3>
              <div className="w-full h-40 mb-4 rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src={data.image}
                  alt="Refrigerator"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <ImagePoints data={rightForYou} />
      </section>

      <section>
        <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 pt-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="primary-heading text-3xl sm:text-[50px]  mb-4 md:leading-15">
              Why finance appliances with Lending Houz?
            </h2>
            <p className="text-neutral-600">
              Smart, flexible options designed to help you handle essential home
              upgrades with confidence.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {why.map((data, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-1 h-12 primary-bg rounded-full mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {data.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-10 pt-20">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="primary-heading text-3xl sm:text-[50px]  mb-4 md:leading-15">
            How it works
          </h2>
          <p className="text-neutral-600">
            A simple, guided process to help you finance what you need—without
            complexity.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-neutral-200"></div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {howWork.map((data, i) => (
              <div
                key={i}
                className="relative bg-white border border-neutral-200 rounded-2xl p-6 pt-10"
              >
                <span className="absolute -top-6 left-6 text-5xl font-semibold text-[#ff9201]">
                  {data.no}
                </span>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {data.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container px-2">
        <FAQAccordion title={" Appliance financing FAQs"} faqs={faqs} />
      </div>

      <section className="max-w-[1320px] mx-auto  ">
        <WhatCustomerSay whatSay={whatSay} />
      </section>

      <section>
        <ReadyToExplore data={readySection} category="Appliances" />
      </section>
    </>
  );
};

export default AppliancesPage;
