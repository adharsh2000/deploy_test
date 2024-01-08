import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {

    const settings = {
        dots: true,
        fade: false,
        infinite: false,
        nextArrow:false,
        prevArrow:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 968,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    };

  return (
    <div className='xl:pt-[2.344vw] pt-10 xl:px-[5.990vw] px-[100px]'>
    <div className=' xl:rounded-[1.250vw] rounded-3xl text-black xl:p-[2.083vw] p-[40px] relative z-[1]'>
    Banner
    </div>
    </div>
  )
}
