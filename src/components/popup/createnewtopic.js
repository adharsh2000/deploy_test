import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Editor } from "primereact/editor";
import fetchAPI from "@/service/api/fetchAPI";
import { FaPaperclip, FaTimesCircle } from 'react-icons/fa'
import { Toast } from "primereact/toast";
import Loader from "@/components/loader";
import { MultiSelect } from "primereact/multiselect";

const Createnewtopic = (props) => {
    const [text, setText] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const toast = useRef(null);

    const [Category, setCategory] = useState([]);
    const [SelectedCategory, setSelectedCategory] = useState(null);
    const [IsPublished, setIsPublished] = useState(null);
    const [CreatedBy, setCreatedBy] = useState(null);
    const [Post, setPost] = useState(null);
    const [Topic, setTopic] = useState(null);
    const [Author, setAuthor] = useState(null);
    const [SelectedAuthor, setSelectedAuthor] = useState(null);
    const [CoverImg, setCoverImg] = useState(null);
    const [IsCreate, setIsCreate] = useState(null);
    const [Caption, setCaption] = useState(null);
    const [Description, setDescription] = useState(null);
    const [Tags, setTags] = useState(null);//change to []
    const [SelectedTags, setSelectedTags] = useState([]);
    const [AttachedFiles, setAttachedFiles] = useState([]);
    const [FileName, setFileName] = useState([]);

    const fetchCategory = async () => {
        try {
            const data = await fetchAPI('/messageboard/topiccategory');
            const categories = data.rows.map((bean) => ({
                id: bean.topic_category_id,
                name: bean.topic_category,
                createdBy: bean.created_by
            }));
            setCategory(categories);
            return categories;
        } catch (error) {
            console.error(error);
        }
    };
    const fetchAuthor = async () => {
        try {
            const data = await fetchAPI('/messageboard/author');
            const author = data.rows.map((bean) => ({
                id: bean.authar_id,
                name: bean.title
            }));
            setAuthor(author);
            return author;
        } catch (error) {
            console.error(error);
        }
    };

    const handleAttachFiles = (e) => {
        const files = e.target.files;
        setAttachedFiles([...AttachedFiles, ...files]);
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = [...AttachedFiles];
        updatedFiles.splice(index, 1);
        setAttachedFiles(updatedFiles);
    };

    const handleCoverImageChange = (e) => {
        const file = e.target.files[0];
        const type = file?.type;

        if (file && type.match('image.*')) {
            setCoverImg(file);
        }
        else if (file && !type.match('image.*')) {
            toast.current.show({ severity: 'error', summary: 'Select .png, .jpg, .jpeg format only', detail: '' });
        }
    };

    const handleRemoveCoverImage = () => {
        setCoverImg(null);
    };


    useEffect(() => {
        fetchCategory();
        fetchAuthor();
        setCreatedBy(sessionStorage.getItem('UserID'));
    }, []);
    console.log(AttachedFiles.map(file => file.name), SelectedTags?.name, "categoryFilesAttc");
    const ClearAllData = () => {
        setSelectedCategory(null);
        setTopic(null);
        setDescription(null);
        handleRemoveFile();
        handleRemoveCoverImage();
    };
    useEffect(() => {
        ClearAllData();

    }, [props.ClearTopicForm])
    console.log("coverImg1", CoverImg);
    console.log("coverImg1Name", CoverImg?.name);

    const saveNewTopic = async () => {
        const formData = new FormData();
        formData.append('topic_category_id', SelectedCategory?.id);
        formData.append('isPublished', 1);
        formData.append('created_by', CreatedBy);
        formData.append('post', Topic);
        formData.append('topic', Topic);
        formData.append('author_id', SelectedAuthor?.id);
        formData.append('cover_image', CoverImg?.name);
        formData.append('iscreate', 1);
        //formData.append('caption', Caption);
        formData.append('description', Description);
        formData.append('tags', SelectedTags?.name);
        // AttachedFiles.forEach((file, index) => {
        // formData.append(`files[${index}][fileName]`, file.name);
        // });
        // AttachedFiles.forEach((file, index) => {
        //     formData.append(`files[${index}][file]`, file);  // Use 'file' directly
        // });
        AttachedFiles.forEach((file, index) => {
            const fileFormData = new FormData();
            fileFormData.append('file', file.name);
            formData.append(`files[${index}]`, fileFormData);
        });

        console.log([...formData], "respForm");
        // let data = JSON.stringify({
        //     topic_category_id: SelectedCategory.id,
        //     isPublished: 1,
        //     created_by: SelectedCategory.createdBy,
        //     post: Topic,
        //     topic: Topic,
        //     author_id: SelectedAuthor?.id,
        //     cover_image: CoverImg,
        //     iscreate: 1,
        //     //caption: Caption,
        //     description: Description,
        //     tags: Tags,
        //     files: [{
        //         fileName: AttachedFiles.map((file) => {
        //             file.fileName
        //         })
        //     }]
        // });
        const checkMandat = Post === null || Topic === null || topic_category_id === undefined || Tags === undefined
        console.log("checkMandat", checkMandat);
        if (checkMandat) {
            toast.current.show({ severity: 'error', summary: 'Mandatory Fields are required', detail: '' });

        }

        await fetchAPI(`/messageboard/posts`, 'POST', formData, 'multipart/form-data')
            .then((resp) => {
                console.log("postresp", resp);
                if (resp?.createdAt) {
                    toast.current.show({ severity: 'success', summary: 'New Post created', detail: '' });
                    props.onHides();
                }

                else {
                    console.log("Error logged");
                }
            });
    };


    return (
        <>
            <Toast ref={toast}></Toast>
            <div>
                <Sidebar visible={props.visible} blockScroll={true} position="right" style={{ background: '#FFF', borderRadius: '16px 0 0 16px' }} className="custmSidebar width960" onHide={() => props.onHides(false)} >
                    <div className="flex flex-col justify-between h-full xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5">
                        {/**row***/}
                        <div>
                            <div className="text-[#374151] xl:text-[1.250vw] text-xl font-normal xl:leading-[1.250vw] leading-6 -tracking-[0.48px]"><span className="font-extrabold">New</span>Topic</div>
                            <div className="xl:mt-[0.833vw] mt-4 xl:space-y-[0.833vw] space-y-4">
                                <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                                    <div className="col-span-8">
                                        <div className="flex flex-col">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Title <span className="text-red-500 required-dot">*</span></label>
                                            <InputText value={Topic} onChange={(e) => { setTopic(e.target.value) }} placeholder="Enter" className="placeholder:text-[#9CA1AB] placeholder:font-normal" aria-describedby="username-help" style={{ background: '#F5F6F7', border: '1px solid #BECDE3', borderRadius: '8px' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-4">
                                        <div className="flex flex-col">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Select category <span className="text-red-500 required-dot">*</span></label>
                                            <Dropdown value={SelectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={Category} optionLabel="name" placeholder="Select" className="w-full" style={{ background: '#F5F6F7', border: '1px solid #BECDE3', borderRadius: '8px' }} />
                                        </div>
                                    </div>
                                </div>
                                {/**Editor**/}
                                {/* <div>
                                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '12.656vw' }} />
                                </div> */}
                                <div style={{ position: 'relative' }}>
                                    <div>
                                        <Editor value={Description} onTextChange={(e) => setDescription(e.textValue)} style={{ height: '12.656vw' }}
                                            className="custom-editor" />
                                    </div>
                                    <div style={{ position: 'absolute', top: '8px', right: '10px' }}>
                                        <label htmlFor="fileInput" className="cursor-pointer">
                                            {/* <FaPaperclip size={15} /> */}
                                            <div className="flex items-center bg-gray-200 rounded-full p-1">
                                                <span className="mr-2 text-xs">Attach new files</span>
                                                <FaPaperclip size={15} />
                                            </div>
                                            {/* <div className="flex items-center">
                                                <span className="mr-2 text-xs">Attach</span>
                                                <span className="text-xs">new files</span>
                                                <FaPaperclip size={15} />
                                            </div> */}

                                        </label>
                                        <input
                                            type="file"
                                            id="fileInput"
                                            multiple
                                            onChange={handleAttachFiles}
                                            style={{ display: 'none' }}
                                        />
                                    </div>
                                </div>
                                {/**Attached files**/}
                                <div className="xl:space-y-[0.833vw] space-y-4">
                                    <div className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Attached files</div>
                                    <div className="grid grid-cols-3 xl:gap-[1.250vw] gap-5">
                                        {AttachedFiles.map((file, index) => (
                                            <div key={index} className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-3 flex items-center justify-between">
                                                <i className="austin-attachment"></i>
                                                <span>{file.name}</span>
                                                <i className="austin-close-circle cursor-pointer" onClick={() => handleRemoveFile(index)}></i>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/**Attached files**/}
                                <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                                    <div className="col-span-6">
                                        <div className="flex flex-col">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Select Author</label>
                                            <Dropdown value={SelectedAuthor} onChange={(e) => setSelectedAuthor(e.value)} options={Author} optionLabel="name" placeholder="Select" style={{ background: '#F5F6F7', border: '1px solid #BECDE3', borderRadius: '8px' }} />
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="flex flex-col">
                                            <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Select Tags <span className="text-red-500 required-dot">*</span></label>
                                            <MultiSelect value={SelectedTags} onChange={(e) => setSelectedTags(e.value)}
                                                options={Category}
                                                optionLabel="name"
                                                placeholder="Select" className="w-full"
                                                display="chip"
                                                style={{ background: '#F5F6F7', border: '1px solid #BECDE3', borderRadius: '8px' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/** Cover Img**/}
                                <div className="flex flex-col">
                                    <label htmlFor="coverImage" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">
                                        Cover Image
                                    </label>
                                    <div className="relative w-full">
                                        <input
                                            type="file"
                                            id="coverImage"
                                            accept=".png, .jpg, .jpeg"
                                            onChange={(e) => handleCoverImageChange(e)}
                                            className="hidden"
                                        />
                                        <label htmlFor="coverImage" className="cursor-pointer w-full">
                                            {CoverImg ? (
                                                <div className="flex items-center justify-between bg-[#F5F6F7] border border-[#BECDE3] rounded-lg p-2">
                                                    <img src={URL.createObjectURL(CoverImg)} alt="Cover" className="h-16" />
                                                    <button onClick={handleRemoveCoverImage}>
                                                        <FaTimesCircle size={20} />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-between bg-[#F5F6F7] border border-[#BECDE3] rounded-lg p-2">
                                                    <span className="text-[#9CA1AB]">Choose an image</span>
                                                    <span className="ml-2">
                                                        <FaPaperclip size={20} />
                                                    </span>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                </div>

                                {/* <div className="xl:space-y-[0.833vw] space-y-4">
                                    <div className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Tags Selection (Multiple)</div>
                                    <div>
                                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select" className="w-full" style={{ background: '#F5F6F7', border: '1px solid #BECDE3', borderRadius: '8px' }} />
                                        <InputText value={Tags} onChange={(e) => { setTags(e.target.value) }} placeholder="Enter" className="w-full placeholder:text-[#9CA1AB] placeholder:font-normal" aria-describedby="username-help" style={{ background: '#F5F6F7', border: '1px solid #BECDE3', borderRadius: '8px' }} />
                                        <MultiSelect value={SelectedTags} onChange={(e) => setSelectedTags(e.value)}
                                            options={Category}
                                            optionLabel="name"
                                            placeholder="Select" className="w-full"
                                            display="chip"

                                        />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/**Footer**/}
                        <div className="flex justify-end">
                            <div className="flex items-center xl:gap-[0.833vw] gap-4">
                                <Link href={''} className="text-[#4B586E] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]">Save draft</Link>
                                <Link href={''} onClick={() => { saveNewTopic() }} className="text-white bg-[#A93439] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]">Post</Link>
                            </div>
                        </div>
                    </div>
                </Sidebar>


            </div>

        </>
    );
}

export default Createnewtopic;