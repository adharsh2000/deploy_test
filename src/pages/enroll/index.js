import Layout from "@/components/layout/layout";
import React from "react";
import EnrollToday from "./enrollToday/EnrollToday";
import Banner from "./banner";


const Enroll = () => {
  return (
    <div>
      <Layout pageClass="" pageTitle="Board of Trustees">
      
        <Banner />
        <div className="px-[15px] lg:px-[5.208vw]">
         
        </div>

        <EnrollToday />
      </Layout>
    </div>
  );
};

export default Enroll;
