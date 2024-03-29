import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import fetchAPI from "@/service/api/fetchAPI";
import { FaPaperclip, FaTimesCircle } from "react-icons/fa";
import { Toast } from "primereact/toast";
import Loader from "@/components/loader";
import { MultiSelect } from "primereact/multiselect";
import { useSpeechRecognition } from "react-speech-kit";
import axios from 'axios';

const Createnewtopic = (props) => {
  const [text, setText] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const toast = useRef(null);

  const { UpdateLatestPosts, setUpdateLatestPosts } = props;

  const [Category, setCategory] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState(null);
  const [IsPublished, setIsPublished] = useState(null);
  const [CreatedBy, setCreatedBy] = useState(null);
  const [Post, setPost] = useState(null);
  const [Topic, setTopic] = useState(null);
  const [Author, setAuthor] = useState(null);
  const [SelectedAuthor, setSelectedAuthor] = useState(null);
  const [CoverImg, setCoverImg] = useState("");
  const [IsCreate, setIsCreate] = useState(null);
  const [Caption, setCaption] = useState(null);
  const [Description, setDescription] = useState('');
  const [Tags, setTags] = useState([]);
  const [SelectedTags, setSelectedTags] = useState([]);
  const [AttachedFiles, setAttachedFiles] = useState([]);
  const [FileName, setFileName] = useState([]);
  const [Loading, setLoading] = useState(false);

  const GetAuthorList = async () => {
    let data = {
      page: 1,
      limit: 10,
    };
    try {
      await fetchAPI(
        `/messageboard/author/list`,
        "POST",
        data,
        "application/json"
      ).then((response) => {
        const author = response.rows.map((bean) => ({
          id: bean.authar_id,
          name: bean.title,
        }));
        setAuthor(author);
        return author;
      });
    } catch (error) {
      console.log(error, "error logged");
    }
  };
  const GetTagList = async () => {
    let data = {
      page: 1,
      limit: 10,
    };
    try {
      await fetchAPI(`/tags/list`, "POST", data, "application/json").then(
        (response) => {
          const tags = response.rows.map((bean) => ({
            id: bean.tag_id,
            name: bean.title,
          }));
          setTags(tags);
          return tags;
        }
      );
    } catch (error) {
      console.log(error, "error logged");
    }
  };
  const GetTopicCategoryList = async () => {
    let data = {
      page: 1,
      limit: 10,
    };
    try {
      await fetchAPI(
        `/messageboard/topiccategory/list`,
        "POST",
        data,
        "application/json"
      ).then((response) => {
        const category = response.rows.map((bean) => ({
          id: bean.topic_category_id,
          name: bean.topic_category,
        }));
        setCategory(category);
        return category;
      });
    } catch (error) {
      console.log(error, "error logged");
    }
  };

  const handleAttachFiles = (e) => {
    const files = e.target.files;

    const unsupportedFormats = Array.from(files).filter((file) => {
      const allowedFormats = [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".bmp",
        ".svg",
        ".mp3",
        ".mp4",
        ".avi",
        ".pdf",
        ".xlsx",
        ".xls",
        ".doc",
        ".docx",
        ".txt",
        ".webm",
      ];
      const fileFormat = file.name.split(".").pop().toLowerCase();
      return !allowedFormats.includes(`.${fileFormat}`);
    });

    if (unsupportedFormats.length > 0) {
      toast.current.show({
        severity: "error",
        summary: "",
        detail: "Unsupported file format.",
        life: 3000,
      });
      return;
    }

    setAttachedFiles([...AttachedFiles, ...files]);
  };
  //const fileInputCheck = document.getElementById("fileInput");

  const handleRemoveFile = (index) => {
    const updatedFiles = [...AttachedFiles];
    updatedFiles.splice(index, 1);
    setAttachedFiles(updatedFiles);
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    const type = file?.type;

    if (file && type.match("image.*")) {
      setCoverImg(file);
    } else if (file && !type.match("image.*")) {
      toast.current.show({
        severity: "error",
        summary: "Select .png, .jpg, .jpeg format only",
        detail: "",
        life: 3000,
      });
    }
  };

  const handleRemoveCoverImage = () => {
    setCoverImg(null);
  };

  useEffect(() => {
    GetTagList();
    GetAuthorList();
    GetTopicCategoryList();
    setCreatedBy(sessionStorage.getItem("UserID"));
  }, []);

  console.log(
    AttachedFiles.map((file) => file.name),
    "categoryFilesAttc"
  );
  const ClearAllData = () => {
    setSelectedCategory(null);
    setSelectedAuthor(null);
    setTopic(null);
    setDescription(null);
    setAttachedFiles([]);
    handleRemoveCoverImage();
    setSelectedTags([]);
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.value = null;
    }
  };
  useEffect(() => {
    ClearAllData();
  }, [props.ClearTopicForm]);
  const saveNewTopic = async (isDraft) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("topic_category_id", SelectedCategory?.id);
    formData.append("category_id", SelectedCategory?.id);
    formData.append("isPublished", isDraft ? "0" : "1");
    formData.append("created_by", CreatedBy);
    formData.append("post", Topic);
    formData.append("topic", Topic);
    formData.append("author_id", SelectedAuthor?.id);
    formData.append("cover_image", CoverImg ? CoverImg : "");
    formData.append("iscreate", 1);
    formData.append("published_Date", new Date());
    formData.append("description", Description);
    const tagNames = SelectedTags.map((tag) => tag.id);
    formData.append("tag_id", tagNames.join(","));
    AttachedFiles.forEach((file) => {
      const fileFormData = new FormData();
      fileFormData.append("files", file);

      for (let [key, value] of fileFormData.entries()) {
        formData.append(key, value);
      }
    });

    console.log("respForm", [...formData]);
    console.log("respForm1", AttachedFiles);

    const checkMandat =
      Topic === null ||
      SelectedCategory === null ||
      SelectedTags?.length === 0 ||
      SelectedAuthor === null;
    if (checkMandat) {
      toast.current.show({
        severity: "error",
        summary: "Mandatory fields are required.",
        detail: "",
        life: 3000,
      });
      setLoading(false);
    }

    !checkMandat &&
      (await fetchAPI(
        `/messageboard/posts`,
        "POST",
        formData,
        "multipart/form-data"
      ).then((resp) => {
        if (resp?.post?.createdAt) {
          setUpdateLatestPosts(true);
          setLoading(false);
          props.onHides();
          if (resp?.topic?.isPublished === "1") {
            toast.current?.show({
              severity: "success",
              summary: "New Post created",
              detail: "",
            });
          } else if (resp?.topic?.isPublished === "0") {
            toast.current?.show({
              severity: "success",
              summary: "Draft created",
              detail: "",
            });
          }
        } else {
          console.log("Error logged");
        }
      }));
  };
  const { listen, listening, stop, transcript } = useSpeechRecognition({
    onResult: (result) => {
      setDescription(result);
    },
  });

  const [selectedLanguageKey, setLanguageKey] = useState('Translate to')
  const [languagesList, setLanguagesList] = useState([])
  const [detectLanguageKey, setdetectedLanguageKey] = useState('')

  const translateText = async () => {
    try {
       axios.post(`https://libretranslate.de/detect`, {
        q: Description
      })
        .then((response) => {
          setdetectedLanguageKey(response.data[0].language)
          axios.post(`https://libretranslate.de/translate`,
            {
              q: Description,
              source: response.data[0].language,
              target: selectedLanguageKey
            }).then((response) => {
              setDescription(response.data.translatedText)
            })
        })
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }

  const languageKey = (selectedLanguage) => {
    setLanguageKey(selectedLanguage.target.value)
  }

  useEffect(() => {
    try {
      axios.get(`https://libretranslate.de/languages`)
        .then((response) => {
          setLanguagesList(response.data)
        })
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }, [])

  return (
    <>
      <Toast ref={toast}></Toast>
      <div>
        <Sidebar
          visible={props.visible}
          blockScroll={true}
          position="right"
          style={{ background: "#FFF", borderRadius: "16px 0 0 16px" }}
          className="custmSidebar width960"
          onHide={() => props.onHides(false)}
        >
          {Loading ? (
            <Loader />
          ) : (
            <div className="flex flex-col justify-between h-full xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5">
              {/**row***/}
              <div>
                <div className="text-[#374151] xl:text-[1.250vw] text-xl font-normal xl:leading-[1.250vw] leading-6 -tracking-[0.48px]">
                  <span className="font-extrabold">New</span> Topic
                </div>
                <div className="xl:mt-[0.833vw] mt-4 xl:space-y-[0.833vw] space-y-4">
                  <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                    <div className="col-span-8">
                      <div className="flex flex-col custInput">
                        <label
                          htmlFor="username"
                          className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                        >
                          Title{" "}
                          <span className="text-red-500 required-dot">*</span>
                        </label>
                        <InputText
                          value={Topic}
                          onChange={(e) => {
                            setTopic(e.target.value);
                          }}
                          placeholder="Enter"
                          className="placeholder:text-[#9CA1AB] placeholder:font-normal placeholder:text-[0.833vw]"
                          aria-describedby="username-help"
                          style={{
                            background: "#F5F6F7",
                            border: "1px solid #BECDE3",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="flex flex-col customDropdown">
                        <label
                          htmlFor="username"
                          className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                        >
                          Select Category{" "}
                          <span className="text-red-500 required-dot">*</span>
                        </label>
                        <Dropdown
                          value={SelectedCategory}
                          onChange={(e) => setSelectedCategory(e.value)}
                          options={Category}
                          optionLabel="name"
                          placeholder="Select"
                          className="w-full"
                          style={{
                            background: "#F5F6F7",
                            border: "1px solid #BECDE3",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/**Editor**/}
                  {/* <div>
                                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '12.656vw' }} />
                                </div> */}
                  <div style={{ position: "relative" }}>
                    <div className="custom_editor relative topic-editor">
                      <Editor
                        value={Description}
                        onTextChange={(e) => setDescription(e.textValue)}
                        placeholder="Write text here ..."
                        style={{ height: "12.656vw" }}
                        className="custom-editor"
                      />
                    </div>
                    <span
                      onClick={listening ? stop : listen}
                      className="cursor-pointer absolute top-2 right-[140px]"
                    >
                      <div className="flex items-center bg-gray-200 rounded-full p-1">
                        <i
                          style={{ color: listening && "#2d35b9" }}
                          className="austin-mic text-[#4B586E] text-[16px]"
                        ></i>
                        <p className="mr-2 text-xs">
                          {listening ? "Listening..." : "Voice Transcription"}
                        </p>
                      </div>
                    </span>
                    <span className="flex items-center absolute top-2 right-[300px]">
                      <select className="flex items-center bg-gray-200 rounded-full p-1 text-xs mr-2 language-select" onChange={languageKey}>
                        <option>Translate to</option>
                        {languagesList.map((language) => {
                          return (
                            <option value={language.code}>
                              {language.name}
                            </option>
                          )
                        })}
                      </select>
                      {Description && selectedLanguageKey !== 'Translate to' ? <i className=" cursor-pointer austin-note text-[#4B586E] text-[16px]"
                        onClick={() => translateText()}>
                      </i> : <i className="austin-note text-[#4B586E] text-[16px]">
                      </i>}

                    </span>
                    <div
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "10px",
                      }}
                    >
                      <label htmlFor="fileInput" className="cursor-pointer">
                        <div className="flex items-center text-[#A93439] bg-gray-200 rounded-full p-1">
                          <i className="austin-attachment text-[16px]"></i>
                          <span className="mr-2 text-xs">Attach new files</span>
                        </div>
                      </label>
                      <input
                        type="file"
                        id="fileInput"
                        multiple
                        onChange={(e) => handleAttachFiles(e)}
                        accept=".jpg, .jpeg, .png, .gif, .bmp, .svg, .mp3, .mp4, .avi, .pdf, .xlsx, .xls, .doc, .docx, .txt, .webm"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                  {/**Attached files**/}
                {AttachedFiles?.length > 0 && 
                (<div className="xl:space-y-[0.833vw] space-y-4">
                    <div className="text-[#374151] xl:text-[0.833vw] text-base font-medium">
                      Attached files
                    </div>
                    <div className="grid grid-cols-5 xl:gap-[1.250vw] gap-5 attachedFiles">
                      {AttachedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-3 flex items-center justify-between"
                        >
                          <i className="austin-attachment"></i>
                          <span>{file.name}</span>
                          <i
                            className="austin-close-circle cursor-pointer"
                            onClick={() => handleRemoveFile(index)}
                          ></i>
                        </div>
                      ))}
                    </div>
                </div>)}
                  {/**Attached files**/}
                  <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                    <div className="col-span-6">
                      <div className="flex flex-col customDropdown">
                        <label
                          htmlFor="username"
                          className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                        >
                          Select Author{" "}
                          <span className="text-red-500 required-dot">*</span>
                        </label>
                        <Dropdown
                          value={SelectedAuthor}
                          onChange={(e) => setSelectedAuthor(e.value)}
                          options={Author}
                          optionLabel="name"
                          placeholder="Select"
                          style={{
                            background: "#F5F6F7",
                            border: "1px solid #BECDE3",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="flex flex-col custDropdown">
                        <label
                          htmlFor="username"
                          className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                        >
                          Select Tags{" "}
                          <span className="text-red-500 required-dot">*</span>
                        </label>
                        <MultiSelect
                          value={SelectedTags}
                          onChange={(e) => {
                            setSelectedTags(e.value);
                          }}
                          options={Tags}
                          optionLabel="name"
                          placeholder="Select"
                          className="w-full"
                          display="chip"
                          style={{
                            background: "#F5F6F7",
                            border: "1px solid #BECDE3",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/** Cover Img**/}
                  <div className="flex flex-col">
                    <label
                      htmlFor="coverImage"
                      className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                    >
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
                      <label
                        htmlFor="coverImage"
                        className="cursor-pointer w-full"
                      >
                        {CoverImg ? (
                          <div className="flex items-center justify-between bg-[#F5F6F7] border border-[#BECDE3] rounded-lg p-2">
                            <img
                              src={URL.createObjectURL(CoverImg)}
                              alt="Cover"
                              className="h-16"
                            />
                            <button onClick={handleRemoveCoverImage}>
                              {/* <FaTimesCircle size={20} /> */}
                              <i className="austin-close-circle"></i>
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between bg-[#F5F6F7] border border-[#BECDE3] rounded-lg p-2">
                            <span className="text-[#9CA1AB]">
                              Choose an image
                            </span>
                            <span className="ml-2">
                              {/* <FaPaperclip size={20} /> */}
                              <i className="austin-attachment"></i>
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
                  <Link
                    href={""}
                    onClick={() => {
                      saveNewTopic(true);
                    }}
                    className="text-[#4B586E] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]"
                  >
                    Save draft
                  </Link>
                  <Link
                    href={""}
                    onClick={() => {
                      saveNewTopic(false);
                    }}
                    className="text-white bg-[#A93439] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]"
                  >
                    Post
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Sidebar>
      </div>
    </>
  );
};

export default Createnewtopic;
