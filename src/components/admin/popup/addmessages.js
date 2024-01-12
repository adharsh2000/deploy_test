import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Editor } from "primereact/editor";
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import axios from "axios";
import fetchAPI from "@/service/api/fetchAPI";
import { MultiSelect } from "primereact/multiselect";
import adminFetchAPI from "@/service/api/adminFetchApi";

const AddMessages = (props) => {
    const { setLoading, fetchPost,setAddMessageBoardMessageBoard } = props;

    const toast = useRef(null);

    const [date, setDate] = useState(null);
    const [text, setText] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [author, setAuthor] = useState(null);
    const [category, setCategory] = useState(null);
    const [tag, setTag] = useState('');
    const [authors,setAuthors] = useState([]);
    const [categories,setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const resetForm =  () => {
        setDate(null);
        setText('');
        setSelectedCity(null);
        setTitle('');
        setCaption('');
        setAuthor(null);
        setCategory(null);
        setTag(null);
    };

    const handleSubmit = async () => {

        if (!title) return toast.current.show({ severity: 'error', detail: 'Title Required.', life: 3000 });
        if (!caption) return toast.current.show({ severity: 'error', detail: 'Caption Required.', life: 3000 });
        if (!text) return toast.current.show({ severity: 'error', detail: 'Content Required.', life: 3000 });
        if (!tags) return toast.current.show({ severity: 'error', detail: 'tags Required.', life: 3000 });

        // const data = {
        //     topic_category_id: 1,
        //     isPublished: 0,
        //     created_by: 2,
        //     post: title,
        //     topic: title,
        //     author_id: "1",
        //     iscreate:1,
        //     cover_image: "img.png",
        //     caption: caption,
        //     description: text,
        //     tags: tags,
        //     files: []
        // };

        const formData = new FormData();
        formData.append('topic_category_id', category);
        formData.append('isPublished', '1');
        formData.append('created_by', sessionStorage.getItem("userId"));
        formData.append('post', title);
        formData.append('topic', title);
        formData.append('author_id', author?.toString());
        formData.append('iscreate', '1');
        formData.append('cover_image', 'img.png');
        formData.append('caption', caption);
        formData.append('description', text);
        formData.append('tag_id', tag?.join());
        formData.append('files', "");
        formData.append('published_Date', date);
        formData.append('category_id', category);

        // const body = JSON.stringify(data);

        // console.log(formData)
        try {
            await fetchAPI(`/messageboard/posts`, 'POST', formData, 'multipart/form-data');
            toast.current.show({ severity: 'success', detail: 'created successfully..', life: 3000 });
            fetchPost();
            setAddMessageBoardMessageBoard(false);
            resetForm();
        } catch (error) {
            toast.current.show({ severity: 'error', detail: 'something went wrong', life: 3000 });
            console.log(error)
        }
        // axios.post(`${url}/messageboard/posts`, formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'Authorization': `Bearer ${tempToken}`,
        //     },
        // })
        //     .then(({ data }) => {
        //         console.log("data", data)
        //         toast.current.show({ severity: 'success', detail: 'created successfully..', life: 3000 });
        //         resetForm();
        //     })
        //     .catch((err) => {
        //         console.log("error", err)
        //         toast.current.show({ severity: 'error', detail: 'something went wrong', life: 3000 });
        //     })
    }

    const fetchAuthor = async () => {
        try {
            const response = await adminFetchAPI(`/messageboard/author/list`, 'POST', {}, 'application/json');
            console.log(response)
            setAuthors(response?.rows);
        } catch (error) {
            console.log(error)
        }
    }

    const fetchCategories = async () => {
        try {
            const response = await adminFetchAPI(`/messageboard/topiccategory/list`, 'POST', {}, 'application/json');
            console.log(response)
            setCategories(response?.rows);
        } catch (error) {
            console.log(error)
        }
    }

    const fetchTags = async () => {
        try {
            let data = {
                "page":1,
                "limit":10
            }
            const response = await adminFetchAPI(`/tags/list`, 'POST', data, 'application/json');
            console.log(response)
            setTags(response?.rows);
        } catch (error) {
            console.log(error)
        }
    }

    // const fetchPosts = async () => {
    //     try {
    //         setLoading(true)
    //         await adminFetchAPI(`/messageboard/posts/postdetails/${postId}`, 'GET', {}, 'application/json')
    //         setLoading(false)
    //     } catch (error) {
    //         setLoading(false)
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        fetchAuthor();
        fetchCategories();
        fetchTags();
    },[]);

    function formatDateString(inputDateString) {
        const date = new Date(inputDateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
        const day = date.getDate().toString().padStart(2, '0');       
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

    return (
        <>
            <div>
                <Sidebar
                    visible={props.visible}
                    onHide={() => props.onHides(false)}
                    position="right"
                    blockScroll={true}
                    style={{ background: '#FFF', borderRadius: '16px 0 0 16px' }}
                    className="anpsidebar width960"
                >
                    <div className="flex flex-col justify-between h-full xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5">
                        {/**row***/}
                        <div>
                            <div className="text-[#374151] xl:text-[1.25vw] text-[24px] font-semibold ">Add New Post</div>
                            <div className="xl:mt-[0.833vw] mt-4 xl:space-y-[0.833vw] space-y-4">
                                <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                                    <div className="col-span-12 ">
                                        <div className="flex flex-col customInput">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Title</label>
                                            <InputText
                                                value={title}
                                                id="username"
                                                placeholder="Select"
                                                className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                                                aria-describedby="username-help"
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 ">
                                        <div className="flex flex-col customInput">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Caption</label>
                                            <InputText
                                                value={caption}
                                                id="username"
                                                placeholder="Input text"
                                                className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                                                aria-describedby="username-help"
                                                onChange={(e) => setCaption(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    {/**Editor**/}
                                    <div className="col-span-12 ">
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
                                                onTextChange={(e) => setText(e.textValue)}
                                                placeholder="Write text here ..."
                                                style={{ height: '12.656vw' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 xl:col-span-6">
                                        <div className="flex flex-col customDropdown">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Select Author</label>
                                            <Dropdown
                                                value={author}
                                                onChange={(e) => {setAuthor(e.value); console.log(e.value.toString())}}
                                                options={authors}
                                                optionLabel="title"
                                                optionValue="authar_id"
                                                placeholder="Select"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 xl:col-span-6 ">
                                        <div className="flex flex-col customDropdown">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Select category</label>
                                            <Dropdown
                                                value={category}
                                                onChange={(e) => setCategory(e.value)}
                                                options={categories}
                                                optionLabel="topic_category"
                                                optionValue="topic_category_id"
                                                placeholder="Select"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 xl:col-span-6 ">
                                        <div className="flex flex-col customInput">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Tags</label>
                                            {/* <InputText
                                                value={tags}
                                                id="username"
                                                placeholder="Select"
                                                className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                                                aria-describedby="username-help"
                                                onChange={(e) => setTags(e.target.value)}
                                            /> */}
                                            <MultiSelect 
                                                value={tag}
                                                onChange={(e) => {setTag(e.value);console.log(e)}}
                                                options={tags}
                                                optionLabel="title"
                                                optionValue="tag_id"
                                                placeholder="Select"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 xl:col-span-6 ">
                                        <div className="flex flex-col customCalendar">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Publish Date</label>
                                            <Calendar
                                                value={date}
                                                onChange={(e) => {setDate(formatDateString(e.value)); console.log(formatDateString(e.value))}}
                                                showIcon
                                                placeholder="Input text"
                                                iconPos='left'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 xl:col-span-12 ">
                                        <div className="flex flex-col">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Post cover</label>
                                            <div className="file-upload">

                                                <div className="image-upload-wrap">
                                                    <input className="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                                                    <div className="flex gap-2 drag-text justify-center items-center">
                                                        <h3 className="text-[#9CA1AB] xl:text-[0.833vw] text-base font-medium">cover image upload</h3>
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


                                </div>


                            </div>
                        </div>
                        {/**Footer**/}
                        <div className="flex justify-end py-[24px] xl:py-[1.25vw]">
                            <div className="flex items-center xl:gap-[0.833vw] gap-4">
                                <Link href={''} onClick={() => props.onHides(false)} className="text-[#4B586E] text-[16px] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]">Cancel</Link>
                                <div  onClick={handleSubmit} className="text-white bg-[#A93439] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw] cursor-pointer">Create</div>
                            </div>
                        </div>
                    </div>
                </Sidebar>

                <Toast ref={toast}></Toast>
            </div>
        </>
    );
}

export default AddMessages;