import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import SchoolDetails from "../popups/schooldetails";

const Schools = (props) => {
  const [schoolDetail, setSchoolDetail] = useState(false);

  return (
    <div className={props.className}>
      {props.data.map((elm) => {
        return (
          <>
            <div onClick={()=> setSchoolDetail(true)} className="cardshadow rounded-[16px] bg-white hover:border hover:border-[#C27074] cursor-pointer border">
              <div className="xl:h-[8.896vw] h-[300px]  p-[16px] xl:p-[0.833vw]">
                <div className="flex justify-end">
                  {elm.button == "compare" ? (
                    <Link
                      href={""}
                      className="bg-[#F5F6F7] text-[#4B586E] border border-[#4B586E] 
                    rounded-md xl:px-[0.417vw] px-[8px] xl:py-[0.417vw] py-[8px] text-[16px] xl:text-[0.729vw] font-light text-center leading-none"
                    >
                      <i className="austin-pluse text-[14px]"></i> Compare
                    </Link>
                  ) : (
                    <Link
                      href={""}
                      className="bg-[#1F2A37] text-[#fff] border border-[#1F2A37] 
                          rounded-md xl:px-[0.417vw] px-[8px] xl:py-[0.417vw] py-[8px] text-[16px] xl:text-[0.729vw] font-light text-center leading-none"
                    >
                      <i className="austin-pluse text-[14px]"></i> Added
                    </Link>
                  )}
                </div>
                <div className="flex justify-center mt-3">
                  <Image
                    src={`/assets/website/${elm.schoollogo}`}
                    width="150"
                    height="120"
                  />
                </div>
              </div>
              <div className="bg-[#F5F6F7] rounded-b-[16px] ">
                <div className="p-[16px] xl:p-[0.833vw]">
                  <h5 className="text-[#374151] text-[17px] xl:text-[0.838vw] font-semibold">
                    {elm.schoolname}
                  </h5>
                  <div className="flex justify-between items-center mt-[10px] xl:mt-[0.417vw]">
                    <h6 className="text-[#374151] text-[14px] xl:text-[0.729vw] font-normal leading-4 w-[150px]">
                      {elm.schooladdress}
                    </h6>

                    <div className="flex  gap-2">
                      <Image
                        src="/assets/website/map.svg"
                        width="16"
                        height="16"
                      />{" "}
                      <Link
                        href=""
                        className="text-[#1B3865] text-[12px] xl:text-[0.625vw] font-normal"
                      >
                        {" "}
                        Map View
                      </Link>
                    </div>
                  </div>
                  <div className="mt-[24px] xl:mt-[1.25vw]">
                    <div className="flex justify-between px-[16px] xl:px-[0.833vw] py-[12px] xl:py-[0.625vw] border-b border-[#E5E7EB]">
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-light">
                        Principal
                      </div>
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-semibold">
                        {elm.principalname}
                      </div>
                    </div>
                    <div className="flex justify-between px-[16px] xl:px-[0.833vw] py-[12px] xl:py-[0.625vw] border-b border-[#E5E7EB]">
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-light">
                        Grade Levels
                      </div>
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-semibold">
                        {elm.gradelevels}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 my-3">
                    <Link
                      href=""
                      className="text-[12px] xl:text-[0.625vw] p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light h-[30px] flex items-center"
                    >
                      Dual Language
                    </Link>
                    <Link
                      href=""
                      className="text-[12px] xl:text-[0.625vw] p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light  h-[30px] flex items-center"
                    >
                      SEL
                    </Link>
                    <Link
                      href=""
                      className="text-[12px] xl:text-[0.625vw] p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light h-[30px] flex items-center"
                    >
                      AVID
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      <SchoolDetails
        visible={schoolDetail}
        onHides={() => setSchoolDetail(false)}
      />
    </div>
  );
};
export default Schools;
