import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BordmeetingviewTv from "./bordmeetingview";

const LastStreamedPrograms = (props) => {
  const [bordMeetingVisible, setBordMeetingVisible] = useState(false);

  return (
    <div className={props.className}>
      {props.data.map((elm) => {
        return (
          <>
            <div onClick={() => setBordMeetingVisible(true)} className="bg-[#111928] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw] cursor-pointer aisdcard">
              <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                <Image src="/assets/images/svg/video.svg" width="32" height="32" />
                <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
              </div>
              <div className="mb-[16px] xl:mb-[0.833vw]">
                <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{ width: '100%' }} />
              </div>
              <div className="grid gap-[0.104vw]">
                <h4 className="font-medium text-[18px] xl:text-[0.938vw] text-[#fff] leading-tight">{elm.title}</h4>
                <p className="text-[12px] xl:text-[0.625vw] text-[#D1D5DB] font-normal my-[4px] xl:my-[0.508vw]">{elm.date}</p>
                <p className="font-light text-[12px] xl:text-[0.625vw] text-[#E5E7EB] ">{elm.description}</p>
              </div>
            </div>
          </>
        );
      })}

      <BordmeetingviewTv 
        visible={bordMeetingVisible}
        onHides={() => setBordMeetingVisible(false)}
      />

    </div>


  );
};
export default LastStreamedPrograms;

