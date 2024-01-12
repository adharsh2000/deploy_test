import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { Montserrat } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import ProgramsPopup from './programspopup';


const myInter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: "swap",
})
const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

function Aisdtvbanner() {
  const [programsShow ,setProgramsShow] = useState(false);

  const [slide, setSlide] = useState(1);

  const showSlide = (number) => {
    setSlide(number);
  }

  return (
    <>
    <div className='relative'>
        <div className='aisd-banner-slider h-[945px] absolute left-0 top-0 right-0 overflow-hidden rounded-b-[10%]'>
            <div className={`${slide === 1 ? '' : 'hidden'} aisd-banner-slide absolute left-0 top-0 bottom-0 right-0`}>
                <Image src={'/assets/website/aisdtv/slider1.jpg'} width={1920} height={945} alt='slider' className='w-full'/>
            </div>
            <div className={`${slide === 2 ? '' : 'hidden'} aisd-banner-slide absolute left-0 top-0 bottom-0 right-0`}>
                <video autoPlay muted loop className=''>
                    <source src="/assets/website/aisdtv-video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={`${slide === 3 ? '' : 'hidden'} aisd-banner-slide absolute left-0 top-0 bottom-0 right-0`}>
                <video autoPlay muted loop className=''>
                    <source src="/assets/website/aisdtv-video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={`${slide === 4 ? '' : 'hidden'} aisd-banner-slide absolute left-0 top-0 bottom-0 right-0`}>
                <video autoPlay muted loop className=''>
                    <source src="/assets/website/aisdtv-video3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={`${slide === 5 ? '' : 'hidden'} aisd-banner-slide absolute left-0 top-0 bottom-0 right-0`}>
                <video autoPlay muted loop className=''>
                    <source src="/assets/website/aisdtv-video4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div className='absolute left-0 top-0 bottom-0 right-0'>
            <Image src={'/assets/website/aisdtv/watch_aisdtvlive_wrap.png'} width={1920} height={1352} alt='slider' className='w-full mx-auto'/>
        </div>
        <div className='xl:pt-[3.438vw] pt-[60px] xl:px-[6.979vw] px-[120px] relative'>
         <div className='flex items-start justify-between'>
            <div>
            {/***BreadCrumb***/}
            <div className="breadCrumb breadCrumb_style flex justify-center gap-[16px] mb-[20px] xl:mb-[1.04vw]">
            <div className="col">
            <Link href={""} className='text-[#E5E7EB]'><i className="austin-home"></i> Home</Link>
            </div>
            <div className="col text-[#E5E7EB]">
            <i className="austin-arrow-open-right"></i>
            </div>
            <div className="col text-[#A93439]">
            AISD.TV
            </div>
            </div>
            {/***BreadCrumb***/}
            <div className='text-white xl:text-[2.500vw] text-[40px] font-medium'>AISD.<span className='font-extrabold'>TV</span></div>
            </div>
            <div className='flex items-center xl:gap-[1.250vw] gap-[20px]'>
            <div className="p-inputgroup flex-1 custmSearch xl:w-[11.250vw]">
                <Button icon="austin-search" />
                <InputText placeholder="Search" style={{height:"54px"}} />
                <Button icon="austin-close" />
              </div>
              <Link   onClick={() => setProgramsShow(true)} href={''} className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] text-[14px] xl:text-[0.938vw] text-white flex justify-center min-h-full items-center h-[54px]">Programs</Link>
            </div>
         </div>

         <div className='xl:mt-[8.781vw] mt-[160px]'>
            <div className={`${slide === 1 ? '' : 'hidden'}`}>
                <div className='mb-[16px] xl:mb-[1.04vw]'>
                    <span className='bg-[#1F2A37] text-[#A93439] text-[16px] xl:text-[0.833vw] font-bold px-[10px] py-[5px] rounded-full'>Live TV</span>
                </div>
                <h2 className='text-white text-[48px] xl:text-[4.063vw] font-semibold xl:leading-[4.333vw] leading-normal min-h-[166px]'>Program Number 1</h2>
            </div>
            <div className={`${slide === 2 ? '' : 'hidden'}`}>
                <div className='mb-[16px] xl:mb-[1.04vw]'>
                    <span className='bg-[#1F2A37] text-[#A93439] text-[16px] xl:text-[0.833vw] font-bold px-[10px] py-[5px] rounded-full'>Live TV</span>
                </div>
                <h2 className='text-white text-[48px] xl:text-[4.063vw] font-semibold xl:leading-[4.333vw] leading-normal min-h-[166px]'>Marshall Middle School<br/>
Grand Opening</h2>
</div>
            <div className={`${slide === 3 ? '' : 'hidden'}`}>
                <div className='mb-[16px] xl:mb-[1.04vw]'>
                    <span className='bg-[#1F2A37] text-[#A93439] text-[16px] xl:text-[0.833vw] font-bold px-[10px] py-[5px] rounded-full'>Live TV</span>
                </div>
                <h2 className='text-white text-[48px] xl:text-[4.063vw] font-semibold xl:leading-[4.333vw] leading-normal min-h-[166px]'>50th Annual Marching<br/>
Band Jamboree</h2>
</div>
            <div className={`${slide === 4 ? '' : 'hidden'}`}>
                <div className='mb-[16px] xl:mb-[1.04vw]'>
                    <span className='bg-[#1F2A37] text-[#A93439] text-[16px] xl:text-[0.833vw] font-bold px-[10px] py-[5px] rounded-full'>Live TV</span>
                </div>
                <h2 className='text-white text-[48px] xl:text-[4.063vw] font-semibold xl:leading-[4.333vw] leading-normal min-h-[166px]'>Navarro Early College High School<br/>
Agriculture Program </h2>
</div>
            <div className={`${slide === 5 ? '' : 'hidden'}`}>
                <div className='mb-[16px] xl:mb-[1.04vw]'>
                    <span className='bg-[#1F2A37] text-[#A93439] text-[16px] xl:text-[0.833vw] font-bold px-[10px] py-[5px] rounded-full'>Live TV</span>
                </div>
                <h2 className='text-white text-[48px] xl:text-[4.063vw] font-semibold xl:leading-[4.333vw] leading-normal min-h-[166px]'>All City Orchestra 2023</h2>
            </div>
         </div>
         <div className='xl:mt-[3vw] mt-[45px] xl:space-y-[3.229vw] space-y-[55px]'>
            <div className='text-white xl:text-[1.250vw] text-[22px] font-normal'>Featured Programs</div>
            {/**Thubmnail***/}
            <div className='grid grid-cols-5 xl:gap-[0.773vw] gap-3.5 relative z-10'>
                {/**col***/}
                <div className='feat_prog_box' onMouseOver={() => showSlide(1)}>
                    <div><Image src={'/assets/website/aisdtv/all-city-list.png'} width={318} height={171} alt='All City List' className='xl:rounded-tl-[0.833vw] rounded-tl-2xl xl:rounded-tr-[0.833vw] rounded-tr-2xl' /></div>
                    <div className='xl:py-[0.625vw] py-3 xl:px-[1.042vw] px-[18px] space-y-1 list_content_box'>
                        <div className='heading_one'>All-City Orchestra</div>
                        <div className='heading_tow'>Lorem ipsum dolor sit amet consectetur. Ut ac egestas enim odio.</div>
                        <div><Link href={''}><span>View Now</span><i className='autinisd-play-circle'></i></Link></div>
                    </div>
                </div>
                {/**col***/}
                <div className='feat_prog_box' onMouseOver={() => showSlide(2)}>
                    <div><Image src={'/assets/website/aisdtv/all-city-list01.png'} width={318} height={171} alt='All City List' className='xl:rounded-tl-[0.833vw] rounded-tl-2xl xl:rounded-tr-[0.833vw] rounded-tr-2xl' /></div>
                    <div className='xl:py-[0.625vw] py-3 xl:px-[1.042vw] px-[18px] space-y-1 list_content_box'>
                        <div className='heading_one'>All-City Orchestra</div>
                        <div className='heading_tow'>Lorem ipsum dolor sit amet consectetur. Ut ac egestas enim odio.</div>
                        <div><Link href={''}><span>View Now</span><i className='autinisd-play-circle'></i></Link></div>
                    </div>
                </div>
                {/**col***/}
                <div className='feat_prog_box' onMouseOver={() => showSlide(3)}>
                    <div><Image src={'/assets/website/aisdtv/all-city-list02.png'} width={318} height={171} alt='All City List' className='xl:rounded-tl-[0.833vw] rounded-tl-2xl xl:rounded-tr-[0.833vw] rounded-tr-2xl' /></div>
                    <div className='xl:py-[0.625vw] py-3 xl:px-[1.042vw] px-[18px] space-y-1 list_content_box'>
                        <div className='heading_one'>All-City Orchestra</div>
                        <div className='heading_tow'>Lorem ipsum dolor sit amet consectetur. Ut ac egestas enim odio.</div>
                        <div><Link href={''}><span>View Now</span><i className='autinisd-play-circle'></i></Link></div>
                    </div>
                </div>
                {/**col***/}
                <div className='feat_prog_box' onMouseOver={() => showSlide(4)}>
                    <div><Image src={'/assets/website/aisdtv/all-city-list03.png'} width={318} height={171} alt='All City List' className='xl:rounded-tl-[0.833vw] rounded-tl-2xl xl:rounded-tr-[0.833vw] rounded-tr-2xl' /></div>
                    <div className='xl:py-[0.625vw] py-3 xl:px-[1.042vw] px-[18px] space-y-1 list_content_box'>
                        <div className='heading_one'>All-City Orchestra</div>
                        <div className='heading_tow'>Lorem ipsum dolor sit amet consectetur. Ut ac egestas enim odio.</div>
                        <div><Link href={''}><span>View Now</span><i className='autinisd-play-circle'></i></Link></div>
                    </div>
                </div>
                {/**col***/}
                <div className='feat_prog_box' onMouseOver={() => showSlide(5)}>
                    <div><Image src={'/assets/website/aisdtv/all-city-list04.png'} width={318} height={171} alt='All City List' className='xl:rounded-tl-[0.833vw] rounded-tl-2xl xl:rounded-tr-[0.833vw] rounded-tr-2xl' /></div>
                    <div className='xl:py-[0.625vw] py-3 xl:px-[1.042vw] px-[18px] space-y-1 list_content_box'>
                        <div className='heading_one'>All-City Orchestra</div>
                        <div className='heading_tow'>Lorem ipsum dolor sit amet consectetur. Ut ac egestas enim odio.</div>
                        <div><Link href={''}><span>View Now</span><i className='autinisd-play-circle'></i></Link></div>
                    </div>
                </div>
            </div>
            {/**Thubmnail***/}
         </div>
        </div>
        <ProgramsPopup 
        visible={programsShow}
        onHides={() => setProgramsShow(false)}
      />


    </div>
    <div className='relative'>        
        <div className='watch_aisdtvlive_wrap'>
            <div className='flex items-center justify-center xl:pt-[2vw] pt-[30px] xl:pb-[9.375vw] pb-[160px] relative'>
                <div className='xl:w-[52.135vw] w-[800px] flex flex-col items-center'>
                    <div className='text-white xl:text-[4.063vw] text-[40px] font-normal'>Watch <span className='font-semibold'>AISD.TV</span> Live</div>
                    <div className='text-[#D1D5DB] xl:text-[1.083vw] text-[18px] xl:mt-[2.500vw] mt-[40px] text-center'>Founded in 1982, AISD.TV is the official Public Access TV and Streaming channel of the Austin Independent School District. We are Channel 22 on Spectrum (Time Warner Cable), Grande, and AT&T U-verse (Ch. 99). Watch our free live-stream on Apple TV, Roku, and right here at AISD.TV.</div>
                    <div className='xl:mt-[2.135vw] mt-[35px]'><Link href={''} className='text-white font-bold xl:text-[0.825vw] text-base bg-[#A93439] rounded-full xl:px-[1.651vw] px-[25px] xl:py-[0.885vw] py-4 flex items-center xl:gap-[1.100vw] gap-3'><i className='autinisd-play-circle'></i><span>Watch Live Now</span></Link></div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Aisdtvbanner;
