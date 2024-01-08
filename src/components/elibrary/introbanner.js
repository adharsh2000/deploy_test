import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Createnewtopic from "@/components/popup/createnewtopic";
import Image from "next/image";



const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Introbanner(props) {

  const [Createnewtopicpopup, setCreatenewtopicpopup] = useState(false);

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>      
        <div className="text-center">
          <div className="col">
            <div className="breadCrumb flex justify-center gap-[16px] mb-[20px] mb-[1.04vw]">
              <div className="col">
                <Link href={""}><i className="austin-home"></i> Home</Link>
              </div>
              <div className="col">
              <i className="austin-arrow-open-right"></i>
              </div>
              <div className="col">
              eLibrary
              </div>
            </div>
          </div>
          <div className={myMontserrat.className}>
            <div className="text-[#374151] text-[36px] xl:text-[1.875vw] font-bold">
                Data & Files Open Library
            </div>
          </div>
          <div className="w-full max-w-[700px] mx-auto">
            <div className="text-[#9CA1AB] text-[18px] xl:text-[0.94vw] mt-[10px] xl:mt-[0.521vw]">
                Lorem ipsum dolor sit amet consectetur. Congue duis viverra nec est tellus. Pharetra in dignissim pulvinar laoreet adipiscing id vel at euismod. Nulla nunc risus netus sed quam nunc augue risus faucibus. Sit diam nibh gravida nisl.
            </div>
          </div>
        </div>   
        <div>
          <div className="grid grid-cols-12 gap-[8px] xl:gap-[0.417vw] mt-[50px] xl:mt-[5.75vw] xl:mx-[4.18vw] mx-auto">
            <div className="col-span-10 xl:col-span-11">
              <div className="p-inputgroup flex-1 custmSearch">
                <Button icon="austin-search" />
                <InputText placeholder="Search" />
                <Button icon="austin-close" />
              </div>
            </div>
            <div className="col-span-2 xl:col-span-1 ">
                <Link
                    href={""}
                    className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] block text-[14px] xl:text-[0.938vw] text-white flex justify-center min-h-full items-center"
                  >
                    Search
                </Link>
            </div>     
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[8px] xl:gap-[0.625vw] justify-center mt-[20px] xl:mt-[1.67vw] mx-auto xl:max-w-[44.935vw]">
            <div className="border border-[#BECDE3] bg-[#ECEFF3] px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.365vw] rounded-lg flex gap-2 xl:gap-4">
                <Image src="/assets/images/svg/audio.svg" width="36" height="36" />                
                <div className="text-[#35527F] text-[14px] xl:text-[0.833vw] font-semibold">
                    Audio
                    <span className="text-[#4B586E] text-[10px] xl:text-[0.625vw] font-normal block tracking-[-0.24px]  mt-[-3px]">123 files</span>
                </div>
            </div>
            <div className="border border-[#BECDE3] bg-[#ECEFF3] px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.365vw] rounded-lg flex gap-2 xl:gap-4">
                <Image src="/assets/images/svg/video.svg" width="36" height="36" />                
                <div className="text-[#35527F] text-[14px] xl:text-[0.833vw] font-semibold">
                    Video
                    <span className="text-[#4B586E] text-[10px] xl:text-[0.625vw] font-normal block tracking-[-0.24px]  mt-[-3px]">123 files</span>
                </div>
            </div>
            <div className="border border-[#BECDE3] bg-[#ECEFF3] px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.365vw] rounded-lg flex gap-2 xl:gap-4">
                <Image src="/assets/images/svg/document-text.svg" width="36" height="36" />                
                <div className="text-[#35527F] text-[14px] xl:text-[0.833vw] font-semibold">
                    Document
                    <span className="text-[#4B586E] text-[10px] xl:text-[0.625vw] font-normal block tracking-[-0.24px]  mt-[-3px]">123 files</span>
                </div>
            </div>
            <div className="border border-[#BECDE3] bg-[#ECEFF3] px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.365vw] rounded-lg flex gap-2 xl:gap-4">
                <Image src="/assets/images/svg/gallery.svg" width="36" height="36" />                
                <div className="text-[#35527F] text-[14px] xl:text-[0.833vw] font-semibold">
                    Image
                    <span className="text-[#4B586E] text-[10px] xl:text-[0.625vw] font-normal block tracking-[-0.24px]  mt-[-3px]">123 files</span>
                </div>
            </div>
        </div>
    </>
  );
}
