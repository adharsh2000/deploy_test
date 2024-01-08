import React from "react";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import Link from "next/link";
import Image from "next/image";

export default function LatestFiles() {
  return (
    <>
        <div className="flex justify-between mb-[16px] xl:mb-[1.25vw]">
            <h2 className="text-[#374151] text-[24px] xl:text-[1.875vw] leading-[1.3]">Latest <span className="text-[#4B586E] font-extrabold">Files</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3 xl:gap-[0.833vw] bg-white p-[16px] xl:p-[0.833vw] rounded-[8px] xl:rounded-[0.833vw]">
            <div className="border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] bg-[#F5F6F7] p-[8px] xl:p-[0.730vw]">
                <div className="flex justify-between items-center mb-[10px] xl:mb-[0.730vw]">
                    <Image src="/assets/images/svg/audio.svg" width="24" height="24" />   
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-info" title="Info"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-download" title="Download"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-star-outline" title="Favorite"></button>
                    </div>
                </div>
                <h3 className="text-[14px] xl:text-[0.833vw] text-[#344151] font-semibold truncate mb-[10px] xl:mb-[0.730vw]">BUL-089013.0 NEW Document regudsfasd</h3>
                <div className="flex justify-between items-center mb-[10px] xl:mb-[0.730vw] gap-1">
                    <div className="text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Create:</b>
                        <span className="font-light">3/10/2023</span>
                    </div>
                    <div className="text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Release date:</b>
                        <span className="font-light">5/10/2023</span>
                    </div>
                </div>
                <button
                    className="bg-[#fff] hover:bg-[#1570EF] border border-[#1570EF] rounded-full pt-[5px] xl:pt-[0.265vw] pb-[5px] xl:pb-[0.104vw] px-[20px] xl:px-[1.042vw] block text-[14px] xl:text-[0.833vw] text-[#1570EF] hover:text-[#fff] font-semibold ease-linear duration-200"
                  >
                    Read more
                </button>
            </div>
            <div className="border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] bg-[#F5F6F7] p-[8px] xl:p-[0.730vw]">
                <div className="flex justify-between items-center mb-[10px] xl:mb-[0.730vw]">
                    <Image src="/assets/images/svg/audio.svg" width="24" height="24" />   
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-info" title="Info"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-download" title="Download"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-star-outline" title="Favorite"></button>
                    </div>
                </div>
                <h3 className="text-[14px] xl:text-[0.833vw] text-[#344151] font-semibold truncate mb-[10px] xl:mb-[0.730vw]">BUL-089013.0 NEW Document regudsfasd</h3>
                <div className="flex justify-between items-center mb-[10px] xl:mb-[0.730vw] gap-1">
                    <div className="text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Create:</b>
                        <span className="font-light">3/10/2023</span>
                    </div>
                    <div className="text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Release date:</b>
                        <span className="font-light">5/10/2023</span>
                    </div>
                </div>
                <button
                    className="bg-[#fff] hover:bg-[#1570EF] border border-[#1570EF] rounded-full pt-[5px] xl:pt-[0.265vw] pb-[5px] xl:pb-[0.104vw] px-[20px] xl:px-[1.042vw] block text-[14px] xl:text-[0.833vw] text-[#1570EF] hover:text-[#fff] font-semibold ease-linear duration-200"
                  >
                    Read more
                </button>
            </div>
            <div className="border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] bg-[#F5F6F7] p-[8px] xl:p-[0.730vw]">
                <div className="flex justify-between items-center mb-[10px] xl:mb-[0.730vw]">
                    <Image src="/assets/images/svg/audio.svg" width="24" height="24" />   
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-info" title="Info"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-download" title="Download"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-star-outline" title="Favorite"></button>
                    </div>
                </div>
                <h3 className="text-[14px] xl:text-[0.833vw] text-[#344151] font-semibold truncate mb-[10px] xl:mb-[0.730vw]">BUL-089013.0 NEW Document regudsfasd</h3>
                <div className="flex justify-between items-center mb-[10px] xl:mb-[0.730vw] gap-1">
                    <div className="text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Create:</b>
                        <span className="font-light">3/10/2023</span>
                    </div>
                    <div className="text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Release date:</b>
                        <span className="font-light">5/10/2023</span>
                    </div>
                </div>
                <button
                    className="bg-[#fff] hover:bg-[#1570EF] border border-[#1570EF] rounded-full pt-[5px] xl:pt-[0.265vw] pb-[5px] xl:pb-[0.104vw] px-[20px] xl:px-[1.042vw] block text-[14px] xl:text-[0.833vw] text-[#1570EF] hover:text-[#fff] font-semibold ease-linear duration-200"
                  >
                    Read more
                </button>
            </div>
            <div className="border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] bg-[#F5F6F7] p-[8px] xl:p-[0.730vw]">
                <div className="flex justify-between items-center mb-[10px] xl:mb-[0.730vw]">
                    <Image src="/assets/images/svg/audio.svg" width="24" height="24" />   
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-info" title="Info"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-download" title="Download"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-star-outline" title="Favorite"></button>
                    </div>
                </div>
                <h3 className="text-[14px] xl:text-[0.833vw] text-[#344151] font-semibold truncate mb-[10px] xl:mb-[0.730vw]">BUL-089013.0 NEW Document regudsfasd</h3>
                <div className="flex justify-between items-center mb-[10px] xl:mb-[0.730vw] gap-1">
                    <div className="text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Create:</b>
                        <span className="font-light">3/10/2023</span>
                    </div>
                    <div className="text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Release date:</b>
                        <span className="font-light">5/10/2023</span>
                    </div>
                </div>
                <button
                    className="bg-[#fff] hover:bg-[#1570EF] border border-[#1570EF] rounded-full pt-[5px] xl:pt-[0.265vw] pb-[5px] xl:pb-[0.104vw] px-[20px] xl:px-[1.042vw] block text-[14px] xl:text-[0.833vw] text-[#1570EF] hover:text-[#fff] font-semibold ease-linear duration-200"
                  >
                    Read more
                </button>
            </div>
            <div className="border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] bg-[#F5F6F7] p-[8px] xl:p-[0.730vw]">
                <div className="flex justify-between items-center mb-[10px] xl:mb-[0.730vw]">
                    <Image src="/assets/images/svg/audio.svg" width="24" height="24" />   
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-info" title="Info"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-download" title="Download"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-star-outline" title="Favorite"></button>
                    </div>
                </div>
                <h3 className="text-[14px] xl:text-[0.833vw] text-[#344151] font-semibold truncate mb-[10px] xl:mb-[0.730vw]">BUL-089013.0 NEW Document regudsfasd</h3>
                <div className="flex justify-between items-center mb-[10px] xl:mb-[0.730vw] gap-1">
                    <div className="text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Create:</b>
                        <span className="font-light">3/10/2023</span>
                    </div>
                    <div className="text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Release date:</b>
                        <span className="font-light">5/10/2023</span>
                    </div>
                </div>
                <button
                    className="bg-[#fff] hover:bg-[#1570EF] border border-[#1570EF] rounded-full pt-[5px] xl:pt-[0.265vw] pb-[5px] xl:pb-[0.104vw] px-[20px] xl:px-[1.042vw] block text-[14px] xl:text-[0.833vw] text-[#1570EF] hover:text-[#fff] font-semibold ease-linear duration-200"
                  >
                    Read more
                </button>
            </div>
        </div>
    </>
  );
}