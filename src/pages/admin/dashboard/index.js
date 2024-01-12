import AdminLayout from "@/components/adminlayout/layout";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { SplitButton } from "primereact/splitbutton";
import LatestTopics from "@/components/admin/dashboard/pinneiitems";
import Link from "next/link";
import LatestFiles from "@/components/admin/dashboard/latestfiles";
import ChartWrapper from "@/components/chartwrapper";
import { PieChart } from "@/components/allchart/PieChart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddNewUser from "@/components/admin/popup/addNewUser";
import Addnewevent from "@/components/popup/addnewevent";
import AddNewFile from "@/components/admin/popup/addnewfilepopup";
import AddMessages from "@/components/admin/popup/addmessages";
import AisdTv from "@/pages/landing/aisdtvhome";
import Aisdtvbanner from "@/components/website/aisdtv/asidtvbanner";
import CalendarEvents from "@/pages/landing/calendarevents";
import CalendarEventsAdmin from "./calendarevents";

export default function Index() {
  const [addNewUser, setAddNewUser] = useState(false);
  const [Addneweventpopup, setAddneweventpopup] = useState(false);
  const [addNewFile, setAddNewFile] = useState(false);
  const [addMessageBoard, setAddMessageBoardMessageBoard] = useState(false);

  const items = [
    {
      label: "Post",
      command: (e) => {
        setAddMessageBoardMessageBoard(true);
      },
    },
    {
      label: "Event",
      command: (e) => {
        setAddneweventpopup(true);
      },
    },
    {
      label: "File",
      command: (e) => {
        setAddNewFile(true);
      },
    },
    {
      label: "User",
      command: (e) => {
        setAddNewUser(true);
      },
    },
  ];
  const filesdata = [
    {
      filetype: "audio.svg",
      title: "BUL-089013.0 NEW..",
      createddate: "3/10/2018",
      releasedate: "5/10/2018",
    },
    {
      filetype: "gallery.svg",
      title: "BUL-089013.0 NEW..",
      createddate: "3/10/2018",
      releasedate: "5/10/2018",
    },
    {
      filetype: "video.svg",
      title: "BUL-089013.0 NEW..",
      createddate: "3/10/2018",
      releasedate: "5/10/2018",
    },
    {
      filetype: "file.svg",
      title: "BUL-089013.0 NEW..",
      createddate: "3/10/2018",
      releasedate: "5/10/2018",
    },
  ];
  const DocumentsOwnership = [
    { value: 78, name: "Department 1" },
    { value: 12, name: "Department 2" },
    { value: 10, name: "Department 3" },
  ];

  return (
    <>
      <AdminLayout leftPadding={true} pageTitle="Dashboard" pageName="Admin">
        <div className="pl-[129px] pr-[32px] xl:pr-[1.667vw] xl:py-[1.146vw] py-[22px] mb-[18px] xl:mb-[0.938vw] bg-[#F5F6F7]">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="custom_search_input">
                <span className="p-input-icon-right">
                  <i className="pi pi-search" />
                  <InputText
                    placeholder="Quick Search"
                    className="placeholder:text-[#9CA1AB] placeholder:font-[300] xl:text-[0.833vw] text-[16px]  xl:w-[15.625vw] w-[200px]"
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 custom_splitbutton">
              {/* <div  className="bg-[#A93439] text-[#FFFFFF] font-normal text-[14px] xl:text-[0.729vw] px-[12px] xl:px-[0.625vw] py-[10px] xl:py-[0.521vw] rounded-lg cursor-pointer">
                                New File
                            </div> */}
              <SplitButton label="New" model={items} />
            </div>
          </div>
        </div>

        <div className="pl-[129px] pr-[32px] xl:pr-[1.667vw]">
          <LatestTopics />

          <div className="mt-[24px] xl:mt-[1.25vw]">
            <div className="flex grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12 gap-[20px] xl:gap-[0.938vw]">
              <div className="col-span-4">
                <div className="bg-white rounded-[24px] xl:rounded-[1.250vw] py-[24px] xl:py-[1.250vw] px-[28px] xl:px-[1.458vw]">
                  <div className="flex justify-between flex-wrap items-center ">
                    <div>
                      <div className="text-[#374151] text-[15px] xl:text-[0.833vw] leading-[1.2]">
                        eLibrary
                      </div>
                      <div className="text-[#374151] text-[30px] xl:text-[1.667vw] leading-[1.2] ">
                        Latest <span className="font-extrabold">Files</span>
                      </div>
                    </div>
                    <div className="">
                      <Link
                        href={"/admin/elibrary"}
                        className="hover:bg-[#982E33] hover:text-[#fff] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-[#762428]  border border-[#982E33]"
                      >
                        eLibrary Admin{" "}
                        <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-[38px] xl:mt-[1.979vw] mb-[30px] xl:mt-[1.563vw]">
                    <LatestFiles data={filesdata} />
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="bg-white xl:rounded-[0.833vw] rounded-2xl h-full">
                  <ChartWrapper
                    title={"Documents Ownership"}
                    subtitle={"Departments"}
                    ExportIcon={true}
                    data={
                      <div className="w-full xl:px-[1.25vw] px-[15px] xl:py-[0.833vw] py-[15px] ">
                        <div>
                          <Tabs>
                            <div className="dashboard_custom_tab">
                              <div className="xl:px-[0.833vw] px-3 xl:py-[0.625vw] py-[12px] flex items-center gap-4 border-b border-[#E5E7EB]">
                                <div className="text-[#374151] xl:text-[0.833vw] text-base font-medium">
                                  Specific Owners
                                </div>
                                <div className="custm-tablist">
                                  <TabList>
                                    <Tab>Top</Tab>
                                    <Tab>Bottom</Tab>
                                  </TabList>
                                </div>
                              </div>
                              <div>
                                <TabPanel>
                                  <div className="divide-y divide-[#E5E7EB]">
                                    <div className="w-full xl:h-[8.892vw] h-[150px] py-3">
                                      <PieChart
                                        legend={{
                                          show: true,
                                          bottom: 0,
                                          left: 0,
                                          textStyle: {
                                            color: "#4B586E",
                                            fontSize: 10,
                                            overflow: "breakAll",
                                          },
                                          itemWidth: 20,
                                          itemHeight: 4,
                                          itemStyle: {
                                            borderCap: "round",
                                            borderJoin: "round",
                                            borderMiterLimit: 23,
                                          },
                                          data: [
                                            "Department 1",
                                            "Department 2",
                                            "Department 3",
                                          ],
                                        }}
                                        radius={["30%", "80%"]}
                                        center={["50%", "40%"]}
                                        color={[
                                          "#1B3865",
                                          "#8F9FB8",
                                          "#62789B",
                                        ]}
                                        data={DocumentsOwnership}
                                        borderRadius={6}
                                        fontSize={9}
                                      />
                                    </div>
                                    {/**col**/}
                                    <div className="xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3">
                                      <div>
                                        <div className="w-2 h-2 bg-[#1B3865] rounded-sm"></div>
                                      </div>
                                      <div className="flex items-center justify-between w-full">
                                        <div>
                                          <div className="xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5">
                                            Jhon Wick
                                          </div>
                                          <div className="xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light">
                                            Department 1
                                          </div>
                                        </div>
                                        <div className="text-[#4B586E] xl:text-[0.625vw] text-xs font-light">
                                          134
                                        </div>
                                      </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div className="xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3">
                                      <div>
                                        <div className="w-2 h-2 bg-[#1B3865] rounded-sm"></div>
                                      </div>
                                      <div className="flex items-center justify-between w-full">
                                        <div>
                                          <div className="xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5">
                                            Martha Sthuart
                                          </div>
                                          <div className="xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light">
                                            Department 1
                                          </div>
                                        </div>
                                        <div className="text-[#4B586E] xl:text-[0.625vw] text-xs font-light">
                                          130
                                        </div>
                                      </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div className="xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3">
                                      <div>
                                        <div className="w-2 h-2 bg-[#62789B] rounded-sm"></div>
                                      </div>
                                      <div className="flex items-center justify-between w-full">
                                        <div>
                                          <div className="xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5">
                                            Martha Sthuart
                                          </div>
                                          <div className="xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light">
                                            Department 1
                                          </div>
                                        </div>
                                        <div className="text-[#4B586E] xl:text-[0.625vw] text-xs font-light">
                                          98
                                        </div>
                                      </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div className="xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3">
                                      <div>
                                        <div className="w-2 h-2 bg-[#1B3865] rounded-sm"></div>
                                      </div>
                                      <div className="flex items-center justify-between w-full">
                                        <div>
                                          <div className="xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5">
                                            Martha Sthuart
                                          </div>
                                          <div className="xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light">
                                            Department 1
                                          </div>
                                        </div>
                                        <div className="text-[#4B586E] xl:text-[0.625vw] text-xs font-light">
                                          98
                                        </div>
                                      </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div className="xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3">
                                      <div>
                                        <div className="w-2 h-2 bg-[#BECDE3] rounded-sm"></div>
                                      </div>
                                      <div className="flex items-center justify-between w-full">
                                        <div>
                                          <div className="xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5">
                                            Martha Sthuart
                                          </div>
                                          <div className="xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light">
                                            Department 1
                                          </div>
                                        </div>
                                        <div className="text-[#4B586E] xl:text-[0.625vw] text-xs font-light">
                                          89
                                        </div>
                                      </div>
                                    </div>
                                    {/**col**/}
                                  </div>
                                </TabPanel>
                                <TabPanel>
                                  <div className="divide-y divide-[#E5E7EB]">
                                    {/**col**/}
                                    <div className="xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3">
                                      <div>
                                        <div className="w-2 h-2 bg-[#1B3865] rounded-sm"></div>
                                      </div>
                                      <div className="flex items-center justify-between w-full">
                                        <div>
                                          <div className="xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5">
                                            Jhon Wick
                                          </div>
                                          <div className="xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light">
                                            Department 1
                                          </div>
                                        </div>
                                        <div className="text-[#4B586E] xl:text-[0.625vw] text-xs font-light">
                                          134
                                        </div>
                                      </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div className="xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3">
                                      <div>
                                        <div className="w-2 h-2 bg-[#1B3865] rounded-sm"></div>
                                      </div>
                                      <div className="flex items-center justify-between w-full">
                                        <div>
                                          <div className="xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5">
                                            Martha Sthuart
                                          </div>
                                          <div className="xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light">
                                            Department 1
                                          </div>
                                        </div>
                                        <div className="text-[#4B586E] xl:text-[0.625vw] text-xs font-light">
                                          130
                                        </div>
                                      </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div className="xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3">
                                      <div>
                                        <div className="w-2 h-2 bg-[#62789B] rounded-sm"></div>
                                      </div>
                                      <div className="flex items-center justify-between w-full">
                                        <div>
                                          <div className="xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5">
                                            Martha Sthuart
                                          </div>
                                          <div className="xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light">
                                            Department 1
                                          </div>
                                        </div>
                                        <div className="text-[#4B586E] xl:text-[0.625vw] text-xs font-light">
                                          98
                                        </div>
                                      </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div className="xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3">
                                      <div>
                                        <div className="w-2 h-2 bg-[#1B3865] rounded-sm"></div>
                                      </div>
                                      <div className="flex items-center justify-between w-full">
                                        <div>
                                          <div className="xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5">
                                            Martha Sthuart
                                          </div>
                                          <div className="xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light">
                                            Department 1
                                          </div>
                                        </div>
                                        <div className="text-[#4B586E] xl:text-[0.625vw] text-xs font-light">
                                          98
                                        </div>
                                      </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div className="xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3">
                                      <div>
                                        <div className="w-2 h-2 bg-[#BECDE3] rounded-sm"></div>
                                      </div>
                                      <div className="flex items-center justify-between w-full">
                                        <div>
                                          <div className="xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5">
                                            Martha Sthuart
                                          </div>
                                          <div className="xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light">
                                            Department 1
                                          </div>
                                        </div>
                                        <div className="text-[#4B586E] xl:text-[0.625vw] text-xs font-light">
                                          89
                                        </div>
                                      </div>
                                    </div>
                                    {/**col**/}
                                  </div>
                                </TabPanel>
                              </div>
                            </div>
                          </Tabs>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
              <div className="col-span-5">
                <div className="bg-white rounded-[24px] xl:rounded-[1.250vw] py-[24px] xl:py-[1.250vw] px-[28px] xl:px-[1.458vw]">
                  <div className="flex justify-between flex-wrap items-center">
                    <div>
                      <div className="text-[#374151] text-[15px] xl:text-[0.833vw] leading-[1.2]">
                        events
                      </div>
                      <div className="text-[#374151] text-[30px] xl:text-[1.667vw] leading-[1.2] ">
                        Highlighted{" "}
                        <span className="font-extrabold">Events</span>
                      </div>
                    </div>
                    <div className="">
                      <Link
                        href={"/admin/manageevents"}
                        className="hover:bg-[#982E33] hover:text-[#fff] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-[#762428]  border border-[#982E33]"
                      >
                        Events Admin{" "}
                        <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-[22px xl:mt-[1.354vw]">
                  <CalendarEventsAdmin/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AddNewUser visible={addNewUser} onHides={() => setAddNewUser(false)} />

        <Addnewevent
          visible={Addneweventpopup}
          onHides={() => setAddneweventpopup(false)}
        />

        <AddNewFile visible={addNewFile} onHides={() => setAddNewFile(false)} />

        <AddMessages
          visible={addMessageBoard}
          onHides={() => setAddMessageBoardMessageBoard(false)}
        />
      </AdminLayout>
    </>
  );
}
