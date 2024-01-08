import React, { useState } from "react";
import Link from "next/link";
import { Dialog } from 'primereact/dialog';

export default function Addsuccessfulpopup(props) {

    const [visible, setVisible] = useState(false);
    return (
        <>
            <div>
                <Dialog header="Header"
                    showHeader={false}
                    blockScroll={true}
                    style={{ width: '25vw' }}
                    visible={props.visible}
                    onHide={() => props.onHides(false)} 
                    contentStyle={{ padding: 0, borderRadius: "8px", border: '1px solid #DBE1EA', background: "#fff" }} 
                    className="">
                    <div className="pb-5">
                        <div className="text-right xl:pt-[0.833vw] pt-3 xl:px-[0.833vw] px-3 text-[#A9B9D0] text-xs cursor-pointer" onClick={() => props.onHides(false)} ><i className="autinisd-cross"></i></div>

                        <div className="flex flex-col items-center justify-center xl:py-[1.042vw] py-5 xl:px-[1.250vw] px-6">

                            <div className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#DEF7EC] text-[#046C4E] text-xs"><i className="autinisd-right-tick"></i></div>

                            <div className="text-[#4B586E] xl:text-[0.833vw] text-base font-semibold xl:mt-[0.833vw] mt-4">{props.message}</div>

                            <div className="text-[#4B586E] xl:text-[0.833vw] font-normal  ">{props.submessage}</div>
                        </div>

                        <div className="flex items-center justify-center"><Link href={''} className="bg-[#1F2A37] rounded-lg text-white xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 xl:w-[5.625vw] w-[100px] text-center" onClick={() => props.onHides(false)}  >ok</Link></div>
                    </div>
                </Dialog>
            </div>
        </>
    )
}
