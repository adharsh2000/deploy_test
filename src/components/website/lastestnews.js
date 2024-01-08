import React, { useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Montserrat } from "@next/font/google";

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

const LastestNewsCard = (props) => {
    const maxCharacters = 300;
    
    return (
        <div className={props.className}>
            {props.data.map((elm) => {
                return (
                    <div key={elm.id} className={`${elm.image === 'austinnews2.png' ?  '' : 'border-r border-r-[#BECDE3] pr-[32px] xl:pr-[1.667vw]'}`}>
                        <div className="rounded-lg bg-[#F5F6F7] relative">
                            <div className="flex flex-col bgnewsimage">
                                <div className='w-full z-[1]'>
                                    <Image src={`/assets/images/${elm.image}`} width={395} height={252} alt="" className="w-full h-[13.125vw] rounded-t-lg" />
                                </div>
                                <div className="flex flex-col p-[24px] xl:p-[1.25vw] z-[1]">
                                    <div className="text-[14px] xl:text-[0.729vw] text-[#9CA1AB] font-semibold mb-[16px] xl:mb-[0.833vw]">
                                        {elm.date}
                                    </div>
                                    <div className={`${myMontserrat.className} text-[24px] xl:text-[1.25vw] text-[#374151] font-semibold xl:leading-6 mb-[16px] xl:mb-[0.833vw]`}>
                                        {elm.heading}<br /> {elm.title}
                                    </div>
                                    <div className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] font-normal mb-[16px] xl:mb-[0.833vw] min-h-[148px] xl:min-h-[7.708vw]">
                                        {elm.description.substring(0, maxCharacters) + "..."}
                                    </div>
                                    <div className='flex items-center justify-end gap-2'>
                                    <div className="flex items-center justify-end gap-2 p-[8px] rounded border border-[#06486C] w-fit cursor-pointer hover:bg-[#e8e9ea]">
                                        <div className="text-[14px] xl:text-[0.729vw] text-[#06486C]  font-medium">Learn More</div>
                                        <i className='austin-arrow-line-right text-[16px] xl:text-[0.833vw]'></i>
                                    </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default LastestNewsCard;