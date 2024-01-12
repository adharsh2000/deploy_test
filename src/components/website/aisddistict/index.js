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
const myInter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: "swap",
})
function AisdDistrict() {
  return (
  <>
  <div className='aisd-district-profile-wrap px-[30px]  xl:px-[10.417vw] pb-[60px] xl:pb-[79px]'>
  <div className='grid grid-cols-12 bg-[#fff] rounded-[22px] xl:rounded-[1.146vw] items-center'>
  <div className='col-span-12 xl:col-span-6 relative'>
  <Image
                              src={"/assets/images/vectorimg1.png"}
                              width={776}
                          height={684}
                            className="rounded-l-[22px] xl:rounded-l-[1.146vw]"
                            alt='abc'
                          />

                          <div className={myInter.className}>
                            <div className='absolute top-[37%] left-[18%]'>
                            <div className='text-[40px] text-[#374151] xl:text-[2.083vw] font-extrabold' > EST. 1881</div>
                            <div className=' text-[#4B586E] text-[33px] font-normal max-w-[300px] '>Austin ISD is the <span className='text-[#A93439]'>eighth-largest</span> school district in Texas.</div>
                            </div>
                          </div>
  
  </div>
  <div className=' col-span-12 xl:col-span-6 px-[20px] xl:px-[0px]'>
  
  <div className={`${myMontserrat.className} text-[#374151]  font-medium  text-[40px] xl:text-[2.083vw] mt-[50px] xl:mt-[2.604vw]`}><span className='font-extrabold'>Austin</span> ISD District Profile</div>
 
  <div className={`${myInter.className} flex justify-between items-center mt-[51px] xl:mt-[2.656vw] mr-[50px] xl:mr-[2.604vw]`}> 
    <div className=''>
             <div className='text-[#9ba0a8] font-semibold text-[33px] xl:text-[1.719vw]  xl:leading-[1.419vw]'> Students</div>
             <div className='text-[30px] font-extrabold text-[#374151] xl:text-[4.250vw] leading-[30px] xl:leading-[5.250vw] '>73,384</div>
    </div>
    <div className=''>
             <div className='text-[#9ba0a8] font-semibold text-[33px] xl:text-[1.719vw] xl:leading-[1.419vw]'> Schools</div>
             <div className='text-[30px] font-extrabold text-[#374151] xl:text-[4.250vw] leading-[30px] xl:leading-[5.250vw]'>116</div>
    </div>
  </div>

  <div className={`${myInter.className} flex flex-col md:flex-row justify-between items-center my-[51px] xl:my-[2.656vw]  mx-auto gap-[12px] mr-[50px] xl:mr-[2.604vw]`}>
  {/* w-[900px] xl:w-[32.875vw] */}
    <div className='bg-[#F9FAFB] py-[20px] contentaduj px-[33px] xl:py-[1.042vw] xl:px-[1.719vw]'>
        <div className='text-[#374151] text-[60px] font-extrabold xl:text-[2.8vw] xl:leading-[3.125vw]'>5,508</div>
        <div className='text-[#4B586E] text-[16px] font-medium xl:text-[0.833vw] xl:leading-[0.833vw] contentaddheight text-center'>Classroom Teachers</div>
    </div>
    <div className='bg-[#F9FAFB] py-[20px] contentaduj px-[33px] xl:py-[1.042vw] xl:px-[1.719vw]'>
        <div className='text-[#374151] text-[60px] font-extrabold xl:text-[2.8vw] xl:leading-[3.125vw]'>1,569</div>
        <div className='text-[#4B586E] text-[16px] font-medium xl:text-[0.833vw] xl:leading-[0.833vw] contentaddheight text-center'>Administrators & Professional Staff</div>
    </div>
    <div className='bg-[#F9FAFB] py-[20px] contentaduj px-[33px] xl:py-[1.042vw] xl:px-[1.719vw]'>
        <div className='text-[#374151] text-[60px] font-extrabold xl:text-[3.125vw] xl:leading-[3.125vw]'>3,866</div>
        <div className='text-[#4B586E] text-[13px] font-medium xl:text-[0.677vw xl:leading-[0.833vw] contentaddheight text-center'>Bus Drivers, Custodians, Food Service Staff & Educational Aides</div>
    </div>
  </div>
  </div>
  </div>
  </div>
 
  </>
  )
}

export default AisdDistrict