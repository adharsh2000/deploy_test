import React, { useState } from 'react'
import Image from "next/image";
import { Sidebar } from "primereact/sidebar";

import Link from "next/link";


function Academic(props) {
    const maxCharacters = 300;
  
    const acadamicPopupData = [
        
        {
            id: 1,
            description: 'Section 504 Services'
        },
        {
            id: 2,
            description: 'Eligibility for Section 504 Services'
        },
        {
            id: 3,
            description: 'Procedural Safeguards'
        },
        {
            id: 4,
            description: 'Accomodations on State Testing and College Entrance Exams'
        },
        {
            id: 5,
            description: 'Resources'
        },
        {
            id: 6,
            description: 'Contact Information'
        },
        {
            id: 7,
            description: 'HB 3928 Dyslexia Updates'
        },

    ]
    const activeIndexdata = [
        
        { no: "1", name: "Section 504 Services" },
        { no: "2", name: "Eligibility for Section 504 Services" },
        { no: "3", name: "Procedural Safeguards" },
        { no: "4", name: "Accomodations on State Testing and College Entrance Exams" },
        { no: "5", name: "Resources" },
        { no: "6", name: "Contact Information" },
        { no: "7", name: "HB 3928 Dyslexia Updates" },
    ];
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <>
            <div className='bg-[#E5E7EB]'>
                <div className='px-[20px] py-[87px] xl:py-[4.531vw] xl:px-[5.417vw] '>
                    <section>
                        <div className='font-normal text-[#374151] text-[30px] xl:text-[1.563vw] '> Academic <span className='font-bold'>Team</span></div>
                        <div className='grid grid-cols-12 gap-[24px] xl:gap-[1.250vw]'>
                            {props.data.map((elm, index) => {
                                return (
                                    <div className='col-span-12 md:col-span-6 xl:col-span-4 rounded-md  mt-[29px] xl:mt-[1.510vw] bg-[#fff] shadow-[#0000001A]'>

                                        <div className='flex items-center m-[16px] xl:m-[0.833vw] '>
                                            <div>
                                                <Image
                                                    src={`/assets/images/${elm.image}`}
                                                    width={112}
                                                    height={112}
                                                    className=""
                                                    alt='mkt'
                                                />
                                            </div>
                                            <div className=' pl-[16px] xl:pl-[0.833vw] '>
                                                <div className='text-[#374151] font-medium  text-[24px] xl:text-[1.250vw] '>{elm.name}</div>
                                                <div className='text-[#9CA1AB] text-[16px] mt-[16px] xl:mt-[0.633vw] xl:text-[0.833vw]'>{elm.description}</div>
                                            </div>
                                        </div>

                                    </div>
                                )

                            })}
                            {/* <div className='col-span-12 md:col-span-6 xl:col-span-4 rounded-md  mt-[29px] xl:mt-[1.510vw] bg-[#fff] shadow-[#0000001A]'>
                            <div className='flex items-center m-[16px] xl:m-[0.833vw] '>
                                <div>
                                    <Image
                                        src={"/assets/images/"}
                                        width={112}
                                        height={112}
                                        className=""
                                        alt='mkt'
                                    />
                                </div>
                                <div className=' pl-[16px] xl:pl-[0.833vw] '>
                                    <div className='text-[#374151] font-medium  text-[24px] xl:text-[1.250vw] '>Ms. Patricia Rodriguez</div>
                                    <div className='text-[#9CA1AB] text-[16px] mt-[16px] xl:mt-[0.633vw] xl:text-[0.833vw]'>Figma ipsum component variant main layer. Figjam boolean team plugin flows device asset arrow.</div>
                                </div>
                            </div>


                        </div>
                        <div className='col-span-12 md:col-span-6 xl:col-span-4 rounded-md  mt-[29px] xl:mt-[1.510vw] bg-[#fff] shadow-[#0000001A]'>
                            <div className='flex items-center m-[16px] xl:m-[0.833vw]'>
                                <div>
                                    <Image
                                        src={"/assets/images/"}
                                        width={112}
                                        height={112}
                                        className=""
                                        alt='mkt'
                                    />
                                </div>
                                <div className=' pl-[16px] xl:pl-[0.833vw] '>
                                    <div className='text-[#374151] font-medium  text-[24px] xl:text-[1.250vw] '>Dr. Susan Diaz</div>
                                    <div className='text-[#9CA1AB] text-[16px] mt-[16px] xl:mt-[0.633vw] xl:text-[0.833vw]'>Figma ipsum component variant main layer. Figjam boolean team plugin flows device asset arrow.</div>
                                </div>
                            </div>


                        </div> */}
                        </div>
                    </section>
                    <section>
                        <div className='font-normal text-[#374151] text-[30px] mt-[48px] xl:mt-[2.500vw] xl:text-[1.563vw] '>Our<span className='font-bold'> Office </span></div>
                        <div className='grid grid-cols-12 gap-[24px] mt-[29px] xl:mt-[1.510vw] xl:gap-[1.250vw]'>
                            {props.data1.map((elm, index) => {
                                return (
                                    <div className='col-span-12 md:col-span-6 xl:col-span-4' >
                                        <div className="bg-[#fff] rounded-lg relative h-[215px] shadow-lg">
                                            <div className="flex justify-end xl:gap-[1.25vw] gap-[16px] h-full">
                                                <div className="container-img absolute left-0">
                                                    <Image src={`/assets/images/${elm.acadamicImg}`} width={139} height={120} alt="department" />
                                                </div>
                                                <div className="flex-col justify-end items-center xl:py-[0.833vw] py-[16px] xl:pr-[0.633vw] pr-[12px] pl-[160px]  ">
                                                    <h6 className="text-[#374151] text-[18px] xl:text-[0.938vw] leading-[1.2] font-semibold">
                                                        {elm.acadamicname}
                                                    </h6>
                                                    <p className="text-[#9CA1AB] text-[12px] xl:text-[0.729vw] xl:leading-[0.938vw] font-light mt-3">
                                                        {elm.acadamicdescription.substring(0, maxCharacters) + "..."}
                                                    </p>
                                                    <div className="flex justify-start absolute bottom-[10px] ">
                                                        <Link href={""} onClick={() => props.setAcademicvisible(true)} className="mt-5 bg-[#1F2A37] text-[#fff] py-[8px] px-[12px] text-[13px] xl:text-[0.677vw] font-normal xl:leading-[0.938vw] leading-[18px] xl:px-[0.725vw]  xl:py-[0.308vw] xl:rounded-[0.313vw] rounded-md border border-[#91A5C3] flex items-center xl:gap-[0.521vw] gap-4" >
                                                            <span>{elm.acadamicbutton}</span>{" "}
                                                            {/* <i className="autinisd-arrow-right-line"></i> */}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* <Button icon="pi pi-arrow-right" onClick={() => props.setAcademicvisible(true)} /> */}

                    </section>
                </div>
            </div>
            <Sidebar
                visible={props.visible}

                position="right"
                style={{ background: "#FFF", borderRadius: "8px 8px 0 0" }}
                className="custmSidebar width960"
                onHide={() => props.onHides(false)}
                blockScroll={true}
            >

                <div className=' rounded-[24px] xl:rounded-[1.250vw] m-[24px]'>
                    <div className='w-full'>
                        <Image
                            src={"/assets/images/image22.svg"}
                            width={912}
                            height={174}
                            className="w-auto"
                            alt='img'
                        />
                    </div>
                    <div className='mt-[24px] xl:mt-[1.250vw] grid grid-cols-12'>
                    {activeIndex == 1 ?
                        <div className='col-span-7 p-[16px] xl:p-[0.833vw]'>
                            
                                    <div>
                                         <div className='text-[#374151] text-[24px] xl:text[1.250vw] font-bold '>Section 504 Services</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>
                            <diV className="inline-block">
                                <div className='flex items-center gap-4 bg-[#FFFFFF]  mt-[16px] shadow-sm shadow-[#0000001A] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_English</div>
                                </div>
                                <div className='flex items-center gap-4 bg-[#FFFFFF] shadow-sm shadow-[#0000001A] mt-[16px] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_Spanish</div>
                                </div>
                            </diV>

                            <div className='text-[#374151] text-[18px] mt-[24px] xl:mt-[1.250vw] xl:text-[0.938vw] font-semibold '>Child Find</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>

                                        </div>
                             
                           
                        </div>: null}
                        {activeIndex == 2 ?
                        <div className='col-span-7 p-[16px] xl:p-[0.833vw]'>
                           
                                    <div>
                                         <div className='text-[#374151] text-[24px] xl:text[1.250vw] font-bold '>Eligibility for Section 504 Services</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>
                            <diV className="inline-block">
                                <div className='flex items-center gap-4 bg-[#FFFFFF]  mt-[16px] shadow-sm shadow-[#0000001A] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_English</div>
                                </div>
                                <div className='flex items-center gap-4 bg-[#FFFFFF] shadow-sm shadow-[#0000001A] mt-[16px] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_Spanish</div>
                                </div>
                            </diV>

                            <div className='text-[#374151] text-[18px] mt-[24px] xl:mt-[1.250vw] xl:text-[0.938vw] font-semibold '>Child Find</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>

                                        </div>
                           
                           
                        </div>: null}
                        {activeIndex == 3 ?
                        <div className='col-span-7 p-[16px] xl:p-[0.833vw]'>
                           
                                    <div>
                                         <div className='text-[#374151] text-[24px] xl:text[1.250vw] font-bold '>Procedural Safeguards</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>
                            <diV className="inline-block">
                                <div className='flex items-center gap-4 bg-[#FFFFFF]  mt-[16px] shadow-sm shadow-[#0000001A] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_English</div>
                                </div>
                                <div className='flex items-center gap-4 bg-[#FFFFFF] shadow-sm shadow-[#0000001A] mt-[16px] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_Spanish</div>
                                </div>
                            </diV>

                            <div className='text-[#374151] text-[18px] mt-[24px] xl:mt-[1.250vw] xl:text-[0.938vw] font-semibold '>Child Find</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>

                                        </div>
                           
                           
                        </div>: null}
                        {activeIndex == 4 ?
                        <div className='col-span-7 p-[16px] xl:p-[0.833vw]'>
                           
                                    <div>
                                         <div className='text-[#374151] text-[24px] xl:text[1.250vw] font-bold '>Accomodations on State Testing and College Entrance Exams</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>
                            <diV className="inline-block">
                                <div className='flex items-center gap-4 bg-[#FFFFFF]  mt-[16px] shadow-sm shadow-[#0000001A] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_English</div>
                                </div>
                                <div className='flex items-center gap-4 bg-[#FFFFFF] shadow-sm shadow-[#0000001A] mt-[16px] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_Spanish</div>
                                </div>
                            </diV>

                            <div className='text-[#374151] text-[18px] mt-[24px] xl:mt-[1.250vw] xl:text-[0.938vw] font-semibold '>Child Find</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>

                                        </div>
                           
                           
                        </div>: null}
                        {activeIndex == 5 ?
                        <div className='col-span-7 p-[16px] xl:p-[0.833vw]'>
                           
                                    <div>
                                         <div className='text-[#374151] text-[24px] xl:text[1.250vw] font-bold '>Resources</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>
                            <diV className="inline-block">
                                <div className='flex items-center gap-4 bg-[#FFFFFF]  mt-[16px] shadow-sm shadow-[#0000001A] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_English</div>
                                </div>
                                <div className='flex items-center gap-4 bg-[#FFFFFF] shadow-sm shadow-[#0000001A] mt-[16px] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_Spanish</div>
                                </div>
                            </diV>

                            <div className='text-[#374151] text-[18px] mt-[24px] xl:mt-[1.250vw] xl:text-[0.938vw] font-semibold '>Child Find</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>

                                        </div>
                           
                           
                        </div>: null}
                        {activeIndex == 6 ?
                        <div className='col-span-7 p-[16px] xl:p-[0.833vw]'>
                           
                                    <div>
                                         <div className='text-[#374151] text-[24px] xl:text[1.250vw] font-bold '>Contact Information</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>
                            <diV className="inline-block">
                                <div className='flex items-center gap-4 bg-[#FFFFFF]  mt-[16px] shadow-sm shadow-[#0000001A] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_English</div>
                                </div>
                                <div className='flex items-center gap-4 bg-[#FFFFFF] shadow-sm shadow-[#0000001A] mt-[16px] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_Spanish</div>
                                </div>
                            </diV>

                            <div className='text-[#374151] text-[18px] mt-[24px] xl:mt-[1.250vw] xl:text-[0.938vw] font-semibold '>Child Find</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>

                                        </div>
                           
                           
                        </div>: null}
                        {activeIndex == 7 ?
                        <div className='col-span-7 p-[16px] xl:p-[0.833vw]'>
                           
                                    <div>
                                         <div className='text-[#374151] text-[24px] xl:text[1.250vw] font-bold '>HB 3928 Dyslexia Updates</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>
                            <diV className="inline-block">
                                <div className='flex items-center gap-4 bg-[#FFFFFF]  mt-[16px] shadow-sm shadow-[#0000001A] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_English</div>
                                </div>
                                <div className='flex items-center gap-4 bg-[#FFFFFF] shadow-sm shadow-[#0000001A] mt-[16px] px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] rounded-[6px] buttonShadow cursor-pointer'>
                                    <div className='bg-[#FDFAFA] p-[4px] rounded-[8px]'>
                                        <Image src={'/assets/website/curriculum_icon.svg'} width={24} height={24} className='w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw]' alt='' />
                                    </div>
                                    <div className='text-[#374151] text-[14px] xl:text-[0.729vw] font-medium'>Section 504 Family Guidance_Spanish</div>
                                </div>
                            </diV>

                            <div className='text-[#374151] text-[18px] mt-[24px] xl:mt-[1.250vw] xl:text-[0.938vw] font-semibold '>Child Find</div>
                            <div className='text-[14px] text-[#4B586E] xl:text-[0.729vw] mt-[16px] xl:mt-[0.833vw]'>Section 504 of the Rehabilitation Act of 1973 is a civil rights law which prohibits discrimination against individuals with disabilities. Title II of the Americans with Disabilities Act of 1990 (ADA) extends this prohibition against discrimination to the full range of state and local government services, programs, or activities. Together, Austin Independent School District (AISD) refers to these laws as “Section 504.” Please review these helpful documents to learn more:</div>

                                        </div>
                           
                           
                        </div>: null}
                      
                        <div className='col-span-5 pl-[16px] xl:pl-[0.833vw]'>

                            {/* <div className='bg-[#A93439] text-[#FFFFFF] font-medium rounded-[8px] text-[18px] py-[13px] px-[16px] xl:text-[0.938vw] xl:py-[0.677vw] xl:px-[0.833vw] xl:rounded-[0.417vw]'>Section 504 Services</div> */}


                            {acadamicPopupData.map((element, ind) => {
                                return (
                                    <div>
                                        <div onClick={() =>setActiveIndex(element.id)} className={`${activeIndex === element.id ? 'bg-[#A93439] text-[#fff] font-medium rounded-[8px] text-[18px] py-[13px] px-[16px] xl:text-[0.938vw] xl:py-[0.677vw] xl:px-[0.833vw] xl:rounded-[0.417vw] cursor-pointer' : 'bg-[#F5F6F7] text-[#374151] text font-medium rounded-[8px] py-[13px] px-[16px] my-[8px] xl:py-[0.677vw] xl:px-[0.833vw] xl:rounded-[0.417vw] cursor-pointer'}`}>
                                            <div className=' font-medium text-[18px] xl:text-[0.938vw]'>{element.description}</div>
                                        </div>
                                    </div>

                                );
                            })}

                            <div className='p-[16px] rounded-[8px] mt-[16px] border border-[#BECDE3] xl:mt-[0.833vw] xl:p-[0.833vw] xl:rounded-[0.417vw]'>
                                <div className='text-[#374151] text-[20px] xl:text-[1.042vw]'>Contact Information</div>
                                <div className='mt-[16px] text-[#4B586E] text-[14px] xl:text-[0.729vw] xl:mt-[0.833vw]'>For more information, contact Help Desk at <span className='font-semibold'>512-414-9669 or 512-414-7733</span></div>
                            </div>

                        </div>
                    </div>

                    <div>


                    </div>

              
                </div>




            </Sidebar>

        </>
    );

}

export default Academic