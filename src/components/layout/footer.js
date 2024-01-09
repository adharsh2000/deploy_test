import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Inter, Montserrat } from '@next/font/google'
import { useRouter } from "next/router";

const myInter = Inter({
  weight: ['100', '200','300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: "swap",
})
const myMontserrat = Montserrat({
  weight: ['500'],
  subsets: ['latin'],
  display: "swap",
})



export default function Footer({ ...pageProps }) {
    const notificatio = useRef(null);
    const router = useRouter();

    return (
        <div className="relative pt-[150px]">            
            <footer className="bg-[#1F2A37] pt-[164px] pb-[58px] px-[15px] lg:px-[20px] xl:px-[1.04vw] relative" >
                <span className="absolute bottom-[0px] right-0 left-0 mx-auto z-[-1] flex justify-center">
                {router.pathname === '/website/aisdtv' ? 
                <Image
                    src="/assets/images/footer-round-dark.svg"
                    width="1921"
                    height="793"
                    alt=""
                />
                :
                <Image
                    src="/assets/images/footer-round.svg"
                    width="1921"
                    height="793"
                    alt=""
                />
                }
                </span>
                <div className="xl:max-w-[88.3025vw] mx-auto">
                    <div className="footer-logo absolute top-[0] left-0 right-0 mx-auto">
                        <div className="flex justify-center mb-[12px]">
                            <Link
                                href={""}
                            >              
                                <Image
                                    src="/assets/images/footer-logo-icon.svg"
                                    width="68"
                                    height="75"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <Link
                                href={""}
                            >              
                                <Image
                                    src="/assets/images/footer-logo.svg"
                                    width="191"
                                    height="56"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                    <p className="text-center mb-[20px] text-[#D1D5DB] text-[14px] ">© 2021 Austin Independent School District4000 S. I-H 35 Frontage Rd., Austin,<br/> TX 78704Main: 512-414-1700</p>
                    <div className="flex justify-center">
                        <ul className="flex gap-4 uppercase">                        
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    Accessibility
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    Acceptable Use Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    (en Español)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    Non Discrimination Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    DMCA Notice
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    Sitemap
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                    
                </div>  
            </footer>
            {/* <footer className="bg-[#1F2A37] pt-[164px] xl:pt-[8.32vw] pb-[58px] xl:pb-[3.12vw] relative" >
                <span className="absolute bottom-[0px] right-0 left-0 mx-auto z-[-1] flex justify-center">
                    <Image
                        src="/assets/images/footer-round.svg"
                        width="1921"
                        height="793"
                        alt=""
                    />
                </span>
                <div className="max-w-[1690px] mx-auto">
                    <div className="footer-logo absolute top-[-42px] left-0 right-0 mx-auto">
                        <div className="flex justify-center mb-[12px] xl:mb-[0.625vw]">
                            <Link
                                href={""}
                            >              
                                <Image
                                    src="/assets/images/footer-logo-icon.svg"
                                    width="68"
                                    height="75"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <Link
                                href={""}
                            >              
                                <Image
                                    src="/assets/images/footer-logo.svg"
                                    width="191"
                                    height="56"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                    <p className="text-center mb-[20px] xl:mb-[1.04vw] text-[#D1D5DB] text-[14px] xl:text-[0.730vw]">© 2021 Austin Independent School District4000 S. I-H 35 Frontage Rd., Austin,<br/> TX 78704Main: 512-414-1700</p>
                    <div className="flex justify-center">
                        <ul className="flex gap-4 uppercase">                        
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] xl:text-[0.625vw] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    Accessibility
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] xl:text-[0.625vw] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    Acceptable Use Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] xl:text-[0.625vw] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    (en Español)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] xl:text-[0.625vw] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    Non Discrimination Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] xl:text-[0.625vw] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] xl:text-[0.625vw] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    DMCA Notice
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[12px] xl:text-[0.625vw] text-[#D1D5DB] hover:text-[#fff] hover:underline ease-linear duration-300"
                                >
                                    Sitemap
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                    
                </div>  
            </footer> */}
        </div>
    );
}
