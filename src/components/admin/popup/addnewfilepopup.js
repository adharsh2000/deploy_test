import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Editor } from "primereact/editor";
import { Calendar } from 'primereact/calendar';
import Addsuccessfulpopup from "./addsuccessfulpopup";

const AddNewFile = (props) => {
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(null);
    const [text, setText] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <>
            <div>
                <Sidebar
                    visible={props.visible}
                    position="right"
                    blockScroll={true}
                    style={{ background: '#FFF', borderRadius: '16px 0 0 16px' }}
                    className="custmSidebar width960"
                    onHide={() => props.onHides(false)}
                >
                    <div className="flex flex-col justify-between h-full xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5">
                        {/**row***/}
                        <div>
                            <div className="text-[#374151] xl:text-[1.25vw] text-[24px] font-semibold ">Add New File</div>
                            <div className="xl:mt-[0.833vw] mt-4 xl:space-y-[0.833vw] space-y-4">
                                <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                                    <div className="col-span-12 xl:col-span-12 ">
                                        <div className="flex flex-col">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">File upload</label>
                                            <div className="file-upload">
                                                <div className="image-upload-wrap">
                                                    <input className="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                                                    <div className="flex gap-2 drag-text justify-center items-center">
                                                        <h3 className="text-[#9CA1AB] xl:text-[0.833vw] text-base font-medium">Upload a new file</h3>
                                                        <i className="autinisd-document-upload  text-[18px] text-[#9CA1AB]  mr-2"></i>
                                                    </div>
                                                </div>
                                                <div className="file-upload-content">
                                                    <img className="file-upload-image" src="#" alt="your image" />
                                                    <div className="image-title-wrap">
                                                        <button type="button" onclick="removeUpload()" className="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 xl:col-span-6">
                                        <div className="flex flex-col customDropdown">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Select Author</label>
                                            <Dropdown
                                                value={selectedCity}
                                                onChange={(e) => setSelectedCity(e.value)}
                                                options={cities}
                                                optionLabel="name"
                                                placeholder="Select"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 xl:col-span-6 ">
                                        <div className="flex flex-col customDropdown">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Select category</label>
                                            <Dropdown
                                                value={selectedCity}
                                                onChange={(e) => setSelectedCity(e.value)}
                                                options={cities}
                                                optionLabel="name"
                                                placeholder="Select"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 xl:col-span-6 ">
                                        <div className="flex flex-col customInput">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Tags</label>
                                            <InputText
                                                id="username"
                                                placeholder="Select"
                                                className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                                                aria-describedby="username-help"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 xl:col-span-6 ">
                                        <div className="flex flex-col customCalendar">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Tags</label>
                                            <Calendar
                                                value={date}
                                                onChange={(e) => setDate(e.value)}
                                                showIcon
                                                placeholder="Input text"
                                                iconPos='left'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 ">
                                        <div className="flex flex-col customInput">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Title</label>
                                            <InputText
                                                id="username"
                                                placeholder="Select"
                                                className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                                                aria-describedby="username-help"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 ">
                                        <div className="flex flex-col customInput">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Caption</label>
                                            <InputText
                                                id="username"
                                                placeholder="Input text"
                                                className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                                                aria-describedby="username-help"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/**Editor**/}
                                <div className="mb-[16px] xl:mb-[0.833vw]">
                                    <div className="flex justify-between items-center gap-2 mb-1">
                                        <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Post Content</label>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-2 bg-[#ECEFF3] rounded-[9999px] py-[8px] px-[16px] xl:px-[0.833vw] cursor-pointer">
                                                <i className="autinisd-microphone text-[#1F3F71]"></i><div className="text-[#1F3F71] xl:text-[0.625vw] text-[12px] font-medium">Voice Transcription</div>
                                            </div>
                                            <div className="flex items-center gap-2 bg-[#F6EAEB] rounded-[9999px] py-[8px] px-[16px] xl:px-[0.833vw] cursor-pointer">
                                            <i className="autinisd-attechment text-[#A93439]"></i><div className="text-[#A93439] xl:text-[0.625vw] text-[12px] font-medium">Voice Transcription</div>
                                        </div>
                                        </div>
                                    </div>

                                    <Editor
                                        value={text}
                                        onTextChange={(e) => setText(e.htmlValue)}
                                        placeholder="Write text here ..."
                                        style={{ height: '12.656vw' }}
                                    />

                                </div>

                            </div>
                        </div>
                        {/**Footer**/}
                        <div className="flex justify-end py-[24px] xl:py-[1.25vw]">
                            <div className="flex items-center xl:gap-[0.833vw] gap-4">
                                <Link href={''} className="text-[#4B586E] text-[16px] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]">Cancel</Link>
                                <Link href={''} onClick={() => { setVisible(true); props.onHides(false); }} className="text-white bg-[#A93439] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]">Upload</Link>
                            </div>
                        </div>
                    </div>
                </Sidebar>
                    <Addsuccessfulpopup
                     visible={visible}
                     onHides={() => setVisible(false)}
                     message="New document regular Upload Test "
                     submessage="add Successfully"
                    />

            </div>
        </>
    );
}

export default AddNewFile;