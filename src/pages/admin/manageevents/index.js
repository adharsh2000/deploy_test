import React, { useState } from "react";
import Link from "next/link";
import AdminLayout from '@/components/adminlayout/layout';
import FilterComponent from "@/components/filtercomponent";
import { InputText } from "primereact/inputtext";
import Addnewevent from "@/components/popup/addnewevent";
import ViewEvent from "@/components/popup/viewevent"
import { Dropdown } from "primereact/dropdown";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Checkbox } from "primereact/checkbox";
import CalenderMonth from "./calendermonth";
import CalenderListMonth from "./calendarlistmonth";
import CalenderWeek from "./calendarweek";
import fetchAPI from "@/service/api/fetchAPI";
import { useEffect } from "react";
import { useRef } from "react";
import { Toast } from 'primereact/toast';
import moment from "moment";

const YearList = [
  { name: "2024", code: "NY" },
  { name: "2025", code: "RM" },
];

export default function Index() {
    const toast = useRef(null);
    const [year, setYear] = useState(YearList[0]);
    const [searchValue, setSearchValue] = useState('')
    const [activeTab, setActiveTab] = useState(0);    
    //month filter
    const [activeMonth, setActiveMonth] = useState(0)

    //event Data
    const [events, setEvents] = useState([])

    //single event Data
    const [eventDetails, setEventDetails] = useState({})

    //Edit Event 
    const [isEdit, setIsEdit] = useState(false)

    const handleTabClick = (index) => {
      fetchAllEvent(year,0)
      setActiveTab(index);
      setActiveMonth(0)
    };
    
    const [Addneweventpopup, setAddneweventpopup] = useState(false);
    const [ViewEventpopup, setViewEventpopup] = useState(false);
    const [allEvents, setAllEvents] = useState(false);
    const [boardMeetings, setBoardMeetings] = useState(false);
    const [districtwideEvents, setDistrictwideEvents] = useState(false);
    const [religion, setReligion] = useState(false);
    const [staffRecognitions, setStaffRecognitions] = useState(false);
    const [advisoryBodies, setAdvisoryBodies] = useState(false);

    const handleSearch = (event) => {
      const {value} = event.target;
      debounce(() => fetchAllEvent(year,activeMonth,value),300)
      setSearchValue(value)

    }

    let debounceTimer = useRef(null)
    const debounce = (func, delay) => {
      if(debounceTimer.current){
        clearTimeout(debounceTimer.current);
      }
      debounceTimer.current = setTimeout(func, delay);
    }

    const fetchAllEvent = async (newYear, newMonth, search) => {
      let payload = {
        year: year.name,
        search: search != null && search != undefined ? search : searchValue,
        date: '',
        month: 1
      }

      if(newYear){
        payload = {...payload, year: newYear.name}
      }
      if(newMonth){
        payload = {...payload, month: newMonth + 1}
      }


      try{
        
        const response = await fetchAPI('/event/list', 'POST', payload, 'application/json')
        if(response && response.rows.length > 0){
          const updatedResponse = response.rows && response.rows.length > 0 ? response.rows.map((item) => {
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
        }else{
          toast?.current.show({severity:'info', detail:'No data found', life: 3000})
          setEvents([])
        }

      }catch(error){
        toast?.current.show({severity:'error', detail:'Something went worng', life: 3000})
      }
    }

    const fetchsingleEvent = async (id) => {
      try{
        const response = await fetchAPI(`/event/${id}`, 'GET', {}, 'application/json')
        if(response){
          setEventDetails(response)
          setViewEventpopup(true)
        }

      }catch(error){

      }
    }

    const handleYear = (e) => {
      setYear(e.value)
      setActiveMonth(0)
      fetchAllEvent(e.value)
    }

    useEffect(() => {
      fetchAllEvent()
    },[])

    const handleActiveMonthTab = (monthTag) => {
      fetchAllEvent(year,monthTag)
      setActiveMonth(monthTag)
    }

    const closeAddEventPopup = (isNewEventAdded) => {
      if(isNewEventAdded){
        fetchAllEvent(year,activeMonth)
      }
      setIsEdit(false)
      setEventDetails({})
      setAddneweventpopup(false)

    }

    const closeViewEventPopup = (isUpdate) => {
      if(isUpdate){
        fetchAllEvent(year)
      }
      setViewEventpopup(false)
    }

    const handleEditEventDetails = (id) => {
      setAddneweventpopup(true)
      setIsEdit(true)
      setViewEventpopup(false)
    }

    return (
        <>
            <AdminLayout pageTitle="Manage Events">
            <Toast ref={toast}></Toast>              <div className="xl:pt-[0.833vw] pt-4">
                  <div className="custom_search_input">
                      <span className="p-input-icon-right">
                          <i className="pi pi-search" />
                          <InputText placeholder="Quick Search" onChange={handleSearch} className="placeholder:text-[#9CA1AB] placeholder:font-[300] xl:text-[0.833vw] text-[16px]  xl:w-[15.625vw] w-[200px]" />
                      </span>
                  </div>
                  <div className="xl:pt-[0.833vw] pt-4">
                      <FilterComponent />
                  </div>
                  <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
                    <div className="xl:mt-[2.083vw] mt-[35px]">
                        <div className="flex justify-between items-center text-[#374151] xl:py-[0.625vw] py-[12px]">
                            <div className="xl:text-[1.563vw] text-[30px] text-[#374151] font-bold xl:leading-[1.771vw] leading-9">Events</div>
                            <div className="flex items-center gap-[8px] xl:gap-[0.417vw]">
                                <div className="event-dropdown">
                                    <Dropdown
                                        placeholder="2023"
                                        value={year}
                                        onChange={(e) => handleYear(e)}
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
                                                  Month
                                              </div>
                                          </Tab>
                                          <Tab>
                                              <div
                                                  className={`text-[14px] xl:text-[0.729vw] border py-[13px] xl:py-[0.677vw] px-[20px] xl:px-[1.042vw]
                                                      ${activeTab == 1
                                                          ? "bg-[#0F1F38] text-white"
                                                          : "bg-[#F5F6F7] border-[#9CA3AF] text-[#9CA1AB]"
                                                      }`}
                                              >
                                                  Week
                                              </div>
                                          </Tab>
                                          <Tab>
                                              <div
                                                  className={`text-[14px] xl:text-[0.729vw] border py-[13px] rounded-r-[60px] xl:py-[0.677vw] px-[20px] xl:px-[1.042vw]
                                                      ${activeTab == 2
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
                                <div><Link href={'javascript:void(0)'} className="bg-[#A93439] text-[#FFF] text-[14px] xl:text-[0.729vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] 
                                    border rounded-[60px] flex items-center justify-center cursor-pointer" onClick={() => setAddneweventpopup(true)}>Add New Event</Link></div>
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
                    
                    {/* <div>
                        <Fullcalendar />
                    </div> */}
                    
                    <div className="xl:mt-[2.083vw] mt-[35px]">
                      <TabPanel>
                        <CalenderMonth year={year} activeTab={activeMonth} setActiveTab={handleActiveMonthTab} events={events} setEvents={setEvents} fetchsingleEvent={fetchsingleEvent}/>
                      </TabPanel>
                      <TabPanel>
                        <CalenderWeek year={year} activeTab={activeMonth} setActiveTab={handleActiveMonthTab} events={events} setEvents={setEvents} fetchsingleEvent={fetchsingleEvent}/>
                      </TabPanel>
                      <TabPanel>
                        <CalenderListMonth year={year} activeTab={activeMonth} setActiveTab={handleActiveMonthTab} events={events} setEvents={setEvents} fetchsingleEvent={fetchsingleEvent}/>
                      </TabPanel>
                    </div>
                  </Tabs>
              </div>
            </AdminLayout>

            <Addnewevent
                visible={Addneweventpopup}
                onHides={closeAddEventPopup}
                eventDetails={eventDetails}
                isEdit={isEdit}
            />
            <ViewEvent
                visible={ViewEventpopup}
                onHides={closeViewEventPopup}
                eventDetails={eventDetails}
                editDetails={handleEditEventDetails}
            />
        </>
    );
}
