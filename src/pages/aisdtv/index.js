import Layout from '@/components/layout/layout';
import React from 'react';
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import Aisdtvbanner from '@/components/website/aisdtv/asidtvbanner';
import Image from "next/image";
import LastStreamedPrograms from '@/components/website/aisdtv/laststreamedprograms';
import AisdCalendartv from '@/components/website/aisdtv/canlendartv';
const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const LastStreamedProgramsData = [
    {
      title: "Navarro Early College High School Agriculture Program",
      date: "2023, apr 23rd 12:23 pm",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan..",
     
    },
    {
      title: "Navarro Early College High School Agriculture Program",
      date: "2023, apr 23rd 12:23 pm",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan..",
     
    },
    {
      title: "Navarro Early College High School Agriculture Program",
      date: "2023, apr 23rd 12:23 pm",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan..",
     
    },
    {
      title: "Navarro Early College High School Agriculture Program",
      date: "2023, apr 23rd 12:23 pm",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan..",
     
    },
    {
      title: "Navarro Early College High School Agriculture Program",
      date: "2023, apr 23rd 12:23 pm",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan..",
     
    },
    {
      title: "Navarro Early College High School Agriculture Program",
      date: "2023, apr 23rd 12:23 pm",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan..",
     
    },
    {
      title: "Navarro Early College High School Agriculture Program",
      date: "2023, apr 23rd 12:23 pm",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan..",
     
    },
   
  ];
  return (
    <Layout pageClass="" pageTitle="AISD TV">
      <Aisdtvbanner />
     


      <div className='xl:my-[1.563vw] my-[30px] xl:px-[7.031vw] px-[100px] stream-bg pb-[200px]'>
    <div className="grid grid-cols-12 md:grid-cols-12 xl:grid-cols-12 gap-[20px] xl:gap-[2.604vw]">
        <div className='col-span-9'>
        <div className="text-[24px] xl:text-[1.25vw] text-[#fff] font-normal mb-[20px] xl:mb-[1.667vw]">
              Last streamed Programs
        </div>
           <LastStreamedPrograms data={LastStreamedProgramsData}   className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-[24px] xl:gap-[1.25vw] mb-[18px] xl:mb-[1.25vw]"/>
        </div>
        <div className='col-span-3'>
        <div className="text-[24px] xl:text-[1.25vw] text-[#fff] font-normal mb-[20px] xl:mb-[1.667vw]">
                    Schedule
                </div>
          <div className='xl:p-[0.625vw] p-[12px] bg-[#111928] aisdcard rounded-[16px]'>
               
                <AisdCalendartv/>


                <div className='mt-[18px] xl:mt-[0.938vw] h-[350px] overflow-auto'>
                  <div className='flex gap-2 bg-[#1F2A37] xl:p-[0.517vw] p-[9px]  text-[12px] xl:text-[0.725vw] text-[#fff] rounded-md mb-[10px]'>
                    <div className=" font-semibold">
                        Jan 7
                    </div>
                    <div className="font-normal text-[#D1D5DB]">
                        Indigenous People’s Day
                    </div>
                  </div>
                  <div className='flex gap-2 bg-[#1F2A37] xl:p-[0.517vw] p-[9px]  text-[12px] xl:text-[0.725vw] text-[#fff] rounded-md mb-[10px]'>
                    <div className=" font-semibold">
                        Jan 17
                    </div>
                    <div className="font-normal text-[#D1D5DB]">
                        Indigenous People’s Day
                    </div>
                  </div>
                  <div className='flex gap-2 bg-[#1F2A37] xl:p-[0.517vw] p-[9px]  text-[12px] xl:text-[0.725vw] text-[#fff] rounded-md mb-[10px]'>
                    <div className=" font-semibold">
                        Jan 17
                    </div>
                    <div className="font-normal text-[#D1D5DB]">
                        Indigenous People’s Day
                    </div>
                  </div>
                  <div className='flex gap-2 bg-[#1F2A37] xl:p-[0.517vw] p-[9px]  text-[12px] xl:text-[0.725vw] text-[#fff] rounded-md mb-[10px]'>
                    <div className=" font-semibold">
                        Jan 17
                    </div>
                    <div className="font-normal text-[#D1D5DB]">
                        Indigenous People’s Day
                    </div>
                  </div>
                </div>
                 <div className='xl:p-[1.042vw] p-[16px] '>
                <Link href='' className='bg-[#A93439] text-[#FFF] text-[14px] font-semibold xl:text-[0.729vw] px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.725vw] rounded-[12px] flex items-center justify-center aisdcard'>View All</Link>
                </div>
                </div>
        </div>

    </div>
    </div>


     
    </Layout>
  )
}
