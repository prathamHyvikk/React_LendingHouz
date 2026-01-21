import React from "react";
import Header from "../Component/Header";
import FinanceOptionHero from "../Component/FinanceOptionHero";
import TitleSubtitle from "../Component/TitleSubtitle";
import TitleTextCard from "../Component/TitleTextCard";
import ImagePoints from "../Component/ImagePoints";
import StepsCustome from "../Component/StepsCustome";

import { heroSection } from "../../public/data/homeFinance.json";
import { loanOption } from "../../public/data/homeFinance.json";
import { optionCard } from "../../public/data/homeFinance.json";
import { helpFinance } from "../../public/data/homeFinance.json";

import { whyChoose } from "../../public/data/homeFinance.json";
import { chooseList } from "../../public/data/homeFinance.json";
import { rightNow } from "../../public/data/homeFinance.json";
import { howWork } from "../../public/data/homeFinance.json";
import { faqs } from "../../public/data/homeFinance.json";
import { whatSay } from "../../public/data/homeFinance.json";
import { readySection } from "../../public/data/homeFinance.json";
import FAQAccordion from "../Component/FAQAccordion";
import WhatCustomerSay from "../Component/WhatCustomerSay";
import ReadyToExplore from "../Component/ReadyToExplore";

const HomeFinancePage = () => {
  return (
    <>
      <Header btncategory="Home Finance" />

      <FinanceOptionHero data={heroSection} category="Home Finance" />

      <div>
        <section className="my-12 ">
          <TitleSubtitle data={loanOption} />
        </section>
        <TitleTextCard data={optionCard} />
      </div>

      <section>
        <ImagePoints data={helpFinance} />
      </section>

      <div>
        <section className="my-12 ">
          <TitleSubtitle data={whyChoose} />
        </section>
        <TitleTextCard data={chooseList} blackLine={"yes"} />
      </div>

      <section className="my-12 ">
        <ImagePoints
          data={rightNow}
          order={"order-first"}
          pointIcon="/assets/Images/tickIcon.png"
        />
      </section>

      <section>
        <TitleSubtitle data={howWork} />

        <StepsCustome />
      </section>

      <div className="container px-2">
        <FAQAccordion title={" Home financing FAQs"} faqs={faqs} />
      </div>

      <section className="max-w-[1320px] mx-auto  ">
        <WhatCustomerSay whatSay={whatSay} />
      </section>

      <section>
        <ReadyToExplore data={readySection} category="Home Finance" />
      </section>
    </>
  );
};

export default HomeFinancePage;
