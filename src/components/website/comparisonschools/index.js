import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "@next/font/google";




const ComparisonSchools = (props) => {


  return (
    <div>
      {props.data.map((elm) => {
        return (
          <>
            <div className="bg-[#F5F6F7] rounded-lg compare_card_shadow mb-4">
                    <div className="flex gap-1 items-center">
                      <div className="bg-[#fff] rounded-r-full relative">
                        <div className="flex justify-center items-center w-[3.906vw] h-[3.906vw] ">
                          <Image
                              src={`/assets/website/${elm.schoollogo}`}
                            width="60"
                            height="45"
                            className="mx-auto"
                            alt=''
                          />
                        </div>
                        <Link href='' className="absolute top-[10px] -right-[10px] xl:top-[0.521vw] xl:-right-[0.521vw] bg-[#fff] shadow-sm rounded-full p-1">
                             <Image  src="/assets/website/delete_icon.svg"  width="14" height="14" className="mx-auto xl:w-[14px] xl:-right-[14px]"  alt=''
                          />
                        </Link>
                      </div>
                      <div className="xl:p-[0.677vw] p-[12px]">
                        <div className="text-[#374151] text-[10px] xl:text-[0.621vw]  font-semibold">
                            {elm.schoolname}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between px-[16px] xl:px-[0.833vw] py-[12px] xl:py-[0.625vw] border-b border-[#E5E7EB]">
                      <div className="text-[#4B586E] text-[10px] xl:text-[0.521vw] font-light">
                        Grade Levels
                      </div>
                      <div className="text-[#4B586E] text-[10px] xl:text-[0.521vw] font-semibold">
                      {elm.gradelevels}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2   text-[9px] xl:text-[0.469vw]  p-[10px] xl:p-[0.521vw]">
                      <Link
                        href=""
                        className=" p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light h-[20px] flex items-center"
                      >
                        Dual Language
                      </Link>
                      <Link
                        href=""
                        className="p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light  h-[20px] flex items-center"
                      >
                        SEL
                      </Link>
                      <Link
                        href=""
                        className="p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light h-[20px] flex items-center"
                      >
                        AVID
                      </Link>
                    </div>
                  </div>

          </>
        );
      })}

     
    </div>
  );
};
export default ComparisonSchools;
