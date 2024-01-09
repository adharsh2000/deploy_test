import Layout from "@/components/layout/layout";
import Banner from "./Banner";
import React from 'react'
import Responsibilitiesleadership from "./responsibilitiesleadership";
import Advancedsearch from "./advancedsearch";



const CalenderOfEvents = () => {
  return (
    <div>
      <Layout pageClass="" pageTitle="Board of Trustees">
        <Banner />
        <div className="px-[15px] lg:px-[5.208vw]">
        <div className="grid grid-cols-12 gap-[20px] xl:gap-[2.083vw]">
          <div className="col-span-12 lg:col-span-5 xl:col-span-4">
            <Advancedsearch />
          </div>
          <div className="col-span-12 lg:col-span-7 xl:col-span-8">
            <Responsibilitiesleadership />
          </div>
          </div>
        </div>
      </Layout>
        
    </div>
  );
};

export default CalenderOfEvents;
