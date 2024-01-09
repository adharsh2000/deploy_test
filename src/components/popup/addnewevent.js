import React, { useState, useRef } from "react";
import Link from "next/link";
import { Calendar } from 'primereact/calendar';
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Editor } from "primereact/editor";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from 'primereact/dialog';
import fetchAPI from "@/service/api/fetchAPI";
import moment from "moment/moment";

const Addnewevent = (props) => {   
    const {visible, onHides} = props;

    const [addEventData, setAddEventData] = useState({
        title: '',
        date: '',
        start_time: '',
        end_time: '',
        is_all_day: false,
        location: '',
        is_online: false,
        meeting_notes: '',
        guests: '',
        is_open_for_comunity: false
    })
    const [disabled, setDisabled] = useState({
        is_all_day: false,
        is_online: false,
        is_open_for_comunity: false
    })

    const [successModal, setSuccessModal] = useState(false);
    const toast = useRef(null);

    const handleChangeFormField = (event) => {
        const {name, value} = event.target;
        setAddEventData({...addEventData, [name]: value})
    }

    const handleChangeCheckboxFormField = (event) => {
        const {name, checked} = event.target
        if(name == 'is_all_day' && checked){
            setAddEventData({...addEventData, start_time: '', end_time: ''})
        }else if(name == 'is_online' && checked){
            setAddEventData({...addEventData, location: ''})
        }else if(name == 'is_open_for_comunity' && checked){
            setAddEventData({...addEventData, guests: ''})
        }
        setDisabled({...disabled, [name]: checked})
        setAddEventData((pre) => {return {...pre, [name]: checked}})
    }

    const handleEditorFormField = (value) => {
        setAddEventData((pre) => {return {...pre,meeting_notes : value}})
    }

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    
    const chooseOptions = { icon: 'autinisd-document-upload', iconOnly: true, className: 'w-full upload_icon' };

    const checkValidation = () => {
        const {title,date,start_time,end_time,is_all_day,location,is_online,guests,is_open_for_comunity} = addEventData
        if(!title){
            toast.current.show({severity:'error', detail:'Title is required', life: 3000})
            return false
        }
        if(!date){
            toast.current.show({severity:'error', detail:'Date is required', life: 3000})
            return false
        }
        if(!start_time && !end_time && !is_all_day){
            toast.current.show({severity:'error', detail:'Start time or All day is required', life: 3000})
            return false
        }
        if(!is_all_day){
            if(!start_time){
                toast.current.show({severity:'error', detail:'Start time or All day is required', life: 3000})
                return false
            }else if(!end_time){
                toast.current.show({severity:'error', detail:'End time is required', life: 3000})
                return false
            }
        }
        if(!is_online){
            if(!location){
                toast.current.show({severity:'error', detail:'Location or Online Metting is required', life: 3000})
                return false
            }
        }
        if(!is_open_for_comunity){
            if(!guests){
                toast.current.show({severity:'error', detail:'Guest or Open for Comunity is require', life: 3000})
                return false
            }
        }
        return true
    }

    const addEventApiHandler =async () => {
        const validate = checkValidation()
        if(!validate) return

        try{
            const payload = {
                title: addEventData.title,
                date: addEventData.date ? moment(addEventData.date).format('YYYY-MM-DD') : '',
                start_time: addEventData.start_time ? moment(addEventData.start_time).format('HH:mm') : '',
                end_time: addEventData.end_time ? moment(addEventData.end_time).format('HH:mm') : '',
                is_all_day: addEventData.is_all_day ? 1 : 0,
                location: addEventData.location,
                is_online: addEventData.is_online ? 1 : 0,
                meeting_notes: addEventData.meeting_notes,
                guests: addEventData.guests,
                is_open_for_comunity: addEventData.is_open_for_comunity ? 1 : 0
            }
            
            const response = await fetchAPI('/event','POST',payload,'application/json')
            if(response){
                setSuccessModal(true)
            }
            

        }catch(e){
            toast.current.show({severity:'error', detail:'Error while creating Event', life: 3000})
        }
    }

    const closeSuccessModal = () => {
        setSuccessModal(false)
        onHides()
        setAddEventData({
            title: '',
            date: '',
            start_time: '',
            end_time: '',
            is_all_day: false,
            location: '',
            is_online: false,
            meeting_notes: '',
            guests: '',
            is_open_for_comunity: false
        })
        setDisabled({
            is_all_day: false,
            is_online: false,
            is_open_for_comunity: false
        })
    }

    return (
        <>
            <div>
            <Sidebar visible={visible} position="right" className="custmSidebar sidebarStyle width768" onHide={() => props.onHides(false)} >
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
                                    <InputText name='title' value={addEventData['title']} onChange={handleChangeFormField} id="username" placeholder="Enter the tittle of Event" className="custm_inputext placeholder:text-[#9CA1AB] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw]" aria-describedby="username-help"/>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Date</label>
                                    <Calendar name="date" value={addEventData['date']} onChange={handleChangeFormField}  showIcon className="custm_inputext placeholder:text-[#374151] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw] custm_calendar" placeholder="10/31/2023" aria-describedby="username-help" />
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Start</label>
                                    <Calendar disabled={disabled['is_all_day']} name='start_time' value={addEventData['start_time']} onChange={handleChangeFormField} timeOnly showIcon className="custm_inputext placeholder:text-[#374151] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw] custm_time" placeholder="18:30" aria-describedby="username-help" />
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">End</label>
                                    <Calendar disabled={disabled['is_all_day']} name='end_time' value={addEventData['end_time']} onChange={handleChangeFormField} timeOnly showIcon className="custm_inputext placeholder:text-[#374151] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw] custm_time" placeholder="19:30" aria-describedby="username-help" />
                                    </div>
                                </div>
                                <div className="col-span-12 flex justify-end">
                                <div className="flex items-center">
                                <Checkbox inputId="ingredient1" name="is_all_day" onChange={handleChangeCheckboxFormField} checked={addEventData['is_all_day']} className="custm_checkbox" />
                                <label htmlFor="ingredient1" className="ml-2 text-[0.729vw] text-sm font-medium">All Day</label>
                                </div>
                                </div>
                                <div className="col-span-12">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Add Location</label>
                                    <div className="p-input-icon-left w-full">
                                    <i className="pi pi-search" style={{color:'#9CA1AB', fontSize:'0.8rem'}} />
                                    <InputText disabled={disabled['is_online']} name="location" value={addEventData['location']} onChange={handleChangeFormField} id="username" placeholder="Search Location" className="custm_inputext placeholder:text-[#9CA1AB] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw] w-full" aria-describedby="username-help" />
                                    </div>
                                    </div>
                                </div>
                                <div className="col-span-12 flex justify-end">
                                <div className="flex items-center">
                                <Checkbox inputId="ingredient1" name="is_online" onChange={handleChangeCheckboxFormField} checked={addEventData['is_online']} className="custm_checkbox" />
                                <label htmlFor="ingredient1" className="ml-2 text-[0.729vw] text-sm font-medium">Online Meeting</label>
                                </div>
                                </div>
                                <div className="col-span-12">
                                <Editor name='meeting_notes' value={addEventData['meeting_notes']} onTextChange={(e) => handleEditorFormField(e.htmlValue)} style={{ height: '12.656vw' }} />
                                </div>
                                <div className="col-span-12">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Add Guests</label>
                                    <div className="p-input-icon-left w-full">
                                    <i className="pi pi-search" style={{color:'#9CA1AB', fontSize:'0.8rem'}} />
                                    <InputText disabled={disabled['is_open_for_comunity']} name="guests" value={addEventData['guests']} onChange={handleChangeFormField} id="username" placeholder="Search Location" className="custm_inputext placeholder:text-[#9CA1AB] placeholder:font-normal placeholder:text-[0.729vw] xl:h-[2.083vw] w-full" aria-describedby="username-help" />
                                    </div>
                                    </div>
                                </div>

                                <div className="col-span-12 flex justify-end">
                                <div className="flex items-center">
                                <Checkbox inputId="ingredient1" name="is_open_for_comunity" onChange={handleChangeCheckboxFormField} checked={addEventData['is_open_for_comunity']} className="custm_checkbox" />
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
                            <Link href={''} className="text-white bg-[#1F2A37] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]" onClick={addEventApiHandler}>Add Event</Link>
                        </div>
                    </div>
                </div>
            </Sidebar>
            <Dialog header="Header" showHeader={false} visible={successModal} style={{ width: '25vw' }} onHide={closeSuccessModal} contentStyle={{padding:0, borderRadius:"8px", border:'1px solid #DBE1EA', background:"#fff"}}>
            <div className="xl:h-[12.656vw]">
                <div className="text-right xl:pt-[0.833vw] pt-3 xl:px-[0.833vw] px-3 text-[#A9B9D0] text-xs cursor-pointer" onClick={closeSuccessModal}><i className="autinisd-cross"></i></div>
                <div className="flex flex-col items-center justify-center xl:py-[1.042vw] py-5 xl:px-[1.250vw] px-6">
                <div className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#DEF7EC] text-[#046C4E] text-xs"><i className="autinisd-right-tick"></i></div>
                <div className="text-[#4B586E] xl:text-[0.833vw] text-base font-normal xl:mt-[0.833vw] mt-4">Event added successfully.</div>
                </div>
                <div className="flex items-center justify-center"><Link href={''} className="bg-[#1F2A37] rounded-lg text-white xl:py-[0.417vw] py-2 xl:px-[0.625vw] px-3 xl:w-[5.625vw] w-[100px] text-center" onClick={closeSuccessModal}>ok</Link></div>
            </div>
            </Dialog>

                
            </div>    
        </>
    );
}

export default Addnewevent;