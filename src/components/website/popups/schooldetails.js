import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Editor } from "primereact/editor";
import { Montserrat } from "@next/font/google";
import Barcharthorizontal from "@/components/allchart/barchart";
import { PieChartWebsite } from "@/components/allchart/piechartwebsite";

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

const SchoolDetails = (props) => {
    const [text, setText] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


    const CustomerCountData = {
        label: ['All Subjects', 'Social Studies', 'Science', 'Mathematics', 'Reading'],
        value: [{
            value: 3,
            itemStyle: {
                color: '#768FB5',
                borderRadius: [0, 4, 4, 0],
            }
        },
        {
            value: 10,
            itemStyle: {
                color: '#768FB5',
                borderRadius: [0, 4, 4, 0],
            }
        },
        {
            value: 15,
            itemStyle: {
                color: '#768FB5',
                borderRadius: [0, 4, 4, 0],
            }
        },
        {
            value: 70,
            itemStyle: {
                color: '#768FB5',
                borderRadius: [0, 4, 4, 0],
            }
        },
        {
            value: 70,
            itemStyle: {
                color: '#768FB5',
                borderRadius: [0, 4, 4, 0],
            }
        },
        ]
    }

    const PersonnelbyLanguages = [
        { value: 78.2, name: '78 %' },
        { value: 11.4, name: '12 %' },
        { value: 5.5, name: '10 %' },
        { value: 2, name: '2' },
        { value: 2.4, name: '3' },
    ]

    return (
        <>
            <div>
                <Sidebar
                    visible={props.visible}
                    position="right"
                    blockScroll={true}
                    style={{ borderRadius: '16px 0 0 16px' }}
                    className="custmSidebar width768"
                    onHide={() => props.onHides(false)}
                >
                    <div className="flex flex-col justify-between h-full xl:p-[1.25vw] p-[24px]">
                        {/**row***/}
                        <div>
                            <div className="relative mb-[54px] xl:mb-[2.813vw]">
                                <Image src={'/assets/images/school_popup_head.png'} width={720} height={174}
                                    alt="school_popup_head"
                                    className="w-[720px] h-[174px] xl:w-[37.5vw] xl:h-[9.063vw]"
                                />
                                <div className="absolute left-3 bottom-[-33px]">
                                    <div className="bg-[#FFFFFF] rounded-full inline-block px-3 py-1 egaleshadow">
                                        <Image src={'/assets/images/svg/egale_symbol.svg'} width={60} height={74}
                                            alt="egale_symbol"
                                            className="w-[60px] h-[74px] xl:w-[3.125vw] xl:h-[3.854vw]"
                                        />
                                    </div>
                                </div>
                                <div className="absolute right-2 bottom-[-14px]">
                                    <Link href={''} className="xl:text-[0.729vw] text-[14px] text-[#4B586E] bg-[#F5F6F7] border border-[#4B586E] rounded-[4px] p-[8px] xl:p-[0.417vw] flex items-center gap-2 ">
                                        <i className="austin-pluse"></i>
                                        <span>Compare</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="xl:space-y-[0.833vw] space-y-4">
                                {/* header  */}
                                <div className={myMontserrat.className}>
                                    <div className="text-[24px] xl:text-[1.25vw] text-[#374151] font-bold">
                                        Akins Early College High School
                                    </div>
                                    <div className="text-[16px] xl:text-[0.833vw] text-[#4B586E] font-normal">
                                        10701 S. First St. Austin, TX 78748
                                    </div>
                                </div>

                                {/* content  */}
                                <div>
                                    <div className="flex items-center justify-between border-b border-b-[#E5E7EB]">
                                        <div className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal">
                                            Phone
                                        </div>
                                        <div className="text-[16px] xl:text-[0.833vw] text-[#374151] font-semibold">
                                            (512) 841-9900
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-b-[#E5E7EB] mt-1">
                                        <div className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal">
                                            Fax
                                        </div>
                                        <div className="text-[16px] xl:text-[0.833vw] text-[#374151] font-semibold">
                                            (512) 841-9903
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-b-[#E5E7EB] mt-1">
                                        <div className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal">
                                            Principal
                                        </div>
                                        <div className="text-[16px] xl:text-[0.833vw] text-[#374151] font-semibold">
                                            Michael Herbin
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-b-[#E5E7EB] mt-1">
                                        <div className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal">
                                            Grade Levels
                                        </div>
                                        <div className="text-[16px] xl:text-[0.833vw] text-[#374151] font-semibold">
                                            9-12
                                        </div>
                                    </div>
                                </div>

                                {/* Signature Programs */}
                                <div>
                                    <div className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal mb-2">
                                        Signature Programs
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[4px] rounded-lg text-[#FFFFFF] bg-[#0F1F38] leading-5">
                                            AVID
                                        </div>
                                        <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[4px] rounded-lg text-[#FFFFFF] bg-[#0F1F38] leading-5">
                                            JROTC
                                        </div>
                                        <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[4px] rounded-lg text-[#FFFFFF] bg-[#0F1F38] leading-5">
                                            P-Tech
                                        </div>
                                        <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[4px] rounded-lg text-[#FFFFFF] bg-[#0F1F38] leading-5">
                                            Social and Emotional Learning
                                        </div>
                                        <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[4px] rounded-lg text-[#FFFFFF] bg-[#0F1F38] leading-5">
                                            STEM
                                        </div>
                                    </div>
                                </div>

                                {/* Student & Family Supports */}
                                <div>
                                    <div className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal mb-2">
                                        Student & Family Supports
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[4px] rounded-lg text-[#FFFFFF] bg-[#0F1F38] leading-5">
                                            After-school Meals
                                        </div>
                                        <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[4px] rounded-lg text-[#FFFFFF] bg-[#0F1F38] leading-5">
                                            Free Breakfast
                                        </div>
                                        <div className="text-[12px] xl:text-[0.625vw] px-[12px] xl:px-[0.625vw] py-[4px] rounded-lg text-[#FFFFFF] bg-[#0F1F38] leading-5">
                                            Free Lunch
                                        </div>
                                    </div>
                                </div>

                                {/* About */}
                                <div>
                                    <div className="bg-[#F5F6F7] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
                                        <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                                            <div className="col-span-2 pr-5 place-self-center">
                                                <div className={myMontserrat.className}>
                                                    <div className="text-[18px] xl:text-[0.938vw] text-[#374151] font-medium">About</div>
                                                    <div className="text-[18px] xl:text-[0.938vw] text-[#374151] font-bold">Akins</div>
                                                </div>
                                            </div>
                                            <div className="col-span-10">
                                                <div className="text-[14px] xl:text-[0.729vw] text-[#374151] font-medium">
                                                    Akins Early College High School in south Austin offers specialized learning communities such as Arts, Business, Green Tech, and more. The school focuses on preparing students for college and careers through individualized instruction.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Points of Pride */}
                                <div>
                                    <div className="bg-[#F5F6F7] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
                                        <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                                            <div className="col-span-2 pr-2 place-self-center">
                                                <div className={myMontserrat.className}>
                                                    <div className="text-[18px] xl:text-[0.938vw] text-[#374151] font-medium">Points </div>
                                                    <div className="text-[18px] xl:text-[0.938vw] text-[#374151] font-bold"><span className=" font-medium">of</span> Pride</div>
                                                </div>
                                            </div>
                                            <div className="col-span-10">
                                                <div className="text-[14px] xl:text-[0.729vw] text-[#374151] font-medium">
                                                    Akins is ranked as one of the nation’s best high schools, according to U.S. News and World Report, and has been named by Austin Monthly as one of the top 40 high schools in Central Texas.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 xl:gap-[0.833vw] gap-4 pb-5">
                                    <div className="bg-[#FFFFFF] rounded-[16px] xl:rounded-[0.833vw] detailBoxShadow">
                                        <div className={`${myMontserrat.className} text-[14px] xl:text-[0.729vw] text-[#374151] font-medium leading-5 border-b border-[#E5E7EB] px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw]`}>
                                            STAAR Percent at Approaches <span className="font-normal">(2022)</span>
                                        </div>
                                        <div className='h-[200px]'>
                            
                                            <Barcharthorizontal
                                                legend={{
                                                    show: false,
                                                    icon: "roundRect",
                                                    bottom: "0%",
                                                    left: "0%",
                                                    itemWidth: 10,
                                                    itemHeight: 10
                                                }}
                                                grid={{
                                                    top: "15",
                                                    right: "20",
                                                    bottom: "10",
                                                    left: "20",
                                                    containLabel: true,
                                                }}
                                                axisLabely={{
                                                    show: true,
                                                }}
                                                label={{
                                                    show: true,
                                                    fontSize: 10,
                                                    color: "#9CA1AB",
                                                    position: 'right',
                                                    formatter: '{c}%',
                                                }}
                                                minv={0}
                                                maxv={80}
                                                axisLabel={false}
                                                axisLabelColor={'#9CA1AB'}
                                                data={CustomerCountData}
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-[#FFFFFF] rounded-[16px] xl:rounded-[0.833vw] detailBoxShadow">
                                        <div className={`${myMontserrat.className} text-[14px] xl:text-[0.729vw] text-[#374151] font-medium leading-5 border-b border-[#E5E7EB] px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw]`}>
                                            Students Demographics  <span className="font-normal">(2022-23)</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-1">
                                            <div className="self-center py-[16px] xl:py-[0.833vw] pl-[16px] xl:pl-[0.833vw] pr-[7px]">
                                                <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px]">
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#4F6484] rounded-[999px]"></div>
                                                        <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">Hispanic</div>
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">78.2%</div>
                                                </div>

                                                <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#A93439] rounded-[999px]"></div>
                                                        <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">White</div>
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">11.4%</div>
                                                </div>

                                                <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#A93439] rounded-[999px]"></div>
                                                        <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">African American</div>
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">5.5%</div>
                                                </div>

                                                <div className="flex items-center justify-between gap-1 border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#BC6D46] rounded-[999px]"></div>
                                                        <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">Asian</div>
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">2%</div>
                                                </div>

                                                <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-[6px] pt-[6px]">
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-[4px] h-[25px] xl:h-[1.302vw] bg-[#1F3F71] rounded-[999px]"></div>
                                                        <div className="text-[11px] xl:text-[0.573vw] text-[#9CA1AB] font-light">Two or More Races</div>
                                                    </div>
                                                    <div className="text-[12px] xl:text-[0.625vw] text-[#374151] font-medium">2.4%</div>
                                                </div>
                                            </div>
                                            <div className=' h-[200px]'>
                                                <PieChartWebsite
                                                    legend={{
                                                        show: false,
                                                    }}
                                                    label={{
                                                        show: false,
                                                    }}
                                                    radius={["40%", "90%"]}
                                                    center={["50%", "50%"]}
                                                    color={["#4F6484", "#A93439", "#38635B", "#BC6D46", "#1F3F71"]}
                                                    data={PersonnelbyLanguages}
                                                />
                                            </div>
                                        </div>
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

export default SchoolDetails;