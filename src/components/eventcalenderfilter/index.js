import { InputText } from "primereact/inputtext";
import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Checkbox } from "primereact/checkbox";
import CalenderPage from "@/pages/calendar/calender";
import ListMonth from "@/pages/calendar/listmonth";
import fetchAPI from "@/service/api/fetchAPI";
import moment from "moment";
import ViewEvent from "@/components/popup/viewevent"

export default function EventCalenderFilter(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [monthTab, setMonthTab] = useState(0);
  const [allEvents, setAllEvents] = useState(false);
  const [boardMeetings, setBoardMeetings] = useState(false);
  const [districtwideEvents, setDistrictwideEvents] = useState(false);
  const [religion, setReligion] = useState(false);
  const [staffRecognitions, setStaffRecognitions] = useState(false);
  const [advisoryBodies, setAdvisoryBodies] = useState(false);
  const [year, setYear] = useState(moment().year().toString());
  const [searchEvent, setSearchEvent] = useState("");
  const [ViewEventpopup, setViewEventpopup] = useState(false);
  const [eventDetails, setEventDetails] = useState({})

  // const [year, setYear] = useState('2024');
  const YearList = [
    { name: "2023", value: "2023" },
    { name: "2024", value: "2024" },
  ];

  const [events, setEvents] = useState([]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleMonthClick = (index) => {
    setMonthTab(index);
  };

  const featchApi = async () => {
    let payload = {
      year: year,
      search: searchEvent,
      date: '',
      month: ''
    }
    const response = await fetchAPI('/event/list', 'POST', payload, 'application/json')

    if (response && response.rows.length > 0) {
      const updatedResponse = response.rows ? response.rows.map((item) => {
        const todayDate = moment(item.date).format('YYYY-MM-DD'); // Get today's date in 'YYYY-MM-DD' format
        const combinedDateTime = moment(`${todayDate}T${item.start_time}`).format();
        const combinedEndDateTime = moment(`${todayDate}T${item.end_time}`).format();
        return {
          title: item.title,
          start: item.is_all_day == 1 ? todayDate : combinedDateTime,
          end: item.is_all_day == 1 ? todayDate : combinedEndDateTime,
          backgroundColor: '#DEF7EC',
          borderColor: '#DEF7EC',
          textColor: '#046C4E',
          id: item.id,
          allDay: item.is_all_day,
        }
      }) : []
      setEvents([...updatedResponse])
    } else {
      setEvents([])
    }

  };

  const fetchsingleEvent = async (id) => {
    try {
      const response = await fetchAPI(`/event/${id}`, 'GET', {}, 'application/json')
      if (response) {
        setEventDetails(response)
        setViewEventpopup(true)
      }

    } catch (error) {

    }
  }


  const closeViewEventPopup = () => {
    setViewEventpopup(false)
  }

  useEffect(() => {
    featchApi();
  }, [year, searchEvent]);

  return (
    <div className="grid px-[60px] xl:px-[3.125vw] py-[40px] xl:py-[2.083vw] gap-[29px] xl:gap-[1.510vw]">
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <div className="grid gap-[36px] xl:gap-[1.875vw]">
          <div className="grid gap-[29px] xl:gap-[1.510vw]">
            <div className="flex justify-between items-center bg-[#F0F2F6] text-[#374151] xl:py-[0.625vw] py-[12px]">
              <div className="flex xl:text-[1.563vw] text-[30px] gap-[8px] xl:gap-[0.417vw]">
                <span className="font-bold">Events </span>
                <span className="font-normal">Calendar</span>
              </div>
              <div className="flex gap-[8px] xl:gap-[0.417vw]">
                <div className="">
                  <span className="custam-search p-input-icon-right flex items-center">
                    <InputText
                      onChange={(e) => setSearchEvent(e.target.value)}
                      placeholder="Search by Events"
                      className="p-inputtext p-component rounded-2xl bg-[#F5F6F7] xl:w-[16.927vw] placeholder:text-[#9CA1AB] placeholder:font-normal placeholder:xl:text-[0.729vw] "
                    />
                    <i className="austin-search text-[16px] xl:text-[0.833vw] text-black cursor-pointer" />
                  </span>
                </div>
                <div className="event-dropdown">
                  <Dropdown
                    placeholder="Select year"
                    value={year}
                    onChange={(e) => {
                      setYear(e.value)
                    }}
                    options={YearList}
                    optionLabel="name"
                    className=" md:w-14rem rounded-full"
                  />
                </div>
                <div className="flex items-center cursor-pointer">
                  <TabList>
                    <div className="flex items-end">
                      <Tab>
                        <div
                          className={`text-[14px] xl:text-[0.729vw] border py-[13px] rounded-l-[60px] xl:py-[0.677vw] px-[20px] xl:px-[1.042vw]
                 ${activeTab == 0
                              ? "bg-[#0F1F38] text-white"
                              : "bg-[#F5F6F7] border-[#9CA3AF] text-[#9CA1AB]"
                            }`}
                        >
                          Calendar
                        </div>
                      </Tab>
                      <Tab>
                        <div
                          className={`text-[14px] xl:text-[0.729vw] border py-[13px] rounded-r-[60px] xl:py-[0.677vw] px-[20px] xl:px-[1.042vw]
                 ${activeTab == 1
                              ? "bg-[#0F1F38] text-white"
                              : "bg-[#F5F6F7] border-[#9CA3AF] text-[#9CA1AB]"
                            }`}
                        >
                          List (Month)
                        </div>
                      </Tab>
                    </div>
                  </TabList>
                </div>
                <div
                  className="bg-[#A93439] text-[#FFF] text-[14px] xl:text-[0.729vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] 
                border rounded-[60px] flex items-center justify-center cursor-pointer"
                >
                  Subscribe
                </div>
              </div>
            </div>
            <div className="py-[12px] xl:py-[0.625vw] px-[16px] xl:px-[0.833vw] gap-[10px] xl:gap-[0.521vw] bg-[#FFF] border rounded flex items-center">
              <div className="gap-[8px] xl:gap-[0.417vw] p-[16px] xl:p-[0.833vw] flex loginInput items-center custCheckBox checkbox-height">
                <Checkbox
                  onChange={(e) => setAllEvents(e.checked)}
                  checked={allEvents}
                ></Checkbox>
                <div className="text-[#A93439] text-[13px] xl:text-[0.677vw] font-medium dark:text-[#AAA]">
                  All Events
                </div>
              </div>
              <div
                className="p-[16px] xl:p-[0.833vw] gap-[8px] xl:gap-[0.417vw] flex items-center border border-[#768FB5]
                bg-[#ECEFF3] rounded-full custCheckBox checkbox-height"
              >
                <Checkbox
                  onChange={(e) => setAdvisoryBodies(e.checked)}
                  checked={advisoryBodies}
                ></Checkbox>
                <div className="text-[13px] xl:text-[0.677vw] font-normal text-[#42536D]">
                  Advisory Bodies
                </div>
                <div>
                  <i className="austin-info text-[12px] xl:text-[0.625vw] text-[#9CA1AB]"></i>
                </div>
                <div>
                  <i className="austin-download text-[12px] xl:text-[0.625vw] text-[#9CA1AB]"></i>
                </div>
              </div>
              <div className="p-[16px] xl:p-[0.833vw] gap-[8px] xl:gap-[0.417vw] flex items-center border border-[#6C9B8F] bg-[#F2F7F6] rounded-full custCheckBox checkbox-height">
                <Checkbox
                  onChange={(e) => setBoardMeetings(e.checked)}
                  checked={boardMeetings}
                ></Checkbox>
                <div className="text-[13px] xl:text-[0.677vw] font-normal text-[#38635B]">
                  Board Meetings
                </div>
                <div>
                  <i className="austin-info text-[12px] xl:text-[0.625vw] text-[#9CA1AB]"></i>
                </div>
                <div>
                  <i className="austin-download text-[12px] xl:text-[0.625vw] text-[#9CA1AB]"></i>
                </div>
              </div>
              <div className="p-[16px] xl:p-[0.833vw] gap-[8px] xl:gap-[0.417vw] flex items-center border border-[#E0A689] bg-[#FCF7F4] rounded-full custCheckBox checkbox-height">
                <Checkbox
                  onChange={(e) => setDistrictwideEvents(e.checked)}
                  checked={districtwideEvents}
                ></Checkbox>
                <div className="text-[13px] xl:text-[0.677vw] font-normal text-[#BC6D46]">
                  Districtwide Events
                </div>
                <div>
                  <i className="austin-info text-[12px] xl:text-[0.625vw] text-[#9CA1AB]"></i>
                </div>
                <div>
                  <i className="austin-download text-[12px] xl:text-[0.625vw] text-[#9CA1AB]"></i>
                </div>
              </div>
              <div className="p-[16px] xl:p-[0.833vw] gap-[8px] xl:gap-[0.417vw] flex items-center border border-[#62789B] bg-[#E8EBF0] rounded-full custCheckBox checkbox-height">
                <Checkbox
                  onChange={(e) => setReligion(e.checked)}
                  checked={religion}
                ></Checkbox>
                <div className="text-[13px] xl:text-[0.677vw] font-normal text-[#1F3F71]">
                  Religious & Cultural
                </div>
                <div>
                  <i className="austin-info text-[12px] xl:text-[0.625vw] text-[#9CA1AB]"></i>
                </div>
                <div>
                  <i className="austin-download text-[12px] xl:text-[0.625vw] text-[#9CA1AB]"></i>
                </div>
              </div>
              <div className="p-[16px] xl:p-[0.833vw] gap-[8px] xl:gap-[0.417vw] flex items-center border border-[#8C629B] bg-[#EEE8F0] rounded-full custCheckBox checkbox-height">
                <Checkbox
                  onChange={(e) => setStaffRecognitions(e.checked)}
                  checked={staffRecognitions}
                ></Checkbox>
                <div className="text-[13px] xl:text-[0.677vw] font-normal text-[#571F71]">
                  Staff Recognitions
                </div>
                <div>
                  <i className="austin-info text-[12px] xl:text-[0.625vw] text-[#9CA1AB]"></i>
                </div>
                <div>
                  <i className="austin-download text-[12px] xl:text-[0.625vw] text-[#9CA1AB]"></i>
                </div>
              </div>
            </div>
          </div>
          <div>
            <TabPanel>
              <CalenderPage
                events={events}
                year={year}
                fetchsingleEvent={fetchsingleEvent}
                activeTab={activeTab}
              />
            </TabPanel>
            <TabPanel>
              <ListMonth
                events={events}
                year={year}
                fetchsingleEvent={fetchsingleEvent}
                activeTab={activeTab}
              />
            </TabPanel>
          </div>
        </div>
      </Tabs>
      {/* <Tabs selectedIndex={monthTab} onSelect={handleMonthClick}>
        <TabList>
          <div className="grid grid-cols-6">
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] border rounded-t-[8px] text-center
                     ${
                       monthTab == 0
                         ? "text-[#FFF] bg-[#0F1F38]"
                         : "text-[#9CA1AB] bg-[#F5F6F7]"
                     }`}
              >
                Jan / Feb
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] border rounded-t-[8px] text-center
                     ${
                       monthTab == 1
                         ? "text-[#FFF] bg-[#0F1F38]"
                         : "text-[#9CA1AB] bg-[#F5F6F7]"
                     }`}
              >
                Mar / Apr
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] border rounded-t-[8px] text-center
                     ${
                       monthTab == 2
                         ? "text-[#FFF] bg-[#0F1F38]"
                         : "text-[#9CA1AB] bg-[#F5F6F7]"
                     }`}
              >
                May / Jun
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] border rounded-t-[8px] text-center
                     ${
                       monthTab == 3
                         ? "text-[#FFF] bg-[#0F1F38]"
                         : "text-[#9CA1AB] bg-[#F5F6F7]"
                     }`}
              >
                Jul / Aug
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] border rounded-t-[8px] text-center
                     ${
                       monthTab == 4
                         ? "text-[#FFF] bg-[#0F1F38]"
                         : "text-[#9CA1AB] bg-[#F5F6F7]"
                     }`}
              >
                Sep / Oct
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] border rounded-t-[8px] text-center
                     ${
                       monthTab == 5
                         ? "text-[#FFF] bg-[#0F1F38]"
                         : "text-[#9CA1AB] bg-[#F5F6F7]"
                     }`}
              >
                Nov / Dec
              </div>
            </Tab>
          </div>
        </TabList>
      </Tabs> */}

      <ViewEvent
        visible={ViewEventpopup}
        onHides={closeViewEventPopup}
        eventDetails={eventDetails}
      />

    </div>
  );
}
