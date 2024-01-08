import React from "react";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import Link from "next/link";
import Image from "next/image";

export default function TrendingCategories() {
  return (
    <>
        <div className="flex justify-between mb-[16px] xl:mb-[1.25vw]">
            <h2 className="text-[#374151] text-[24px] xl:text-[1.875vw] leading-[1.3]">Trending <span className="text-[#4B586E] font-extrabold">categories</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 xl:gap-[0.833vw]">
            <Link href={"/website/elibrary/elibrarycatalog"} className="bg-[#fff] border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] py-[12px] xl:py-[1.25vw] pl-[8px] xl:pl-[0.833vw] pr-[4px] xl:pr-[0.417vw]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <i className="austin-folder-outline text-[20px] xl:text-[1.67vw]"></i>
                        <h4 className="font-semibold text-[14px] xl:text-[0.833vw] text-[#344151]">Category 1</h4>
                    </div>
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439]" title="Info">
                            <Image src="/assets/images/svg/more.svg" width={24} height={24} />
                        </button>
                    </div>
                </div>                
            </Link>
            <Link href={"/website/elibrary/elibrarycatalog"} className="bg-[#fff] border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] py-[12px] xl:py-[1.25vw] pl-[8px] xl:pl-[0.833vw] pr-[4px] xl:pr-[0.417vw]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <i className="austin-folder-outline text-[20px] xl:text-[1.67vw]"></i>
                        <h4 className="font-semibold text-[14px] xl:text-[0.833vw] text-[#344151]">Category 1</h4>
                    </div>
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439]" title="Info">
                            <Image src="/assets/images/svg/more.svg" width={24} height={24} />
                        </button>
                    </div>
                </div>                
            </Link>
            <Link href={"/website/elibrary/elibrarycatalog"} className="bg-[#fff] border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] py-[12px] xl:py-[1.25vw] pl-[8px] xl:pl-[0.833vw] pr-[4px] xl:pr-[0.417vw]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <i className="austin-folder-outline text-[20px] xl:text-[1.67vw]"></i>
                        <h4 className="font-semibold text-[14px] xl:text-[0.833vw] text-[#344151]">Category 1</h4>
                    </div>
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439]" title="Info">
                            <Image src="/assets/images/svg/more.svg" width={24} height={24} />
                        </button>
                    </div>
                </div>                
            </Link>
            <Link href={"/website/elibrary/elibrarycatalog"} className="bg-[#fff] border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] py-[12px] xl:py-[1.25vw] pl-[8px] xl:pl-[0.833vw] pr-[4px] xl:pr-[0.417vw]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <i className="austin-folder-outline text-[20px] xl:text-[1.67vw]"></i>
                        <h4 className="font-semibold text-[14px] xl:text-[0.833vw] text-[#344151]">Category 1</h4>
                    </div>
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439]" title="Info">
                            <Image src="/assets/images/svg/more.svg" width={24} height={24} />
                        </button>
                    </div>
                </div>                
            </Link>
            <Link href={"/website/elibrary/elibrarycatalog"} className="bg-[#fff] border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] py-[12px] xl:py-[1.25vw] pl-[8px] xl:pl-[0.833vw] pr-[4px] xl:pr-[0.417vw]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <i className="austin-folder-outline text-[20px] xl:text-[1.67vw]"></i>
                        <h4 className="font-semibold text-[14px] xl:text-[0.833vw] text-[#344151]">Category 1</h4>
                    </div>
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439]" title="Info">
                            <Image src="/assets/images/svg/more.svg" width={24} height={24} />
                        </button>
                    </div>
                </div>                
            </Link>
            <Link href={"/website/elibrary/elibrarycatalog"} className="bg-[#fff] border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] py-[12px] xl:py-[1.25vw] pl-[8px] xl:pl-[0.833vw] pr-[4px] xl:pr-[0.417vw]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <i className="austin-folder-outline text-[20px] xl:text-[1.67vw]"></i>
                        <h4 className="font-semibold text-[14px] xl:text-[0.833vw] text-[#344151]">Category 1</h4>
                    </div>
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439]" title="Info">
                            <Image src="/assets/images/svg/more.svg" width={24} height={24} />
                        </button>
                    </div>
                </div>                
            </Link>
            
        </div>
    </>
  );
}