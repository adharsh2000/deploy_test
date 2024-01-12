import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';


const myInter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: "swap",
})
const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

function Departmentsbanner() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  return (
    <>
    <div className="xl:px-[5.990vw] px-[200px] xl:pt-[2.344vw] pt-[40px]">
        <div className="xl:px-[17.344vw] px-[50px] xl:pt-[0.990vw] pt-[19px] xl:pb-[5.208vw] pb-[80px]">
        <div className="flex justify-center">
        <div className="breadCrumb flex justify-start gap-[16px] mb-[20px] xl:mb-[1.04vw]">
        <div className="col">
        <Link href={""}><i className="austin-home"></i> Home</Link>
        </div>
        <div className="col">
        <i className="austin-arrow-open-right"></i>
        </div>
        <div className="col">
        Departments
        </div>
        </div>
        </div>
        
        <div className="flex flex-col justify-center items-center xl:gap-[1.875vw] gap-[30px]">
        <div className="text-center">
        <div className={myMontserrat.className}>
            <div className="text-[#374151] xl:text-[2.500vw] text-[40px] font-[500]"><span className='font-extrabold'>Austin</span> Departments </div>
        </div>
        <div className={myInter.className}>
            <div className="text-[#9CA1AB] xl:text-[1.042vw] text-[18px] font-medium xl:leading-[1.406vw] leading-7 text-center">
            <p>Austin ISD is dedicated to preparing your child for college, career, and life. They provide a safe, academically challenging environment from Pre-K to 12th grade, emphasizing social-emotional learning.</p>
            <p className="text-[#374151]"> We're ready! Are you?</p>
            </div>
        </div>
        </div>
        <div className='flex flex-wrap items-center md:justify-between justify-center xl:gap-[1.250vw] gap-5 w-full'>
                {/*col*/}
                <div className="grow">
                <div className="p-inputgroup flex-1 custmSearch">
                <Button icon="austin-search" />
                <InputText placeholder="Search" style={{height:"54px"}} />
                <Button icon="austin-close" />
              </div>
                </div>
                <div>
                <div className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] text-[14px] xl:text-[0.938vw] text-white flex justify-center min-h-full items-center h-[54px] cursor-pointer whitespace-nowrap" >Search Department</div>
                </div>
            </div>
        </div>

        </div>
    </div>
    </>
  );
}

export default Departmentsbanner;
