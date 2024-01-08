import React, { useState } from "react";
import Layout from "@/components/layout/layout";
import Introbanner from "@/components/elibrary/introbanner"
import Pinneiitems from "@/components/pinneditems";
import Topcontributors from "@/components/topcontributors";
import Unansweredtopics from "@/components/unansweredtopics";
import MessageBoardTable from "@/components/messageboardtable";
import MessageBoardGrid from "@/components/messageboardgrid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LatestFiles from "@/components/elibrary/latestfiles";
import TrendingCategories from "@/components/elibrary/trendingcategories";
import CatalogeLibrary from "@/components/elibrary/catalogelibrary";

export default function Index() {  

  const [showMessageGrid, setShowMessageGrid] = useState(0);

  const handleShowMessageGrid = (index) =>{
    setShowMessageGrid(index);
  }

  return (
    <>
      <Layout pageClass="pg-elibrary" pageTitle="eLibrary">
        <div className="px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[40px] xl:pt-[5.90vw] pb-70px xl:pb-[5.225vw]">
          <div className="xl:max-w-[88.3025vw] mx-auto">
            <Introbanner />
            <div className="mt-[30px] xl:mt-[2.09vw]">
                <LatestFiles />
            </div>
            <div className="mt-[30px] xl:mt-[2.09vw]">
              <TrendingCategories />
            </div>
            <div className="mt-[30px] xl:mt-[2.09vw]">
              <CatalogeLibrary />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
