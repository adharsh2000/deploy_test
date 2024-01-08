import React, { useState } from 'react'
import Link from 'next/link'
import { Montserrat } from "@next/font/google";
import LastestNewsCard from '@/components/website/lastestnews';
import SocialMediaCard from '@/components/website/socialmedia';

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});
export default function SocialMedia() {


    const SocialMediaCardData = [
        {
            id: 1,
            image:'socialmedia.png',
            date:'Sep, 26',
            heading: 'Central Texas:',
            title:'Dyslexia Conference',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
        {
            id: 2,
            image:'socialmedia1.png',
            date:'Sep, 26',
            heading: 'Hispanic Heritage Month profile:',
            title:'Montserrat Garibay',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
        {
            id: 3,
            image:'socialmedia2.png',
            date:'Sep, 26',
            heading: 'Central Texas:',
            title:'Dyslexia Conference',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
        {
            id: 4,
            image:'socialmedia3.png',
            date:'Sep, 26',
            heading: 'Central Texas:',
            title:'Dyslexia Conference',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
        {
            id: 5,
            image:'socialmedia.png',
            date:'Sep, 26',
            heading: 'Central Texas:',
            title:'Dyslexia Conference',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
        {
            id: 6,
            image:'socialmedia1.png',
            date:'Sep, 26',
            heading: 'Hispanic Heritage Month profile:',
            title:'Montserrat Garibay',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
    ]

    return (
        <div className="z-[1] relative pt-[64px] xl:pt-[3.333vw] px-[120px] xl:px-[6.25vw] pb-[64px] xl:pb-[3.333vw]">
            <div className="flex items-center justify-between mb-[40px] xl:mb-[2.083vw]">
                <div className={`${myMontserrat.className} flex items-center gap-4`}>
                    <div className="text-[#374151] text-[46px] xl:text-[2.396vw] leading-[1.2]">
                        Social
                    </div>
                    <div className="text-[#374151] text-[56px] xl:text-[2.917vw] leading-[1.2] font-extrabold">
                        Media
                    </div>
                </div>
                <div className="">
                    <Link
                        href={"/website/viewmoresocialmedia"}
                        className="flex items-center gap-2 bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw]  text-[16px] xl:text-[0.833vw] text-white"
                    >
                        View More{" "}
                        <i className="austin-arrow-line-right  ml-[8px] xl:ml-[0.417vw]"></i>
                    </Link>
                </div>
            </div>
            <div className="col ">
                    <SocialMediaCard 
                        data={SocialMediaCardData}
                        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[32px] xl:gap-[1.667vw]"
                    />
            </div>
            
        </div>
    )
}
