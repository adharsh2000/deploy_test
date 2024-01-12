import React from 'react'
import { Montserrat } from '@next/font/google';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const myMontserrat = Montserrat({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})


export default function AisdTv() {
  
  return (
    <section className="pb-[20px] xl:pb-[1.25vw] text-white aisdtv-wrap">
      <div className='xl:max-w-[88.3025vw] mx-auto px-[20px] xl:px-[0] relative'>
        <div className='text-center'>
          <h2 className={`${myMontserrat.className} text-[36px] xl:text-[2.92vw] leading-[1.3] mb-[12] xl:mb-[0.625vw]`}>
            Aisd <span className="font-extrabold">TV</span>
          </h2>
          <p className={`${myMontserrat.className} text-[18px] xl:text-[1.25vw] mb-[20px] xl:mb-[1.67vw] text-[#ffffffa6]`}>Watch past events and other video contents<br/> in our tv Channel</p>
          <Link href="" className='bg-[#A93439] hover:bg-[#762428] rounded-full py-[10px] xl:py-[0.730vw] px-[20px] xl:px-[1.56vw] text-[16px] xl:text-[0.94vw] text-white ease-linear duration-200'>
            Open
          </Link>
          <div className='flex justify-center mt-[30px] xl:mt-[2.5vw]'>
            {/* <Image src="/assets/website/video-frame.svg" width="842" height="540" alt="" /> */}
            <div className='xl:w-[43.89vw] xl:h-[27.54vw]'>
              <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls={true} width={'100%'} height={'100%'} light={<img style={{maxHeight: '100%'}} src='/assets/website/video-frame.svg' alt='Thumbnail' />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
