import React from 'react'

import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function AisdCalendartv() {
    const [date, setDate] = useState(null);
    return (
        <div>
            <div className='flex'>
               
                <div className='h-full w-full  bg-[#111928] text-[#fff] py-[12px] px-[18px]'>
                    <div className=" flex justify-center">
                        <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek className='headp '/>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
