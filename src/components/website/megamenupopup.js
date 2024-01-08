import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { Carousel } from "primereact/carousel";
import { ScrollPanel } from "primereact/scrollpanel";
import { CarouselService } from "@/service/Carousel";
import ReactPlayer from "react-player";
import { Montserrat } from "@next/font/google";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const MegaMenuPopup = (props) => {
  
  

  return (
    <>
      <div>
        <Sidebar
          visible={props.visible}
          position="top"
          style={{ background: "#FFF", borderRadius: "8px 8px 0 0" }}
          className="megamenu width1690 top-[6vw]"
          onHide={() => props.onHides(false)}
          blockScroll={true}
        >
           <div className=" absolute -top-[40px] justify-center flex w-full">
              <Link
                href={""}
                onClick={() => {
                  props.onHides(false);
                }}
                className="flex justify-center items-center text-white text-[14px] bg-[#982E33]  rounded-md h-[28px] xl:h-[1.563vw] p-2 "
              >
                <i className="austin-close text-[15px]"></i>
              </Link>
            </div>
          <div className="xl:p-[1.823vw] px-[30px]">
           
            <div>
             <div className="grid grid-cols-12 gap-[24px] xl:gap-[2.083vw]">
              <div className="xl:col-span-3 col-span-6">
                  <div className="bg-[#0F1F38] rounded-lg xl:p-[0.833vw] p-[16px] h-full relative">
                    <div className="xl:p-[1.563vw] p-[20px] border-4 border-[#768FB5] rounded-lg flex flex-col h-full z-[999]">
                      <h2 className="text-[#fff] text-[40px] xl:text-[2.448vw] font-black text-center leading-normal xl:mt-[2.167vw] mt-[60px]">HAVE IT ALL</h2> 
                       <h6 className="xl:mt-[1.146vw] mt-[20px] text-[#D4999C] text-[41px] xl:text-[2.135vw] font-medium text-center">
                       in Austin ISD!
                       </h6>

                       <div className="xl:mt-[3.604vw] mt-[50px] w-full xl:mb-[3.646vw] mb-[50px]">
                       <Link href={""} className="bg-[#A93439] text-[#fff] w-full flex justify-center  rounded-full py-3 text-[24px] xl:text-[1vw] font-medium text-center" >
                          Enroll today
                       </Link>
                       </div>
                       <div className="magamenuImg">
                          <Image src="/assets/images/megamenuimg-1.png" width="364" height="218" /> 
                       </div>
                    </div>
                    
                  </div>
                 
              </div>
              <div className="xl:col-span-9 col-span-12">
                  <div className="menutoplink flex flex-wrap items-center justify-between xl:gap-[2.083vw] gap-[30px] text-[#A93439] text-[14px] xl:text-[0.938vw] font-medium border-b border-[#BECDE3] xl:pb-[1.25vw] pb-[24px]">
                    <ul className="list-none inline-flex xl:gap-[1.467vw] gap-[30px]">
                    <li>
                    <Link href={""}> Students</Link>
                    </li>
                    <li>
                    <Link href={""}>Families</Link>
                    </li>
                    <li>
                    <Link href={""}>   Schools</Link>
                    </li>
                    <li>
                    <Link href={""}>   Programs</Link>
                    </li>
                    <li>
                    <Link href={""}>   eLibrary</Link>
                    </li>
                    <li>
                    <Link href={""}>   News</Link>
                    </li>
                    <li>
                    <Link href={""}>  Directory</Link>
                    </li>
                    <li>
                    <Link href={""}>   Calendar</Link>
                    </li>
                    <li>
                    <Link href={""}>  AISD Portal</Link>
                    </li>
                    </ul>
                    <div className="flex gap-3">
                    <Link href={""} className="bg-[#1F2A37] text-[#fff] rounded-lg xl:px-[0.833vw] px-[16px] xl:py-[0.417vw] py-[8px] text-[16px] xl:text-[0.833vw] font-medium text-center" >
                         Lets Talk!
                       </Link>
                    <Link href={""} className="bg-[#E3A008] text-[#fff] rounded-lg xl:px-[0.833vw] px-[16px] xl:py-[0.417vw] py-[8px] text-[16px] xl:text-[0.833vw] font-medium text-center" >
                    Give <i className="austin-give"></i>
                       </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-[24px] xl:gap-[1.083vw] xl:mt-[1.25vw] mt-[24px]">
                    <div>
                        <h4 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-semibold">
                           Our District
                        </h4>
                        <div className="mxl:mt-[0.833vw] mt-[16px]">
                          <ul className="list-none xl:space-y-[0.533vw] space-y-[16px] text-[#4B586E] text-[16px] xl:text-[0.833vw] font-light">
                              <li>
                                  <Link href='/website/aboutus'> About US</Link>
                              </li>
                              <li>
                                  <Link href={""}> Board of Trustees</Link>
                              </li>
                              <li>
                                  <Link href={""}>District & Board Policy</Link>
                              </li>
                              <li>
                                  <Link href={""}> Long-range Planning</Link>
                              </li>
                              <li>
                                  <Link href={""}> Strategic Plan</Link>
                              </li>
                              <li>
                                  <Link href={""}>Superintendent  </Link>
                              </li>
                              <li>
                                  <Link href={""}>Superintendent Search</Link>
                              </li>
                              <li>
                                  <Link href={""}>2022 Bond</Link>
                              </li>
                              <li>
                                  <Link href={""}>2022 Election Results</Link>
                              </li>
                              <li>
                                  <Link href={""}>Advisory Commitees</Link>
                              </li>
                             
                          </ul>
                         </div>
                    </div>

                    <div>
                        <h4 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-semibold">
                           Our Schools
                        </h4>
                        <div className="mxl:mt-[0.833vw] mt-[16px]">
                          <ul className="list-none xl:space-y-[0.533vw] space-y-[16px] text-[#4B586E] text-[16px] xl:text-[0.833vw] font-light">
                              <li>
                                  <Link href={""}> All Schools</Link>
                              </li>
                              <li>
                                  <Link href={""}> Elementary Schools</Link>
                              </li>
                              <li>
                                  <Link href={""}>Middle Schools</Link>
                              </li>
                              <li>
                                  <Link href={""}>High Schools</Link>
                              </li>
                              <li>
                                  <Link href={""}> Strategic Plan</Link>
                              </li>
                              <li>
                                  <Link href={""}>Superintendent  </Link>
                              </li>
                              <li>
                                  <Link href={""}>Superintendent Search</Link>
                              </li>
                              <li>
                                  <Link href={""}>2022 Bond</Link>
                              </li>
                              <li>
                                  <Link href={""}>2022 Election Results</Link>
                              </li>
                              <li>
                                  <Link href={""}>Advisory Commitees</Link>
                              </li>
                             
                          </ul>
                         </div>
                    </div>
                    <div>
                        <h4 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-semibold">
                        Departments
                        </h4>
                        <div className="mxl:mt-[0.833vw] mt-[16px]">
                          <ul className="list-none xl:space-y-[0.533vw] space-y-[16px] text-[#4B586E] text-[16px] xl:text-[0.833vw] font-light">
                              <li>
                                  <Link href={""}> All Departments</Link>
                              </li>
                              <li>
                                  <Link href={""}> Academics</Link>
                              </li>
                              <li>
                                  <Link href={""}>Athletics</Link>
                              </li>
                              <li>
                                  <Link href={""}>Construction Management</Link>
                              </li>
                              <li>
                                  <Link href={""}>Emergency Management</Link>
                              </li>
                              <li>
                                  <Link href={""}>Facilities Maintenance  </Link>
                              </li>
                              <li>
                                  <Link href={""}>Finance</Link>
                              </li>
                              <li>
                                  <Link href={""}>Fine Arts</Link>
                              </li>
                              <li>
                                  <Link href={""}>Health Services & Nursing</Link>
                              </li>
                              <li>
                                  <Link href={""}>Talent Strategy</Link>
                              </li>
                              <li>
                                  <Link href={""}>Office of Innovation and Develpment</Link>
                              </li>
                              <li>
                                  <Link href={""}>Police Department</Link>
                              </li>
                              <li>
                                  <Link href={""}>Technology</Link>
                              </li>
                              <li>
                                  <Link href={""}>Special Education</Link>
                              </li>
                              <li>
                                  <Link href={""}>Transportation</Link>
                              </li>
                             
                          </ul>
                         </div>
                    </div>
                    <div>
                        <h4 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-semibold">
                        Communications
                        </h4>
                        <div className="mxl:mt-[0.833vw] mt-[16px]">
                          <ul className="list-none xl:space-y-[0.533vw] space-y-[16px] text-[#4B586E] text-[16px] xl:text-[0.833vw] font-light">
                              <li>
                                  <Link href={""}> About US</Link>
                              </li>
                              <li>
                                  <Link href={""}> AISD.TV</Link>
                              </li>
                              <li>
                                  <Link href={""}>Announcements</Link>
                              </li>
                              <li>
                                  <Link href={""}>Calendar</Link>
                              </li>
                              <li>
                                  <Link href={""}>Community Engagement</Link>
                              </li>
                              <li>
                                  <Link href={""}>District Branding & Style Guide</Link>
                              </li>
                              <li>
                                  <Link href={""}>Press Releases</Link>
                              </li>
                              <li>
                                  <Link href={""}>Public Information Requests</Link>
                              </li>
                              <li>
                                  <Link href={""}>Contact Us</Link>
                              </li>
                              
                             
                          </ul>


                     <h4 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-semibold xl:mt-[1.667vw] mt-[30px]">
                     Careers
                        </h4>
                        <div className="mxl:mt-[0.833vw] mt-[16px]">
                          <ul className="list-none xl:space-y-[0.533vw] space-y-[16px] text-[#4B586E] text-[16px] xl:text-[0.833vw] font-light">
                              <li>
                                  <Link href={""}> Jobs</Link>
                              </li>
                              <li>
                                  <Link href={""}>Benefits</Link>
                              </li>
                              <li>
                                  <Link href={""}>Compensation</Link>
                              </li>
                              <li>
                                  <Link href={""}>New Hires</Link>
                              </li>
                              <li>
                                  <Link href={""}>Talent Strategy</Link>
                              </li>
                              <li>
                                  <Link href={""}>Superintendent</Link>
                              </li>
                              <li>
                                  <Link href={""}>Press Releases</Link>
                              </li>
                              <li>
                                  <Link href={""}>Public Information Requests</Link>
                              </li>
                              <li>
                                  <Link href={""}>Contact Us</Link>
                              </li>
                              
                             
                          </ul>

                       
                         </div>
                    </div>

                  </div>
                  </div>
              </div>
             </div>
            </div>
        
          
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default MegaMenuPopup;
