import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {

    const settings = {
        dots: true,
        fade: false,
        infinite: false,
        nextArrow:false,
        prevArrow:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 968,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    };

  return (
    <div className='xl:pt-[2.344vw] pt-10 xl:px-[5.990vw] px-[100px]'>
    <div className='bg-white xl:rounded-[1.250vw] rounded-3xl text-black xl:p-[2.083vw] p-[40px] relative z-[1]'>
    <Slider {...settings} className="custslick-slider">
    {/**col**/}
    <div className="">
    <div className="flex items-center xl:gap-[4.010vw]">
    <div className="xl:pl-[1.667vw] pl-[30px]">
        <div className="text-[#374151] xl:text-[2.500vw] text-[48px] font-semibold leading-normal">Lets Work Together</div>
        <div className="text-[#4B586E] text-[1.042vw] font-normal xl:leading-[1.250vw] leading-[24px] xl:mt-[0.833vw] mt-4">Austin ISD is hosting a series of Mental Health and School Safety Community Conversations over the next month.</div>
        <div className="flex xl:mt-[1.823vw] mt-[30px] xl:space-x-[0.729vw] space-x-[14px]">
            <Link href={''} className="text-white xl:text-[0.729vw] font-normal xl:leading-[0.938vw] leading-[18px] xl:p-[0.417vw] bg-[#A93439] xl:rounded-[0.313vw] rounded-md flex items-center xl:gap-[0.521vw] gap-4"><span>Learn More</span> <i className="autinisd-arrow-right-line"></i></Link>
            <Link href={''} className="text-[#9CA1AB] xl:text-[0.729vw] font-normal xl:leading-[0.938vw] leading-[18px] xl:p-[0.417vw] bg-white xl:rounded-[0.313vw] rounded-md border border-[#9CA1AB] flex items-center xl:gap-[0.521vw] gap-4"><span>Add to my Calendar</span> <i className="autinisd-arrow-right-line"></i></Link>
        </div>
    </div>
    <div className="xl:pr-[2.500vw] pr-[40px]">
        <Image src={'/assets/website/banner_img.png'} width={949} height={451} alt="Banner" />
    </div>
    </div>
    </div>
    {/**col**/}
    {/**col**/}
    <div className="">
      <div className="flex items-center xl:gap-[4.010vw] banner_bgwraptow xl:mr-[2.604vw]">
    <div className="xl:pl-[1.667vw] pl-[30px] xl:py-[1.667vw] py-[30px]">
      <div className="bg-[#f5f6f8bf] xl:rounded-[0.833vw] rounded-2xl xl:p-[1.250vw] p-5 xl:w-[24.375vw]">
        <div className="text-[#374151] xl:text-[2.100vw] text-[40px] font-semibold leading-10">Austin ISD Honor Storiest</div>
        <div className="text-[#9CA1AB] text-[0.942vw] font-normal xl:leading-[1.250vw] leading-[24px] xl:mt-[0.833vw] mt-4">We invite you to honor an Austin ISD teacher or staff member by telling the story of their impact on you.</div>
        <div className="flex xl:mt-[1.523vw] mt-[30px] xl:space-x-[0.729vw] space-x-[14px]">
            <Link href={''} className="text-white xl:text-[0.729vw] font-normal xl:leading-[0.938vw] leading-[18px] xl:p-[0.417vw] bg-[#A93439] xl:rounded-[0.313vw] rounded-md flex items-center xl:gap-[0.521vw] gap-4"><span>Learn More</span> <i className="autinisd-arrow-right-line"></i></Link>
        </div>
        </div>
    </div>
    </div>
    </div>
    {/**col**/}
    {/**col**/}
    <div className="">
    <div className="flex xl:gap-[4.010vw] banner_bgwrapthree xl:mr-[2.604vw] h-[280px]">
    <div className="xl:pl-[1.667vw] pl-[30px] xl:py-[1.667vw] py-[30px]">
      <div className="bg-[#f5f6f8bf] xl:rounded-[0.833vw] rounded-2xl xl:p-[1.250vw] p-5 xl:w-[31.250vw]">
        <div className="text-[#374151] xl:text-[2.100vw] text-[40px] font-semibold">No Classes-October 9t</div>
        <div className="text-[#9CA1AB] text-[0.942vw] font-normal xl:leading-[1.250vw] leading-[24px] xl:mt-[0.833vw] mt-4">Staff Development /Student Holiday (Indigenous Peoples Day).</div>
        <div className="flex xl:mt-[1.823vw] mt-[30px] xl:space-x-[0.729vw] space-x-[14px]">
            <Link href={''} className="text-white xl:text-[0.729vw] font-normal xl:leading-[0.938vw] leading-[18px] xl:p-[0.417vw] bg-[#A93439] xl:rounded-[0.313vw] rounded-md flex items-center xl:gap-[0.521vw] gap-4"><span>Learn More</span> <i className="autinisd-arrow-right-line"></i></Link>
        </div>
        </div>
    </div>
    </div>
    </div>
    {/**col**/}
    
    </Slider>
    </div>
    </div>
  )
}
