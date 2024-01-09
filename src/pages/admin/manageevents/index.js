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



export default function Index() {
    const [year, setYear] = useState(null);
    
    const [activeTab, setActiveTab] = useState(0);    
    const handleTabClick = (index) => {
      setActiveTab(index);
    };

    const YearList = [
        { name: "2023", code: "NY" },
        { name: "2024", code: "RM" },
    ];
    const [Addneweventpopup, setAddneweventpopup] = useState(false);
    const [ViewEventpopup, setViewEventpopup] = useState(false);
    const [allEvents, setAllEvents] = useState(false);
    const [boardMeetings, setBoardMeetings] = useState(false);
    const [districtwideEvents, setDistrictwideEvents] = useState(false);
    const [religion, setReligion] = useState(false);
    const [staffRecognitions, setStaffRecognitions] = useState(false);
    const [advisoryBodies, setAdvisoryBodies] = useState(false);

    return (
        <>
            <AdminLayout pageTitle="Manage Events">
              <div className="xl:pt-[0.833vw] pt-4">
                  <div className="custom_search_input">
                      <span className="p-input-icon-right">
                          <i className="pi pi-search" />
                          <InputText placeholder="Quick Search" className="placeholder:text-[#9CA1AB] placeholder:font-[300] xl:text-[0.833vw] text-[16px]  xl:w-[15.625vw] w-[200px]" />
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
                                        onChange={(e) => setYear(e.value)}
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
                        <CalenderMonth />
                      </TabPanel>
                      <TabPanel>
                        <CalenderWeek />
                      </TabPanel>
                      <TabPanel>
                        <CalenderListMonth />
                      </TabPanel>
                    </div>
                  </Tabs>
              </div>
            </AdminLayout>

            <Addnewevent
                visible={Addneweventpopup}
                onHides={() => setAddneweventpopup(false)}
            />
            <ViewEvent
                visible={ViewEventpopup}
                onHides={() => setViewEventpopup(false)}
            />
        </>
    );
}
