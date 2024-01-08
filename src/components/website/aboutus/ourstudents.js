import React from 'react'
import { Montserrat } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Inter } from '@next/font/google'
const myMontserrat = Montserrat({
  weight: ['100', '200','300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: "swap",
})

function OurStudents() {
  return (
  <div className={`${myMontserrat.className}`}>

  <div className='xl:py-[3.604vw] py-[40px] px-[20px] ourstudent-bg'>
      <div className="flex grid grid-cols-3 gap-[18px] xl:gap-[1.083vw] items-center px-[2.604vw]">
       <div className='col-span-3 xl:col-span-2'>
            <Image src="/assets/website/aboutus_ourstudentimg1.png"  width="900"  height="700" className="mx-auto xl:w-[46.875vw] xl:h-[33.458vw] w-[] h-[]" alt='' />
            </div>
            <div >
                <div className='text-[#fff] text-[35px] xl:text-[1.979vw]  font-semibold  w-full'>Our Students</div>
                <p className='text-[#fff] text-[16px] xl:text-[0.833vw]  font-light xl:w-[26.042vw] w-[600px] mt-2'>AISD has a diverse student community. It includes children from all economic levels and backgrounds, and supports more than 100 languages, with 11 languages other than English taught in our schools, including Chinese, Japanese and American Sign Language.</p>
            </div>
      </div>
     
  </div>
 </div>
  )
}

export default OurStudents