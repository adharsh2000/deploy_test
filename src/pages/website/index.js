import Layout from "@/components/layout/layout";
import React, { useState } from "react";
import Banner from "./banner";
import Whychosseaustinisd from "./whychosseaustinisd";
import LatestNews from "./latestnews";
import SocialMedia from "./socialmedia";
import CalendarEvents from "./calendarevents";
import AisdTv from "./aisdtv";
import Image from "next/image";


export default function Index() {


  return (
    <>
      <Layout pageClass="pg-home" pageTitle="Home">
        <div className="pg-home-bg absolute left-0 right-0 top-0 bottom-0"></div>
        <Banner/>
        <Whychosseaustinisd />        
        <div className="calendar-aisdtv-wrap xl:rounded-b-[100%] overflow-hidden"  style={{background: 'radial-gradient(60.06% 172.34% at 48.18% 107.41%, #0C2349 28.33%, #141820 70.03%)'}}>
          <CalendarEvents />
          <AisdTv />
        </div>
        <div className="pt-[55px] xl:pt-[2.865vw]">
          <LatestNews />
        </div>
        <SocialMedia />
        
        
      </Layout>
    </>
  );
}
