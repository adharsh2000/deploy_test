import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Iframe from 'react-iframe';

export default function Schoolcombanner() {
  return (
    <div className=" relative w-full h-[420px] left-0 right-0">
                <span class="mapouter w-full absolute  h-[420px] left-0 right-0 ">
                        { <Iframe
                            src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0"
                            scrolling="no" className="responsive-iframe"
                            style="width: 100%; height: 100%;"></Iframe> }
                      

                </span>
                <div className="flex justify-center w-full absolute top-0 mx-auto">
                    <Image src={'/assets/website/schools.png'} width={619} height={340} alt="Banner" />
                </div>
            </div>
  )
}
