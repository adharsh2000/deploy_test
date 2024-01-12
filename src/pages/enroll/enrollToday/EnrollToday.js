import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

// const websiteStylesheets = [
//   "/styles/website/vkstyle.css",
//   "/styles/website/banner.css",
//   "/styles/website/astyle.css",
//   "/styles/website/nstyle.css",
//   "/styles/website/skstyle.css",
//   "/styles/website/systyle.css",
//   "/styles/website/vsstyle.css",
//   "/styles/website/enroll.css",
// ];

const EnrollToday = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [tabsecond, setTabsecond] = useState(0);

  const handleTabSecond = (index) => {
    setTabsecond(index);
  };

  const [tabThree, setTabThree] = useState(0);
  const handleTabClick3 = (index) => {
    setTabThree(index);
  };
  return (
    <div className="mb-[-150px]">
      <div className="enroll-bg flex items-center flex-col py-20 ">
        {/* <Head>
          <link rel="icon" href="/favicon.ico" />
          {router.pathname.startsWith("/website") &&
            websiteStylesheets.map((stylesheet, index) => (
              <link key={index} rel="stylesheet" href={stylesheet} />
            ))}
        </Head> */}

        <div className="flex w-11/12 flex-col justify-center items-center gap-5">
          <h1 className="text-5xl text-white">
            Enroll <span className="font-bold">today</span>
          </h1>
          <p className="text-2xl font-light text-white opacity-[0.6] text-center">
            <span className="font-medium">We’re glad to have you here!</span> Let us know what you need and we can
            guide you through the enrollment process
          </p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1352"
              height="2"
              viewBox="0 0 1352 2"
              fill="none"
            >
              <path
                opacity="0.5"
                d="M0.53125 1H1351.47"
                stroke="url(#paint0_linear_1522_30825)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1522_30825"
                  x1="1352.14"
                  y1="1.01146"
                  x2="0.53125"
                  y2="0.990977"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.29" />
                  <stop offset="0.484164" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex w-11/12 mt-14 flex-col justify-center items-center gap-9">
          <h1 className="text-3xl text-white">
            What better describe your current status?
          </h1>

          <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
            <TabList className={`flex justify-center gap-3`}>
              <Tab>
                <div
                  className={`text-2xl font-medium py-4 px-6 text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${
                       activeTab == 0
                         ? "text-[#E5E7EB] bg-[#A93439]"
                         : "border border-solid border-[#4B5563]"
                     }`}
                >
                  Register for a Neighborhood School
                </div>
              </Tab>
              <Tab>
                <div
                  className={`text-2xl font-medium py-4 px-6 text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${
                       activeTab == 1
                         ? "bg-[#A93439]"
                         : "border border-solid border-[#4B5563]"
                     }`}
                >
                  Transfer to other AISD School
                </div>
              </Tab>
              <Tab>
                <div
                  className={`text-2xl font-medium py-4 px-6 text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${
                       activeTab == 2
                         ? "bg-[#A93439]"
                         : "border border-solid border-[#4B5563]"
                     }`}
                >
                  Out-of-District Transfer
                </div>
              </Tab>
            </TabList>
            <div>
              <TabPanel>
                <div className="mt-12 flex flex-col gap-9">
                  <p className="text-3xl text-center font-bold text-white">
                    Are you looking for Pre-K or K-12?
                  </p>
                  <Tabs selectedIndex={tabsecond} onSelect={handleTabSecond}>
                    <TabList className={`flex justify-center gap-3`}>
                      <Tab>
                        <div
                          className={`text-2xl font-medium py-4 px-6 text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${
                       tabsecond == 0
                         ? "text-[#E5E7EB] bg-[#A93439]"
                         : "border border-solid border-[#4B5563]"
                     }`}
                        >
                          Pre-K
                        </div>
                      </Tab>
                      <Tab>
                        <div
                          className={`text-2xl font-medium py-4 px-6 text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${
                       tabsecond == 1
                         ? "bg-[#A93439]"
                         : "border border-solid border-[#4B5563]"
                     }`}
                        >
                          K-12
                        </div>
                      </Tab>
                    </TabList>
                    <div>
                      <TabPanel>
                        <div className="mt-12 flex flex-col items-center">
                          <img
                            src="/assets/website/arrow-right.svg"
                            alt="Banner"
                          />
                        </div>
                      </TabPanel>

                      <TabPanel>
                        <div className="mt-12 flex flex-col items-center">
                          <img
                            src="/assets/website/arrow-right.svg"
                            alt="Banner"
                          />
                          <h3 className="text-3xl font-bold text-white mt-12">
                            Steps to apply to K-12:
                          </h3>

                          <div className="flex mt-10 flex-wrap items-center justify-center gap-6">
                            <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                              <span className="w-10 h-10 flex items-center text-xl text-white justify-center bg-[#263040] absolute -top-3 rounded-full right-3">
                                1
                              </span>
                              <img
                                src="/assets/website/monitor.svg"
                                alt="monitor"
                              />
                              <p className="text-base text-white text-center">
                                An{" "}
                                <span className="text-[#A93439] underline">
                                  online transfer application
                                </span>{" "}
                                can be submitted at that time
                              </p>
                            </div>
                            <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                              <span className="w-10 h-10 text-xl text-white flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3">
                                2
                              </span>
                              <img
                                src="/assets/website/sms.svg"
                                alt="monitor"
                              />
                              <p className="text-base text-white text-center">
                                An{" "}
                                <span className="text-[#A93439] underline">
                                  online transfer application
                                </span>{" "}
                                can be submitted at that time
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </div>
                  </Tabs>
                </div>
              </TabPanel>

              <TabPanel>
                <p className="text-3xl text-center text-white font-bold mt-12">
                  Are you looking for Pre-K or K-12?
                </p>
                <Tabs selectedIndex={tabThree} onSelect={handleTabClick3}>
                  <TabList className={`flex justify-center gap-3 mt-9`}>
                    <Tab>
                      <div
                        className={`text-2xl font-medium py-4 px-6 text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${
                       tabThree == 0
                         ? "text-[#E5E7EB] bg-[#A93439]"
                         : "border border-solid border-[#4B5563]"
                     }`}
                      >
                        Pre-K
                      </div>
                    </Tab>
                    <Tab>
                      <div
                        className={`text-2xl font-medium py-4 px-6 text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${
                       tabThree == 1
                         ? "bg-[#A93439]"
                         : "border border-solid border-[#4B5563]"
                     }`}
                      >
                        K-12
                      </div>
                    </Tab>
                  </TabList>
                  <div>
                    <TabPanel>
                      <div className="mt-12 flex flex-col items-center">
                        <img
                          src="/assets/website/arrow-right.svg"
                          alt="Banner"
                        />
                        <h3 className="text-3xl font-bold text-white mt-12">
                          Steps to transfer to Pre-K:
                        </h3>

                        <div className="flex mt-10 flex-wrap items-center justify-center gap-6">
                          <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                            <span className="w-10 h-10 flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-white text-xl">
                              1
                            </span>
                            <img
                              src="/assets/website/monitor.svg"
                              alt="monitor"
                            />
                            <p className="text-base text-white text-center">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                            <span className="w-10 h-10 flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-xl text-white">
                              1
                            </span>
                            <img
                              src="/assets/website/global-search.svg"
                              alt="monitor"
                            />
                            <p className="text-base text-white text-center">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                            <span className="w-10 h-10 flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-center text-white">
                              1
                            </span>
                            <img
                              src="/assets/website/translate.svg"
                              alt="monitor"
                            />
                            <p className="text-base text-white text-center">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                            <span className="w-10 h-10 flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-white text-xl">
                              1
                            </span>
                            <img
                              src="/assets/website/document-normal.svg"
                              alt="monitor"
                            />
                            <p className="text-base text-white text-center">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                            <span className="w-10 h-10 flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-xl text-white">
                              1
                            </span>
                            <img
                              src="/assets/website/tick-square.svg"
                              alt="monitor"
                            />
                            <p className="text-base text-white text-center">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="mt-12 flex flex-col items-center">
                        <img
                          src="/assets/website/arrow-right.svg"
                          alt="Banner"
                        />
                        <h3 className="text-3xl font-bold text-white mt-12">
                          Steps to apply to K-12:
                        </h3>

                        <div className="flex mt-10 flex-wrap items-center justify-center gap-6">
                          <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                            <span className="w-10 h-10 flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3">
                              1
                            </span>
                            <img
                              src="/assets/website/monitor.svg"
                              alt="monitor"
                            />
                            <p className="text-base text-white">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                            <span className="w-10 h-10 flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3">
                              1
                            </span>
                            <img src="/assets/website/sms.svg" alt="monitor" />
                            <p className="text-base text-white">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                            <span className="w-10 h-10 flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3">
                              1
                            </span>
                            <img
                              src="/assets/website/translate.svg"
                              alt="monitor"
                            />
                            <p className="text-base text-white">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                            <span className="w-10 h-10 flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3">
                              1
                            </span>
                            <img
                              src="/assets/website/tick-square.svg"
                              alt="monitor"
                            />
                            <p className="text-base text-white">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 items-center relative w-72 p-5 bg-[#111928] rounded-3xl">
                            <span className="w-10 h-10 flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3">
                              1
                            </span>
                            <img
                              src="/assets/website/sms-tracking.svg"
                              alt="monitor"
                            />
                            <p className="text-base text-white">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </Tabs>
              </TabPanel>

              <TabPanel>
                <div className="full-calendar-sec py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                  mndmsndmsdnmm
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default EnrollToday;
