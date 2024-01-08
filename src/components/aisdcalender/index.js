import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function AISDCalender(props) {
  return (
    <div className="grid px-[60px] xl:px-[3.125vw] py-[40px] xl:py-[2.083vw] gap-[24px] xl:gap-[1.250vw]">
      <div className="flex text-[30px] xl:text-[1.563vw] text-[#374151] gap-[8px] xl:gap-[0.417vw]">
        <span className="font-normal">AISD</span>
        <span className="font-bold">Calendars</span>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-3 gap-[24px] xl:gap-[1.250vw]">
        <div className="xl:p-[0.833vw] p-[16px] grid border rounded-md bg-[#F5F6F7] gap-[16px] xl:gap-[0.833vw]">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Image
                src={"/assets/website/calendernote.svg"}
                alt="Calender Note"
                height={24}
                width={24}
              />
            </div>
            <div className="flex gap-[12px] xl:gap-[0.625vw]">
              <div>
                <i className="austin-info text-[16px] xl:text-[0.833vw] text-[#9CA1AB]"></i>
              </div>
              <div>
                <i className="austin-download text-[16px] xl:text-[0.833vw] text-[#9CA1AB]"></i>
              </div>
            </div>
          </div>
          <div className="text-[16px] xl:text-[0.833vw] text-[#374151] font-semibold py-[16px] xl:py-[0.833vw]">
            2023-24 Calendar
          </div>
          <div className="flex">
            <div className="border rounded-[60px] border-[#A93439] flex justify-center items-center">
              <Link
                href={"javascript:void(0)"}
                className="px-[20px] xl:px-[1.042vw] text-[#A93439] text-[16px]
             xl:text-[0.833vw] font-semibold"
              >
                {" "}
                Preview
              </Link>
            </div>
            <div></div>
          </div>
        </div>
        <div className="xl:p-[0.833vw] p-[16px] grid border rounded-md bg-[#F5F6F7] gap-[16px] xl:gap-[0.833vw]">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Image
                src={"/assets/website/calendernote.svg"}
                alt="Calender Note"
                height={24}
                width={24}
              />
            </div>
            <div className="flex gap-[12px] xl:gap-[0.625vw]">
              <div>
                <i className="austin-info text-[16px] xl:text-[0.833vw] text-[#9CA1AB]"></i>
              </div>
              <div>
                <i className="austin-download text-[16px] xl:text-[0.833vw] text-[#9CA1AB]"></i>
              </div>
            </div>
          </div>
          <div className="text-[16px] xl:text-[0.833vw] text-[#374151] font-semibold py-[16px] xl:py-[0.833vw]">
            2023-24 Testing Calendar
          </div>
          <div className="flex">
            <div className="border rounded-[60px] border-[#A93439] flex justify-center items-center">
              <Link
                href={"javascript:void(0)"}
                className=" px-[20px] xl:px-[1.042vw] text-[#A93439] text-[16px]
             xl:text-[0.833vw] font-semibold"
              >
                {" "}
                Preview
              </Link>
            </div>
            <div></div>
          </div>
        </div>
        <div className="xl:p-[0.833vw] p-[16px] grid border rounded-md bg-[#F5F6F7] gap-[16px] xl:gap-[0.833vw]">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Image
                src={"/assets/website/calendernote.svg"}
                alt="Calender Note"
                height={24}
                width={24}
              />
            </div>
            <div className="flex gap-[12px] xl:gap-[0.625vw]">
              <div>
                <i className="austin-info text-[16px] xl:text-[0.833vw] text-[#9CA1AB]"></i>
              </div>
            </div>
          </div>
          <div className="text-[16px] xl:text-[0.833vw] text-[#374151] font-semibold py-[16px] xl:py-[0.833vw]">
            2023-24 Austin ISD Staff Recognition Calendar
          </div>
          <div className="flex">
            <div className="border rounded-[60px] border-[#A93439] flex justify-center items-center">
              <Link
                href={"javascript:void(0)"}
                className="py-[3px] xl:py-[0.156vw] px-[20px] xl:px-[1.042vw] text-[#A93439] text-[16px]
             xl:text-[0.833vw] font-semibold"
              >
                {" "}
                Go to page
              </Link>
            </div>
            <div></div>
          </div>
        </div>
        <div className="xl:p-[0.833vw] p-[16px] grid border rounded-md bg-[#F5F6F7] gap-[16px] xl:gap-[0.833vw]">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Image
                src={"/assets/website/calendernote.svg"}
                alt="Calender Note"
                height={24}
                width={24}
              />
            </div>
            <div className="flex gap-[12px] xl:gap-[0.625vw]">
              <div>
                <i className="austin-info text-[16px] xl:text-[0.833vw] text-[#9CA1AB]"></i>
              </div>
            </div>
          </div>
          <div className="text-[16px] xl:text-[0.833vw] text-[#374151] font-semibold py-[16px] xl:py-[0.833vw]">
            Board Meetings and Events
          </div>
          <div className="flex">
            <div className="border rounded-[60px] border-[#A93439] flex justify-center items-center">
              <Link
                href={"javascript:void(0)"}
                className="px-[20px] xl:px-[1.042vw] text-[#A93439] text-[16px]
             xl:text-[0.833vw] font-semibold"
              >
                {" "}
                Go to page
              </Link>
            </div>
            <div></div>
          </div>
        </div>
        <div className="xl:p-[0.833vw] p-[16px] grid border rounded-md bg-[#F5F6F7] gap-[16px] xl:gap-[0.833vw]">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Image
                src={"/assets/website/calendernote.svg"}
                alt="Calender Note"
                height={24}
                width={24}
              />
            </div>
            <div className="flex gap-[12px] xl:gap-[0.625vw]">
              <div>
                <i className="austin-info text-[16px] xl:text-[0.833vw] text-[#9CA1AB]"></i>
              </div>
            </div>
          </div>
          <div className="text-[16px] xl:text-[0.833vw] text-[#374151] font-semibold py-[16px] xl:py-[0.833vw]">
            Bond Program Meetings and Key Dates
          </div>
          <div className="flex">
            <div className="border rounded-[60px] border-[#A93439] flex justify-center items-center">
              <Link
                href={"javascript:void(0)"}
                className="py-[3px] xl:py-[0.156vw] px-[20px] xl:px-[1.042vw] text-[#A93439] text-[16px]
             xl:text-[0.833vw] font-semibold"
              >
                {" "}
                Go to page
              </Link>
            </div>
            <div></div>
          </div>
        </div>
        <div className="xl:p-[0.833vw] p-[16px] grid border rounded-md bg-[#F5F6F7] gap-[16px] xl:gap-[0.833vw]">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Image
                src={"/assets/website/calendernote.svg"}
                alt="Calender Note"
                height={24}
                width={24}
              />
            </div>
            <div className="flex gap-[12px] xl:gap-[0.625vw]">
              <div>
                <i className="austin-info text-[16px] xl:text-[0.833vw] text-[#9CA1AB]"></i>
              </div>
            </div>
          </div>
          <div className="text-[16px] xl:text-[0.833vw] text-[#374151] font-semibold py-[16px] xl:py-[0.833vw]">
            Calendars for Previous Years
          </div>
          <div className="flex">
            <div className="border rounded-[60px] border-[#A93439] flex justify-center items-center">
              <Link
                href={"javascript:void(0)"}
                className="px-[20px] xl:px-[1.042vw] text-[#A93439] text-[16px]
             xl:text-[0.833vw] font-semibold"
              >
                {" "}
                Go to page
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
