import Link from 'next/link'
import React from 'react'
import { Montserrat } from "@next/font/google";
import LastestNewsCard from '@/components/website/lastestnews';

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export default function LatestNews() {
    const LastestCardData = [
        {
            id: 1,
            image:'austinnews.png',
            date:'September, 26',
            heading: 'Hispanic Heritage Month:',
            title:' Montserrat Garibay',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam. Tristique tellus gravida amet volutpat. Arcu est amet urna nibh aliquet eget et. Leo elementum orci porta volutpat nulla neque. Cursus metus arcu cras cursus tortor. Phasellus egestas lacus ac.'
        },
        {
            id: 2,
            image:'austinnews1.png',
            date:'September, 26',
            heading: 'Hispanic Heritage Month:',
            title:' Montserrat Garibay',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam. Tristique tellus gravida amet volutpat. Arcu est amet urna nibh aliquet eget et. Leo elementum orci porta volutpat nulla neque. Cursus metus arcu cras cursus tortor. Phasellus egestas lacus ac.'
        },
        {
            id: 3,
            image:'austinnews2.png',
            date:'September, 26',
            heading: 'Hispanic Heritage Month:',
            title:' Montserrat Garibay',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam. Tristique tellus gravida amet volutpat. Arcu est amet urna nibh aliquet eget et. Leo elementum orci porta volutpat nulla neque. Cursus metus arcu cras cursus tortor. Phasellus egestas lacus ac.'
        }
    ]

    return (
        <div>
            <div className="z-[1] relative mb-[39px] xl:mb-[2.031vw] rounded-[24px] xl:rounded-[1.250vw] pl-[141px] xl:pl-[7.344vw] pr-[114] xl:pr-[5.938vw]">
                <div className="md:flex items-start lg:items-center gap-[67px] xl:gap-[3.49vw] space-y-5 md:space-y-0">
                    <div className="col">
                        <div className={myMontserrat.className}>
                            <div className="text-[#374151] text-[46px] xl:text-[2.396vw] leading-[1.2]">
                                Latest
                            </div>
                            <div className="text-[#374151] text-[56px] xl:text-[2.917vw] leading-[1.2] font-extrabold">
                                News
                            </div>
                        </div>
                        <div className="mt-[24px]">
                            <Link
                                href={"/website/morenews"}
                                className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-white"
                            >
                                More News{" "}
                                <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col ">
                        <div className='bg-[#FFFFFF] rounded-[36px] xl:rounded-[1.979vw] p-[40px] xl:p-[2.083vw] '>
                            <LastestNewsCard 
                                data={LastestCardData}
                                className="grid grid-cols-1 xl:grid-cols-3 gap-[32px] xl:gap-[1.667vw]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
