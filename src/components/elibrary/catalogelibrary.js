import React, {useState} from "react";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import Link from "next/link";
import Image from "next/image";
import CatalogDetailVideo from "../popup/catalogdetailvideo";

export default function CatalogeLibrary() {

    const [catalogDetailvideo, setCatalogDetailvideo] = useState(false);

  return (
    <>
        <div className="flex justify-between mb-[16px] xl:mb-[1.25vw]">
            <h2 className="text-[#374151] text-[24px] xl:text-[1.875vw] leading-[1.3]">Catalog <span className="text-[#4B586E] font-extrabold">eLibrary</span></h2>
        </div>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-[0.833vw] mb-[18px] xl:mb-[1.25vw]">
                <div onClick={() => setCatalogDetailvideo(true)} className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw] cursor-pointer">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                        <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                    </div>  
                    <div className="mb-[10px] xl:mb-[0.625vw]">
                        <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                    </div>
                    <div className="grid gap-[0.104vw]">
                        <h4 className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Navarro Early College High School Agriculture Program</h4>
                        <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                        <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                    </div>             
                </div>            
                <div onClick={() => setCatalogDetailvideo(true)} className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw] cursor-pointer">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                        <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                    </div>  
                    <div className="mb-[10px] xl:mb-[0.625vw]">
                        <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                    </div>
                    <div className="grid gap-[0.104vw]">
                        <h4 className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Navarro Early College High School Agriculture Program</h4>
                        <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                        <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                    </div>             
                </div>            
                <div onClick={() => setCatalogDetailvideo(true)} className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw] cursor-pointer">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                        <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                    </div>  
                    <div className="mb-[10px] xl:mb-[0.625vw]">
                        <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                    </div>
                    <div className="grid gap-[0.104vw]">
                        <h4 className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Navarro Early College High School Agriculture Program</h4>
                        <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                        <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                    </div>             
                </div>            
                <div onClick={() => setCatalogDetailvideo(true)} className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw] cursor-pointer">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                        <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                    </div>  
                    <div className="mb-[10px] xl:mb-[0.625vw]">
                        <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                    </div>
                    <div className="grid gap-[0.104vw]">
                        <h4 className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Navarro Early College High School Agriculture Program</h4>
                        <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                        <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                    </div>             
                </div>            
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-[0.833vw] mb-[18px] xl:mb-[1.25vw]">
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/gallery.svg" width="32" height="32" />  
                        <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">EDUCA_S614_TALENT SHOW 2</Link>
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Educa Austin</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>   
                        <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                            <Image src="/assets/images/catalog4.png" width="96" height="96"/>  
                        </div>
                    </div>          
                </div>
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/gallery.svg" width="32" height="32" />  
                        <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Educa Austin</h4>                        
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                            <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">EDUCA_S614_TALENT SHOW 2</Link>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>   
                        <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                            <Image src="/assets/images/catalog2.png" width="96" height="96"/>  
                        </div>
                    </div>          
                </div>
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/gallery.svg" width="32" height="32" />  
                        <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Sports Scene</h4>
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">                            
                            <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Sports Shorts: LBJ Football, October 2021</Link>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>   
                        <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                            <Image src="/assets/images/catalog4.png" width="96" height="96"/>  
                        </div>
                    </div>          
                </div>
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/gallery.svg" width="32" height="32" />   
                        <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Sports Scene</h4>                       
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                            <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Sports Shorts: LBJ Football, October 2021</Link>                            
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>   
                        <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                            <Image src="/assets/images/catalog2.png" width="96" height="96"/>  
                        </div>
                    </div>          
                </div>
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/document-text.svg" width="32" height="32" />  
                        <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">EDUCA_S614_TALENT SHOW 2</Link>
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>   
                        <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                            <Image src="/assets/images/catalog4.png" width="96" height="96"/>  
                        </div>
                    </div>          
                </div>
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/document-text.svg" width="32" height="32" />  
                        <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">EDUCA_S614_TALENT SHOW 2</Link>
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>   
                        <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                            <Image src="/assets/images/catalog2.png" width="96" height="96"/>  
                        </div>
                    </div>          
                </div>
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/document-text.svg" width="32" height="32" />  
                        <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Sports Shorts: LBJ Football, October 2021</Link>
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>   
                        <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                            <Image src="/assets/images/catalog4.png" width="96" height="96"/>  
                        </div>
                    </div>          
                </div>
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/document-text.svg" width="32" height="32" />  
                        <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Sports Shorts: LBJ Football, October 2021</Link>
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>   
                        <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                            <Image src="/assets/images/catalog2.png" width="96" height="96"/>  
                        </div>
                    </div>          
                </div>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-[0.833vw] mb-[18px] xl:mb-[1.25vw]">
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/audio.svg" width="32" height="32" />  
                        <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">EDUCA_S614_TALENT SHOW 2</Link>
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw]">
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>  
                    </div>          
                </div>
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/audio.svg" width="32" height="32" />  
                        <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">EDUCA_S614_TALENT SHOW 2</Link>
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw]">
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>  
                    </div>          
                </div>
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/audio.svg" width="32" height="32" />  
                        <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Sports Shorts: LBJ Football, October 2021</Link>
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw]">
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>  
                    </div>          
                </div>
                <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                    <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                        <Image src="/assets/images/svg/audio.svg" width="32" height="32" />  
                        <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Sports Shorts: LBJ Football, October 2021</Link>
                    </div>
                    <div className="flex gap-2 xl:gap-[0.625vw]">                    
                        <div className="grid gap-[0.104vw]">
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                            <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                        </div>  
                    </div>          
                </div>
                
            </div>
            <button
                className="bg-[#fff] hover:bg-[#A93439] rounded-[8px] xl:rounded-[0.417vw] py-[10px] xl:py-[0.525vw] px-[12px] xl:px-[0.625vw] block text-[14px] xl:text-[0.730vw] text-[#4B586E] hover:text-white flex justify-center min-h-full items-center ease-linear duration-200"
            >
                Load More...
            </button>
            <CatalogDetailVideo
                visible={catalogDetailvideo}
                onHides={() => setCatalogDetailvideo(false)}
            />
        </div>
    </>
  );
}