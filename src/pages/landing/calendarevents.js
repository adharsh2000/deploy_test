import React from 'react'

import { Montserrat } from '@next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const myMontserrat = Montserrat({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export default function CalendarEvents() {

  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    nextArrow:false,
    prevArrow:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    };

  return (
    <section className="pt-[60px] xl:pt-[4.18vw] pb-[70px] xl:pb-[5.75vw] text-white">
      <div className='xl:max-w-[88.3025vw] mx-auto px-[20px] xl:px-[0] grid grid-cols-12 gap-[30px] xl:gap-[5.75vw] relative'>
        <div className='col-span-12 xl:col-span-7 xl:order-last'>
          <Slider {...settings} className="calendar-slick-slider">
            <div>
              <span className='px-[48px] xl:px-[2.5vw] text-[14px] xl:text-[0.730vw] mb-[6px] xl:mb-[0.365vw] inline-block'>2023</span>
              <div className='flex flex-wrap gap-[8px] xl:gap-[0.525vw] mb-[20px] xl:mb-[1.67vw]'>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Apr</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>May</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Jun</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Jul</span>
                <span className='bg-[#982E33] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Aug</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Sep</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Oct</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Nov</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Dec</span>
              </div>
              <div className='grid gap-[6px] xl:gap-[0.365vw]'>
                <div className='px-[20px] xl:px-[1.67vw] py-[12px] xl:py-[1.04vw]  bg-[#263040] border-l-[4px] border-[#982E33] rounded-lg mb-[20px] xl:mb-[1.56vw]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw]  grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                      <p className='text-[13px] xl:text-[0.730vw] font-light'>Austin ISD is dedicated to preparing your child for college, career, and life. They provide a safe, academically challenging </p>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] text-[#9CA1AB] font-extrabold leading-[1] block mb-[8px] mb-[0.417vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[1.04vw] text-[#9CA1AB] font-extrabold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.833vw] text-[#9CA1AB] mb-[8px] mb-[0.417vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.833vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#982E33] rounded-lg'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#62789B] rounded-lg opacity-[.8]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#4B7E73] rounded-lg opacity-[.6]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#4B7E73] rounded-lg opacity-[.6]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div>
              <span className='px-[48px] xl:px-[2.5vw] text-[14px] xl:text-[0.730vw] mb-[6px] xl:mb-[0.365vw] inline-block'>2024</span>
              <div className='flex flex-wrap gap-[8px] xl:gap-[0.525vw] mb-[20px] xl:mb-[1.67vw]'>
                <span className='bg-[#982E33] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Apr</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>May</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Jun</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Jul</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Aug</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Sep</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Oct</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Nov</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Dec</span>
              </div>
              <div className='grid gap-[6px] xl:gap-[0.365vw]'>
                <div className='px-[20px] xl:px-[1.67vw] py-[12px] xl:py-[1.04vw]  bg-[#263040] border-l-[4px] border-[#982E33] rounded-lg mb-[20px] xl:mb-[1.56vw]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw]  grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                      <p className='text-[13px] xl:text-[0.730vw] font-light'>Austin ISD is dedicated to preparing your child for college, career, and life. They provide a safe, academically challenging </p>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] text-[#9CA1AB] font-extrabold leading-[1] block mb-[8px] mb-[0.417vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[1.04vw] text-[#9CA1AB] font-extrabold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.833vw] text-[#9CA1AB] mb-[8px] mb-[0.417vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.833vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#982E33] rounded-lg'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#62789B] rounded-lg opacity-[.8]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#4B7E73] rounded-lg opacity-[.6]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#4B7E73] rounded-lg opacity-[.6]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div>
              <span className='px-[48px] xl:px-[2.5vw] text-[14px] xl:text-[0.730vw] mb-[6px] xl:mb-[0.365vw] inline-block'>2025</span>
              <div className='flex flex-wrap gap-[8px] xl:gap-[0.525vw] mb-[20px] xl:mb-[1.67vw]'>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Apr</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>May</span>
                <span className='bg-[#982E33] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Jun</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Jul</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Aug</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Sep</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Oct</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Nov</span>
                <span className='bg-[transparent] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Dec</span>
              </div>
              <div className='grid gap-[6px] xl:gap-[0.365vw]'>
                <div className='px-[20px] xl:px-[1.67vw] py-[12px] xl:py-[1.04vw]  bg-[#263040] border-l-[4px] border-[#982E33] rounded-lg mb-[20px] xl:mb-[1.56vw]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw]  grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                      <p className='text-[13px] xl:text-[0.730vw] font-light'>Austin ISD is dedicated to preparing your child for college, career, and life. They provide a safe, academically challenging </p>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] text-[#9CA1AB] font-extrabold leading-[1] block mb-[8px] mb-[0.417vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[1.04vw] text-[#9CA1AB] font-extrabold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.833vw] text-[#9CA1AB] mb-[8px] mb-[0.417vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.833vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#982E33] rounded-lg'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#62789B] rounded-lg opacity-[.8]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#4B7E73] rounded-lg opacity-[.6]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='px-[20px] xl:px-[1.67vw] py-[8px] xl:py-[0.417vw] bg-[#263040] border-l-[4px] border-[#4B7E73] rounded-lg opacity-[.6]'>
                  <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                    <div className='col-span-12 xl:col-span-8 space-y-[4px] xl:space-y-[0.265vw] grid items-center'>
                      <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold`}>Tools for Success</h3>
                    </div>
                    <div className='col-span-12 xl:col-span-4 flex items-center justify-end'>
                      <div className='text-center flex flex-col justify-center pr-[20px] xl:pr-[1.25vw] border-[#E5E7EB] border-r'>
                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.730vw] text-[#9CA1AB] leading-[1] block mb-[6px] mb-[0.365vw]`}>Wed</span>
                        <b className={`${myMontserrat.className} text-[16px] xl:text-[0.94vw] text-[#9CA1AB] font-bold leading-[1] block`}>28</b>
                      </div>
                      <div className='flex flex-col justify-center pl-[20px] xl:pl-[1.25vw]'>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] mb-[4px] mb-[0.208vw] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          09:00 - 09:30
                        </div>
                        <div className={`text-[14px] xl:text-[0.730vw] text-[#9CA1AB] flex items-center`}>
                          {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                          <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' />
                          Online
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </Slider>
        </div>
        <div className='col-span-12 xl:col-span-5'>
          <h2 className={`${myMontserrat.className} text-[36px] xl:text-[2.92vw] leading-[1.3] mb-[20px] xl:mb-[1.67vw]`}>
            <span className="font-extrabold">Calendar</span> of Events
          </h2>
          <h5 className='text-[14px] xl:text-[0.833vw] mb-[8px] xl:mb-[0.525vw]'>Categories:</h5>
          <div className='flex flex-wrap gap-[8px] xl:gap-[0.525vw] mb-[20px] xl:mb-[1.67vw]'>
            <span className='bg-[#263040] border-t border-[#A93439] rounded pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Advisory Bodies</span>
            <span className='bg-[#263040] border-t border-[#42536D] rounded pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Board Meetings</span>
            <span className='bg-[#263040] border-t border-[#BC6D46] rounded pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Districtwide Events</span>
            <span className='bg-[#263040] border-t border-[#4B7E73] rounded pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Religious & Cultural</span>
            <span className='bg-[#263040] border-t border-[#E3A008] rounded pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] '>Staff Recognitions</span>
          </div>
          <h5 className='text-[#374151] text-[14px] xl:text-[0.833vw] mb-[20px] xl:mb-[1.67vw] underline underline-offset-4'>How to Subscribe to the Austin ISD Calendar of Events?</h5>
          <p className='text-[12px] xl:text-[0.625vw] mb-[20px] xl:mb-[1.67vw]'>Austin ISD is dedicated to preparing your child for college, career, and life. They provide a safe, academically challenging   ISD is dedicated to preparing your cge, career, and life. They provide a safe, academic</p>
          <Link href="/calenderofevents" className='inline-flex items-center gap-2 bg-[#A93439] hover:bg-[#762428] rounded py-[6px] xl:py-[0.365vw] px-[8px] xl:px-[0.417vw] text-[14px] xl:text-[0.730vw] text-white ease-linear duration-200'>
            Open Full Calendar
            <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
          </Link>

        </div>
      </div>
    </section>
  )
}
