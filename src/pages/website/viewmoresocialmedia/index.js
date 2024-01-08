import Layout from "@/components/layout/layout";
import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import MoreNewsCard from "@/components/website/morenews";
import SocialMediaCard from "@/components/website/socialmedia";

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});


export default function Index() {

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
        {
            id: 7,
            image:'socialmedia.png',
            date:'Sep, 26',
            heading: 'Central Texas:',
            title:'Dyslexia Conference',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
        {
            id: 8,
            image:'socialmedia1.png',
            date:'Sep, 26',
            heading: 'Hispanic Heritage Month profile:',
            title:'Montserrat Garibay',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
        {
            id: 9,
            image:'socialmedia2.png',
            date:'Sep, 26',
            heading: 'Central Texas:',
            title:'Dyslexia Conference',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
        {
            id: 10,
            image:'socialmedia3.png',
            date:'Sep, 26',
            heading: 'Central Texas:',
            title:'Dyslexia Conference',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
        {
            id: 11,
            image:'socialmedia.png',
            date:'Sep, 26',
            heading: 'Central Texas:',
            title:'Dyslexia Conference',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
        {
            id: 12,
            image:'socialmedia1.png',
            date:'Sep, 26',
            heading: 'Hispanic Heritage Month profile:',
            title:'Montserrat Garibay',
            description:'Lorem ipsum dolor sit amet consectetur. Iaculis enim ipsum quam diam faucibus sagittis phasellus. Pellentesque venenatis a turpis faucibus elementum risus quis vitae etiam.'
        },
    ]

    return (
        <>
            <Layout pageClass="pg-home" pageTitle="Home">
                <div className="mb-[24px] xl:mb-[1.25vw] xl:pt-[2.344vw] pt-10 xl:px-[5.990vw] px-[100px]">
                    <div className="flex justify-between items-center mb-[39px] xl:mb-[2.031vw]">
                        <div className={`${myMontserrat.className} flex items-center gap-2`}>
                            <div className="text-[#374151] text-[46px] xl:text-[2.396vw] leading-[1.2]">
                                Social
                            </div>
                            <div className="text-[#374151] text-[56px] xl:text-[2.917vw] leading-[1.2] font-extrabold">
                                Media
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
                    <SocialMediaCard 
                        data={SocialMediaCardData}
                        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[32px] xl:gap-[1.667vw]"
                    />

                    </div>
                </div>

            </Layout>
        </>
    );
}
