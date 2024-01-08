import React from "react";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import Link from "next/link";
import Image from "next/image";

const LatestFiles = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3 xl:gap-[0.833vw] bg-white rounded-[8px] xl:rounded-[0.833vw]">
      {props.data.map((elm) => {
        return (
          <>
           
            <div className="border border-[#E5E7EB] rounded-[4px] xl:rounded-[0.417vw] bg-[#F5F6F7] p-[8px] xl:p-[0.730vw]">
                <div className="flex justify-between items-center mb-[10px] xl:mb-[0.730vw]">
                    <Image src={`/assets/images/svg/${elm.filetype}`} width="24" height="24" />   
                    <div className="flex gap-2 gap-[0.625vw]">
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-info" title="Info"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-download" title="Download"></button>
                        <button className="text-[16px] xl:text-[0.833vw] text-[#9CA1AB] hover:text-[#A93439] austin-star-outline" title="Favorite"></button>
                    </div>
                </div>
                <h3 className="text-[14px] xl:text-[0.833vw] text-[#344151] font-semibold truncate xl:min-h-[2.604vw] min-h-[20px]">{elm.title}</h3>
                <div className="flex-row  mb-[10px] xl:mb-[0.730vw] gap-1">
                    <div className="col text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Create:</b>
                        <span className="font-light">{elm.createddate}</span>
                    </div>
                    <div className="col text-[#344151] text-[14px] xl:text-[0.729vw] flex gap-1">
                        <b className="font-semibold">Release date:</b>
                        <span className="font-light">{elm.releasedate}</span>
                    </div>
                </div>
                <button
                    className="bg-[#fff] hover:bg-[#768FB5] border border-[#768FB5] rounded-full py-[10px] xl:py-[0.265vw] px-[10px]
                    xl:px-[1.042vw] block text-[14px] xl:text-[0.733vw] text-[#768FB5] hover:text-[#fff] font-medium ease-linear duration-200"
                  >
                    Read more
                </button>
            </div>
           
      
          </>
        );
      })}
    </div>
  );
};
export default LatestFiles;
