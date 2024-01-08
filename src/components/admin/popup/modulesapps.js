import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModulesApps= (props) => {
    const [date, setDate] = useState(null);
    const [text, setText] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const settings = {
        dots: false,
        infinite: false,
        nextArrow:false,
        prevArrow:false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow:false,
        prevArrow:false,
        swipeToSlide: true,
        // autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 2000,
        // cssEase: "linear"
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 968,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const slickslider = {
        dots: false,
        infinite: false,
        nextArrow:false,
        prevArrow:false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow:false,
        prevArrow:false,
        swipeToSlide: true,
        // autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 2000,
        // cssEase: "linear"
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 968,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <>
            <div>
                <Sidebar 
                    visible={props.visible} 
                    position="right" 
                    blockScroll={true}
                    style={{ background: '#FFF', borderRadius: '16px 0 0 16px' }} 
                    className="custmSidebar width1200" 
                    onHide={() => props.onHides(false)} 
                    >
                    <div className="flex flex-col justify-between h-full xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5">
                        {/**row***/}
                        <div className="xl:space-y-[1.25vw] space-y-[24px]">
                            <div className="text-[#4B586E] xl:text-[1vw] text-[22px] font-normal ">Modules & Apps</div>
                            <div className="xl:mt-[0.833vw] mt-4 xl:space-y-[0.833vw] space-y-4">
                             <div className="bg-[#F5F6F7] xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5 rounded-lg relative">
                                <div className="grid grid-cols-12 gap-[20px] xl:gap-[1.25vw] w-full">
                                        <div className="col-span-12 md:col-span-2 flex flex-col items-center justify-center">
                                        <div>
                                            <div className="text-[#A93439] text-[30px] xl:text-[1.667vw] leading-[1.2]">
                                                    Your
                                            </div>
                                            <div className="text-[#A93439] text-[30px] xl:text-[1.667vw] leading-[1.2] ">
                                            <span className="font-extrabold">modules</span>
                                            </div>
                                        </div>
                                        <div className="absolute left-0 bottom-0"><Image src={'/assets/admin/Group01.svg'} width={353} height={271} alt="Group01" className="xl:w-[150px] w-[150px]"/></div>
                                        </div>
                                        <div className="col-span-12 md:col-span-10 custslick">
                                        <Slider {...settings}>
                                            {/**col**/}
                                            <div>
                                                <div className="xl:rounded-[0.417vw] rounded-lg bg-[#152C4F] border border-[#152C4F] boxshadow02 xl:p-[0.833vw] p-4 flex flex-col xl:gap-[0.625vw] gap-3">
                                                <div className="relative">
                                                <Image src="/assets/admin/module1.png" width={188} height={107} alt='product' className="w-full" />
                                                <div className="absolute -top-3 right-2"><div className="text-[#0F1F38] xl:text-[0.521vw] text-[11px] font-medium bg-[#E8EBF0] rounded-md boxshadow01 py-0.5 px-1">Current</div></div>
                                                </div>
                                                <div className="text-white xl:text-[0.833vw] text-base font-bold">Web Portal</div>
                                                <div className="text-white xl:text-[0.625vw] text-xs font-normal xl:leading-[0.833vw] leading-4"><p>Figma ipsum component variant main layer. Select bullet polygon rotate bullet. Clip component pen component move stroke project editor. </p></div>
                                                <div className="flex justify-end invisible">
                                                    <Link href={''} className="text-[#374151] xl:text-[0.729vw] text-sm font-light bg-[#F5F6F7] rounded py-1 px-2 inline-block">Open Module</Link>
                                                </div>
                                                </div>
                                            </div>
                                            {/**col**/}
                                            {/**col**/}
                                            <div>
                                                <div className="xl:rounded-[0.417vw] rounded-lg bg-white border border-[#E5E7EB] boxshadow02 xl:p-[0.833vw] p-4 flex flex-col xl:gap-[0.625vw] gap-3">
                                                <div className="relative">
                                                <Image src="/assets/admin/module1.png" width={188} height={107} alt='product' className="w-full" />
                                                </div>
                                                <div className="text-[#374151] xl:text-[0.833vw] text-base font-bold">Web Portal</div>
                                                <div className="text-[#374151] xl:text-[0.625vw] text-xs font-normal xl:leading-[0.833vw] leading-4"><p>Figma ipsum component variant main layer. Select bullet polygon rotate bullet. Clip component pen component move stroke project editor. </p></div>
                                                <div className="flex justify-end">
                                                    <Link href={''} className="text-[#374151] xl:text-[0.729vw] text-sm font-light bg-[#F5F6F7] rounded py-1 px-2 inline-block">Open Module</Link>
                                                </div>
                                                </div>
                                            </div>
                                            {/**col**/}
                                            {/**col**/}
                                            <div>
                                                <div className="xl:rounded-[0.417vw] rounded-lg bg-white border border-[#E5E7EB] boxshadow02 xl:p-[0.833vw] p-4 flex flex-col xl:gap-[0.625vw] gap-3">
                                                <div className="relative">
                                                <Image src="/assets/admin/module1.png" width={188} height={107} alt='product' className="w-full" />
                                                </div>
                                                <div className="text-[#374151] xl:text-[0.833vw] text-base font-bold">Web Portal</div>
                                                <div className="text-[#374151] xl:text-[0.625vw] text-xs font-normal xl:leading-[0.833vw] leading-4"><p>Figma ipsum component variant main layer. Select bullet polygon rotate bullet. Clip component pen component move stroke project editor. </p></div>
                                                <div className="flex justify-end">
                                                    <Link href={''} className="text-[#374151] xl:text-[0.729vw] text-sm font-light bg-[#F5F6F7] rounded py-1 px-2 inline-block">Request Access</Link>
                                                </div>
                                                </div>
                                            </div>
                                            {/**col**/}
                                            {/**col**/}
                                            <div>
                                                <div className="xl:rounded-[0.417vw] rounded-lg bg-white border border-[#E5E7EB] boxshadow02 xl:p-[0.833vw] p-4 flex flex-col xl:gap-[0.625vw] gap-3">
                                                <div className="relative">
                                                <Image src="/assets/admin/module1.png" width={188} height={107} alt='product' className="w-full" />
                                                </div>
                                                <div className="text-[#374151] xl:text-[0.833vw] text-base font-bold">Web Portal</div>
                                                <div className="text-[#374151] xl:text-[0.625vw] text-xs font-normal xl:leading-[0.833vw] leading-4"><p>Figma ipsum component variant main layer. Select bullet polygon rotate bullet. Clip component pen component move stroke project editor. </p></div>
                                                <div className="flex justify-end">
                                                    <Link href={''} className="text-[#374151] xl:text-[0.729vw] text-sm font-light bg-[#F5F6F7] rounded py-1 px-2 inline-block">Open Module</Link>
                                                </div>
                                                </div>
                                            </div>
                                            {/**col**/}
                                            {/**col**/}
                                            <div>
                                                <div className="xl:rounded-[0.417vw] rounded-lg bg-white border border-[#E5E7EB] boxshadow02 xl:p-[0.833vw] p-4 flex flex-col xl:gap-[0.625vw] gap-3">
                                                <div className="relative">
                                                <Image src="/assets/admin/module1.png" width={188} height={107} alt='product' className="w-full" />
                                                </div>
                                                <div className="text-[#374151] xl:text-[0.833vw] text-base font-bold">Web Portal</div>
                                                <div className="text-[#374151] xl:text-[0.625vw] text-xs font-normal xl:leading-[0.833vw] leading-4"><p>Figma ipsum component variant main layer. Select bullet polygon rotate bullet. Clip component pen component move stroke project editor. </p></div>
                                                <div className="flex justify-end">
                                                    <Link href={''} className="text-[#374151] xl:text-[0.729vw] text-sm font-light bg-[#F5F6F7] rounded py-1 px-2 inline-block">Open Module</Link>
                                                </div>
                                                </div>
                                            </div>
                                            {/**col**/}
                                            {/**col**/}
                                            <div>
                                                <div className="xl:rounded-[0.417vw] rounded-lg bg-white border border-[#E5E7EB] boxshadow02 xl:p-[0.833vw] p-4 flex flex-col xl:gap-[0.625vw] gap-3">
                                                <div className="relative">
                                                <Image src="/assets/admin/module1.png" width={188} height={107} alt='product' className="w-full" />
                                                </div>
                                                <div className="text-[#374151] xl:text-[0.833vw] text-base font-bold">Web Portal</div>
                                                <div className="text-[#374151] xl:text-[0.625vw] text-xs font-normal xl:leading-[0.833vw] leading-4"><p>Figma ipsum component variant main layer. Select bullet polygon rotate bullet. Clip component pen component move stroke project editor. </p></div>
                                                <div className="flex justify-end">
                                                    <Link href={''} className="text-[#374151] xl:text-[0.729vw] text-sm font-light bg-[#F5F6F7] rounded py-1 px-2 inline-block">Open Module</Link>
                                                </div>
                                                </div>
                                            </div>
                                            {/**col**/}
                                            {/**col**/}
                                            <div>
                                                <div className="xl:rounded-[0.417vw] rounded-lg bg-white border border-[#E5E7EB] boxshadow02 xl:p-[0.833vw] p-4 flex flex-col xl:gap-[0.625vw] gap-3">
                                                <div className="relative">
                                                <Image src="/assets/admin/module1.png" width={188} height={107} alt='product' className="w-full" />
                                                </div>
                                                <div className="text-[#374151] xl:text-[0.833vw] text-base font-bold">Web Portal</div>
                                                <div className="text-[#374151] xl:text-[0.625vw] text-xs font-normal xl:leading-[0.833vw] leading-4"><p>Figma ipsum component variant main layer. Select bullet polygon rotate bullet. Clip component pen component move stroke project editor. </p></div>
                                                <div className="flex justify-end">
                                                    <Link href={''} className="text-[#374151] xl:text-[0.729vw] text-sm font-light bg-[#F5F6F7] rounded py-1 px-2 inline-block">Open Module</Link>
                                                </div>
                                                </div>
                                            </div>
                                            {/**col**/}
                                        </Slider>
                                        </div>

                                </div>
                             </div>

                             <div className="bg-[#F5F6F7] rounded-2xl xl:rounded-[0.833vw] xl:py-[0.833vw] py-4 xl:px-[1.250vw] px-6 flex flex-wrap xl:gap-[1.250vw] gap-6">
                                <div>
                                    <div className="xl:text-[1.250vw] text-2xl text-[#4B586E]">
                                    <span className="xl:text-[1.875vw] text-[32px] font-medium leading-[40px]">+67 </span>
                                    <p className="font-normal leading-[28px]">Available</p>
                                    <p className="font-extrabold leading-[28px]"> Modules</p>
                                    </div>
                                </div>
                                <div className="grow custslick xl:w-[62.292vw] lg:w-[500px] md:w-[300px] w-[200px]">
                                <Slider {...slickslider}>
                                    {/**col**/}
                                    <div>
                                    <div className="bg-white border border-[#E5E7EB] rounded-lg flex flex-col xl:gap-[0.313vw] gap-1 xl:p-[0.833vw] p-4 request_accesshover">
                                        <div><Image src={'/assets/admin/logo-symbol.svg'} width={27} height={32} alt="logo-symbol" /></div>
                                        <div className="text-[#374151] xl:text-[0.833vw] font-bold">Student Search</div>
                                        <div className="text-[#9CA1AB] xl:text-[0.729vw] font-normal">Figma ipsum component variant main layer. layerlayerlayer</div>
                                    </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div>
                                    <div className="bg-white border border-[#E5E7EB] rounded-lg flex flex-col xl:gap-[0.313vw] gap-1 xl:p-[0.833vw] p-4 request_accesshover">
                                        <div><Image src={'/assets/admin/logo-symbol.svg'} width={27} height={32} alt="logo-symbol" /></div>
                                        <div className="text-[#374151] xl:text-[0.833vw] font-bold">Module 2</div>
                                        <div className="text-[#9CA1AB] xl:text-[0.729vw] font-normal">Figma ipsum component variant main layer. layerlayerlayer</div>
                                    </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div>
                                    <div className="bg-white border border-[#E5E7EB] rounded-lg flex flex-col xl:gap-[0.313vw] gap-1 xl:p-[0.833vw] p-4 request_accesshover">
                                        <div><Image src={'/assets/admin/logo-symbol.svg'} width={27} height={32} alt="logo-symbol" /></div>
                                        <div className="text-[#374151] xl:text-[0.833vw] font-bold">Module 2</div>
                                        <div className="text-[#9CA1AB] xl:text-[0.729vw] font-normal">Figma ipsum component variant main layer. layerlayerlayer</div>
                                    </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div>
                                    <div className="bg-white border border-[#E5E7EB] rounded-lg flex flex-col xl:gap-[0.313vw] gap-1 xl:p-[0.833vw] p-4 request_accesshover">
                                        <div><Image src={'/assets/admin/logo-symbol.svg'} width={27} height={32} alt="logo-symbol" /></div>
                                        <div className="text-[#374151] xl:text-[0.833vw] font-bold">Module 2</div>
                                        <div className="text-[#9CA1AB] xl:text-[0.729vw] font-normal">Figma ipsum component variant main layer. layerlayerlayer</div>
                                    </div>
                                    </div>
                                    {/**col**/}
                                    {/**col**/}
                                    <div>
                                    <div className="bg-white border border-[#E5E7EB] rounded-lg flex flex-col xl:gap-[0.313vw] gap-1 xl:p-[0.833vw] p-4 request_accesshover">
                                        <div><Image src={'/assets/admin/logo-symbol.svg'} width={27} height={32} alt="logo-symbol" /></div>
                                        <div className="text-[#374151] xl:text-[0.833vw] font-bold">Module 2</div>
                                        <div className="text-[#9CA1AB] xl:text-[0.729vw] font-normal">Figma ipsum component variant main layer. layerlayerlayer</div>
                                    </div>
                                    </div>
                                    {/**col**/}
                                    
                                </Slider>
                                </div>
                                <div className="bg-[#A93439] rounded flex flex-col items-center justify-center xl:w-[8.281vw] w-[159px] xl:h-[168] cursor-pointer">
                                    <div className="text-[#FFFFFF] xl:text-[0.729vw] text-sm flex flex-col items-center">
                                        <div className="text-2xl"><i className="autinisd-shop"></i></div>
                                        <div className="font-normal">Go to the</div>
                                        <div className="font-extrabold">Hexa Store</div>
                                    </div>
                                </div>
                             </div>
                                
                               <div className="bg-[#1F2A37] rounded-[20px] xl:rounded-[1.042vw] xl:px-[2.083vw] px-[35px] xl:py-[1.823vw] py-[32px] flex xl:gap-[2.604vw] gap-[30px] items-center">
                                <div>
                                    <Image src={'/assets/admin/FPpreview.png'} width={1167} height={278} alt="FPpreview"/>
                                </div>
                                <div className="w-[295px] flex flex-col gap-2">
                                    <div className="text-white text-[16ox] xl:text-[0.833vw] font-semibold">May Interest you...</div>
                                    <div className="text-white text-[32px] xl:text-[1.667vw] font-semibold">Open Data Portal</div>
                                    <div className="text-[#9CA1AB] text-[14px] xl:text-[0.729vw] font-normal">Figma ipsum component variant main layer. Select bullet polygon rotate bullet. Clip component pen component move stroke project editor. Align stroke community community pencil thumbnail connection. Asset opacity horizontal select content subtract line layer pen. Figjam variant pen share layer. horizontal select content subtract line layer pen. Figjam variant pen share layer.</div>
                                    <div><Link href={''} className="xl:py-[0.625vw] inline-block text-center w-full rounded-full bg-[#A93439] text-white text-[16px] xl:text-[0.833vw] font-semibold">Explore all modules</Link></div>
                                </div>

                               </div>
                            </div>
                        </div>
                    </div>
                </Sidebar>


            </div>
        </>
    );
}

export default ModulesApps;