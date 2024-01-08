import React, { useState, useEffect } from "react";
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

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  const [DiscussionDetailLoading, setDiscussionDetailLoading] = useState(false)
  const [DiscussionDetail, setDiscussionDetail] = useState('')
  const [DiscussionUpdated, setDiscussionUpdated] = useState(false)
  const [CommentsUpdated, setCommentsUpdated] = useState(null);


  const GetDiscussionDetail = async () => {
    setDiscussionDetailLoading(true)
    try {
      await fetchAPI(`/messageboard/posts/postdetails/${props?.post_id}`)
        .then((response) => {
          response && setDiscussionDetail(response)
          setDiscussionDetailLoading(false)
          setDiscussionUpdated(false)
          setCommentsUpdated(false);
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }

  //Add comment start
  const [PostComment,setPostComment]=useState(null);

  const addComment = async () => {
    let data = JSON.stringify({
        topic_id: props?.post_id,
        created_by: parseInt(sessionStorage.getItem('UserID')),
        post: PostComment,
        
    });
    //console.log("postrespDet",topic_id,created_by,post);
    // const checkMandat = Post === null || Topic === null || topic_category_id === undefined || Tags === undefined
    // console.log("checkMandat", checkMandat);
    // if (checkMandat) {
    //     toast.current.show({ severity: 'error', summary: 'Mandatory Fields are required', detail: '' });

    // }

    await fetchAPI(`/messageboard/posts/comment`, 'POST', data, 'application/json')
        .then((resp) => {
            console.log("postresp", resp);
            if (resp?.createdAt) {
                setCommentsUpdated(true);
                toast.current.show({ severity: 'success', summary: 'New Post created', detail: '' });
                props.onHides();
            }

            else {
                console.log("Error logged");
            }
        });
};

  //Add comment end


  const Unpin = async (topic_id, action) => {
    setDiscussionDetailLoading(true)
    let data = {
      topic_id: topic_id,
      isPined: action == 'pin' ? 1 : 0,
      viewer_user_id: parseInt(sessionStorage.getItem('UserID'))
    }
    try {
      await fetchAPI(`/messageboard/topicview/pinnedunpinnedtopic`, 'POST', data, 'application/json')
        .then((response) => {
          response?.message?.includes('successfully') && setDiscussionUpdated(true)
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }
  useEffect(() => {
    GetDiscussionDetail()
  }, [props?.post_id, DiscussionUpdated,CommentsUpdated])

  const tagArray = DiscussionDetail?.post?.tags?.split(', ');

  const items = [
    { label: "Communication" },
    { label: "AISD Council Message Board" },
    { label: "Discussion Details" },
  ];
  const [text, setText] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [bordmeetingviewpopup, setbordmeetingviewpopup] = useState(false);
 
  const cities = [
    { name: "Relevancy", code: "RE" },
    { name: "Newly", code: "Ne" },
  ];

  const home = { icon: "austin-home", url: "/" };
  return (
    <>
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
              <span
                onClick={() => props?.setShowDiscussionDetail(false)}
                className="cursor-pointer bg-[#DBE1EA] hover:bg-[#762428] hover:text-white rounded-md text-[#1F3F71] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5 ease-linear duration-200"
              >
                Back to All Discussions
              </span>
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
                          {!imageError ? <Image
                            src={DiscussionDetail?.post?.user?.profile_pic}
                            width={70}
                            height={70}
                            alt="active_user"
                            className="h-[70px] w-[70px] xl:h-[3.646vw] xl:w-[3.646vw] "
                            onError={handleImageError}
                          /> :
                            <div className="text-xl rounded-full w-11 h-11 flex items-center justify-center bg-gray-500 text-white">
                              {DiscussionDetail?.post?.user?.firstName?.charAt(0)}
                            </div>}
                        </div>
                        <div>
                          <h6 className="text-[#374151] text-[20px] xl:text-[1.25vw] font-semibold">
                            {DiscussionDetail?.post?.user?.firstName + DiscussionDetail?.post?.user?.lastName}
                          </h6>
                          <p className="text-[#9CA1AB] text-[16pxpx] xl:text-[0.833vw] font-normal">
                            {convertDateFormat(DiscussionDetail?.post?.createdAt)}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-[20px] xl:gap-[1.042vw] text-[#9CA1AB]">
                        <div className="font-light xl:text-[0.833vw] text-[16px] ">
                          {" "}
                          <i className="austin-note  text-[20px]  mr-3"></i>{DiscussionDetail?.post?.commentCount}
                          comments
                        </div>
                        <div className="font-light xl:text-[0.833vw] text-[16px] ">
                          {" "}
                          <i className="austin-eye  text-[20px]  mr-3"></i> {DiscussionDetail?.post?.viewCount}
                          Views
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
                          {tagArray?.map(item =>
                            <span
                              href=""
                              className="bg-[#E8EBF0] rounded-md text-[#62789B] text-[14px] xl:text-[0.729vw] font-medium px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.313vw]"
                            >
                              {item}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-[#4B586E9E] text-[18px] xl:text-[1.042vw] font-normal xl:leading-[1.40vw] leading-6">
                      {DiscussionDetail?.post?.description}
                    </p>

                    <div className="flex gap-[20px] xl:gap-[1.25vw]">
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
                    </div>

                    <div>
                      <h6 className="text-[#374151] text-[18px] xl:text-[1.042vw] font-medium">
                        Media
                      </h6>

                      <div className="mt-[8px] xl:mt-[0.417vw]">
                        <div className="grid grid-cols-12 md:grid-cols-12 xl:grid-cols-12 gap-[24px] xl:gap-[1.250vw]">
                          <div className="xl:col-span-9 col-span-12">
                            <div className="flex gap-[24px] xl:gap-[1.25vw]">
                              <div>
                                <div className="relative">
                                  <Image
                                    src={"/assets/images/media1.png"}
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
                                    Council Meeting{" "}
                                  </p>
                                  <p className="text-[#9CA1AB] text-[13px] xl:text-[0.729vw] font-light leading-tight">
                                    Record - 9/21/23
                                  </p>
                                </div>
                              </div>
                              <div>
                                <div className="relative">
                                  <Image
                                    src={"/assets/images/media1.png"}
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
                                    Council Meeting{" "}
                                  </p>
                                  <p className="text-[#9CA1AB] text-[13px] xl:text-[0.729vw] font-light leading-tight">
                                    Record - 9/21/23
                                  </p>
                                </div>
                              </div>
                              <div>
                                <div className="relative">
                                  <Image
                                    src={"/assets/images/doc_img.png"}
                                    width={160}
                                    height={102}
                                    alt="active_user"
                                    className="h-[100px] w-full xl:h-[6.25vw] xl:w-full "
                                  />
                                </div>
                                <div className="mt-2">
                                  <p className="text-[#9CA1AB] text-[13px] xl:text-[0.729vw] font-light leading-tight">
                                    Council Meeting{" "}
                                  </p>
                                  <p className="text-[#9CA1AB] text-[13px] xl:text-[0.729vw] font-light leading-tight">
                                    Record - 9/21/23
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="xl:col-span-3 col-span-12 place-self-end">
                            <div className="flex justify-end gap-[14px] xl:gap-[0.833vw]">
                              <Link
                                href=""
                                className="bg-[#F5F6F8] text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] rounded-full"
                              >
                                <i className="austin-like  text-[20px] text-[#1B3865] mr-2"></i>
                                {DiscussionDetail?.post?.topicLikes} likes
                              </Link>
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
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder="Select Order by"
                        className="w-[200px] xl:w-[18.229vw]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="custom_editor relative">
                      <Editor
                        value={PostComment}
                        onTextChange={(e) => setPostComment(e.textValue)}
                        style={{ minHeight: '20vh', height: "100%" }}
                      />
                      <Link href="" className="absolute bottom-2 right-3">
                        <i className="austin-mic text-[#4B586E] text-[22px]"></i>
                      </Link>
                    </div>
                    <div className={`${myInter.className} flex justify-end xl:mt-[0.833vw] mt-[16px]`}>
                      <Link
                        href=""
                        onClick={()=>{addComment()}}
                        className="bg-[#4F6484] rounded-md text-[#fff] text-[14px] xl:text-[0.833vw] font-normal px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5"
                      >
                        <i className="austin-pluse text-[#fff] text-[20px] mr-2"></i>
                        Add Comment
                      </Link>
                    </div>
                  </div>

                  <Comments
                    data={DiscussionDetail?.comments}
                  />
                </div>
              </div>
            }
            <div className="">
              <div >
                <RelatedItems />
              </div>
            </div>
          </div>
        </div>
        <Bordmeetingview
          visible={bordmeetingviewpopup}
          onHides={() => setbordmeetingviewpopup(false)}
        />
      </div>
    </>
  );
}
