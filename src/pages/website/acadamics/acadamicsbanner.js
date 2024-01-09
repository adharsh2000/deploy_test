import React, { useState } from 'react';
import Link from 'next/link';
import { Montserrat } from "@next/font/google";
import Image from "next/image";

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export default function AcadamicsBanner() {


    return (
        <div className='acadamics_bg'>
            <div className='pt-[47px] xl:pt-[2.448vw] px-[104px] xl:px-[5.417vw] pb-[36px] xl:pb-[1.875vw]'>

                <div className="breadCrumb flex items-center gap-[16px] xl:gap-[0.833vw] mb-[32px] xl:mb-[1.667vw]">
                    <div className="col">
                        <Link href={""}><i className="austin-home mr-1"></i> Home<i className="ml-4 text-[12px] xl:text-[0.625vw] text-[#4B586E] austin-arrow-open-right"></i></Link>
                    </div>
                    <div className="col">
                        <Link href={""}>Departments <i className="ml-4 text-[12px] xl:text-[0.625vw] text-[#9CA1AB] austin-arrow-open-right"></i></Link>
                    </div>
                    <div className="col">
                        Academics
                    </div>
                </div>
                <div className='mb-[24px] xl:mb-[1.25vw] w-[624px] xl:w-[32.5vw]'>
                    <div className={`${myMontserrat.className}`}>
                        <div className="text-[#374151] text-[40px] xl:text-[2.083vw] font-extrabold mb-[24px] xl:mb-[1.25vw]">
                            Academics
                        </div>
                    </div>
                    <div className='text-[#4B586E] text-[16px] xl:text-[0.833vw] font-normal mb-[24px] xl:mb-[1.25vw]'>
                        The Academics Department is a teaching and learning community composed of professional teams who create curriculum, work with school communities to develop and coordinate programs, and provide vital services to students in need of additional academic supports.
                    </div>
                    <div className="inline-block">
                        <Link
                            href={"javascrip:void();"}
                            className="flex items-center gap-2 bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[17px] xl:py-[0.885vw] px-[20px] xl:px-[1.042vw]  text-[18px] xl:text-[0.938vw] text-white"
                        >
                            Contact us{" "}
                            <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                        </Link>
                    </div>
                </div>
                <div className='p-[24px] xl:p-[1.25vw] border border-[#BECDE3] rounded-[8px] w-[749px] xl:w-[39.01vw]'>
                    <div className={`${myMontserrat.className} text-[#4B586E] text-[20px] xl:text-[1.042vw] font-normal mb-[16px] xl:mb-[0.833vw]`}>Austin ISD Curriculum</div>
                    <div className='text-[#4B586E] text-[16px] xl:text-[0.833vw] font-normal mb-[16px] xl:mb-[0.833vw]'>
                        The Academics Department is a teaching and learning community composed of professional teams who create curriculum, work with school communities to develop and coordinate programs, and provide vital services to students in need of additional academic supports.
                    </div>
                    <div className='grid grid-cols-2 gap-4 xl:gap-[0.833vw]'>
                        <div className='flex items-center gap-4 bg-[#FFFFFF] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                            <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                            </div>
                            <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>AISD Elementary Curriculum</div>
                        </div>
                        <div className='flex items-center gap-4 bg-[#FFFFFF] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                            <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                            </div>
                            <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>AISD Secondary Curriculum</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
