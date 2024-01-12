import React, { useState, useEffect, useRef } from "react";
import { Montserrat, Inter } from "@next/font/google";
import { BreadCrumb } from "primereact/breadcrumb";
import Link from "next/link";
import Image from "next/image";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import Comments from "@/components/comment";
import RelatedItems from "@/components/relateditems";
import Bordmeetingview from "@/components/popup/bordmeetingview";
import fetchAPI from '@/service/api/fetchAPI'
import Loader from "@/components/loader";
import { convertDateFormat } from "@/service/utils/DateConversion";
import { Toast } from "primereact/toast";
import { useRouter } from 'next/router';
import Layout from "@/components/layout/layout";
import axios from 'axios';
import { useSpeechRecognition } from 'react-speech-kit';

const myMontserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: "swap",
})
const myInter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: "swap",
})


export default function Index(props) {
  const router = useRouter();
  const { post_id, category_id } = router.query
  console.log(post_id,category_id, 'hellu')
  const [imageError, setImageError] = useState(false);

  const toast = useRef(null);

  const handleImageError = () => {
    setImageError(true);
  };
  const [DiscussionDetailLoading, setDiscussionDetailLoading] = useState(false)
  const [DiscussionDetail, setDiscussionDetail] = useState('')
  const [DiscussionUpdated, setDiscussionUpdated] = useState(false)
  const [CommentsUpdated, setCommentsUpdated] = useState(null);
  const [PostComment, setPostComment] = useState(null);
  const [RelatedTopicLoading, setRelatedTopicLoading] = useState(false)
  const [RelatedTopic, setRelatedTopic] = useState('')

  const [PinnedUpdated, setPinnedUpdated] = useState(false);

  const [sortby, setSortby] = useState('Date')

  const GetDiscussionDetail = async () => {
    setDiscussionDetailLoading(true)
    let data = {
      "userId": IsAuthenticated ? JSON.parse(sessionStorage.getItem('UserID')) : 0, //if user logged in pass userId or else pass 0
      "commentOrder": sortby // default date  or releavant anything you pass
    }
    try {
      await fetchAPI(`/messageboard/posts/postdetails/${post_id}`, 'POST', data, 'application/json')
        .then((response) => {
          response && setDiscussionDetail(response)
          response?.post && setDiscussionDetailLoading(false)
          setDiscussionUpdated(false)
          setCommentsUpdated(false);
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }
  const GetRelatedItems = async () => {
    setPinnedUpdated(false)
    setRelatedTopicLoading(true)
    let data = {
      "page": 1,
      "limit": 4,
      "category_id": parseInt(localStorage.getItem('category_id')) && parseInt(localStorage.getItem('category_id'))
    }
    try {
      await fetchAPI(`/messageboard/posts/relatedTopics`, 'POST', data, 'application/json')
        .then((response) => {
          response && setRelatedTopic(response)
          setRelatedTopicLoading(false)
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }
  //Add comment start
  const addComment = async () => {
    let data = JSON.stringify({
      topic_id: DiscussionDetail?.post?.topic_id,
      created_by: parseInt(sessionStorage.getItem('UserID')),
      post: PostComment,

    });

    await fetchAPI(`/messageboard/posts/comment`, 'POST', data, 'application/json')
      .then((resp) => {
        if (resp?.message?.includes('successfully')) {
          setCommentsUpdated(true);
          setPostComment(null);
          toast.current.show({ severity: 'success', summary: 'Comment Added', detail: '' });
        }

        else {
          console.log("Error logged");
        }
      });
  };

  //Add comment end


  const Unpin = async (topic_id, action) => {
    // setDiscussionDetailLoading(true)
    let data = {
      topic_id: topic_id,
      isPined: action == 'pin' ? 1 : 0,
      viewer_user_id: parseInt(sessionStorage.getItem('UserID'))
    }
    try {
      await fetchAPI(`/messageboard/topicview/pinnedunpinnedtopic`, 'POST', data, 'application/json')
        .then((response) => {
          response?.message?.includes('successfully') && setDiscussionUpdated(true)
          if (response?.message?.includes('topic pinned')) {
            props.setUpdatePinUnpin(true);
            toast.current.show({ severity: 'success', summary: 'Post has been pinned', detail: '' });
          }
          else if (response?.message?.includes('unpinned')) {
            props.setUpdatePinUnpin(true);
            toast.current.show({ severity: 'success', summary: 'Post has been unpinned', detail: '' });
          }
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }

  const UpdateViewCount = async () => {
    // setDiscussionDetailLoading(true)
    let data = {
      topic_id: parseInt(topic_id),
      isPined: parseInt(pinnedStatus),
      viewer_user_id: parseInt(sessionStorage.getItem('UserID'))
    }
    try {
      await fetchAPI(`/messageboard/topicview/pinnedunpinnedtopic`, 'POST', data, 'application/json')
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }
  // const [post_id, setPost_id] = useState('')
  // const [category_id, setCategory_id] = useState('')
  const [pinnedStatus, setPinnedStatus] = useState('')
  const [topic_id, setTopic_id] = useState('')

  useEffect(() => {
    post_id && GetDiscussionDetail()
  }, [post_id, DiscussionUpdated, CommentsUpdated, topic_id, sortby])

  useEffect(() => {
    post_id && UpdateViewCount()
  }, [post_id])
  useEffect(() => {
    GetRelatedItems()
  }, [category_id, PinnedUpdated])

  // const tagArray = DiscussionDetail?.post?.tags?.split(', ');

  const checkLocalStorage = () => {
    // setPost_id(localStorage.getItem('post_id'))
    // setCategory_id(localStorage.getItem('category_id'))
    setPinnedStatus(localStorage.getItem('pinnedStatus'))
    setTopic_id(localStorage.getItem('topic_id'))

  }
  useEffect(() => {
    checkLocalStorage()
  })
  const items = [
    { label: "Communication" },
    { label: "AISD Council Message Board", url: "/messageboard" },
    { label: "Discussion Details", url: "/messageboard/discussiondetails" },
  ];
  const [bordmeetingviewpopup, setbordmeetingviewpopup] = useState(false);

  const sortbyOption = [
    { name: "Relevant" },
    { name: "Date" },
  ];
  const home = { icon: "austin-home", url: "/" };
  const [IsAuthenticated, setIsAuthenticated] = useState('')

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem('IsAuthenticated'))
  }, [])

  const { listen, listening, stop, transcript } = useSpeechRecognition({
    onResult: (result) => {
      setPostComment(result)
    },
  });

  const like = async (id, type) => {
    let data = {
      post_id: type == 'comment' ? id : 0,
      topic_id: type == 'topic' ? id : 0,
      user_id: IsAuthenticated ? JSON.parse(sessionStorage.getItem('UserID')) : 0,
    }
    try {
      await fetchAPI(`/messageboard/posts/like`, 'POST', data, 'application/json')
        .then((response) => {
          response?.message?.includes('successfully') && GetDiscussionDetail()
        })
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }
  const [selectedLanguageKey, setLanguageKey] = useState('Translate to')
  const [languagesList, setLanguagesList] = useState([])
  const [detectLanguageKey, setdetectedLanguageKey] = useState('')
  const translateText = async () => {
    try {
      axios.post(`https://libretranslate.de/detect`, {
        q: PostComment
      })
        .then((response) => {
          setdetectedLanguageKey(response.data[0].language)
          axios.post(`https://libretranslate.de/translate`,
            {
              q: PostComment,
              source: response.data[0].language,
              target: selectedLanguageKey
            }).then((response) => {
              setPostComment(response.data.translatedText)
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
    <>  <Layout pageClass="pg-message-board" pageTitle={DiscussionDetail?.post?.post ? DiscussionDetail?.post?.post : "Message board"}>
      <div className="px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[80px] xl:pt-[2.604vw] pb-6 xl:pb-[1.25vw]">
        <div className="xl:max-w-[88.3025vw] mx-auto">
          <div className="discussion-bg px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[40px] xl:pt-[2.604vw] pb-6 xl:pb-[1.25vw]">
            <div className="xl:max-w-[88.3025vw] mx-auto ">
              <div className={myMontserrat.className}>
                <div className="custom_breadcrumb">
                  <BreadCrumb model={items} home={home} />
                </div>
                <div className="flex flex-wrap justify-between items-center">
                  <h2 className={`${myMontserrat.className} text-[#374151] text-[20px] xl:text-[1.25vw] font-semibold`}>
                    Discussion Details
                  </h2>
                  <Link
                    href='/messageboard'
                    className="cursor-pointer bg-[#DBE1EA] hover:bg-[#762428] hover:text-white rounded-md text-[#1F3F71] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5 ease-linear duration-200"
                  >
                    Back to All Discussions
                  </Link>
                </div>
                {DiscussionDetailLoading ? <Loader height='100vh' /> :
                  <div className="xl:mt-[2.604vw] mt-[40px]">
                    <div className="bg-[#fff] rounded-[24px] xl:rounded-[1.250vw] xl:p-[1.667vw] p-[30px] relative">
                      <div className="absolute -top-5 right-5">
                        <div onClick={() => Unpin(DiscussionDetail?.post?.topic_id, DiscussionDetail?.post?.pinnedStatus == 0 ? 'pin' : 'unpin')} className={`cursor-pointer text-[#fff] text-[16px] xl:text-[0.938vw] font-semibold px-[10px] xl:px-[0.833vw] py-[10px]  rounded-full ${DiscussionDetail?.post?.pinnedStatus == 1 ? 'bg-[#a93439]' : 'bg-[#dbe1ea]'}`}>
                          <i className={`text-[20px] ${DiscussionDetail?.post?.pinnedStatus == 1 ? 'text-[#fff]' : 'text-[grey]'} mr-1 austin-pin`}></i>
                          {DiscussionDetail?.post?.pinnedStatus == 1 ? 'Pinned Topic' : ''}
                        </div>
                      </div>
                      <div className="xl:space-y-[1.25vw] space-y-[15px]">
                        <div className="flex justify-between items-center flex-wrap">
                          <div className="flex gap-[20px] xl:gap-[1.042vw] mb-[10px] xl:mb-[0px]">
                            <div>
                              {DiscussionDetail?.post?.user?.profile_pic && !imageError ? <Image
                                src={DiscussionDetail?.post?.user?.profile_pic}
                                width={70}
                                height={70}
                                alt="active_user"
                                className="h-[70px] w-[70px] xl:h-[3.646vw] xl:w-[3.646vw] "
                                onError={handleImageError}
                              /> :
                                <div className="capitalize text-xl rounded-full w-11 h-11 flex items-center justify-center bg-gray-500 text-white">
                                  {DiscussionDetail?.post?.user?.firstName?.charAt(0)}
                                </div>}
                            </div>
                            <div>
                              <h6 className="capitalize text-[#374151] text-[20px] xl:text-[1.25vw] font-semibold">
                                {DiscussionDetail?.post?.user?.firstName + ' ' + DiscussionDetail?.post?.user?.lastName}
                              </h6>
                              <p className="text-[#9CA1AB] text-[16pxpx] xl:text-[0.833vw] font-normal">
                                {convertDateFormat(DiscussionDetail?.post?.createdAt)}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-[20px] xl:gap-[1.042vw] text-[#9CA1AB]">
                            <div className="font-light xl:text-[0.833vw] text-[16px] ">
                              {" "}
                              <i className="austin-note  text-[20px]  mr-3"></i>{DiscussionDetail?.commentCount}
                              {" "}Comments
                            </div>
                            <div className="font-light xl:text-[0.833vw] text-[16px] ">
                              {" "}
                              <i className="austin-eye  text-[20px]  mr-3"></i> {DiscussionDetail?.post?.viewCount}
                              {" "}Views
                            </div>
                          </div>
                        </div>

                        <div className="">
                          <h6 className="text-[#374151] text-[30px] xl:text-[1.667vw] font-semibold leading-6">
                            {DiscussionDetail?.post?.post}
                          </h6>
                        </div>
                        <div className={`${myInter.className} flex xl:gap-[0.625vw] gap-[16px] divide-x divide-[#BECDE3]`}>
                          <p className="text-[#62789B] text-[14px] xl:text-[0.729vw] font-medium px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.313vw]">
                            Category: {DiscussionDetail?.category?.topic_category}
                          </p>

                          <div>
                            <div className="flex gap-2 ml-5">
                              {DiscussionDetail?.tagRes?.map(item =>
                                <span
                                  href=""
                                  className="bg-[#E8EBF0] rounded-md text-[#62789B] text-[14px] xl:text-[0.729vw] font-medium px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.313vw]"
                                >
                                  {item?.title}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <p className="text-[#4B586E9E] text-[18px] xl:text-[1.042vw] font-normal xl:leading-[1.40vw] leading-6">
                          {DiscussionDetail?.post?.description}
                        </p>

                        {/* <div className="flex gap-[20px] xl:gap-[1.25vw]">
                      <Link
                        href=""
                        className="text-[#4B7E73] text-[18px] xl:text-[1.042vw] font-light"
                      >
                        #Meeting
                      </Link>
                      <Link
                        href=""
                        className="text-[#4B7E73] text-[18px] xl:text-[1.042vw] font-light"
                      >
                        #Record
                      </Link>
                      <Link
                        href=""
                        className="text-[#4B7E73] text-[18px] xl:text-[1.042vw] font-light"
                      >
                        #Lorem Ipsum
                      </Link>
                    </div> */}

                        <div>
                          {DiscussionDetail?.postFilesList?.length > 0 &&
                            <h6 className="text-[#374151] text-[18px] xl:text-[1.042vw] font-medium">
                              Media
                            </h6>
                          }
                          <div className="mt-[8px] xl:mt-[0.417vw]">
                            <div className="grid grid-cols-12 md:grid-cols-12 xl:grid-cols-12 gap-[24px] xl:gap-[1.250vw]">
                              <div className="xl:col-span-9 col-span-12">
                                <div className="flex gap-[24px] xl:gap-[1.25vw]">
                                  {DiscussionDetail?.postFilesList?.map(item =>
                                    <div>
                                      <div className="relative">
                                        <Image
                                          src={item?.fileurl}
                                          width={160}
                                          height={102}
                                          alt="active_user"
                                          className="h-[100px] w-full xl:h-[6.25vw] xl:w-full "
                                        />
                                        <div className="absolute top-[40%] flex justify-center w-full">
                                          <Link href="" onClick={() => setbordmeetingviewpopup(true)}>
                                            {" "}
                                            <Image
                                              src={"/assets/images/svg/play-circle.svg"}
                                              width={35}
                                              height={35}
                                              alt="playicon"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="mt-2">
                                        <p className="text-[#9CA1AB] text-[13px] xl:text-[0.729vw] font-light leading-tight">
                                          {item?.fileName}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="xl:col-span-3 col-span-12 place-self-end">
                                <div className="flex justify-end gap-[14px] xl:gap-[0.833vw]">
                                  <span className="bg-[#F5F6F8] text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] rounded-full"
                                  >
                                    <i onClick={() => like(DiscussionDetail?.post?.topic_id, 'topic')} className={`${DiscussionDetail?.post?.topicLikes ? 'text-[#057be9]' : 'cursor-pointer text-[#1B3865]'} austin-like  text-[20px]  mr-2`}></i>
                                    {DiscussionDetail?.post?.topicLikes} likes
                                  </span>
                                  <Link
                                    href=""
                                    className="bg-[#F5F6F8] text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] rounded-full"
                                  >
                                    <i className="austin-share  text-[18px] text-[#1B3865] mr-2"></i>
                                    Share
                                  </Link>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                }
                {DiscussionDetailLoading ? null :
                  <div className="xl:mt-[2.604vw] mt-[40px]">
                    <div className="bg-[#fff] rounded-[24px] xl:rounded-[1.250vw] xl:p-[1.667vw] p-[30px] relative xl:space-y-[1.25vw] space-y-[15px]">
                      <div className="flex flex-wrap justify-between items-center">
                        <h2 className="text-[#374151] text-[20px] xl:text-[1.25vw] font-semibold">
                          Comments
                        </h2>
                        <div className="chat_dropdown">
                          <Dropdown
                            value={sortby}
                            onChange={(e) => setSortby(e.value.name)}
                            options={sortbyOption}
                            optionLabel="name"
                            placeholder="Select Order by"
                            className="w-[200px] xl:w-[18.229vw]"
                          />
                        </div>
                      </div>
                      <div>
                        {IsAuthenticated && <><div className="custom_editor relative topic-editor">
                          <Editor
                            value={PostComment}
                            onTextChange={(e) => setPostComment(e.textValue)}
                            style={{ minHeight: '20vh', height: "100%" }}
                          />
                          <span onClick={listening ? stop : listen} className="cursor-pointer absolute bottom-5 right-8">
                            <i style={{ color: listening && '#2d35b9' }} className="austin-mic text-[#4B586E] text-[22px]"></i>
                          </span>
                          {listening && <p className="text-[12px] absolute bottom-0 right-3">Listening...</p>}
                          <span className="flex items-center absolute top-2 right-5">
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
                            {PostComment && selectedLanguageKey !== 'Translate to' ? <i className=" cursor-pointer austin-note text-[#4B586E] text-[16px]"
                              onClick={() => translateText()}>
                            </i> : <i className="austin-note text-[#4B586E] text-[16px]">
                            </i>}

                          </span>
                        </div>
                          <div className={`${myInter.className} flex justify-end xl:mt-[0.833vw] mt-[16px]`}>
                            <span
                              onClick={() => { addComment() }}
                              className="cursor-pointer bg-[#4F6484] rounded-md text-[#fff] text-[14px] xl:text-[0.833vw] font-normal px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5"
                            >
                              <i className="austin-pluse text-[#fff] text-[20px] mr-2"></i>
                              Add Comment
                            </span>
                          </div>
                        </>}
                      </div>
                      <Comments
                        like={like}
                        data={DiscussionDetail?.comments}
                      />

                    </div>
                  </div>
                }
                <div className="">
                  <div >
                    {RelatedTopicLoading ? <Loader height='20vh' /> :
                      <RelatedItems data={RelatedTopic}
                        setPinnedUpdated={setPinnedUpdated}
                        checkLocalStorage={checkLocalStorage}
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
            <Bordmeetingview
              visible={bordmeetingviewpopup}
              onHides={() => setbordmeetingviewpopup(false)}
            />
          </div>
          <Toast ref={toast}></Toast>
        </div>
      </div>
    </Layout>
    </>
  );
}
