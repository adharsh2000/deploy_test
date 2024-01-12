import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import moment from "moment";

export default function Index(props) {
  const { events ,fetchsingleEvent, year} = props;
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
      setActiveTab(index);
    };


    useEffect(() => {  
      handleTabClick(0)
    }, [props]);

    const firstDate = moment([year,activeTab*2]).format('YYYY-MM-DD');
   
    return (
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
            <TabList>
              <div className="grid grid-cols-6">
                <Tab>
                  <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 0
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                  >
                    Jan / Feb
                  </div>
                </Tab>
                <Tab>
                  <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 1
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                  >
                    Mar / Apr
                  </div>
                </Tab>
                <Tab>
                  <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 2
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                  >
                    May / Jun
                  </div>
                </Tab>
                <Tab>
                  <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 3
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                  >
                    Jul / Aug
                  </div>
                </Tab>
                <Tab>
                  <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 4
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                  >
                    Sep / Oct
                  </div>
                </Tab>
                <Tab>
                  <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 5
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                  >
                    Nov / Dec
                  </div>
                </Tab>
              </div>
            </TabList>
            <div>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                <FullCalendar 
                        // key={updateMonth}
                        plugins={[listPlugin]}
                        initialView="listMonth" 
                        initialDate={firstDate}
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                <FullCalendar 
                        // key={updateMonth}
                        plugins={[listPlugin]}
                        initialView="listMonth" 
                        initialDate={firstDate}
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                <FullCalendar 
                        // key={updateMonth}
                        plugins={[listPlugin]}
                        initialView="listMonth" 
                        initialDate={firstDate}
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                <FullCalendar 
                        // key={updateMonth}
                        plugins={[listPlugin]}
                        initialView="listMonth" 
                        initialDate={firstDate}
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                <FullCalendar 
                        // key={updateMonth}
                        plugins={[listPlugin]}
                        initialView="listMonth" 
                        initialDate={firstDate}
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                <FullCalendar 
                        // key={updateMonth}
                        plugins={[listPlugin]}
                        initialView="listMonth" 
                        initialDate={firstDate}
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>                
            </div>
        </Tabs>
    );
}