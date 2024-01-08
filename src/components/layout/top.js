import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { OverlayPanel } from 'primereact/overlaypanel';
import { Inter, Montserrat } from '@next/font/google'
import { useRouter } from 'next/router';
import MegaMenuPopup from "../website/megamenupopup";

const myInter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: "swap",
})
const myMontserrat = Montserrat({
    weight: ['500'],
    subsets: ['latin'],
    display: "swap",
})



export default function Top({ ...pageProps }) {
    const router = useRouter();

    const Logout = () => {
        sessionStorage.clear()
        router.push('/')
    }
    const [UserName, setUserName] = useState('');
    const [ProfileImage, setProfileImage] = useState('');
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };
    const checkSessionStorage = () => {
        // Check if the desired value exists in session storage
        const value = sessionStorage.getItem('UserName');
        if (value) {
            setUserName(sessionStorage.getItem('UserName'))
            setProfileImage(sessionStorage.getItem("UserImage"))
        } else {
            // Value not found, keep checking after a short delay
            setTimeout(checkSessionStorage, 500);
        }
    };
    useEffect(() => {
        checkSessionStorage()
    }, [])

    const notificatio = useRef(null);
    const [megamenupopup, setmegamenupopup] = useState(false);

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const isScrolled = window.scrollY > 0;
                setScrolled(isScrolled);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    // Define a function to check if a given link is active
    const isLinkActive = (href) => {
        const { pathname } = useRouter();
        return pathname === href;
    };

    return (
        <header className={`${myInter.className} sticky top-0 z-[3]`} >
            <div className="bg-[#091221] px-[15px] lg:px-[20px] xl:px-[1.04vw]">
                <div className="xl:max-w-[88.3025vw] mx-auto flex justify-between overflow-hidden relative">
                    <div className="py-[10px] xl:py-[0.525vw] z-[2]">
                        <ul className="flex gap-4 mt-3">
                            <li>
                                <Link
                                    href={"/website/elibrary"}
                                    className={`${isLinkActive('/website/elibrary') || isLinkActive('/website/elibrary/elibrarycatalog') ? 'bg-[#A93439]' : ''} block text-[16px] xl:text-[0.833vw] text-white font-medium px-[8px] xl:px-[0.417vw] pt-[7px] xl:pt-[0.365vw] pb-[5px] xl:pb-[0.265vw] hover:bg-[#A93439] rounded-lg ease-linear duration-300`}
                                >
                                    eLibrary
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[16px] xl:text-[0.833vw] text-white font-medium px-[8px] xl:px-[0.417vw] pt-[7px] xl:pt-[0.365vw] pb-[5px] xl:pb-[0.265vw] hover:bg-[#A93439] rounded-lg ease-linear duration-300"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/website/messageboard"}
                                    className={`${isLinkActive('/website/messageboard') || isLinkActive('/website/messageboard/discussiondetails') ? 'bg-[#A93439]' : ''} block text-[16px] xl:text-[0.833vw] text-white font-medium px-[8px] xl:px-[0.417vw] pt-[7px] xl:pt-[0.365vw] pb-[5px] xl:pb-[0.265vw] hover:bg-[#A93439] rounded-lg ease-linear duration-300`}
                                >
                                    Message Board
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[16px] xl:text-[0.833vw] text-white font-medium px-[8px] xl:px-[0.417vw] pt-[7px] xl:pt-[0.365vw] pb-[5px] xl:pb-[0.265vw] hover:bg-[#A93439] rounded-lg ease-linear duration-300"
                                >
                                    AISD.TV
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${myMontserrat.className} absolute left-0 right-0 top-0 bottom-0 flex justify-center z-[1]`}>
                        <ul className="flex h-full">
                            <li className="h-full relative">
                                <span className="absolute left-[-10px] top-[-10px] bottom-[-10px] right-0 bg-[#e3a00866] rounded-full"></span>
                                <span className="absolute left-[-20px] top-[-10px] bottom-[-10px] right-0 bg-[#e3a0084d] rounded-full"></span>
                                <Link
                                    href={""}
                                    className="relative h-full flex items-center text-[16px] xl:text-[0.833vw] text-white font-medium pl-[24px] xl:pl-[1.25vw] pr-[16px] xl:pr-[0.833vw] py-[6px] xl:py-[0.317vw] bg-gradient-to-l from-[#735207] to-[#E3A008] rounded-l-full ease-linear duration-300"
                                >
                                    <span className="flex items-center gap-2">
                                        Give
                                        <i className="austin-give"></i>
                                    </span>
                                </Link>
                            </li>
                            <li className="h-full relative">
                                <span className="absolute right-[-10px] top-[-10px] bottom-[-10px] left-0 bg-[#4b7e7366] rounded-full"></span>
                                <span className="absolute right-[-20px] top-[-10px] bottom-[-10px] left-0 bg-[#4b7e734d] rounded-full"></span>
                                <Link
                                    href={""}
                                    className="relative h-full flex items-center text-[16px] xl:text-[0.833vw] text-white font-medium pl-[16px] xl:pl-[0.833vw] pr-[24px] xl:pr-[1.25vw] py-[6px] xl:py-[0.317vw] bg-gradient-to-l from-[#2a4a43] to-[#4b7e73] rounded-r-full ease-linear duration-300"
                                >
                                    <span className="flex items-center gap-2">
                                        <i className="austin-enroll"></i>
                                        Enroll
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="py-[10px] xl:py-[0.525vw] z-[2]">
                        <ul className="flex gap-4">
                            <li>
                                <Link
                                    href={""}
                                    className="block text-[16px] xl:text-[0.833vw] text-white hover:text-[#A93439] font-medium px-[8px] xl:px-[3.417vw] py-[6px] xl:py-[1.117vw] rounded-lg ease-linear duration-300"
                                >
                                    <span className="flex gap-3">
                                        Spanish
                                        <Image
                                            src="/assets/images/flag/spanish.svg"
                                            width="30"
                                            height="20"
                                            alt=""
                                            className=""
                                        />
                                    </span>
                                </Link>
                            </li>
                            <li className="flex gap-2 items-center flex-col">
                                <div className="flex gap-2 items-center">
                                    {ProfileImage && !imageError ? (
                                        <Image
                                            src={ProfileImage}
                                            width={40}
                                            height={40}
                                            className="rounded-full w-11 h-11"
                                            alt=""
                                            onError={handleImageError}
                                        />
                                    ) : (
                                        <div className="text-xl rounded-full w-11 h-11 flex items-center justify-center bg-gray-500 text-white">
                                            {UserName.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <span className="block text-[16px] xl:text-[0.833vw] text-white font-medium px-[8px] xl:px-[0.417vw] py-[6px] xl:py-[0.317vw] rounded-lg ease-linear duration-300">
                                            {UserName}
                                        </span>
                                        <span
                                            onClick={Logout}
                                            className="cursor-pointer block text-[16px] xl:text-[0.833vw] text-white hover:text-[#A93439] font-medium px-[8px] xl:px-[0.417vw] py-[6px] xl:py-[0.317vw] rounded-lg ease-linear duration-300"
                                        >
                                            Logout
                                        </span>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className={`${scrolled ? 'bg-[#a93439]' : 'bg-[#F0F2F6]'}  border-b border-[#BECDE3] px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[24px] xl:pt-[1.25vw] pb-[16px] xl:pb-[0.833vw] ease-linear duration-300`}>
                <div className="xl:max-w-[88.3025vw] mx-auto flex justify-between">
                    <div className="logo-frontend">
                        <Link
                            href={"/"}
                            className="block"
                        >
                            {scrolled ?
                                <Image
                                    src="/assets/images/logo-white.svg"
                                    width="177"
                                    height="53"
                                    alt=""
                                />
                                :
                                <Image
                                    src="/assets/images/logo.svg"
                                    width="177"
                                    height="53"
                                    alt=""
                                />
                            }
                        </Link>
                    </div>
                    <div className="flex items-center w-full justify-end">
                        <ul className="flex gap-2">
                            <li>
                                <Link
                                    href={""} onClick={() => setmegamenupopup(true)}
                                    className={`${scrolled ? 'text-[#E5E7EB] hover:text-[#fff]' : 'text-[#4B586E] hover:text-[#A93439]'} block text-[18px] xl:text-[0.94vw] font-medium px-[8px] xl:px-[0.417vw] py-[6px] xl:py-[0.317vw] rounded-lg ease-linear duration-300`}
                                >
                                    <i className="austin-menu-drawer"></i>
                                </Link>
                            </li>
                            <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
                            <li>
                                <Link
                                   href='/website/aboutus'
                                    className={`${scrolled ? 'text-[#E5E7EB] hover:text-[#fff]' : 'text-[#4B586E] hover:text-[#A93439]'} block text-[18px] xl:text-[0.94vw] font-medium px-[8px] xl:px-[0.417vw] py-[6px] xl:py-[0.317vw] rounded-lg ease-linear duration-300`}
                                >
                                    Our District
                                </Link>
                            </li>
                            <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
                            <li>
                                <Link
                                    href={""}
                                    className={`${scrolled ? 'text-[#E5E7EB] hover:text-[#fff]' : 'text-[#4B586E] hover:text-[#A93439]'} block text-[18px] xl:text-[0.94vw] font-medium px-[8px] xl:px-[0.417vw] py-[6px] xl:py-[0.317vw] rounded-lg ease-linear duration-300`}
                                >
                                    Students
                                </Link>
                            </li>
                            <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
                            <li>
                                <Link
                                    href={""}
                                    className={`${scrolled ? 'text-[#E5E7EB] hover:text-[#fff]' : 'text-[#4B586E] hover:text-[#A93439]'} block text-[18px] xl:text-[0.94vw] font-medium px-[8px] xl:px-[0.417vw] py-[6px] xl:py-[0.317vw] rounded-lg ease-linear duration-300`}
                                >
                                    Families
                                </Link>
                            </li>
                            <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
                            <li>
                                <Link
                                    href={""}
                                    className={`${scrolled ? 'text-[#E5E7EB] hover:text-[#fff]' : 'text-[#4B586E] hover:text-[#A93439]'} block text-[18px] xl:text-[0.94vw] font-medium px-[8px] xl:px-[0.417vw] py-[6px] xl:py-[0.317vw] rounded-lg ease-linear duration-300`}
                                >
                                    Programs
                                </Link>
                            </li>
                            <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
                            <li>
                                <Link
                                    href={"/website/calendar"}
                                    className={`${scrolled ? 'text-[#E5E7EB] hover:text-[#fff]' : 'text-[#4B586E] hover:text-[#A93439]'} block text-[18px] xl:text-[0.94vw] font-medium px-[8px] xl:px-[0.417vw] py-[6px] xl:py-[0.317vw] rounded-lg ease-linear duration-300`}
                                >
                                    Calendar
                                </Link>
                            </li>
                            <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
                            <li>
                                <Link
                                    href={"/website/schools"}
                                    className={`${scrolled ? 'text-[#E5E7EB] hover:text-[#fff]' : 'text-[#4B586E] hover:text-[#A93439]'} block text-[18px] xl:text-[0.94vw] font-medium px-[8px] xl:px-[0.417vw] py-[6px] xl:py-[0.317vw] rounded-lg ease-linear duration-300`}
                                >
                                    Schools
                                </Link>
                            </li>
                            <li className="flex items-center ml-4">
                                <Link
                                    href={""}
                                    className="block text-[16px] xl:text-[0.833vw] text-white font-medium px-[8px] xl:px-[0.833vw] pt-[7px] xl:pt-[0.365vw] pb-[5px] xl:pb-[0.265vw] bg-[#1F2A37] hover:bg-[#A93439] rounded-lg ease-linear duration-300"
                                >
                                    Lets Talk!
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <MegaMenuPopup
                    visible={megamenupopup}
                    onHides={() => setmegamenupopup(false)}
                />
            </div>
        </header>
    );
}
