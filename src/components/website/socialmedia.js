import React, { useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Montserrat } from "@next/font/google";
import { useRouter } from 'next/router';

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});


const SocialMediaCard = (props) => {
    const maxCharacters = 100;
    const router = useRouter();
    console.log(router.pathname);
    return (
        <div className={props.className}>
            {props.data.map((elm) => {
                return (
                        <div key={elm.id} className={`rounded-[16px] xl:rounded-[0.833vw] ${router.pathname === '/viewmoresocialmedia' ? 'bg-[#fff]': 'bg-[#F5F6F7]'}`}>
                            <div className="grid grid-cols-12 gap-4 xl:gap-[0.833vw]">
                                <div className='col-span-4'>
                                    <Image src={`/assets/images/${elm.image}`} width={177} height={185} alt="" className="xl:w-[9.219vw] xl:h-[9.635vw] w-full h-auto rounded-l-lg" />
                                </div>
                                <div className="col-span-8 p-[16px] xl:p-[0.833vw]">
                                    <div className={`${myMontserrat.className} text-[16px] xl:text-[0.833vw] text-[#A93439] font-semibold xl:leading-4 mb-[16px] xl:mb-[0.833vw]`}>
                                        {elm.heading}<br /> {elm.title}
                                    </div>
                                    <div className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal mb-[16px] xl:mb-[0.833vw]">
                                        {elm.description.substring(0, maxCharacters) + "..."}
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-2 text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal'>
                                        <Image src={`/assets/images/svg/ri_twitter-x-fill.svg`} width={16} height={16} alt="" className="w-[0.833vw] h-[0.833vw]" /> @austinISD
                                        </div>
                                        <div className={`${myMontserrat.className} text-[14px] xl:text-[0.729vw] text-[#9CA1AB] font-semibold`}>
                                        {elm.date}
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
export default SocialMediaCard;