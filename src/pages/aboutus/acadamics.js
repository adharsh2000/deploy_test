import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import { Montserrat } from "@next/font/google";
import Image from "next/image";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Layout from "@/components/layout/layout";

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});
export default function AcademicsPage() {
    const [academicvisible, setAcademicvisible] = useState(false);
    const maxCharacters = 80;

    const OurOffice = [
        {
            acadamicImg: "Academicsimg1.svg",
            acadamicStart: "Excel with our",
            acadamicname: "Magnet Programs",
            acadamicdescription: "Through partnerships with local organizations, students learn filmmaking, digital photography, newscasting and more. Students interested in digital media can expand their knowledge and skills by learning from working professionals in the field. The hands-on opportunity gives students a behind-the-scenes look at the world of digital production.",
            acadamicbutton: "504 Service",

        },
        {
            acadamicImg: "Academicsimg2.svg",
            acadamicStart: "International",
            acadamicname: "Baccalaureate",
            acadamicdescription: "Fine Arts Academies offer a rigorous, high-quality and unique educational opportunity for students interested in pursuing an accelerated arts curriculum. These academies go beyond the sequential band, choir, dance, guitar, orchestra, theatre, visual arts and elementary music and art offered at every Austin ISD campus. Fine Arts Academy students experience robust, deep engagement with the arts and have additional learning, performance and competition opportunities. ",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg3.svg",
            acadamicStart: "Learn among peers in",
            acadamicname: "single-gender Schools",
            acadamicdescription: "he Montessori method of education, developed by Dr. Maria Montessori, is a child-centered educational approach based on scientific observations of children. Multi-age groupings are the hallmark of the program in which younger children learn from older children. The program focuses on the whole child, facilitating students through Montessori instructional materials that are based on the principles of Montessori education. Children work collaboratively using problem-solving skills and social skills, fostering brain development through the work with their senses.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg4.svg",
            acadamicStart: "Learn about",
            acadamicname: "STEM and more",
            acadamicdescription: "Dual language helps students excel academically while becoming Bilingual & Biliterate: Understand, speak, read and write in two languages.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg5.svg",
            acadamicStart: "Learn the",
            acadamicname: "science behind environmentalism",
            acadamicdescription: "Through partnerships with local organizations, students learn filmmaking, digital photography, newscasting and more. Students interested in digital media can expand their knowledge and skills by learning from working professionals in the field. The hands-on opportunity gives students a behind-the-scenes look at the world of digital production.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg6.svg",
            acadamicStart: "Take high-level courses",
            acadamicname: "with Advanced Academics",
            acadamicdescription: "Fine Arts Academies offer a rigorous, high-quality and unique educational opportunity for students interested in pursuing an accelerated arts curriculum. These academies go beyond the sequential band, choir, dance, guitar, orchestra, theatre, visual arts and elementary music and art offered at every Austin ISD campus. Fine Arts Academy students experience robust, deep engagement with the arts and have additional learning, performance and competition opportunities.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg7.svg",
            acadamicStart: "Learn and perform with",
            acadamicname: "Fine Arts Academies",
            acadamicdescription: "he Montessori method of education, developed by Dr. Maria Montessori, is a child-centered educational approach based on scientific observations of children. Multi-age groupings are the hallmark of the program in which younger children learn from older children. The program focuses on the whole child, facilitating students through Montessori instructional materials that are based on the principles of Montessori education. Children work collaboratively using problem-solving skills and social skills, fostering brain development through the work with their senses.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg8.svg",
            acadamicStart: "",
            acadamicname: "Dual Language",
            acadamicdescription: "Dual language helps students excel academically while becoming Bilingual & Biliterate: Understand, speak, read and write in two languages.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg9.svg",
            acadamicStart: "Preparation with",
            acadamicname: "Carrer & Technical Education",
            acadamicdescription: "Through partnerships with local organizations, students learn filmmaking, digital photography, newscasting and more. Students interested in digital media can expand their knowledge and skills by learning from working professionals in the field. The hands-on opportunity gives students a behind-the-scenes look at the world of digital production.",
            acadamicbutton: "Advanced Academics",
        },

    ];
    const ElementarySchool = [
        {
            acadamicImg: "Academicsimg1.svg",
            acadamicStart: "Create Original videos in",
            acadamicname: "Digital Media",
            acadamicdescription: "Through partnerships with local organizations, students learn filmmaking, digital photography, newscasting and more. Students interested in digital media can expand their knowledge and skills by learning from working professionals in the field. The hands-on opportunity gives students a behind-the-scenes look at the world of digital production.",
            acadamicbutton: "504 Service",

        },
        {
            acadamicImg: "Academicsimg2.svg",
            acadamicStart: "Perform & Play with ",
            acadamicname: "Fine Arts Academies",
            acadamicdescription: "Fine Arts Academies offer a rigorous, high-quality and unique educational opportunity for students interested in pursuing an accelerated arts curriculum. These academies go beyond the sequential band, choir, dance, guitar, orchestra, theatre, visual arts and elementary music and art offered at every Austin ISD campus. Fine Arts Academy students experience robust, deep engagement with the arts and have additional learning, performance and competition opportunities. ",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg3.svg",
            acadamicStart: "Learn Collaboratively with",
            acadamicname: "Montessori",
            acadamicdescription: "he Montessori method of education, developed by Dr. Maria Montessori, is a child-centered educational approach based on scientific observations of children. Multi-age groupings are the hallmark of the program in which younger children learn from older children. The program focuses on the whole child, facilitating students through Montessori instructional materials that are based on the principles of Montessori education. Children work collaboratively using problem-solving skills and social skills, fostering brain development through the work with their senses.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg4.svg",
            acadamicStart: "",
            acadamicname: "Dual language",
            acadamicdescription: "Dual language helps students excel academically while becoming Bilingual & Biliterate: Understand, speak, read and write in two languages.",
            acadamicbutton: "Advanced Academics",
        },
    ]
    const HighSchool =[
        {
            acadamicImg: "Academicsimg1.svg",
            acadamicStart: "Excel with our",
            acadamicname: "Magnet Programs",
            acadamicdescription: "Through partnerships with local organizations, students learn filmmaking, digital photography, newscasting and more. Students interested in digital media can expand their knowledge and skills by learning from working professionals in the field. The hands-on opportunity gives students a behind-the-scenes look at the world of digital production.",
            acadamicbutton: "504 Service",

        },
        {
            acadamicImg: "Academicsimg2.svg",
            acadamicStart: "International",
            acadamicname: "Baccalaureate",
            acadamicdescription: "Fine Arts Academies offer a rigorous, high-quality and unique educational opportunity for students interested in pursuing an accelerated arts curriculum. These academies go beyond the sequential band, choir, dance, guitar, orchestra, theatre, visual arts and elementary music and art offered at every Austin ISD campus. Fine Arts Academy students experience robust, deep engagement with the arts and have additional learning, performance and competition opportunities. ",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg3.svg",
            acadamicStart: "Learn among peers in",
            acadamicname: "single-gender Schools",
            acadamicdescription: "he Montessori method of education, developed by Dr. Maria Montessori, is a child-centered educational approach based on scientific observations of children. Multi-age groupings are the hallmark of the program in which younger children learn from older children. The program focuses on the whole child, facilitating students through Montessori instructional materials that are based on the principles of Montessori education. Children work collaboratively using problem-solving skills and social skills, fostering brain development through the work with their senses.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg4.svg",
            acadamicStart: "Learn about",
            acadamicname: "STEM and more",
            acadamicdescription: "Dual language helps students excel academically while becoming Bilingual & Biliterate: Understand, speak, read and write in two languages.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg5.svg",
            acadamicStart: "Learn the",
            acadamicname: "science behind environmentalism",
            acadamicdescription: "Through partnerships with local organizations, students learn filmmaking, digital photography, newscasting and more. Students interested in digital media can expand their knowledge and skills by learning from working professionals in the field. The hands-on opportunity gives students a behind-the-scenes look at the world of digital production.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg6.svg",
            acadamicStart: "Take high-level courses",
            acadamicname: "with Advanced Academics",
            acadamicdescription: "Fine Arts Academies offer a rigorous, high-quality and unique educational opportunity for students interested in pursuing an accelerated arts curriculum. These academies go beyond the sequential band, choir, dance, guitar, orchestra, theatre, visual arts and elementary music and art offered at every Austin ISD campus. Fine Arts Academy students experience robust, deep engagement with the arts and have additional learning, performance and competition opportunities.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg7.svg",
            acadamicStart: "Learn and perform with",
            acadamicname: "Fine Arts Academies",
            acadamicdescription: "he Montessori method of education, developed by Dr. Maria Montessori, is a child-centered educational approach based on scientific observations of children. Multi-age groupings are the hallmark of the program in which younger children learn from older children. The program focuses on the whole child, facilitating students through Montessori instructional materials that are based on the principles of Montessori education. Children work collaboratively using problem-solving skills and social skills, fostering brain development through the work with their senses.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg8.svg",
            acadamicStart: "",
            acadamicname: "Dual Language",
            acadamicdescription: "Dual language helps students excel academically while becoming Bilingual & Biliterate: Understand, speak, read and write in two languages.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg9.svg",
            acadamicStart: "Preparation with",
            acadamicname: "Carrer & Technical Education",
            acadamicdescription: "Through partnerships with local organizations, students learn filmmaking, digital photography, newscasting and more. Students interested in digital media can expand their knowledge and skills by learning from working professionals in the field. The hands-on opportunity gives students a behind-the-scenes look at the world of digital production.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg6.svg",
            acadamicStart: "Take high-level courses",
            acadamicname: "with Advanced Academics",
            acadamicdescription: "Fine Arts Academies offer a rigorous, high-quality and unique educational opportunity for students interested in pursuing an accelerated arts curriculum. These academies go beyond the sequential band, choir, dance, guitar, orchestra, theatre, visual arts and elementary music and art offered at every Austin ISD campus. Fine Arts Academy students experience robust, deep engagement with the arts and have additional learning, performance and competition opportunities.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg7.svg",
            acadamicStart: "Learn and perform with",
            acadamicname: "Fine Arts Academies",
            acadamicdescription: "he Montessori method of education, developed by Dr. Maria Montessori, is a child-centered educational approach based on scientific observations of children. Multi-age groupings are the hallmark of the program in which younger children learn from older children. The program focuses on the whole child, facilitating students through Montessori instructional materials that are based on the principles of Montessori education. Children work collaboratively using problem-solving skills and social skills, fostering brain development through the work with their senses.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg8.svg",
            acadamicStart: "",
            acadamicname: "Dual Language",
            acadamicdescription: "Dual language helps students excel academically while becoming Bilingual & Biliterate: Understand, speak, read and write in two languages.",
            acadamicbutton: "Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg9.svg",
            acadamicStart: "Preparation with",
            acadamicname: "Carrer & Technical Education",
            acadamicdescription: "Through partnerships with local organizations, students learn filmmaking, digital photography, newscasting and more. Students interested in digital media can expand their knowledge and skills by learning from working professionals in the field. The hands-on opportunity gives students a behind-the-scenes look at the world of digital production.",
            acadamicbutton: "Advanced Academics",
        },
    ]
    return (
        <Layout pageClass="" pageTitle="">
        <div>
            <Tabs>

                <div className='acadamics_bg'>
                    <div className='pt-[47px] xl:pt-[2.448vw] px-[104px] xl:px-[5.417vw] pb-[36px] xl:pb-[1.875vw]'>
                        <div className="breadCrumb flex items-center gap-[16px] xl:gap-[0.833vw] mb-[32px] xl:mb-[1.667vw]">
                            <div className="col">
                                <Link href={"javascript:void(0)"}><i className="austin-home mr-1"></i> Home<i className="ml-4 text-[12px] xl:text-[0.625vw] text-[#4B586E] austin-arrow-open-right"></i></Link>
                            </div>
                            <div className="col">
                                <Link href={"javascript:void(0)"}>Our District <i className="ml-4 text-[12px] xl:text-[0.625vw] text-[#9CA1AB] austin-arrow-open-right"></i></Link>
                            </div>
                            <div className="col">
                                Academics
                            </div>
                        </div>
                        <div className='mb-[24px] xl:mb-[1.25vw] w-[624px] xl:w-[32.5vw]'>
                            <div className={`${myMontserrat.className}`}>
                                <div className="text-[#374151] text-[40px] xl:text-[2.083vw] font-extrabold mb-[24px] xl:mb-[1.25vw]">
                                    Have it All in Austin ISD
                                </div>
                            </div>
                            <div className='text-[#4B586E] text-[16px] xl:text-[0.833vw] font-normal mb-[24px] xl:mb-[1.25vw]'>
                                From Pre-K through their senior year, Austin ISD students can explore their interests with dozens of programs that prepare them for college, careers and life. From fine arts academies and dual language to earning free college credits, you can have it all in Austin ISD. Explore below, or use our new School Finder to find the school near you that best matches your child's interests.
                            </div>

                        </div>
                        <div className='p-[24px] xl:p-[1.25vw] border border-[#BECDE3] rounded-[8px] w-[749px] xl:w-[39.01vw]'>
                            <div className={`${myMontserrat.className} text-[#4B586E] text-[20px] xl:text-[1.042vw] font-normal mb-[16px] xl:mb-[0.833vw]`}>Find your School</div>
                            <div className='text-[#4B586E] text-[16px] xl:text-[0.833vw] font-normal mb-[16px] xl:mb-[0.833vw]'>
                                Figma ipsum component variant main layer. Ellipse undo text project underline. Effect outline ellipse clip mask background bold stroke. Background duplicate clip distribute subtract arrow share. Star mask font draft object move strikethrough reesizing. Overflow opacity.
                            </div>
                            <div className='gap-4 xl:gap-[0.833vw]'>
                                <div className="inline-block">
                                    <Link
                                        href={"javascrip:void(0);"}
                                        className="flex items-center gap-2 bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[17px] xl:py-[0.885vw] px-[20px] xl:px-[1.042vw]  text-[18px] xl:text-[0.938vw] text-white"
                                    >
                                        Go to School Finder{" "}
                                        <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                                    </Link>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[47px] xl:pt-[2.448vw] px-[104px] xl:px-[5.417vw] pb-[36px] xl:pb-[1.875vw]">
                    <section>
                        <div className="flex justify-between items-center">
                            <div className='font-normal text-[#374151] text-[30px] xl:text-[1.563vw] '>Discovery our<span className='font-bold'> Programs </span></div>
                            <div className="flex">
                                <div className="academicsTabs">
                                    <TabList>
                                        <div className="flex items-center gap-[24px] xl:gap-[1.25vw]">
                                            <Tab>
                                                <div className="py-[12px] xl:py-[0.625vw] px-[24px] xl:px-[1.25vw] rounded-full flex items-center gap-[16px] xl:gap-[0.833vw]">
                                                    <Image src={`/assets/website/elementaryImg.svg`} width={40} height={40} alt="department" />
                                                    <div className="grid">
                                                        <div className="text-[18px] xl:text-[0.938vw] font-medium ">Elementary School</div>
                                                        <div className="text-[14px] xl:text-[0.729vw] font-normal text-[#9CA1AB]">Ages 5-10</div>
                                                    </div>
                                                </div></Tab>
                                            <Tab>
                                                <div className="py-[12px] xl:py-[0.625vw] px-[24px] xl:px-[1.25vw] rounded-full flex items-center gap-[16px] xl:gap-[0.833vw]">
                                                    <Image src={`/assets/website/middleImg.svg`} width={40} height={40} alt="department" />
                                                    <div className="grid">
                                                        <div className="text-[18px] xl:text-[0.938vw] font-medium ">Middle School</div>
                                                        <div className="text-[14px] xl:text-[0.729vw] font-normal text-[#9CA1AB]">Ages 11-13</div>
                                                    </div>
                                                </div></Tab>
                                            <Tab>
                                                <div className="py-[12px] xl:py-[0.625vw] px-[24px] xl:px-[1.25vw] rounded-full flex items-center gap-[16px] xl:gap-[0.833vw]">
                                                    <Image src={`/assets/website/highschoolImg.svg`} width={40} height={40} alt="department" />
                                                    <div className="grid">
                                                        <div className="text-[18px] xl:text-[0.938vw] font-medium ">High School</div>
                                                        <div className="text-[14px] xl:text-[0.729vw] font-normal text-[#9CA1AB]">Ages 14-18</div>
                                                    </div>
                                                </div></Tab>
                                        </div>

                                    </TabList>
                                </div>

                            </div>
                        </div>
                        <TabPanel>
                        <div className='grid grid-cols-12 gap-[24px] mt-[29px] xl:mt-[1.510vw] xl:gap-[1.250vw]'>
                            {ElementarySchool.map((elm, index) => {
                                return (
                                    <div className='col-span-12 md:col-span-6 xl:col-span-3' >
                                        <div className="bg-[#fff] rounded-lg relative h-[156px] shadow-lg">
                                            <div className="flex justify-end xl:gap-[1.25vw] gap-[16px] h-full">
                                                <div className="academics-img absolute left-0">
                                                    <Image src={`/assets/images/${elm.acadamicImg}`} width={97} height={90} alt="department" />
                                                </div>
                                                <div className="flex-col justify-end items-center xl:py-[0.833vw] py-[16px] xl:pr-[0.633vw] pr-[12px] pl-[160px]  ">
                                                    <div className="flex flex-wrap gap-[4px] xl:gap-[0.208vw]">
                                                        <span className="flex text-[#374151] text-[18px] xl:text-[0.938vw] leading-[1.2] font-normal">
                                                            {elm.acadamicStart}
                                                        </span>
                                                        <span className="flex text-[#374151] text-[18px] xl:text-[0.938vw] leading-[1.2] font-semibold">
                                                            {elm.acadamicname}
                                                        </span>
                                                    </div>

                                                    <p className="text-[#9CA1AB] text-[12px] xl:text-[0.729vw] xl:leading-[0.938vw] font-light mt-3">
                                                        {elm.acadamicdescription.substring(0, maxCharacters) + "..."}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className='grid grid-cols-12 gap-[24px] mt-[29px] xl:mt-[1.510vw] xl:gap-[1.250vw]'>
                            {OurOffice.map((elm, index) => {
                                return (
                                    <div className='col-span-12 md:col-span-6 xl:col-span-3' >
                                        <div className="bg-[#fff] rounded-lg relative h-[160px] shadow-lg">
                                            <div className="flex justify-end xl:gap-[1.25vw] gap-[16px] h-full">
                                                <div className="academics-img absolute left-0">
                                                    <Image src={`/assets/images/${elm.acadamicImg}`} width={104} height={90} alt="department" />
                                                </div>
                                                <div className="flex-col justify-end items-center xl:py-[0.833vw] py-[16px] xl:pr-[0.633vw] pr-[12px] pl-[160px]  ">
                                                    <div className="flex flex-wrap gap-[4px] xl:gap-[0.208vw]">
                                                        <span className="flex text-[#374151] text-[18px] xl:text-[0.938vw] leading-[1.2] font-normal">
                                                            {elm.acadamicStart}
                                                        </span>
                                                        <span className="flex text-[#374151] text-[18px] xl:text-[0.938vw] leading-[1.2] font-semibold">
                                                            {elm.acadamicname}
                                                        </span>
                                                    </div>

                                                    <p className="text-[#9CA1AB] text-[12px] xl:text-[0.729vw] xl:leading-[0.938vw] font-light mt-3">
                                                        {elm.acadamicdescription.substring(0, maxCharacters) + "..."}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className='grid grid-cols-12 gap-[24px] mt-[29px] xl:mt-[1.510vw] xl:gap-[1.250vw]'>
                            {HighSchool.map((elm, index) => {
                                return (
                                    <div className='col-span-12 md:col-span-6 xl:col-span-3' >
                                        <div className="bg-[#fff] rounded-lg relative h-[160px] shadow-lg">
                                            <div className="flex justify-end xl:gap-[1.25vw] gap-[16px] h-full">
                                                <div className="academics-img absolute left-0">
                                                    <Image src={`/assets/images/${elm.acadamicImg}`} width={104} height={90} alt="department" />
                                                </div>
                                                <div className="flex-col justify-end items-center xl:py-[0.833vw] py-[16px] xl:pr-[0.633vw] pr-[12px] pl-[160px]  ">
                                                    <div className="flex flex-wrap gap-[4px] xl:gap-[0.208vw]">
                                                        <span className="flex text-[#374151] text-[18px] xl:text-[0.938vw] leading-[1.2] font-normal">
                                                            {elm.acadamicStart}
                                                        </span>
                                                        <span className="flex text-[#374151] text-[18px] xl:text-[0.938vw] leading-[1.2] font-semibold">
                                                            {elm.acadamicname}
                                                        </span>
                                                    </div>

                                                    <p className="text-[#9CA1AB] text-[12px] xl:text-[0.729vw] xl:leading-[0.938vw] font-light mt-3">
                                                        {elm.acadamicdescription.substring(0, maxCharacters) + "..."}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        </TabPanel>
                        {/* <Button icon="pi pi-arrow-right" onClick={() => props.setAcademicvisible(true)} /> */}

                    </section>
                </div>
            </Tabs>
        </div>
        </Layout>
    )
}
