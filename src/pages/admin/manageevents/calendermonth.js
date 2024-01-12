import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridplugin from '@fullcalendar/daygrid'
import moment from "moment";

export default function Index(props) {
    const {activeTab, setActiveTab, events, setEvents,fetchsingleEvent, year} = props;
    const [updateMonth, setUpdateMonth] = useState(false)
    
    const handleTabClick = (index) => {
      setActiveTab(index);
    };

    const getFullDetials = (event) => {
        fetchsingleEvent(event.event.id)
    }

    const currentYear = moment().format('YYYY')
    const firstDate = moment([year?.name ?? currentYear,activeTab]).format('YYYY-MM-DD');
   
    useEffect(() => {
        setUpdateMonth(!updateMonth)
    },[year])

    const [loadCalendar, setLoadCalendar] = useState(false);
    useEffect(() => {

        let timeoutId = setTimeout(() => {  
        setLoadCalendar(true);
        }, 200);

        return () => {
        clearTimeout(timeoutId);
        };   
    
    }, []);

    const eventRender = ({ event, timeText }) => {
        let formattedTime = event.start.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true, // To use 12-hour format
        });
    
        formattedTime = formattedTime.replace('p.m.', 'PM').replace('a.m.', 'AM');
        const returnConcatedText = event.title.length > 15 ? event.title.substring(0,15) + '...' : event.title
        return (
          <div>
            {!event.allDay && <span>{formattedTime} </span>}
            <span>{returnConcatedText}</span>
          </div>
        );
      };
    
    return (
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
            <TabList>
                <div className="grid grid-cols-12">
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 0
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                    >
                    Jan
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
                    Feb
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
                    Mar
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
                    Apr
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
                     May
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
                    Jun
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 6
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                    >
                    Jul
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 7
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                    >
                    Aug
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 8
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                    >
                    Sep
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 9
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                    >
                    Oct
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 10
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                    >
                     Nov
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 11
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
                    >
                    Dec
                    </div>
                </Tab>
                </div>
            </TabList>
            <div>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    key={updateMonth}
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
                    initialDate={firstDate}
                    multiMonthMaxColumns= '1'
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
                    initialDate={firstDate}
                    multiMonthMaxColumns= '1'   
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
                    initialDate={firstDate}
                    multiMonthMaxColumns= '1'   
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
                    initialDate={firstDate}
                    multiMonthMaxColumns= '1'   
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
                    initialDate={firstDate}
                    multiMonthMaxColumns= '1'   
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
                    initialDate={firstDate}
                    multiMonthMaxColumns= '1'   
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
                    initialDate={firstDate}
                    multiMonthMaxColumns= '1'  
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
                    initialDate={firstDate}
                    multiMonthMaxColumns= '1' 
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
                    initialDate={firstDate}
                    multiMonthMaxColumns= '1'  
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
                    initialDate={firstDate}
                    multiMonthMaxColumns= '1'   
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                {loadCalendar && 
                    <FullCalendar
                    plugins={[dayGridplugin]}
                    initialView="dayGridMonth"
                    initialDate={firstDate}
                    multiMonthMaxColumns= '1'   
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
                    eventContent={eventRender}
                    />
                }
                </div>
                </TabPanel>
            </div>
        </Tabs>
    );
}