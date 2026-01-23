import React from "react";
import Header from "../Component/Header";
import FinanceOptionHero from "../Component/FinanceOptionHero";
import { heroSection } from "../../public/data/homeNewPage.json";
import { partner } from "../../public/data/homeNewPage.json";
import { financing } from "../../public/data/homeNewPage.json";
import { furure } from "../../public/data/homeNewPage.json";
import ImagePoints from "../Component/ImagePoints";
import HomeService from "../Component/HomeService";
import ReadyToMove from "../Component/ReadyToMove";
import ReadyToExplore from "../Component/ReadyToExplore";

const HomeNewPage = () => {
  return (
    <>
      <Header btncategory="Home" />

      <FinanceOptionHero
        secondBtn={"See How It Works"}
        data={heroSection}
        category=""
      />

      <section className="my-12 ">
        <ImagePoints data={partner} />
      </section>

      <section className="my-16 mx-5 ">
        <HomeService />
      </section>

      <section>
        <ReadyToMove />
      </section>

      <section className="my-12 ">
        <ImagePoints order={"order-first"} data={financing} />
      </section>

      <section className="">
        <ReadyToExplore maxWidth={"max-w-[672px]"} data={furure} category="" />
      </section>
    </>
  );
};

export default HomeNewPage;
