import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import SchoolDetails from "../popups/schooldetails";
import Calendartv from "./canlendartv";
import AisdCalendartv from "./canlendartv";

const LastStreamedPrograms = (props) => {
    return (
    // <div className={props.className}>
    //   {props.data.map((elm) => {
    //     return (
    //       <>
    //          <div className="bg-[#fff] rounded-lg relative h-[226px] shadow-lg xl:pb-[1.667vw] pb-[30px]">
    //           <div className="flex justify-end xl:gap-[1.25vw] gap-[16px] h-full">
    //             <div className="container-img absolute left-0">
    //               <Image src={`/assets/website/${elm.departmentImg}`} width={139} height={140} alt="department" />
    //             </div>
    //             <div className="flex-col justify-end items-center xl:py-[0.833vw] py-[16px] xl:pr-[0.633vw] pr-[12px] pl-[160px]  ">
    //               <h6 className="text-[#374151] text-[18px] xl:text-[0.938vw] leading-[1.2] font-semibold">
    //                   {elm.dapartmentname}
    //               </h6>
    //               <p className="text-[#9CA1AB] text-[18px] xl:text-[0.729vw] xl:leading-[0.938vw] font-light mt-3">
    //               {elm.dapartmentdescription}
    //               </p>
    //               <div className="flex justify-end">
    //                 <Link href={""} className="mt-5 text-[#4B586E] xl:text-[0.729vw] font-normal xl:leading-[0.938vw] leading-[18px] xl:p-[0.417vw] p-[10px] bg-[#F5F6F7] xl:rounded-[0.313vw] rounded-md border border-[#91A5C3] flex items-center xl:gap-[0.521vw] gap-4" >
    //                   <span>Go to page</span>{" "}
    //                   <i className="autinisd-arrow-right-line"></i>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
          
           
    //       </div>
    //       </>
    //     );
    //   })}

    
    // </div>
    <div className='xl:my-[1.563vw] my-[30px] xl:px-[7.031vw] px-[100px]'>
    <div className="grid grid-cols-12 md:grid-cols-12 xl:grid-cols-12 gap-[20px] xl:gap-[2.604vw]">
        <div className='col-span-9'>
        <div className="text-[24px] xl:text-[1.25vw] text-[#333] font-normal mb-[20px] xl:mb-[1.667vw]">
              Last streamed Programs
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-[0.833vw] mb-[18px] xl:mb-[1.25vw]">
              <div onClick={() => setCatalogDetailvideo(true)} className="bg-[#111928] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw] cursor-pointer">
                  <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                      <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                      <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                  </div>  
                  <div className="mb-[16px] xl:mb-[0.833vw]">
                      <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                  </div>
                  <div className="grid gap-[0.104vw]">
                      <h4 className="font-medium text-[18px] xl:text-[0.938vw] text-[#fff] leading-tight">Navarro Early College High School Agriculture Program</h4>
                      <p className="text-[12px] xl:text-[0.625vw] text-[#D1D5DB] font-normal my-[4px] xl:my-[0.208vw]">2023, apr 23rd 12:23 pm</p>
                      <p className="font-light text-[12px] xl:text-[0.625vw] text-[#E5E7EB] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                  </div>             
              </div>            
              <div onClick={() => setCatalogDetailvideo(true)} className="bg-[#111928] shadow rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw] cursor-pointer">
                  <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                      <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                      <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                  </div>  
                  <div className="mb-[16px] xl:mb-[0.833vw]">
                      <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                  </div>
                  <div className="grid gap-[0.104vw]">
                      <h4 className="font-medium text-[18px] xl:text-[0.938vw] text-[#fff] leading-tight">Navarro Early College High School Agriculture Program</h4>
                      <p className="text-[12px] xl:text-[0.625vw] text-[#D1D5DB] font-normal my-[4px] xl:my-[0.208vw]">2023, apr 23rd 12:23 pm</p>
                      <p className="font-light text-[12px] xl:text-[0.625vw] text-[#E5E7EB] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                  </div>             
              </div>              
              <div onClick={() => setCatalogDetailvideo(true)} className="bg-[#111928] shadow rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw] cursor-pointer">
                  <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                      <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                      <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                  </div>  
                  <div className="mb-[16px] xl:mb-[0.833vw]">
                      <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                  </div>
                  <div className="grid gap-[0.104vw]">
                      <h4 className="font-medium text-[18px] xl:text-[0.938vw] text-[#fff] leading-tight">Navarro Early College High School Agriculture Program</h4>
                      <p className="text-[12px] xl:text-[0.625vw] text-[#D1D5DB] font-normal my-[4px] xl:my-[0.208vw]">2023, apr 23rd 12:23 pm</p>
                      <p className="font-light text-[12px] xl:text-[0.625vw] text-[#E5E7EB] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                  </div>             
              </div>               
              <div onClick={() => setCatalogDetailvideo(true)} className="bg-[#111928] shadow rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw] cursor-pointer">
                  <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                      <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                      <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                  </div>  
                  <div className="mb-[16px] xl:mb-[0.833vw]">
                      <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                  </div>
                  <div className="grid gap-[0.104vw]">
                      <h4 className="font-medium text-[18px] xl:text-[0.938vw] text-[#fff] leading-tight">Navarro Early College High School Agriculture Program</h4>
                      <p className="text-[12px] xl:text-[0.625vw] text-[#D1D5DB] font-normal my-[4px] xl:my-[0.208vw]">2023, apr 23rd 12:23 pm</p>
                      <p className="font-light text-[12px] xl:text-[0.625vw] text-[#E5E7EB] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                  </div>             
              </div>     
              <div onClick={() => setCatalogDetailvideo(true)} className="bg-[#111928] shadow rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw] cursor-pointer">
                  <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                      <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                      <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                  </div>  
                  <div className="mb-[16px] xl:mb-[0.833vw]">
                      <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                  </div>
                  <div className="grid gap-[0.104vw]">
                      <h4 className="font-medium text-[18px] xl:text-[0.938vw] text-[#fff] leading-tight">Navarro Early College High School Agriculture Program</h4>
                      <p className="text-[12px] xl:text-[0.625vw] text-[#D1D5DB] font-normal my-[4px] xl:my-[0.208vw]">2023, apr 23rd 12:23 pm</p>
                      <p className="font-light text-[12px] xl:text-[0.625vw] text-[#E5E7EB] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                  </div>             
              </div>     
              <div onClick={() => setCatalogDetailvideo(true)} className="bg-[#111928] shadow rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw] cursor-pointer">
                  <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                      <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                      <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                  </div>  
                  <div className="mb-[16px] xl:mb-[0.833vw]">
                      <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                  </div>
                  <div className="grid gap-[0.104vw]">
                      <h4 className="font-medium text-[18px] xl:text-[0.938vw] text-[#fff] leading-tight">Navarro Early College High School Agriculture Program</h4>
                      <p className="text-[12px] xl:text-[0.625vw] text-[#D1D5DB] font-normal my-[4px] xl:my-[0.208vw]">2023, apr 23rd 12:23 pm</p>
                      <p className="font-light text-[12px] xl:text-[0.625vw] text-[#E5E7EB] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                  </div>             
              </div>           
          </div>
        </div>
        <div className='col-span-3'>
          <div className="text-[24px] xl:text-[1.25vw] text-[#333] font-normal mb-[20px] xl:mb-[1.667vw]">
              Schedule
          </div>
        <AisdCalendartv/>
       

        </div>

    </div>

    
    </div>
  );
};
export default LastStreamedPrograms;

