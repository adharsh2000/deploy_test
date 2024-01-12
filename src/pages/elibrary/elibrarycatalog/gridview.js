import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Index() {
  
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 xl:gap-[0.833vw] mb-[18px] xl:mb-[1.25vw]">
        <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
            <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                <Image src="/assets/images/svg/document-text.svg" width="32" height="32" />  
                <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Increased school funding could come at the cost of vouchers</Link>
            </div>
            <div className="flex gap-2 xl:gap-[0.625vw]">                    
                <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Educa Austin</h4>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                </div>   
                <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                    <Image src="/assets/images/catalog4.png" width="96" height="96"/>  
                </div>
            </div>          
        </div>
        <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
            <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>                        
            </div>
            <div className="flex gap-2 xl:gap-[0.625vw]">                    
                <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                    <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Navarro Early College High School Agriculture...</Link>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
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
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>   
                <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                    <Image src="/assets/images/catalog4.png" width="96" height="96"/>  
                </div>
            </div>          
        </div>
        <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
            <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                <Image src="/assets/images/svg/audio.svg" width="32" height="32" />   
                <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Sports Shorts: LBJ Football, October 2021</Link>
            </div>
            <div className="flex gap-2 xl:gap-[0.625vw]">                    
                <div className="grid gap-[0.104vw] ">
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Sports Scene</h4>                                                   
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
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
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Educa Austin</h4>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                </div>   
                <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                    <Image src="/assets/images/catalog4.png" width="96" height="96"/>  
                </div>
            </div>          
        </div>
        <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
            <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
            </div>
            <div className="flex gap-2 xl:gap-[0.625vw]">                    
                <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                  <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">EDUCA_S614_TALENT SHOW 2</Link>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>   
                <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                    <Image src="/assets/images/catalog2.png" width="96" height="96"/>  
                </div>
            </div>          
        </div>
        <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
            <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                <Image src="/assets/images/svg/document-text.svg" width="32" height="32" />  
                <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Increased school funding could come at the cost of vouchers</Link>
            </div>
            <div className="flex gap-2 xl:gap-[0.625vw]">                    
                <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Educa Austin</h4>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
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
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>   
                <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                    <Image src="/assets/images/catalog2.png" width="96" height="96"/>  
                </div>
            </div>          
        </div>
        <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
            <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                <Image src="/assets/images/svg/document-text.svg" width="32" height="32" />  
                <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Increased school funding could come at the cost of vouchers</Link>
            </div>
            <div className="flex gap-2 xl:gap-[0.625vw]">                    
                <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Educa Austin</h4>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                </div>   
                <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                    <Image src="/assets/images/catalog4.png" width="96" height="96"/>  
                </div>
            </div>          
        </div>
        <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
            <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>                        
            </div>
            <div className="flex gap-2 xl:gap-[0.625vw]">                    
                <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                    <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Navarro Early College High School Agriculture...</Link>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>   
                <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                    <Image src="/assets/images/catalog2.png" width="96" height="96"/>  
                </div>
            </div>          
        </div>
        <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
            <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                <Image src="/assets/images/svg/document-text.svg" width="32" height="32" />  
                <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Increased school funding could come at the cost of vouchers</Link>
            </div>
            <div className="flex gap-2 xl:gap-[0.625vw]">                    
                <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Educa Austin</h4>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
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
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Educa Austin</h4>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
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
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
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
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Educa Austin</h4>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
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
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
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
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Educa Austin</h4>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                </div>   
                <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                    <Image src="/assets/images/catalog4.png" width="96" height="96"/>  
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
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Sports Scene</h4>                                                   
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
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
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Educa Austin</h4>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
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
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>   
                <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                    <Image src="/assets/images/catalog4.png" width="96" height="96"/>  
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
                    <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">Sports Scene</h4>                                                   
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...</p>
                </div>  
            </div>          
        </div>
        <div className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
            <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>                        
            </div>
            <div className="flex gap-2 xl:gap-[0.625vw]">                    
                <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                    <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Navarro Early College High School Agriculture...</Link>
                    <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                    <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>   
                <div className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                    <Image src="/assets/images/catalog2.png" width="96" height="96"/>  
                </div>
            </div>          
        </div>
    </div>
    </>
  );
}
