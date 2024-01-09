import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export default function Index() {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
    const [events, setEvents] = useState([
    {
        title: 'Multilingual Education',
        start: '2024-01-09',
        end: '2024-01-09',
        backgroundColor: '#DEF7EC',
        borderColor: '#DEF7EC',
        textColor: '#046C4E'      
        },
      {
        title: 'Multilingual Education',
        start: '2024-01-10T07:00:00',
        end: '2024-01-10T07:00:00',
        backgroundColor: '#DEF7EC',
        borderColor: '#DEF7EC',
        textColor: '#046C4E'      
      },
      {
        title: 'Marshal Middle School Grand Opening Celebration',
        start: '2024-01-11T05:00:00',
        end: '2024-01-11T07:00:00',
        backgroundColor: '#FDF6B2',
        borderColor: '#FDF6B2',
        textColor: '#8E4B10'      
      },
      {
        title: 'Indigenous People’s Day',
        start: '2024-01-12T04:00:00',
        end: '2024-01-12T04:00:00',
        backgroundColor: '#E8EBF0',
        borderColor: '#E8EBF0',
        textColor: '#152C4F'
      },
      {
        title: 'Staff Development/Students',
        start: '2024-01-13T03:00:00',
        end: '2024-01-13T03:00:00',
        backgroundColor: '#F9EDE7',
        borderColor: '#F9EDE7',
        textColor: '#9D5A38'
      },
      {
        title: '6pm Indigenous People’s Day',
        start: '2024-01-14T03:00:00',
        end: '2024-01-14T03:00:00',
        backgroundColor: '#E8EBF0',
        borderColor: '#E8EBF0',
        textColor: '#152C4F'
      },
      {
        title: '2:45pm Staff Development/Students',
        start: '2024-01-15T04:00:00',
        end: '2024-01-15T04:00:00',
        backgroundColor: '#F9EDE7',
        borderColor: '#F9EDE7',
        textColor: '#9D5A38'
      },
      {
        title: '6pm Indigenous People’s Day',
        start: '2024-01-16T05:00:00',
        end: '2024-01-16T05:00:00',
        backgroundColor: '#E8EBF0',
        borderColor: '#E8EBF0',
        textColor: '#152C4F'
      },
      {
        title: '6pm Multilingual Education',
        start: '2024-01-17T06:00:00',
        end: '2024-01-17T06:00:00',
        backgroundColor: '#DEF7EC',
        borderColor: '#DEF7EC',
        textColor: '#046C4E'      
      },
      {
        title: '6pm Indigenous People’s Day',
        start: '2024-01-17T07:00:00',
        end: '2024-01-17T07:00:00',
        backgroundColor: '#E8EBF0',
        borderColor: '#E8EBF0',
        textColor: '#152C4F'
      },
      {
        title: '2:45pm Staff Development/Students',
        start: '2024-01-18T06:00:00',
        end: '2024-01-18T06:00:00',
        backgroundColor: '#F9EDE7',
        borderColor: '#F9EDE7',
        textColor: '#9D5A38'
      },
  
      {
        title: '6pm Multilingual Education',
        start: '2024-01-19T06:00:00',
        end: '2024-01-19T06:00:00',
        backgroundColor: '#DEF7EC',
        borderColor: '#DEF7EC',
        textColor: '#046C4E'      
      },
      {
        title: '6pm Marshal Middle School Grand Opening Celebration',
        start: '2024-01-20T06:00:00',
        end: '2024-01-20T06:00:00',
        backgroundColor: '#FDF6B2',
        borderColor: '#FDF6B2',
        textColor: '#8E4B10'      
      },
      {
        title: '7pm Indigenous People’s Day',
        start: '2024-01-21T06:00:00',
        end: '2024-01-21T06:00:00',
        backgroundColor: '#E8EBF0',
        borderColor: '#E8EBF0',
        textColor: '#152C4F'
      },
      {
        title: '2:45pm Staff Development/Students',
        start: '2024-01-22T06:00:00',
        end: '2024-01-22T06:00:00',
        backgroundColor: '#F9EDE7',
        borderColor: '#F9EDE7',
        textColor: '#9D5A38'
      },
      {
        title: '6pm Indigenous People’s Day',
        start: '2024-01-23T06:00:00',
        end: '2024-01-23T06:00:00',
        backgroundColor: '#E8EBF0',
        borderColor: '#E8EBF0',
        textColor: '#152C4F'
      },
      {
        title: '2:45pm Staff Development/Students',
        start: '2024-01-24T06:00:00',
        end: '2024-01-24T06:00:00',
        backgroundColor: '#F9EDE7',
        borderColor: '#F9EDE7',
        textColor: '#9D5A38'
      },
      {
        title: '6pm Indigenous People’s Day',
        start: '2024-01-25T06:00:00',
        end: '2024-01-25T06:00:00',
        backgroundColor: '#E8EBF0',
        borderColor: '#E8EBF0',
        textColor: '#152C4F'
      },
      {
        title: '6pm Multilingual Education',
        start: '2024-01-26T06:00:00',
        end: '2024-01-26T06:00:00',
        backgroundColor: '#DEF7EC',
        borderColor: '#DEF7EC',
        textColor: '#046C4E'      
      },
      {
        title: '6pm Indigenous People’s Day',
        start: '2024-01-27T06:00:00',
        end: '2024-01-27T06:00:00',
        backgroundColor: '#E8EBF0',
        borderColor: '#E8EBF0',
        textColor: '#152C4F'
      },
      {
        title: '2:45pm Staff Development/Students',
        start: '2024-01-28T06:00:00',
        end: '2024-01-28T06:00:00',
        backgroundColor: '#F9EDE7',
        borderColor: '#F9EDE7',
        textColor: '#9D5A38'
      },
    ]);
    

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
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        editable={true}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        editable={true}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        editable={true}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        editable={true}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        editable={true}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        headerToolbar={{
                            left: '',
                            center: '',
                            right: '',
                        }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        editable={true}
                    />
                </div>
                </TabPanel>

            </div>
        </Tabs>
    );
}