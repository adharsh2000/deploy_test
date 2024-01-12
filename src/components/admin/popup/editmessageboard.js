import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import { Calendar } from "primereact/calendar";
import { Tooltip } from 'primereact/tooltip';
import Comments from "@/components/admin/comment";
import Loader from "@/components/loader";
import RemoveUser from "./removeUser";
import adminFetchAPI from "@/service/api/adminFetchApi";
import { Toast } from "primereact/toast";
import PublishPost from "./publishPost";

const EditMessageBoard = (props) => {
  const { post, loading,sortby,setSortby } = props;
  const [date, setDate] = useState(null);
  const [text, setText] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [openPublish, setOpenPublish] = useState(false);
  const toast = useRef(null);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const sortbyOption = [
    { name: "Relevant" },
    { name: "Date" },
  ];
  const commentsdata = [
    {
      name: 'Jerome Bell',
      date: 'Mon Sep 25, 2023 9:41 am',
      likecount: '122',
      description: 'Lorem ipsum dolor sit amet consectetur. Mattis nunc vel sed mauris tempor turpis urna. Sed enim vel tincidunt ut lectus aenean. Enim venenatis volutpat massa euonsectetur amet commodo. Et diam mi id aliquam. In at enim laoreet aliquam id accumsan arcu aliquam urna.Viverra.'
    },
    {
      name: 'Jerome Bell',
      date: 'Mon Sep 25, 2023 9:41 am',
      likecount: '122',
      description: 'Lorem ipsum dolor sit amet consectetur. Mattis nunc vel sed mauris tempor turpis urna. Sed enim vel tincidunt ut lectus aenean. Enim venenatis volutpat massa euonsectetur amet commodo. Et diam mi id aliquam. In at enim laoreet aliquam id accumsan arcu aliquam urna.Viverra.'
    },
    {
      name: 'Jerome Bell',
      date: 'Mon Sep 25, 2023 9:41 am',
      likecount: '122',
      description: 'Lorem ipsum dolor sit amet consectetur. Mattis nunc vel sed mauris tempor turpis urna. Sed enim vel tincidunt ut lectus aenean. Enim venenatis volutpat massa euonsectetur amet commodo. Et diam mi id aliquam. In at enim laoreet aliquam id accumsan arcu aliquam urna.Viverra.'
    },
    {
      name: 'Jerome Bell',
      date: 'Mon Sep 25, 2023 9:41 am',
      likecount: '122',
      description: 'Lorem ipsum dolor sit amet consectetur. Mattis nunc vel sed mauris tempor turpis urna. Sed enim vel tincidunt ut lectus aenean. Enim venenatis volutpat massa euonsectetur amet commodo. Et diam mi id aliquam. In at enim laoreet aliquam id accumsan arcu aliquam urna.Viverra.'
    },
    {
      name: 'Jerome Bell',
      date: 'Mon Sep 25, 2023 9:41 am',
      likecount: '122',
      description: 'Lorem ipsum dolor sit amet consectetur. Mattis nunc vel sed mauris tempor turpis urna. Sed enim vel tincidunt ut lectus aenean. Enim venenatis volutpat massa euonsectetur amet commodo. Et diam mi id aliquam. In at enim laoreet aliquam id accumsan arcu aliquam urna.Viverra.'
    }
  ]

  const tagsArray = post?.tagRes

  const convertDateFormat = (dateString) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    const trimmedDate = formattedDate.replace(/,/, '');
    return trimmedDate;
  };

  // const handleDelete = async () => {
  //   console.log('post id hee', props?.post?.post?.post_id)
  //   const id = props?.post?.post?.post_id;
  //   await adminFetchAPI(`/messageboard/posts/${id}`, 'DELETE', {}, 'application/json')
  //     .then(({ data }) => {
  //       props.setEditMessageBoard(false)
  //       props.fetchPost();
  //       if (data?.message?.includes("not found")) {
  //         return toast.current.show({ severity: 'error', detail: data?.message, life: 3000 });
  //       }

  //       toast.current.show({ severity: 'success', detail: "post successfully deleted.", life: 3000 });

  //     })
  //     .catch((err) => {
  //       toast.current.show({ severity: 'error', detail: "something went wrong..", life: 3000 });
  //       console.log(err)
  //     })
  // }

  const handlePublishUnpublish = async () => {
    const body = post?.topicDetails?.isPublished === 0 ? {
      "isPublished": 1
    } : {
      "isPublished": 0
    }
    await adminFetchAPI(`/messageboard/topics/ispublish/${post?.post?.topic_id}`, "PUT", body, 'application/json')
      .then(({ message }) => {
        console.log('message', message);
        toast.current.show({ severity: 'success', detail: message, life: 3000 });
        setOpenPublish(false);
        props?.setEditMessageBoard(false);
      })
      .catch((err) => {
        toast.current.show({ severity: 'error', detail: "something went wrong..", life: 3000 });
        setOpenPublish(false);
        console.log('err', err)
      })
  }

  return (
    <>
      <div>
        <Sidebar
          visible={props.visible}
          position="right"
          style={{ borderRadius: "16px 0 0 16px" }}
          className="custmSidebar width1020 editpopup"
          onHide={() => props.onHides(false)} ss
        >
          {loading ? <Loader message='Loading...' /> :
            <div className="bg-[#E5E7EB] xl:p-[0.833vw] p-[16px] relative top-0">
              <div className=''>
                <div className="bg-[#fff] rounded-[24px] xl:rounded-[1.250vw] xl:p-[1.667vw] p-[30px] relative">
                  <div className="xl:space-y-[1.25vw] space-y-[15px] pb-4 border-b">
                    <div className="flex justify-between items-center flex-wrap">
                      <div className="flex gap-[20px] xl:gap-[1.042vw] mb-[10px] xl:mb-[0px]">
                        <div>
                          <Image
                            src={post?.post?.user?.profile_pic === null ? "" : post?.post?.user?.profile_pic}
                            width={60}
                            height={60}
                            alt="active_user"
                            className="h-[60px] w-[60px] xl:h-[3.125vw] xl:w-[3.125vw] "
                          />
                        </div>
                        <div>
                          <h6 className="text-[#374151] text-[20px] xl:text-[1.146vw] font-semibold" placeholder="Right" tooltip="Enter your username">
                            {`${post?.post?.user?.firstName} ${post?.post?.user?.lastName}`}
                          </h6>
                          <p className="text-[#9CA1AB] text-[16px] xl:text-[0.729vw] font-light">
                            {convertDateFormat(post?.post?.createdAt)}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-[20px] xl:gap-[1.042vw] text-[#4B586E] text-[0.752vw] font-light">
                        {post?.topicDetails?.isPublished === 0 ? (

                          <div onClick={() => setOpenPublish(true)} className="cursor-pointer flex items-center font-light xl:text-[0.725vw] text-[16px] bg-[#FDF6B2] px-[16px] xl:px-[0.833vw] py-[0.417vw] xl:py-[8px]  rounded-full leading-none">

                            <i className="autinisd-warning  text-[15px]  mr-2"></i>
                            Unpublish
                          </div>
                        ) : (

                          <div onClick={() => setOpenPublish(true)} className="cursor-pointer flex items-center font-light xl:text-[0.725vw] text-[16px] bg-[#FDF6B2] px-[16px] xl:px-[0.833vw] py-[0.417vw] xl:py-[8px]  rounded-full leading-none">

                            <i className="autinisd-warning  text-[15px]  mr-2"></i>
                            Publish
                          </div>
                        )}
                        <div onClick={() => props?.setDeleteUser(true)} className="cursor-pointer flex items-center font-light xl:text-[0.725vw] t text-[16px] bg-[#FDE8E8] px-[16px] xl:px-[0.833vw] py-[0.417vw] xl:py-[8px]  rounded-full leading-none ">
                          {" "}
                          <i className="autinisd-trash  text-[15px]  mr-2"></i> Delete
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <h6 className="text-[#374151] text-[30px] xl:text-[1.146vw] font-semibold leading-6">
                        {post?.post?.post}
                      </h6>
                      <div className="flex gap-[20px] xl:gap-[1.042vw] text-[#9CA1AB]">
                        <div className="font-light xl:text-[0.833vw] text-[16px] ">
                          {" "}
                          <i className="austin-note  text-[20px]  mr-3"></i>{`${post?.commentCount} comments`}

                        </div>
                        <div className="font-light xl:text-[0.833vw] text-[16px] ">
                          {" "}
                          <i className="austin-eye  text-[20px]  mr-3"></i> {`${post?.post?.viewCount} Views`}
                        </div>
                      </div>
                    </div>
                    <div
                      className='flex xl:gap-[0.625vw] gap-[16px] divide-x divide-[#BECDE3]' >
                      <p className="text-[#62789B] text-[14px] xl:text-[0.729vw] font-normal px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.313vw]">
                        Category: {post?.category?.topic_category}
                      </p>

                      <div>
                        <div className="flex gap-2 ml-5">
                          {
                            tagsArray?.map(item => (
                              <Link
                                key={item?.tag_id}
                                href=""
                                className="bg-[#E8EBF0] rounded-md text-[#62789B] text-[14px] xl:text-[0.729vw] font-medium px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.313vw]"
                              >
                                {`# ${item?.title}`}
                              </Link>
                            ))
                          }
                          {/* <Link
                          href=""
                          className="bg-[#E8EBF0] rounded-md text-[#62789B] text-[14px] xl:text-[0.729vw] font-medium px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.313vw]"
                        >
                          #Tag 2
                        </Link> */}
                        </div>
                      </div>
                    </div>

                    <p className="text-[#4B586E9E] text-[13px] xl:text-[0.729vw] font-normal xl:leading-[0.929vw] leading-6">
                      {post?.post?.description}
                    </p>

                    {/* <div className="flex gap-[20px] xl:gap-[1.25vw]">
                      <Link
                        href=""
                        className="text-[#4B7E73] text-[18px] xl:text-[0.781vw] font-light"
                      >
                        #Meeting
                      </Link>
                      <Link
                        href=""
                        className="text-[#4B7E73] text-[18px] xl:text-[0.781vw] font-light"
                      >
                        #Record
                      </Link>
                      <Link
                        href=""
                        className="text-[#4B7E73] text-[18px] xl:text-[0.781vw] font-light"
                      >
                        #Lorem Ipsum
                      </Link>
                    </div> */}

                    <div>
                      <h6 className="text-[#374151] text-[18px] xl:text-[0.781vw] font-medium">
                        Medias
                      </h6>

                      <div className="mt-[8px] xl:mt-[0.417vw]">
                        <div className="grid grid-cols-3 xl:gap-[1.250vw] gap-5 font-light">
                          {/*col-1*/}
                          {
                            post?.postFilesList?.map(item => (
                              <Link href={''} className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-3 flex items-center justify-between">
                                <i className="austin-attachment"></i>
                                <span>{item?.fileName}</span>
                                <i className="austin-close-circle"></i>
                              </Link>
                            ))
                          }
                          {/*col-2*/}
                          {/* <Link href={''} className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-3 flex items-center justify-between">
                            <i className="austin-attachment"></i>
                            <span>LoremIpsumDolorSitAmer.pdf</span>
                            <i className="austin-close-circle"></i>
                          </Link> */}

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="xl:mt-[1.604vw] mt-[40px]">

                    <div className="flex flex-wrap justify-between items-center">
                      <h2 className="text-[#374151] text-[20px] xl:text-[1.25vw] font-semibold">
                        Comments
                      </h2>
                      <div className="chat_dropdown">
                        <Dropdown
                          value={sortby}
                          onChange={(e) => setSortby(e.value)}
                          options={sortbyOption}
                          optionLabel="name"
                          placeholder="Select Order by"
                          className="w-[200px] xl:w-[18.229vw]"
                        />
                      </div>
                    </div>
                    <Comments
                      data={post?.comments}
                    />

                  </div>
                </div>
              </div>
            </div>
          }
        </Sidebar>
      </div>
      {/* <RemoveUser
        visible={openPublish}
        onHides={() => setOpenPublish(false)}
        message={`Are you sure you want to ${post?.topicDetails?.isPublished === 0 ? "Unpublish" : "Publish"} this Post?`}
        icon="autinisd-info-circle-fill"
        url={`/messageboard/topics/ispublish/${post?.post?.topic_id}`}
        method="PUT"
        body={post?.topicDetails?.isPublished === 0 ? {
          "isPublished": 1
        } : {
          "isPublished": 0
        }}
      // setId={setId}
      // fetchPost={fetchPost}
      // setEditMessageBoard={setEditMessageBoard}
      /> */}
      <PublishPost
        visible={openPublish}
        onHides={() => setOpenPublish(false)}
        icon="autinisd-info-circle-fill"
        message={`Are you sure you want to ${post?.topicDetails?.isPublished === 0 ? "Unpublish" : "Publish"} this Post?`}
        action={handlePublishUnpublish}
      />
      <Toast ref={toast}></Toast>
    </>
  );
};

export default EditMessageBoard;
