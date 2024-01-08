import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from 'primereact/calendar';
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Editor } from "primereact/editor";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from 'primereact/dialog';

const Addnewevent = (props) => {   
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [text, setText] = useState('');
    const [Addevent, setAddevent] = useState(false);

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
                                    <div className="bg-[#F5F6F7] border-dashed border border-[#BECDE3] rounded-lg flex flex-col items-center py-2.5 px-4 gap-2.5">
                                    <Toast ref={toast}></Toast>
                                    <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} chooseOptions={chooseOptions} />
                                    <div className="text-[#9CA1AB] xl:text-[0.729vw] text-sm font-normal">Drag Thumbnail to upload</div>
                                    <div className="border border-[#A93439] bg-white rounded text-[#A93439] text-xs font-normal py-1 px-2 cursor-pointer">Select File</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Add Tittle</label>
                                    <InputText id="username" placeholder="Enter the tittle of Event" className="custm_inputext placeholder:text-[#9CA1AB] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw]" aria-describedby="username-help"/>
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
                            <Link href={''} className="text-white bg-[#1F2A37] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]" onClick={() => setAddevent(true)}>Add Event</Link>
                        </div>
                    </div>
                </div>
            </Sidebar>
            <Dialog header="Header" showHeader={false} visible={Addevent} style={{ width: '25vw' }} onHide={() => setAddevent(false)} contentStyle={{padding:0, borderRadius:"8px", border:'1px solid #DBE1EA', background:"#fff"}}>
            <div className="xl:h-[12.656vw]">
                <div className="text-right xl:pt-[0.833vw] pt-3 xl:px-[0.833vw] px-3 text-[#A9B9D0] text-xs cursor-pointer" onClick={() => setAddevent(false)}><i className="autinisd-cross"></i></div>
                <div className="flex flex-col items-center justify-center xl:py-[1.042vw] py-5 xl:px-[1.250vw] px-6">
                <div className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#DEF7EC] text-[#046C4E] text-xs"><i className="autinisd-right-tick"></i></div>
                <div className="text-[#4B586E] xl:text-[0.833vw] text-base font-normal xl:mt-[0.833vw] mt-4">Event added successfully.</div>
                </div>
                <div className="flex items-center justify-center"><Link href={''} className="bg-[#1F2A37] rounded-lg text-white xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 xl:w-[5.625vw] w-[100px] text-center" onClick={() => setAddevent(false)}>ok</Link></div>
            </div>
            </Dialog>

                
            </div>    
        </>
    );
}

export default Addnewevent;