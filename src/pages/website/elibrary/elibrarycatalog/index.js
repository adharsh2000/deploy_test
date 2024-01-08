import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import Layout from "@/components/layout/layout";
import Advancedsearch from "./advancedsearch";
import Rowview from "./rowview";
import Gridview from "./gridview";
import Listview from "./listview";
import Tabsview from "./tabsview";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const [view, setView] = useState("Row");

  return (
    <>
      <Layout
        pageClass="pg-discussion-details"
        pageTitle="AISD eLibrary Catalog"
      >
        <div className="discussion-bg px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[40px] xl:pt-[2.604vw] pb-6 xl:pb-[1.25vw]">
          <div className="xl:max-w-[88.3025vw] mx-auto ">
            <div className={myMontserrat.className}>
              <div className="breadCrumb flex items-center gap-[16px]">
                <div className="col">
                  <Link href={""}>
                    <i className="austin-home"></i> Home
                  </Link>
                </div>
                <div className="col">
                  <i className="austin-arrow-open-right"></i>
                </div>
                <div className="col">
                  <Link href={""}>eLibrary</Link>
                </div>
                <div className="col">
                  <i className="austin-arrow-open-right"></i>
                </div>
                <div className="col">Catalog / Search</div>
              </div>
              <div className="flex flex-wrap justify-between items-center">
                <h2
                  className={`${myMontserrat.className} text-[#374151] text-[20px] xl:text-[1.25vw] font-semibold`}
                >
                  AISD <span className="font-extrabold">eLibrary</span> Catalog
                </h2>
                <Link
                  href="/website/elibrary"
                  className="bg-[#DBE1EA] hover:bg-[#762428] hover:text-white rounded-md text-[#1F3F71] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5 ease-linear duration-200"
                >
                  Back to eLibrary Home
                </Link>
              </div>
            </div>
            <div className="mt-[50px] xl:mt-[2.604vw]">
              <div className="grid grid-cols-12 gap-[40px] xl:gap-[2.083vw]">
                <div className="col-span-12 xl:col-span-4">
                  <Advancedsearch />
                </div>
                <div className="col-span-12 xl:col-span-8">



                  <Tabsview  setView ={ setView} />
                  
                    {view === "Row" ? <Rowview /> : null}
                    {view === "Grid" ? <Gridview /> : null}
                    {view === "List" ? <Listview /> : null}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
