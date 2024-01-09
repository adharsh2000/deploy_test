import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Montserrat } from "@next/font/google";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Banner() {

    const settings = {
        dots: true,
        fade: false,
        infinite: true,
        nextArrow:false,
        prevArrow:false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
    <div className='about-banner-sec xl:pt-[2.30vw] pt-[40px] xl:pb-[5.225vw] pb-[40px] relative min-h-[1500px] overflow-hidden'>
      <div className="xl:px-[5.990vw] px-[100px]">
        <div className='xl:max-w-[88.3025vw] mx-auto xl:px-[0] px-[20px]'>
            <div className="w-[40%] relative z-[1]">
              <div className="breadCrumb flex gap-[16px] mb-[20px] xl:mb-[1.04vw]">
                  <div className="col">
                      <Link href={""}><i className="austin-home"></i> Home</Link>
                  </div>
                  <div className="col">
                      <i className="austin-arrow-open-right"></i>
                  </div>
                  <div className="col">
                      Our District
                  </div>
              </div>
              <div className={myMontserrat.className}>
                  <div className="text-[#374151] text-[48px] xl:text-[2.500vw] font-extrabold">
                      About Us
                  </div>
              </div>
              <div className="w-full ">
                  <div className="text-[#4B586E] text-[14px] xl:text-[0.833vw] mt-[10px] xl:mt-[0.521vw]">
                  Austin ISD educates more than 73,000 students and embraces 116 diverse school communities in one of the fastest-growing metroplexes in the country. In partnership with our families and our community, Austin ISD's mission is to prepare every student with the knowledge and skills to thrive in college, career, and life. We partner with world-class universities, innovative businesses, nonprofit organizations and engaged community leaders to is to provide a comprehensive educational experience that is high-quality, challenging and inspires all students to make a positive contribution to their community.
                  </div>
                  <Link href="" className="inline-flex items-center gap-2 bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.730vw] px-[14px] xl:px-[1.04vw] text-[16px] xl:text-[0.94vw] text-white mt-[20px] xl:mt-[1.56vw] ease-linear duration-200">
                    Find your Future
                    <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
              </div>                           
            </div>
        </div>
      </div>
        <div className="w-[50%] mt-[80px] xl:mt-[6.25vw]">
          <h4 className="text-[#9CA1AB] text-[18px] xl:text-[1.25vw] font-semibold mb-[7px] text-center">Testmonials</h4>
          <Slider {...settings} className="calendar-slick-slider">
            <div className="pt-[50px]">
              <div className="bg-white shadow px-[12px] xl:px-[0.625vw] pt-[1px] pb-[16px] xl:pb-[1.25vw] relative text-center">
                <Image src="/assets/website/user-testimonial1.svg" width="181" height="181" alt="Patrick Salinas - Principal"
                  className="mt-[-50px] mb-[25px] mx-auto"
                />
                <p className="text-[14px] xl:text-[0.730vw] text-[#4B586E] font-light">I want to make a positive impact on the community I lead by working alongside them to show that education truly is a connecting piece to many opportunities life has to offer.</p>
                <div className="mt-[35px]">
                  <h6 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-medium mb-[4px]">Patrick Salinas - Principal</h6>
                  <p className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">Norman-Sims Elementary School Assistant Principal of the Year, 2022</p>
                </div>                  
              </div>
            </div>
            <div className="pt-[50px]">
              <div className="bg-white shadow px-[12px] xl:px-[0.625vw] pt-[1px] pb-[16px] xl:pb-[1.25vw] relative text-center">
                <Image src="/assets/website/user-testimonial1.svg" width="181" height="181" alt="Patrick Salinas - Principal"
                  className="mt-[-50px] mb-[25px] mx-auto"
                />
                <p className="text-[14px] xl:text-[0.730vw] text-[#4B586E] font-light">I want to make a positive impact on the community I lead by working alongside them to show that education truly is a connecting piece to many opportunities life has to offer.</p>
                <div className="mt-[35px]">
                  <h6 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-medium mb-[4px]">Patrick Salinas - Principal</h6>
                  <p className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">Norman-Sims Elementary School Assistant Principal of the Year, 2022</p>
                </div>                  
              </div>
            </div>
            <div className="pt-[50px]">
              <div className="bg-white shadow px-[12px] xl:px-[0.625vw] pt-[1px] pb-[16px] xl:pb-[1.25vw] relative text-center">
                <Image src="/assets/website/user-testimonial1.svg" width="181" height="181" alt="Patrick Salinas - Principal"
                  className="mt-[-50px] mb-[25px] mx-auto"
                />
                <p className="text-[14px] xl:text-[0.730vw] text-[#4B586E] font-light">I want to make a positive impact on the community I lead by working alongside them to show that education truly is a connecting piece to many opportunities life has to offer.</p>
                <div className="mt-[35px]">
                  <h6 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-medium mb-[4px]">Patrick Salinas - Principal</h6>
                  <p className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">Norman-Sims Elementary School Assistant Principal of the Year, 2022</p>
                </div>                  
              </div>
            </div>
            <div className="pt-[50px]">
              <div className="bg-white shadow px-[12px] xl:px-[0.625vw] pt-[1px] pb-[16px] xl:pb-[1.25vw] relative text-center">
                <Image src="/assets/website/user-testimonial1.svg" width="181" height="181" alt="Patrick Salinas - Principal"
                  className="mt-[-50px] mb-[25px] mx-auto"
                />
                <p className="text-[14px] xl:text-[0.730vw] text-[#4B586E] font-light">I want to make a positive impact on the community I lead by working alongside them to show that education truly is a connecting piece to many opportunities life has to offer.</p>
                <div className="mt-[35px]">
                  <h6 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-medium mb-[4px]">Patrick Salinas - Principal</h6>
                  <p className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">Norman-Sims Elementary School Assistant Principal of the Year, 2022</p>
                </div>                  
              </div>
            </div>
          </Slider>
        </div>
        <div className="absolute right-[-275px] top-[-265px]">
          <Image src="/assets/website/about-banner.svg" alt="About" width="1772" height="1596" />
        </div>
    </div>
  )
}
