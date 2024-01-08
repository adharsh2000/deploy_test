import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Checkbox } from "primereact/checkbox";
import AdminLayout from "@/components/adminlayout/layout";
import EditMessageBoard from "@/components/admin/popup/editmessageboard";
import AddMessages from "@/components/admin/popup/addmessages";
import { Divider } from 'primereact/divider';
import { Editor } from "primereact/editor";
import { Calendar } from 'primereact/calendar';

export default function NewPost() {
  
  const [text, setText] = useState('');
  const [date, setDate] = useState(null);
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
      <AdminLayout pageTitle="Pages Admin ">
        <div className=" xl:py-[1.146vw] py-[22px] mb-[18px] xl:mb-[0.938vw]">
          <div className="flex justify-between w-full items-center">
            <div className="flex  ">
              <div className=" flex gap-1 items-center py-[8px] xl:py-[0.521vw] px-[10px] xl:px-[0.625vw] xl:text-[#4B586E] text-[1.250vw]">
                Page Title
              </div>
              <img src="/assets/images/edit.svg" alt="edit icon" />
            </div>

            <div className="flex gap-4">

              <div>
                <Link href="/admin/pagesadmin/"  className="bg-[#fff] hover:bg-[#762428] hover:text-white rounded-md text-[#000000] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5 border">
                  Cancel
                </Link>
              </div>

              <div>
                <Link href=""  className="bg-[#A93439] hover:bg-[#762428] hover:text-white rounded-md text-[#fff] text-[14px] xl:text-[0.833vw] font-medium px-[70px] xl:px-[3.646vw] py-[16px] xl:py-[0.733vw] leading-5">
                  Save
                </Link>
              </div>
            </div>

          </div>


          <div className=" xl:mt-[0.990vw] mt-[19px] xl:p-[0.833vw] p-[20px] rounded-md ">
            <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
              <div className="col-span-12 ">
                <div className="flex flex-col customInput">
                  <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Page Caption</label>
                  <InputText
                    id="username"
                    placeholder="Figma ipsum component variant main layer. Scale distribute link figjam fill link clip horizontal ellipse selection."
                    className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                    aria-describedby="username-help"
                  />
                </div>
              </div>
              <div className="col-span-3">
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
              <div className="col-span-4">
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
              <div className="col-span-3">
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
              <div className="col-span-2 ">
                <div className="flex flex-col customCalendar">
                  <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Publish Date</label>
                  <Calendar
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    showIcon
                    placeholder="Input text"
                    iconPos='left'
                  />
                </div>
              </div>
             
              <div className="col-span-12 xl:col-span-12 ">
              <Divider  className="text-[#BECDE3]"/>
                <div className="flex flex-col">
                  <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Main Image Upload</label>
                  <div className="rounded-lg">

                    <div className="image-upload-wrap">
                      <input className="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                      <div className="flex gap-2 drag-text justify-center items-center upload">
                        <h3 className="text-[#9CA1AB] xl:text-[0.833vw] text-base font-medium">upload a new file</h3>
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

              <div className="col-span-12 ">
                <div className="mb-[16px] xl:mb-[0.833vw]">
                  <div className="flex justify-between items-center gap-2 mb-1">
                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Page Content</label>
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

          </div>

        </div>
      </AdminLayout>
    </>
  )
}




