import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { Carousel } from "primereact/carousel";
import { ScrollPanel } from "primereact/scrollpanel";
import { CarouselService } from "@/service/Carousel";
import ReactPlayer from "react-player";
import { Montserrat } from "@next/font/google";

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

const ProgramsPopup = (props) => {

    const CardData = [
        {
            id: 1,
            image: 'graduation_ceremanies',
            title: 'High School Graduation Ceremonies',
            description: 'Lorem ipsum dolor sit amet consectetur. Ut ac egestas enim odio.'
        },
        {
            id: 2,
            image: 'educa_austin',
            title: 'Educa Austin',
            description: 'Lorem ipsum dolor sit amet consectetur. Ut ac egestas enim odio.'
        },
        {
            id: 3,
            image: 'boar_meeting',
            title: 'Board of Trustees Meetings',
            description: 'Lorem ipsum dolor sit amet consectetur. Ut ac egestas enim odio.'
        },
        {
            id: 4,
            image: 'aisd_shorts',
            title: 'AISD Shorts',
            description: 'Lorem ipsum dolor sit amet consectetur. Ut ac egestas enim odio.'
        },
        {
            id: 5,
            image: 'sports_scene',
            title: 'Sports Scene',
            description: 'Lorem ipsum dolor sit amet consectetur. Ut ac egestas enim odio.'
        },
        {
            id: 6,
            image: 'aisd_fine_art',
            title: 'AISD Fine Arts',
            description: 'Lorem ipsum dolor sit amet consectetur. Ut ac egestas enim odio.'
        }
    ]


    return (
        <>
            <div>
                <Sidebar
                    visible={props.visible}
                    position="top"
                    style={{ background: "#111928", borderRadius: "8px 8px 0 0",  }}
                    className="megamenu width1690 top-[5vw]"
                    onHide={() => props.onHides(false)}
                    blockScroll={true}
                >
                    <div className=" absolute -top-[40px] justify-center flex w-full">
                        <Link
                            href={""}
                            onClick={() => {
                                props.onHides(false);
                            }}
                            className="flex justify-center items-center text-white text-[14px] bg-[#982E33]  rounded-md h-[28px] xl:h-[1.563vw] p-2 "
                        >
                            <i className="austin-close text-[15px]"></i>
                        </Link>
                    </div>
                    <div className="py-[48px] xl:py-[2.5vw] px-[40px] xl:px-[2.083vw]">
                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-[40px] xl:gap-[2.083vw] ">
                            {CardData.map((elm) => {
                                return (
                                    <div className="bg-[#FFFFFF0D] rounded-[16px] xl:rounded-[0.833vw]">
                                        <Image
                                            src={`/assets/images/svg/${elm.image}.svg`}
                                            width="372"
                                            height="218"
                                            className="w-full h-auto rounded-t-[16px] xl:rounded-t-[0.833vw]"
                                        />
                                        <div className=" px-[20px] py-[12px] xl:px-[1.042vw] xl:py-[0.625vw]">
                                            <div className="text-[#fff] font-bold text-[16px] xl:text-[0.833vw] mb-[5px] xl:mb-[0.26vw]">{elm.title}</div>
                                            <div className="text-[#D1D5DB] font-normal text-[12px] xl:text-[0.625vw]">{elm.description}</div>
                                        </div>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </Sidebar>
            </div>
        </>
    );
};

export default ProgramsPopup;
