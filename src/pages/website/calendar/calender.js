import React, { useState, useEffect, useRef } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import multiMonthPlugin from '@fullcalendar/multimonth'

const CalenderPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [events, setEvents] = useState([
    {
      title: '6pm Multilingual Education',
      start: '2024-01-01',
      backgroundColor: '#DEF7EC',
      borderColor: '#DEF7EC',
      textColor: '#046C4E'      
    },
    {
      title: '6pm Marshal Middle School Grand Opening Celebration',
      start: '2024-01-02',
      backgroundColor: '#FDF6B2',
      borderColor: '#FDF6B2',
      textColor: '#8E4B10'      
    },
    {
      title: '7pm Indigenous People’s Day',
      start: '2024-01-02',
      backgroundColor: '#E8EBF0',
      borderColor: '#E8EBF0',
      textColor: '#152C4F'
    },
    {
      title: '2:45pm Staff Development/Students',
      start: '2024-01-02',
      backgroundColor: '#F9EDE7',
      borderColor: '#F9EDE7',
      textColor: '#9D5A38'
    },
    {
      title: '6pm Indigenous People’s Day',
      start: '2024-01-03',
      backgroundColor: '#E8EBF0',
      borderColor: '#E8EBF0',
      textColor: '#152C4F'
    },
    {
      title: '2:45pm Staff Development/Students',
      start: '2024-01-04',
      backgroundColor: '#F9EDE7',
      borderColor: '#F9EDE7',
      textColor: '#9D5A38'
    },
    {
      title: '6pm Indigenous People’s Day',
      start: '2024-01-10',
      backgroundColor: '#E8EBF0',
      borderColor: '#E8EBF0',
      textColor: '#152C4F'
    },
    {
      title: '6pm Multilingual Education',
      start: '2024-01-15',
      backgroundColor: '#DEF7EC',
      borderColor: '#DEF7EC',
      textColor: '#046C4E'      
    },
    {
      title: '6pm Indigenous People’s Day',
      start: '2024-01-17',
      backgroundColor: '#E8EBF0',
      borderColor: '#E8EBF0',
      textColor: '#152C4F'
    },
    {
      title: '2:45pm Staff Development/Students',
      start: '2024-01-18',
      backgroundColor: '#F9EDE7',
      borderColor: '#F9EDE7',
      textColor: '#9D5A38'
    },

    {
      title: '6pm Multilingual Education',
      start: '2024-02-01',
      backgroundColor: '#DEF7EC',
      borderColor: '#DEF7EC',
      textColor: '#046C4E'      
    },
    {
      title: '6pm Marshal Middle School Grand Opening Celebration',
      start: '2024-02-02',
      backgroundColor: '#FDF6B2',
      borderColor: '#FDF6B2',
      textColor: '#8E4B10'      
    },
    {
      title: '7pm Indigenous People’s Day',
      start: '2024-02-02',
      backgroundColor: '#E8EBF0',
      borderColor: '#E8EBF0',
      textColor: '#152C4F'
    },
    {
      title: '2:45pm Staff Development/Students',
      start: '2024-02-02',
      backgroundColor: '#F9EDE7',
      borderColor: '#F9EDE7',
      textColor: '#9D5A38'
    },
    {
      title: '6pm Indigenous People’s Day',
      start: '2024-02-03',
      backgroundColor: '#E8EBF0',
      borderColor: '#E8EBF0',
      textColor: '#152C4F'
    },
    {
      title: '2:45pm Staff Development/Students',
      start: '2024-02-04',
      backgroundColor: '#F9EDE7',
      borderColor: '#F9EDE7',
      textColor: '#9D5A38'
    },
    {
      title: '6pm Indigenous People’s Day',
      start: '2024-02-10',
      backgroundColor: '#E8EBF0',
      borderColor: '#E8EBF0',
      textColor: '#152C4F'
    },
    {
      title: '6pm Multilingual Education',
      start: '2024-02-15',
      backgroundColor: '#DEF7EC',
      borderColor: '#DEF7EC',
      textColor: '#046C4E'      
    },
    {
      title: '6pm Indigenous People’s Day',
      start: '2024-02-17',
      backgroundColor: '#E8EBF0',
      borderColor: '#E8EBF0',
      textColor: '#152C4F'
    },
    {
      title: '2:45pm Staff Development/Students',
      start: '2024-02-18',
      backgroundColor: '#F9EDE7',
      borderColor: '#F9EDE7',
      textColor: '#9D5A38'
    },
  ]);

  return (
    <div>
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
                plugins={[multiMonthPlugin]}
                initialView="multiMonthYear"
                multiMonthMaxColumns= '1'   
                views= {{
                  multiMonthYear: {
                    type: 'multiMonthYear',
                    duration: { months: 2 },
                    titleFormat: { year: 'numeric', month: 'long' },
                    visibleRange: {
                      start: '2024-01-01', // March 1, 2023
                      end: '2024-02-29',   // April 30, 2023
                    },
                  }
                }}
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
                plugins={[multiMonthPlugin]}
                initialView="multiMonthYear"
                multiMonthMaxColumns= '1'   
                views= {{
                  multiMonthYear: {
                    type: 'multiMonthYear',
                    duration: { months: 2 },
                    titleFormat: { year: 'numeric', month: 'long' },
                    visibleRange: {
                      start: '2024-03-01', // March 1, 2023
                      end: '2024-04-30',   // April 30, 2023
                    },
                  }
                }}
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
                plugins={[multiMonthPlugin]}
                initialView="multiMonthYear"
                multiMonthMaxColumns= '1'   
                views= {{
                  multiMonthYear: {
                    type: 'multiMonthYear',
                    duration: { months: 2 },
                    titleFormat: { year: 'numeric', month: 'long' },
                    visibleRange: {
                      start: '2024-05-01', // March 1, 2023
                      end: '2024-06-30',   // April 30, 2023
                    },
                  }
                }}
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
                plugins={[multiMonthPlugin]}
                initialView="multiMonthYear"
                multiMonthMaxColumns= '1'   
                views= {{
                  multiMonthYear: {
                    type: 'multiMonthYear',
                    duration: { months: 2 },
                    titleFormat: { year: 'numeric', month: 'long' },
                    visibleRange: {
                      start: '2024-07-01', // March 1, 2023
                      end: '2024-08-30',   // April 30, 2023
                    },
                  }
                }}
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
                plugins={[multiMonthPlugin]}
                initialView="multiMonthYear"
                multiMonthMaxColumns= '1'   
                views= {{
                  multiMonthYear: {
                    type: 'multiMonthYear',
                    duration: { months: 2 },
                    titleFormat: { year: 'numeric', month: 'long' },
                    visibleRange: {
                      start: '2024-09-01', // March 1, 2023
                      end: '2024-10-30',   // April 30, 2023
                    },
                  }
                }}
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
                plugins={[multiMonthPlugin]}
                initialView="multiMonthYear"
                multiMonthMaxColumns= '1'   
                views= {{
                  multiMonthYear: {
                    type: 'multiMonthYear',
                    duration: { months: 2 },
                    titleFormat: { year: 'numeric', month: 'long' },
                    visibleRange: {
                      start: '2024-11-01', // March 1, 2023
                      end: '2024-12-30',   // April 30, 2023
                    },
                  }
                }}
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
    </div>
  );
};

export default CalenderPage;
