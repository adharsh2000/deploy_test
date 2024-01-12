import React from 'react'

import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function AisdCalendartv() {
    const [date, setDate] = useState(null);
    return (
        <div>
            <div className='flex'>
               
                <div className='h-full w-full text-[#fff] '>
              
                        <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek className='custom_calender'/>
              
                   
                </div>
            </div>
        </div>
    )
}
