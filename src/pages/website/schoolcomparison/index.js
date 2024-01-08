import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import { Montserrat } from "@next/font/google";
import Schoolcombanner from "./schoolcombanner";
import SignatureProgram from "./signatureprogram";
import StudentFamilySupport from "./studentfamilysupport";
import PerformanceComponent from './Performance';
import SchoolDemographics from './SchoolDemographics';

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  return (
    <>
      <Layout pageTitle="School Comparison">
        <Schoolcombanner />                           
        {/**School Comparison Sticky**/}
        <div className='grid grid-cols-4 xl:gap-[1.667vw] gap-[30px] sticky top-[25%] z-40 xl:px-[6.042vw] px-[100px]'>
            {/**col**/}
            <div className='shadows_shadow-lg bg-white xl:rounded-[0.833vw] rounded-[14px] xl:pt-[0.313vw] pt-1 xl:pb-[0.833vw] pb-4 xl:px-[0.833vw] px-4 space-y-[12px]'>
                <div className='flex items-center justify-between'>
                    <div><Image src={'/assets/website/school_com/school-icon.png'} width={84} height={81} alt="school-icon" className="shadows_shadow-xl rounded-full" /></div>
                    <div className='bg-[#A93439] text-white flex items-center xl:gap-[0.833vw] gap-3 py-1 px-3 rounded-full'>
                        <div className='xl:text-[0.625vw] font-normal xl:leading-[0.938vw] leading-[18px]'>Phone:</div>
                        <div className='xl:text-[0.625vw] font-normal xl:leading-[0.938vw] leading-[18px]'>(512) 841-9900</div>
                    </div>
                </div>
                <div>
                    <div className='text-[#374151] xl:text-[1.042vw] text-[18px] font-bold'>Akins Early College High School</div>
                    <div className='text-[#4B586E] xl:text-[0.833vw] text-[16px] font-normal'>10701 S. First St. Austin, TX 78748</div>
                </div>
            </div>
            {/**col**/}
            {/**col**/}
            <div className='shadows_shadow-lg bg-white xl:rounded-[0.833vw] rounded-[14px] xl:pt-[0.313vw] pt-1 xl:pb-[0.833vw] pb-4 xl:px-[0.833vw] px-4 space-y-[12px]'>
                <div className='flex items-center justify-between'>
                    <div><Image src={'/assets/website/school_com/school-icon.png'} width={84} height={81} alt="school-icon" className="shadows_shadow-xl rounded-full" /></div>
                    <div className='bg-[#A93439] text-white flex items-center xl:gap-[0.833vw] gap-3 py-1 px-3 rounded-full'>
                        <div className='xl:text-[0.625vw] font-normal xl:leading-[0.938vw] leading-[18px]'>Phone:</div>
                        <div className='xl:text-[0.625vw] font-normal xl:leading-[0.938vw] leading-[18px]'>(512) 841-9900</div>
                    </div>
                </div>
                <div>
                    <div className='text-[#374151] xl:text-[1.042vw] text-[18px] font-bold'>Akins Early College High School</div>
                    <div className='text-[#4B586E] xl:text-[0.833vw] text-[16px] font-normal'>10701 S. First St. Austin, TX 78748</div>
                </div>
            </div>
            {/**col**/}
            {/**col**/}
            <div className='shadows_shadow-lg bg-white xl:rounded-[0.833vw] rounded-[14px] xl:pt-[0.313vw] pt-1 xl:pb-[0.833vw] pb-4 xl:px-[0.833vw] px-4 space-y-[12px]'>
                <div className='flex items-center justify-between'>
                    <div><Image src={'/assets/website/school_com/school-icon.png'} width={84} height={81} alt="school-icon" className="shadows_shadow-xl rounded-full" /></div>
                    <div className='bg-[#A93439] text-white flex items-center xl:gap-[0.833vw] gap-3 py-1 px-3 rounded-full'>
                        <div className='xl:text-[0.625vw] font-normal xl:leading-[0.938vw] leading-[18px]'>Phone:</div>
                        <div className='xl:text-[0.625vw] font-normal xl:leading-[0.938vw] leading-[18px]'>(512) 841-9900</div>
                    </div>
                </div>
                <div>
                    <div className='text-[#374151] xl:text-[1.042vw] text-[18px] font-bold'>Akins Early College High School</div>
                    <div className='text-[#4B586E] xl:text-[0.833vw] text-[16px] font-normal'>10701 S. First St. Austin, TX 78748</div>
                </div>
            </div>
            {/**col**/}
            {/**col**/}
            <div className='shadows_shadow-lg bg-white xl:rounded-[0.833vw] rounded-[14px] xl:pt-[0.313vw] pt-1 xl:pb-[0.833vw] pb-4 xl:px-[0.833vw] px-4 space-y-[12px]'>
                <div className='flex items-center justify-between'>
                    <div><Image src={'/assets/website/school_com/school-icon.png'} width={84} height={81} alt="school-icon" className="shadows_shadow-xl rounded-full" /></div>
                    <div className='bg-[#A93439] text-white flex items-center xl:gap-[0.833vw] gap-3 py-1 px-3 rounded-full'>
                        <div className='xl:text-[0.625vw] font-normal xl:leading-[0.938vw] leading-[18px]'>Phone:</div>
                        <div className='xl:text-[0.625vw] font-normal xl:leading-[0.938vw] leading-[18px]'>(512) 841-9900</div>
                    </div>
                </div>
                <div>
                    <div className='text-[#374151] xl:text-[1.042vw] text-[18px] font-bold'>Akins Early College High School</div>
                    <div className='text-[#4B586E] xl:text-[0.833vw] text-[16px] font-normal'>10701 S. First St. Austin, TX 78748</div>
                </div>
            </div>
            {/**col**/}
        </div>
        {/**School Comparison Sticky**/}
        {/**School Comparison**/}
        <div className="xl:px-[6.042vw] px-[100px]"> 
        <div className="xl:space-y-[0.833vw] space-y-[14px]">
        <div className="breadCrumb flex justify-start gap-[16px] mb-[20px] xl:mb-[1.04vw]">
        <div className="col">
        <Link href={""}><i className="austin-home"></i> Home</Link>
        </div>
        <div className="col">
        <i className="austin-arrow-open-right"></i>
        </div>
        <div className="col text-[#4B586E]">
        Austin Schools
        </div>
        <div className="col">
        <i className="austin-arrow-open-right"></i>
        </div>
        <div className="col">
        School Comparison
        </div>
        </div>
        <div className="xl:text-[1.875vw] text-[#374151] font-[400] xl:leading-[2.083vw] leading-[40px]">School <span className='font-[800]'>Comparison</span></div>
        </div>
        <div className="grid grid-cols-4 xl:gap-[1.667vw] gap-[30px] xl:mt-[1.667vw] mt-[30px]">
            {/**col**/}
            <div>
                
                <div className="rounded-tl-2xl rounded-tr-2xl relative">                
                    <div className='overflow-auto relative option_effect transition ease-in-out delay-150'>
                    <Image src={'/assets/website/school_com/mini_banner.png'} width={385} height={179} alt="banner" className="w-full" />
                    <div className="bg-[#E5E7EB] xl:py-[0.469vw] py-2 xl:px-[0.625vw] px-3 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl pb-[20px] optionbar w-full text-[#4B586E] xl:text-[1.042vw] text-[18pxs]">
                    <div><Link href={''} className='xl:pl-[1.042vw] pl-[18px]'><i className="autinisd-dost-Frame"></i></Link></div>
                    <div><Link href={''} className='xl:pr-[1.042vw] pr-[18px]'><i className="autinisd-trash"></i></Link></div>
                    </div>                    
                    </div>
                    <div className="absolute bottom-1.5 left-1.5"><Image src={'/assets/website/school_com/school-icon.png'} width={84} height={81} alt="school-icon" className="shadows_shadow-xl" /></div>
                </div>
                <div className="bg-white rounded-bl-2xl rounded-br-2xl xl:p-[0.833vw] p-4 xl:space-y-[1.250vw] space-y-[20px]">
                    <div>
                        <div className="text-[#374151] font-bold xl:text-[1.042vw] text-[18px]">Allison Elementary School</div>
                        <div className="text-[#4B586E] xl:text-[0.833vw] text-[14px] font-normal">10701 S. First St. Austin, TX 78748</div>
                    </div>
                    <div>
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Phone</div>
                            <div className="text-[#374151] font-semibold">(512) 841-9900</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Fax</div>
                            <div className="text-[#374151] font-semibold">(512) 841-9903</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Principal</div>
                            <div className="text-[#374151] font-semibold">Michael Herbin</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px]">
                            <div className="text-[#4B586E] font-normal">Grade Levels</div>
                            <div className="text-[#374151] font-semibold">9-12</div>
                        </div>
                        {/**col**/}
                    </div>
                </div>
            </div>
            {/**col**/}

            {/**col**/}
            <div>
                
                <div className="rounded-tl-2xl rounded-tr-2xl relative">                
                <div className='overflow-auto relative option_effect transition ease-in-out delay-150'>
                    <Image src={'/assets/website/school_com/mini_banner.png'} width={385} height={179} alt="banner" className="w-full" />
                    <div className="bg-[#E5E7EB] xl:py-[0.469vw] py-2 xl:px-[0.625vw] px-3 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl pb-[20px] optionbar w-full text-[#4B586E] xl:text-[1.042vw] text-[18pxs]">
                    <div><Link href={''} className='xl:pl-[1.042vw] pl-[18px]'><i className="autinisd-dost-Frame"></i></Link></div>
                    <div><Link href={''} className='xl:pr-[1.042vw] pr-[18px]'><i className="autinisd-trash"></i></Link></div>
                    </div>                    
                    </div>
                    <div className="absolute bottom-1.5 left-1.5"><Image src={'/assets/website/school_com/school-icon.png'} width={84} height={81} alt="school-icon" className="shadows_shadow-xl" /></div>
                </div>
                <div className="bg-white rounded-bl-2xl rounded-br-2xl xl:p-[0.833vw] p-4 xl:space-y-[1.250vw] space-y-[20px]">
                    <div>
                        <div className="text-[#374151] font-bold xl:text-[1.042vw] text-[18px]">Allison Elementary School</div>
                        <div className="text-[#4B586E] xl:text-[0.833vw] text-[14px] font-normal">10701 S. First St. Austin, TX 78748</div>
                    </div>
                    <div>
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Phone</div>
                            <div className="text-[#374151] font-semibold">(512) 841-9900</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Fax</div>
                            <div className="text-[#374151] font-semibold">(512) 841-9903</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Principal</div>
                            <div className="text-[#374151] font-semibold">Michael Herbin</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px]">
                            <div className="text-[#4B586E] font-normal">Grade Levels</div>
                            <div className="text-[#374151] font-semibold">9-12</div>
                        </div>
                        {/**col**/}
                    </div>
                </div>
            </div>
            {/**col**/}
            {/**col**/}
            <div>
                
                <div className="rounded-tl-2xl rounded-tr-2xl relative">                
                <div className='overflow-auto relative option_effect transition ease-in-out delay-150'>
                    <Image src={'/assets/website/school_com/mini_banner.png'} width={385} height={179} alt="banner" className="w-full" />
                    <div className="bg-[#E5E7EB] xl:py-[0.469vw] py-2 xl:px-[0.625vw] px-3 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl pb-[20px] optionbar w-full text-[#4B586E] xl:text-[1.042vw] text-[18pxs]">
                    <div><Link href={''} className='xl:pl-[1.042vw] pl-[18px]'><i className="autinisd-dost-Frame"></i></Link></div>
                    <div><Link href={''} className='xl:pr-[1.042vw] pr-[18px]'><i className="autinisd-trash"></i></Link></div>
                    </div>                    
                    </div>
                    <div className="absolute bottom-1.5 left-1.5"><Image src={'/assets/website/school_com/school-icon.png'} width={84} height={81} alt="school-icon" className="shadows_shadow-xl" /></div>
                </div>
                <div className="bg-white rounded-bl-2xl rounded-br-2xl xl:p-[0.833vw] p-4 xl:space-y-[1.250vw] space-y-[20px]">
                    <div>
                        <div className="text-[#374151] font-bold xl:text-[1.042vw] text-[18px]">Allison Elementary School</div>
                        <div className="text-[#4B586E] xl:text-[0.833vw] text-[14px] font-normal">10701 S. First St. Austin, TX 78748</div>
                    </div>
                    <div>
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Phone</div>
                            <div className="text-[#374151] font-semibold">(512) 841-9900</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Fax</div>
                            <div className="text-[#374151] font-semibold">(512) 841-9903</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Principal</div>
                            <div className="text-[#374151] font-semibold">Michael Herbin</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px]">
                            <div className="text-[#4B586E] font-normal">Grade Levels</div>
                            <div className="text-[#374151] font-semibold">9-12</div>
                        </div>
                        {/**col**/}
                    </div>
                </div>
            </div>
            {/**col**/}
            {/**col**/}
            <div>
                
                <div className="rounded-tl-2xl rounded-tr-2xl relative">                
                <div className='overflow-auto relative option_effect transition ease-in-out delay-150'>
                    <Image src={'/assets/website/school_com/mini_banner.png'} width={385} height={179} alt="banner" className="w-full" />
                    <div className="bg-[#E5E7EB] xl:py-[0.469vw] py-2 xl:px-[0.625vw] px-3 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl pb-[20px] optionbar w-full text-[#4B586E] xl:text-[1.042vw] text-[18pxs]">
                    <div><Link href={''} className='xl:pl-[1.042vw] pl-[18px]'><i className="autinisd-dost-Frame"></i></Link></div>
                    <div><Link href={''} className='xl:pr-[1.042vw] pr-[18px]'><i className="autinisd-trash"></i></Link></div>
                    </div>                    
                    </div>
                    <div className="absolute bottom-1.5 left-1.5"><Image src={'/assets/website/school_com/school-icon.png'} width={84} height={81} alt="school-icon" className="shadows_shadow-xl" /></div>
                </div>
                <div className="bg-white rounded-bl-2xl rounded-br-2xl xl:p-[0.833vw] p-4 xl:space-y-[1.250vw] space-y-[20px]">
                    <div>
                        <div className="text-[#374151] font-bold xl:text-[1.042vw] text-[18px]">Allison Elementary School</div>
                        <div className="text-[#4B586E] xl:text-[0.833vw] text-[14px] font-normal">10701 S. First St. Austin, TX 78748</div>
                    </div>
                    <div>
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Phone</div>
                            <div className="text-[#374151] font-semibold">(512) 841-9900</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Fax</div>
                            <div className="text-[#374151] font-semibold">(512) 841-9903</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px] border-b border-[#E5E7EB]">
                            <div className="text-[#4B586E] font-normal">Principal</div>
                            <div className="text-[#374151] font-semibold">Michael Herbin</div>
                        </div>
                        {/**col**/}
                        {/**col**/}
                        <div className="flex justify-between items-center  xl:text-[0.729vw] text-sm py-1 px-[1px]">
                            <div className="text-[#4B586E] font-normal">Grade Levels</div>
                            <div className="text-[#374151] font-semibold">9-12</div>
                        </div>
                        {/**col**/}
                    </div>
                </div>
            </div>
            {/**col**/}
        </div>
        </div>
        {/**School Comparison**/}     
        <SignatureProgram />
        <StudentFamilySupport/> 
        <PerformanceComponent/>
        <SchoolDemographics/>
      </Layout>
    </>
  );
}
