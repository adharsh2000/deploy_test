import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from 'primereact/calendar';
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Editor } from "primereact/editor";
import { Checkbox } from "primereact/checkbox";

const Editevent = (props) => {   
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [text, setText] = useState('');

    const [ingredients, setIngredients] = useState([]);

    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    }

    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
    const chooseOptions = { icon: 'autinisd-document-upload', iconOnly: true, className: 'w-full upload_icon' };

    return (
        <>
            <div>
            <Sidebar visible={props.visible} position="right" className="custmSidebar sidebarStyle width768" onHide={() => props.onHides(false)} >
                <div className="flex flex-col justify-between h-full xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5">
                    {/**row***/}
                    <div>
                        <div className="text-[#374151] xl:text-[1.250vw] text-xl font-semibold xl:leading-[1.250vw] leading-6 -tracking-[0.48px]">Add New Event</div>
                        <div className="xl:mt-[0.833vw] mt-4 xl:space-y-[0.833vw] space-y-4">
                            <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                                <div className="col-span-12">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Event Thumbnail</label>
                                    <div className="relative">
                        <Image src={'/assets/admin/event.png'} width={720} height={174} alt="event" className="w-full" />
                        <div className="absolute xl:right-[0.521vw] right-2.5 xl:-bottom-[0.417vw] -bottom-1.5">
                        <div className="text-[#FFFFFF] xl:text-[0.625vw] text-xs font-normal xl:leading-[1.042vw] leading-5 bg-[#A93439] rounded-md xl:rounded-[0.417vw] xl:py-[0.313vw] py-1.5 xl:px-[0.625vw] px-3">Swap Thumbnail</div>
                        </div>
                    </div>
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Add Tittle</label>
                                    <InputText id="username" placeholder="Enter the tittle of Event" className="custm_inputext placeholder:text-[#9CA1AB] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw]" aria-describedby="username-help" />
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Date</label>
                                    <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon className="custm_inputext placeholder:text-[#374151] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw] custm_calendar" placeholder="10/31/2023" aria-describedby="username-help" />
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Start</label>
                                    <Calendar value={time} onChange={(e) => setTime(e.value)} timeOnly showIcon className="custm_inputext placeholder:text-[#374151] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw] custm_time" placeholder="18:30" aria-describedby="username-help" />
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">End</label>
                                    <Calendar value={time} onChange={(e) => setTime(e.value)} timeOnly showIcon className="custm_inputext placeholder:text-[#374151] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw] custm_time" placeholder="19:30" aria-describedby="username-help" />
                                    </div>
                                </div>
                                <div className="col-span-12 flex justify-end">
                                <div className="flex items-center">
                                <Checkbox inputId="ingredient1" name="pizza" value="All Day" onChange={onIngredientsChange} checked={ingredients.includes('All Day')} className="custm_checkbox" />
                                <label htmlFor="ingredient1" className="ml-2 text-[0.729vw] text-sm font-medium">All Day</label>
                                </div>
                                </div>
                                <div className="col-span-12">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Add Location</label>
                                    <div className="p-input-icon-left w-full">
                                    <i className="pi pi-search" style={{color:'#9CA1AB', fontSize:'0.8rem'}} />
                                    <InputText id="username" placeholder="Search Location" className="custm_inputext placeholder:text-[#9CA1AB] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw] w-full" aria-describedby="username-help" />
                                    </div>
                                    </div>
                                </div>
                                <div className="col-span-12 flex justify-end">
                                <div className="flex items-center">
                                <Checkbox inputId="ingredient1" name="pizza" value="All Day" onChange={onIngredientsChange} checked={ingredients.includes('All Day')} className="custm_checkbox" />
                                <label htmlFor="ingredient1" className="ml-2 text-[0.729vw] text-sm font-medium">Online Meeting</label>
                                </div>
                                </div>
                                <div className="col-span-12">
                                <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '12.656vw' }} />
                                </div>
                                <div className="col-span-12">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Add Guests</label>
                                    <div className="p-input-icon-left w-full">
                                    <i className="pi pi-search" style={{color:'#9CA1AB', fontSize:'0.8rem'}} />
                                    <InputText id="username" placeholder="Search Location" className="custm_inputext placeholder:text-[#9CA1AB] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw] w-full" aria-describedby="username-help" />
                                    </div>
                                    </div>
                                </div>

                                <div className="col-span-12 flex justify-end">
                                <div className="flex items-center">
                                <Checkbox inputId="ingredient1" name="pizza" value="All Day" onChange={onIngredientsChange} checked={ingredients.includes('All Day')} className="custm_checkbox" />
                                <label htmlFor="ingredient1" className="ml-2 text-[0.729vw] text-sm font-medium">Open for Comunity </label>
                                </div>
                                </div>
                            </div>
                            {/**Editor**/}
                            <div>
                            
                            </div>
                            

                        </div>
                    </div>
                    {/**Footer**/}
                    <div className="flex justify-end">
                        <div className="flex items-center xl:gap-[0.833vw] gap-4">
                            <Link href={''} className="text-[#91A5C3] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]">Cancel</Link>
                            <Link href={''} className="text-white bg-[#1F2A37] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]">Edit this Event</Link>
                        </div>
                    </div>
                </div>
            </Sidebar>

            

                
            </div>    
        </>
    );
}

export default Editevent;