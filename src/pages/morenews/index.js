import Layout from "@/components/layout/layout";
import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import MoreNewsCard from "@/components/website/morenews";

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});


export default function Index() {

    const LastestCardData = [
        {
            id: 1,
            image: 'austinnews.png',
            date: 'September, 26',
            heading: 'Hispanic Heritage Month:',
            title: ' Montserrat Garibay',
            description: 'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam. Tristique tellus gravida amet volutpat. Arcu est amet urna nibh aliquet eget et. Leo elementum orci porta volutpat nulla neque. Cursus metus arcu cras cursus tortor. Phasellus egestas lacus ac.'
        },
        {
            id: 2,
            image: 'austinnews1.png',
            date: 'September, 26',
            heading: 'Hispanic Heritage Month:',
            title: ' Montserrat Garibay',
            description: 'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam. Tristique tellus gravida amet volutpat. Arcu est amet urna nibh aliquet eget et. Leo elementum orci porta volutpat nulla neque. Cursus metus arcu cras cursus tortor. Phasellus egestas lacus ac.'
        },
        {
            id: 3,
            image: 'austinnews2.png',
            date: 'September, 26',
            heading: 'Hispanic Heritage Month:',
            title: ' Montserrat Garibay',
            description: 'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam. Tristique tellus gravida amet volutpat. Arcu est amet urna nibh aliquet eget et. Leo elementum orci porta volutpat nulla neque. Cursus metus arcu cras cursus tortor. Phasellus egestas lacus ac.'
        },
        {
            id: 4,
            image: 'austinnews.png',
            date: 'September, 26',
            heading: 'Hispanic Heritage Month:',
            title: ' Montserrat Garibay',
            description: 'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam. Tristique tellus gravida amet volutpat. Arcu est amet urna nibh aliquet eget et. Leo elementum orci porta volutpat nulla neque. Cursus metus arcu cras cursus tortor. Phasellus egestas lacus ac.'
        },
        {
            id: 5,
            image: 'austinnews2.png',
            date: 'September, 26',
            heading: 'Hispanic Heritage Month:',
            title: ' Montserrat Garibay',
            description: 'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam. Tristique tellus gravida amet volutpat. Arcu est amet urna nibh aliquet eget et. Leo elementum orci porta volutpat nulla neque. Cursus metus arcu cras cursus tortor. Phasellus egestas lacus ac.'
        },
        {
            id: 6,
            image: 'austinnews.png',
            date: 'September, 26',
            heading: 'Hispanic Heritage Month:',
            title: ' Montserrat Garibay',
            description: 'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam. Tristique tellus gravida amet volutpat. Arcu est amet urna nibh aliquet eget et. Leo elementum orci porta volutpat nulla neque. Cursus metus arcu cras cursus tortor. Phasellus egestas lacus ac.'
        },
        {
            id: 7,
            image: 'austinnews1.png',
            date: 'September, 26',
            heading: 'Hispanic Heritage Month:',
            title: ' Montserrat Garibay',
            description: 'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam. Tristique tellus gravida amet volutpat. Arcu est amet urna nibh aliquet eget et. Leo elementum orci porta volutpat nulla neque. Cursus metus arcu cras cursus tortor. Phasellus egestas lacus ac.'
        },
        {
            id: 8,
            image: 'austinnews2.png',
            date: 'September, 26',
            heading: 'Hispanic Heritage Month:',
            title: ' Montserrat Garibay',
            description: 'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam. Tristique tellus gravida amet volutpat. Arcu est amet urna nibh aliquet eget et. Leo elementum orci porta volutpat nulla neque. Cursus metus arcu cras cursus tortor. Phasellus egestas lacus ac.'
        },
    ]

    return (
        <>
            <Layout pageClass="pg-home" pageTitle="Home">
                <div className="mb-[24px] xl:mb-[1.25vw] xl:pt-[2.344vw] pt-10 xl:px-[5.990vw] px-[100px]">
                    <div className="flex justify-between items-center mb-[39px] xl:mb-[2.031vw]">
                        <div className={`${myMontserrat.className} flex items-center gap-2`}>
                            <div className="text-[#374151] text-[46px] xl:text-[2.396vw] leading-[1.2]">
                                Latest
                            </div>
                            <div className="text-[#374151] text-[56px] xl:text-[2.917vw] leading-[1.2] font-extrabold">
                                News
                            </div>
                        </div>
                        <Link
                            href="/website"
                            className="bg-[#DBE1EA] hover:bg-[#762428] hover:text-white rounded-md text-[#1F3F71] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5 ease-linear duration-200"
                        >
                            Back to Home
                        </Link>
                    </div>
                    <div className=" ">
                    <MoreNewsCard
                        data={LastestCardData}
                        className="grid grid-cols-2 xl:grid-cols-4 gap-[32px] xl:gap-[1.667vw]"
                    />

                    </div>
                </div>

            </Layout>
        </>
    );
}
