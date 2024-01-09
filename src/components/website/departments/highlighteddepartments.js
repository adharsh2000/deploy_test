import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import SchoolDetails from "../popups/schooldetails";

const HighlightedDepartments = (props) => {
    return (
    <div className={props.className}>
      {props.data.map((elm) => {
        return (
          <>
             <div className="bg-[#fff] rounded-lg relative h-[226px] shadow-lg xl:pb-[1.667vw] pb-[30px]">
              <div className="flex justify-end xl:gap-[1.25vw] gap-[16px] h-full">
                <div className="container-img absolute left-0">
                  <Image src={`/assets/website/${elm.departmentImg}`} width={139} height={140} alt="department" />
                </div>
                <div className="flex-col justify-end items-center xl:py-[0.833vw] py-[16px] xl:pr-[0.633vw] pr-[12px] pl-[160px]  ">
                  <h6 className="text-[#374151] text-[18px] xl:text-[0.938vw] leading-[1.2] font-semibold">
                      {elm.dapartmentname}
                  </h6>
                  <p className="text-[#9CA1AB] text-[18px] xl:text-[0.729vw] xl:leading-[0.938vw] font-light mt-3">
                  {elm.dapartmentdescription}
                  </p>
                  <div className="flex justify-end">
                    <Link href={""} className="mt-5 text-[#4B586E] xl:text-[0.729vw] font-normal xl:leading-[0.938vw] leading-[18px] xl:p-[0.417vw] p-[10px] bg-[#F5F6F7] xl:rounded-[0.313vw] rounded-md border border-[#91A5C3] flex items-center xl:gap-[0.521vw] gap-4" >
                      <span>Go to page</span>{" "}
                      <i className="autinisd-arrow-right-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
          
           
          </div>
          </>
        );
      })}

    
    </div>
  );
};
export default HighlightedDepartments;

