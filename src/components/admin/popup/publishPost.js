import React, { useRef, useState } from "react";
import Link from "next/link";
import { Dialog } from 'primereact/dialog';
import fetchAPI from "@/service/api/fetchAPI";
import { Toast } from 'primereact/toast';

export default function PublishPost(props) {
    const { action } = props;

    const toast = useRef(null);

    function handleClick()  {
        return action();
    }

    return (
        <>
            <div>
                <Dialog header="Header" showHeader={false} style={{ width: '25vw' }} visible={props.visible}
                    onHide={() => props.onHides(false)} contentStyle={{ padding: 0, borderRadius: "8px", border: '1px solid #DBE1EA', background: "#fff" }}>
                    <div onClick={() => props.onHides(false)} className="flex justify-end px-[16px] xl:px-[0.833vw] pt-[16px] xl:pt-[0.833vw] text-[16px] xl:text-[0.833vw] text-[#A9B9D0] cursor-pointer" ><i className="autinisd-cross " ></i></div>
                    <div className="flex flex-col items-center gap-4 px-[24px] xl:px-[1.250vw] py-[20px] xl:py-[1.042vw]">
                        <div className="text-[42px] xl:text-[2.188vw] text-[#62789B]"><i className={`${props.icon}`}></i></div>
                        <div className="text-[16px] xl:text-[0.833vw] font-normal text-[#4B586E]">{props.message}</div>
                    </div>
                    <div className="flex justify-center items-center gap-4 px-[24px] xl:px-[1.250vw] pb-[24px] xl:pb-[1.250vw]">
                        <div className="bg-[#C81E1E] text-[#FFFFFF] rounded-lg py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] text-[14px] xl:text-[0.729vw] font-medium cursor-pointer" onClick={handleClick}>Yes, I’m sure</div>
                        <div onClick={() => props.onHides(false)} className="rounded-lg py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] text-[14px] xl:text-[0.729vw] font-medium border border-[#DBE1EA] text-[#4B586E] cursor-pointer">No, cancel</div>
                    </div>
                </Dialog>
            </div>
            <Toast ref={toast}></Toast>
        </>
    )
}
