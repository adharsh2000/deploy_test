import Layout from "@/components/layout/layout";
import Banner from "./Banner";
import EventCalenderFilter from '@/components/eventcalenderfilter'
import React from 'react'
import AISDCalender from "@/components/aisdcalender";

const CalenderOfEvents = () => {
  return (
    <div>
      <Layout pageClass="" pageTitle="Calendar">
        <Banner />
        <EventCalenderFilter/>
        <AISDCalender/>
      </Layout>
        
    </div>
  );
};

export default CalenderOfEvents;
