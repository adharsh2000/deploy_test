import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Whychosseaustinisd() {
  return (
    <div className='xl:px-[13.542vw] px-[200px] xl:mt-[3.021vw] mt-[50px]  relative z-[1]'>
      <div className='text-center'>
        <div className='text-[#374151] xl:text-[2.500vw] text-[40px] font-extrabold'>Why Choose <span className='font-[600]'>Austin ISD?</span></div>
        <div className='text-[#4B586E] xl:text-[1.042vw] text-lg font-[400]'>Austin ISD is dedicated to preparing your child for college, career, and life. They provide a safe, academically challenging environment from Pre-K to 12th grade, emphasizing social-emotional learning. </div>
        <div className='text-[#374151] xl:text-[1.042vw] text-lg font-[600]'> We're ready! Are you?</div>
      </div>
      <div className='xl:mt-[2.344vw] mt-[40px] grid grid-cols-12 xl:gap-[3.229vw] gap-[50px]'>
        <div className='col-span-4 border-r border-[#BECDE3] flex flex-col items-end xl:pr-[1.667vw] pr-[30px] xl:space-y-[0.833vw] space-y-4'>
          <div className='text-[#374151] xl:text-[1.250vw] text-[22px] font-bold'>Highlighted Programs & Courses</div>
          <div><Link href={''} className='text-[#4B586E] xl:text-[1.042vw] text-[22px]'><i className='autinisd-arrow-right-line'></i></Link></div>
          <div className='grid grid-cols-3 xl:gap-[0.417vw] gap-2'>
            <Link href={''} className='bg-[#A93439] border border-[#A93439] text-white xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 xl:text-[0.833vw] text-base font-normal xl:rounded-[0.417vw] rounded-md text-center w-full inline-block'>Sports</Link>
            <Link href={''} className='bg-[#DBE1EA] border border-[#BECDE3] text-[#4B586E] xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 xl:text-[0.833vw] text-base font-normal xl:rounded-[0.417vw] rounded-md text-center w-full inline-block hover:bg-[#A93439] hover:border-[#A93439] hover:text-white transition ease-in-out delay-200'>Arts</Link>
            <Link href={''} className='bg-[#DBE1EA] border border-[#BECDE3] text-[#4B586E] xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 xl:text-[0.833vw] text-base font-normal xl:rounded-[0.417vw] rounded-md text-center w-full inline-block hover:bg-[#A93439] hover:border-[#A93439] hover:text-white transition ease-in-out delay-200'>Diversity</Link>
            <Link href={''} className='bg-[#DBE1EA] border border-[#BECDE3] text-[#4B586E] xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 xl:text-[0.833vw] text-base font-normal xl:rounded-[0.417vw] rounded-md text-center w-full inline-block hover:bg-[#A93439] hover:border-[#A93439] hover:text-white transition ease-in-out delay-200'>Equity</Link>
            <Link href={''} className='bg-[#DBE1EA] border border-[#BECDE3] text-[#4B586E] xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 xl:text-[0.833vw] text-base font-normal xl:rounded-[0.417vw] rounded-md text-center w-full inline-block hover:bg-[#A93439] hover:border-[#A93439] hover:text-white transition ease-in-out delay-200'>Pre-K</Link>
            <Link href={''} className='bg-[#DBE1EA] border border-[#BECDE3] text-[#4B586E] xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 xl:text-[0.833vw] text-base font-normal xl:rounded-[0.417vw] rounded-md text-center w-full inline-block whitespace-nowrap hover:bg-[#A93439] hover:border-[#A93439] hover:text-white transition ease-in-out delay-200'>College Prep</Link>
            <Link href={''} className='bg-[#DBE1EA] border border-[#BECDE3] text-[#4B586E] xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 xl:text-[0.833vw] text-base font-normal xl:rounded-[0.417vw] rounded-md text-center w-full inline-block hover:bg-[#A93439] hover:border-[#A93439] hover:text-white transition ease-in-out delay-200'>P-Tech</Link>
            <Link href={''} className='bg-[#DBE1EA] border border-[#BECDE3] text-[#4B586E] xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 xl:text-[0.833vw] text-base font-normal xl:rounded-[0.417vw] rounded-md text-center w-full inline-block hover:bg-[#A93439] hover:border-[#A93439] hover:text-white transition ease-in-out delay-200'>& more!</Link>
          </div>
        </div>
        <div className='col-span-8'>
          <div className='grid grid-cols-3 xl:gap-y-[2.604vw] gap-y-[40px]'>
            {/*col*/}
            <div className='xl:space-y-[0.313vw] space-y-1.5'>
              <div><Image src={'/assets/website/Language.svg'} width={40} height={40} alt='Language'/></div>
              <div className='text-[#374151] xl:text-[0.833vw] text-base font-bold'>Dual Language</div>
              <div className='text-[#4B586E] xl:text-[0.729vw] text-sm font-light'>Helps students excel academically while becoming bilingual, biliterate and bicultural.</div>
            </div>
            {/*col*/}
            {/*col*/}
            <div className='xl:space-y-[0.313vw] space-y-1.5'>
              <div><Image src={'/assets/website/camada.svg'} width={40} height={40} alt='Language'/></div>
              <div className='text-[#374151] xl:text-[0.833vw] text-base font-bold'>Magnet Programs</div>
              <div className='text-[#4B586E] xl:text-[0.729vw] text-sm font-light'>Excel with our Magnet Programs</div>
            </div>
            {/*col*/}
            {/*col*/}
            <div className='xl:space-y-[0.313vw] space-y-1.5'>
              <div><Image src={'/assets/website/montessori.svg'} width={40} height={40} alt='Language'/></div>
              <div className='text-[#374151] xl:text-[0.833vw] text-base font-bold'>Montessori</div>
              <div className='text-[#4B586E] xl:text-[0.729vw] text-sm font-light'>Learn collaboratively with Montessori</div>
            </div>
            {/*col*/}
            {/*col*/}
            <div className='xl:space-y-[0.313vw] space-y-1.5'>
              <div><Image src={'/assets/website/academies.svg'} width={40} height={40} alt='Language'/></div>
              <div className='text-[#374151] xl:text-[0.833vw] text-base font-bold'>Fine Arts Academies</div>
              <div className='text-[#4B586E] xl:text-[0.729vw] text-sm font-light'>Learn and perform with Fine Arts Academies</div>
            </div>
            {/*col*/}
            {/*col*/}
            <div className='xl:space-y-[0.313vw] space-y-1.5'>
              <div><Image src={'/assets/website/tech-edu.svg'} width={40} height={40} alt='Language'/></div>
              <div className='text-[#374151] xl:text-[0.833vw] text-base font-bold'>Technical Education</div>
              <div className='text-[#4B586E] xl:text-[0.729vw] text-sm font-light'>Get a hands-on preparation with Career & Technical Education</div>
            </div>
            {/*col*/}
            {/*col*/}
            <div className='xl:space-y-[0.313vw] space-y-1.5'>
              <div><Image src={'/assets/website/gander-school.svg'} width={40} height={40} alt='Language'/></div>
              <div className='text-[#374151] xl:text-[0.833vw] text-base font-bold'>Single-gender Schools</div>
              <div className='text-[#4B586E] xl:text-[0.729vw] text-sm font-light'>Learn among peers in single-gender schools</div>
            </div>
            {/*col*/}
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-[40px] xl:mt-[3.65vw] mt-[70px] mb-[-25px] xl:mb-[-2.09vw]'>
        <Link href="" className='bg-[#A93439] hover:bg-[#762428] rounded-full py-[12px] xl:py-[1.25vw] px-[20px] xl:px-[1.56vw] text-[16px] xl:text-[0.94vw] font-semibold text-white ease-linear duration-200 w-[250px] xl:w-[17.24vw] text-center'>
          Enrol today
        </Link>
      </div>
    </div>
  )
}
