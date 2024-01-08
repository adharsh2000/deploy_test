import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Inter } from '@next/font/google'
import ModulesApps from "../admin/popup/modulesapps";
import { useRouter } from "next/router";

const myInter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: "swap",
})

export default function AdminTop({ ...pageProps }) {
    const notificatio = useRef(null);
    const userprofile = useRef(null);
    const [addModulesApps, setModulesApps] = useState(false);
    const [profilePicture, setProfilePicture] = useState("");
    const [profileName, setProfileName] = useState("");
    const router = useRouter();

    const Logout = () => {
        sessionStorage.clear()
        router.push('/admin')
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log(sessionStorage?.getItem("AdminUserImage"),sessionStorage?.getItem("AdminUserName"))
            setProfilePicture(sessionStorage?.getItem("AdminUserImage") ? sessionStorage?.getItem("AdminUserImage") : "")
            setProfileName(sessionStorage?.getItem("AdminUserName") ? sessionStorage?.getItem("AdminUserName") : "")
        }
    }, [])

    return (
        <header className="sticky top-0 z-[3]">
            <div className={myInter.className}>
                <div className={`pb-[13px] xl:pb-[0.677vw] bg-white flex items-center justify-between pt-[21px] xl:pt-[1.094vw] pr-4 xl:pr-[1.667vw] pl-[118px] xl:pl-[128px] dark:bg-[#191A1E] `}>
                    <div className="">
                        <div className="flex items-center gap-2 text-[12px] xl:text-[0.625vw] text-[#888] mb-1 xl:mb-[0.208vw]">
                            <div className="cursor-pointer">Home</div>
                            <i className="autinisd-right text-[8px] xl:text-[0.417vw]"></i>
                            <div className="cursor-pointer">Portal</div>
                            <i className="autinisd-right text-[8px] xl:text-[0.417vw]"></i>
                            <div className="text-[#262626]">{pageProps.pageName}</div>
                        </div>
                        <div className={`${myInter.className} text-[#262626] xl:text-[1.250vw] text-[24px] leading-7 dark:text-[#fff]`}>{pageProps.pageTitle}</div>
                    </div>
                    <div className="flex items-center xl:gap-[1.250vw] gap-5">
                        <div className="flex items-center gap-4 xl:gap-[0.833vw]">
                            <Link href={''} className="xl:p-[0.625vw]" title="Message"><Image src={'/assets/admin/svg/messages.svg'} width={24} height={28} alt="Message" /></Link>
                            <Link href={''} className="xl:p-[0.625vw]" onClick={(e) => notificatio.current.toggle(e)} title="Notification"><Image src={'/assets/admin/svg/notificatio-bell.svg'} width={24} height={28} alt="Notification" /></Link>
                            <Link href={''} onClick={() => setModulesApps(true)} className="xl:p-[0.625vw]" title="Notification"><Image src={'/assets/admin/svg/element-plus.svg'} width={24} height={28} alt="Notification" /></Link>
                        </div>
                        <div className="flex items-center xl:gap-[0.625vw] gap-3 cursor-pointer" onClick={(e) => userprofile.current.toggle(e)}>
                            <div className="text-right space-y-1">
                                <div className="text-[#4B586E] xl:text-[0.833vw] text-base font-semibold xl:leading-[0.833vw] leading-4">{profileName ? profileName : "Jese Leos"}</div>
                                <div className="text-[#9CA1AB] xl:text-[0.729vw] text-sm font-normal xl:leading-[0.729vw] leading-[14px]">Admin</div>
                            </div>
                            <div><Image src={profilePicture === "" ? "/assets/admin/left-menu-icons/profile.svg" : profilePicture} width={48} height={48} alt='profile' className="rounded-full" /></div>
                            <div className="text-[#9CA1AB] xl:text-[1.302vw]"><i className="autinisd-arrow-circle-down"></i></div>
                        </div>
                    </div>
                </div>

                <OverlayPanel ref={notificatio} className="notificatio_popup">
                    <div className=''>
                        <div className="w-full min-w-[418px] origin-top-right bg-white dark:bg-[#24262D] box-shadow">
                            <div className="flex items-center justify-between">
                                <div className="text-[#293141] dark:text-[#FFFFFF] text-sm lg:text-md 2xl:text-lg font-bold">Notifications</div>
                            </div>
                            <SimpleBar className="pr-4" style={{ maxHeight: '300px', }}>
                                <div className="mt-5 divide-y divide-solid divide-[#D8D8D8] dark:divide-[#2A2C32] list-space" data-simplebar>
                                    <div className="flex items-start py-2">
                                        <div className="flex items-center justify-between w-full">
                                            <div>
                                                <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                                <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                                <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-2">
                                        <div className="flex items-center justify-between w-full">
                                            <div>
                                                <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                                                <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                                                <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-2">
                                        <div className="flex items-center justify-between w-full">
                                            <div>
                                                <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                                <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                                <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-2">
                                        <div className="flex items-center justify-between w-full">
                                            <div>
                                                <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                                <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                                <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-2">
                                        <div className="flex items-center justify-between w-full">
                                            <div>
                                                <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                                <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                                <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-2">
                                        <div className="flex items-center justify-between w-full">
                                            <div>
                                                <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                                                <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                                                <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SimpleBar>
                        </div>
                    </div>
                </OverlayPanel>

                <OverlayPanel ref={userprofile} className="user_profile">
                    <div className="bg-white rounded-lg xl:py-[0.833vw] py-4 xl:w-[12.500vw]">
                        <div className="xl:py-[0.521vw] py-2.5 xl:px-[0.833vw] px-4 text-black">
                            <div className="font-normal xl:text-[0.625vw] text-xs">Admin Account</div>
                            <div className="xl:text-[0.938vw] font-semibold">{profileName ? profileName : "Jhon Nassir Jr."}</div>
                        </div>
                        <Link href={''} className="xl:py-[0.521vw] py-2.5 xl:px-[0.833vw] px-4 xl:text-[0.729vw] text-sm font-normal flex items-center xl:gap-[0.625vw] gap-3">
                            <i className="autinisd-profile text-sm"></i><span>View profile</span>
                        </Link>
                        <Link href={''} className="xl:py-[0.521vw] py-2.5 xl:px-[0.833vw] px-4 xl:text-[0.729vw] text-sm font-normal flex items-center xl:gap-[0.625vw] gap-3">
                            <i className="autinisd-changepassword text-sm"></i><span>Change Password</span>
                        </Link>
                        <div onClick={Logout} className="xl:py-[0.521vw] py-2.5 xl:px-[0.833vw] px-4 xl:text-[0.729vw] text-sm font-normal flex items-center xl:gap-[0.625vw] gap-3 border-t border-[#E4E7EC] cursor-pointer">
                            <i className="autinisd-logut text-sm" ></i><span>Log out</span>
                        </div>
                    </div>
                </OverlayPanel>

            </div>
            <ModulesApps
                visible={addModulesApps}
                onHides={() => setModulesApps(false)}
            />
        </header>
    );
}
