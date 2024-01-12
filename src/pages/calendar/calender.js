import React, { useState, useEffect, useRef } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import multiMonthPlugin from '@fullcalendar/multimonth'
import moment from "moment";

const CalenderPage = (props) => {

  const { events ,fetchsingleEvent, year} = props;
  const [activeTab, setActiveTab] = useState(0);
  const [monthIndex, setMonthIndex] = useState(2);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const currentYear = moment().format('YYYY')
  const firstDate = moment([year,activeTab*2]).format('YYYY-MM-DD');

  const getFullDetials = (event) => {
    fetchsingleEvent(event.event.id)
}

  const [loadCalendar, setLoadCalendar] = useState(false);
  useEffect(() => {

    handleTabClick(0);
    let timeoutId = setTimeout(() => {  
      setLoadCalendar(true);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };   
  
  }, [props]);

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
            {loadCalendar && 
              <FullCalendar
                plugins={[multiMonthPlugin]}
                initialView="multiMonthYear"
                initialDate={firstDate}
                multiMonthMaxColumns= '1'   
                views= {{
                  multiMonthYear: {
                    type: 'multiMonthYear',
                    duration: { months: 2 },
                    titleFormat: { year: 'numeric', month: 'long' },
                    // visibleRange: {
                    //   start: `${year}-01-01`, // March 1, 2023
                    //   end: `${year}-02-29`,   // April 30, 2023
                    // },
                  }
                }}
                headerToolbar={{
                  left: '',
                  center: '',
                  right: '',
                }}
                showNonCurrentDates= {true}
                eventClick={(e) => getFullDetials(e)}
                weekends= {true}
                events={events}
                editable={true}
              />
            }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
            {loadCalendar && 
              <FullCalendar
              plugins={[multiMonthPlugin]}
              initialView="multiMonthYear"
              initialDate={firstDate}
              multiMonthMaxColumns= '1'   
              views= {{
                multiMonthYear: {
                  type: 'multiMonthYear',
                  duration: { months: 2 },
                  titleFormat: { year: 'numeric', month: 'long' },
                  // visibleRange: {
                  //   start: `${year}-01-01`, // March 1, 2023
                  //   end: `${year}-02-29`,   // April 30, 2023
                  // },
                }
              }}
              headerToolbar={{
                left: '',
                center: '',
                right: '',
              }}
              showNonCurrentDates= {true}
              eventClick={(e) => getFullDetials(e)}
              weekends= {true}
              events={events}
              editable={true}
            />
            }
            </div>          
          </TabPanel>
          <TabPanel>
            <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
            {loadCalendar && 
              <FullCalendar
              plugins={[multiMonthPlugin]}
              initialView="multiMonthYear"
              initialDate={firstDate}
              multiMonthMaxColumns= '1'   
              views= {{
                multiMonthYear: {
                  type: 'multiMonthYear',
                  duration: { months: 2 },
                  titleFormat: { year: 'numeric', month: 'long' },
                  // visibleRange: {
                  //   start: `${year}-01-01`, // March 1, 2023
                  //   end: `${year}-02-29`,   // April 30, 2023
                  // },
                }
              }}
              headerToolbar={{
                left: '',
                center: '',
                right: '',
              }}
              showNonCurrentDates= {true}
              eventClick={(e) => getFullDetials(e)}
              weekends= {true}
              events={events}
              editable={true}
            />
            }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
            {loadCalendar && 
              <FullCalendar
              plugins={[multiMonthPlugin]}
              initialView="multiMonthYear"
              initialDate={firstDate}
              multiMonthMaxColumns= '1'   
              views= {{
                multiMonthYear: {
                  type: 'multiMonthYear',
                  duration: { months: 2 },
                  titleFormat: { year: 'numeric', month: 'long' },
                  // visibleRange: {
                  //   start: `${year}-01-01`, // March 1, 2023
                  //   end: `${year}-02-29`,   // April 30, 2023
                  // },
                }
              }}
              headerToolbar={{
                left: '',
                center: '',
                right: '',
              }}
              showNonCurrentDates= {true}
              eventClick={(e) => getFullDetials(e)}
              weekends= {true}
              events={events}
              editable={true}
            />
            }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
            {loadCalendar && 
              <FullCalendar
              plugins={[multiMonthPlugin]}
              initialView="multiMonthYear"
              initialDate={firstDate}
              multiMonthMaxColumns= '1'   
              views= {{
                multiMonthYear: {
                  type: 'multiMonthYear',
                  duration: { months: 2 },
                  titleFormat: { year: 'numeric', month: 'long' },
                  // visibleRange: {
                  //   start: `${year}-01-01`, // March 1, 2023
                  //   end: `${year}-02-29`,   // April 30, 2023
                  // },
                }
              }}
              headerToolbar={{
                left: '',
                center: '',
                right: '',
              }}
              showNonCurrentDates= {true}
              eventClick={(e) => getFullDetials(e)}
              weekends= {true}
              events={events}
              editable={true}
            />
            }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
            {loadCalendar && 
             <FullCalendar
             plugins={[multiMonthPlugin]}
             initialView="multiMonthYear"
             initialDate={firstDate}
             multiMonthMaxColumns= '1'   
             views= {{
               multiMonthYear: {
                 type: 'multiMonthYear',
                 duration: { months: 2 },
                 titleFormat: { year: 'numeric', month: 'long' },
                 // visibleRange: {
                 //   start: `${year}-01-01`, // March 1, 2023
                 //   end: `${year}-02-29`,   // April 30, 2023
                 // },
               }
             }}
             headerToolbar={{
               left: '',
               center: '',
               right: '',
             }}
             showNonCurrentDates= {true}
             eventClick={(e) => getFullDetials(e)}
             weekends= {true}
             events={events}
             editable={true}
           />
            }
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default CalenderPage;
