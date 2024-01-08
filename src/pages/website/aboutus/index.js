import React from "react";
import Layout from "@/components/layout/layout";
import AisdDistrict from '@/components/website/aisddistict'
import Banner from "./banner";
import OurStudents from "@/components/website/aboutus/ourstudents";

import OurPrograms from '@/components/website/ourprograms'

function Aboutus() {
  return (
   <>
   <Layout pageClass="pg-aboutus" pageTitle="About Us">
    <Banner/>
    <AisdDistrict/>
    <OurStudents/>
    <OurPrograms/>
   </Layout>
   </>
  )
}

export default Aboutus