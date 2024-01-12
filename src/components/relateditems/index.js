import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import { Montserrat, Inter } from "@next/font/google";
import { convertDateFormat } from "@/service/utils/DateConversion";
import fetchAPI from '@/service/api/fetchAPI'
import { Toast } from "primereact/toast";
import {setGlobalState } from '@/redux/slice/globalState';
import { useDispatch } from "react-redux";

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

const RelatedItems = (props) => {
  const dispatch = useDispatch();

  const toast = useRef(null);
  const Unpin = async (topic_id, action) => {
    let data = {
      topic_id: topic_id,
      isPined: action == 'pin' ? 1 : 0,
      viewer_user_id: parseInt(sessionStorage.getItem('UserID'))
    }
    try {
      await fetchAPI(`/messageboard/topicview/pinnedunpinnedtopic`, 'POST', data, 'application/json')
        .then((response) => {
          response?.message?.includes('successfully') && props?.setPinnedUpdated(true)
          if (response?.message?.includes('topic pinned')) {
            toast.current.show({ severity: 'success', summary: 'Post has been pinned', detail: '' });
          }
          else if (response?.message?.includes('unpinned')) {
            toast.current.show({ severity: 'success', summary: 'Post has been unpinned', detail: '' });
          }
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }

  return (
    <>
      <div className={`${myInter.className} bg-white rounded-[24px] xl:rounded-[1.250vw] mt-2 py-[24px] xl:py-[1.250vw] px-[28px] xl:px-[1.458vw]`}>
        <div className="md:flex items-start lg:items-center gap-[26px] xl:gap-[1.354vw] space-y-5 md:space-y-0">
          <div className="col">
            <div className={myMontserrat.className}>
              <div className="text-[#374151] text-[46px] xl:text-[2.396vw] leading-[1.2]">
                Related
              </div>
              <div className="text-[#374151] text-[56px] xl:text-[2.917vw] leading-[1.2] font-extrabold">
                Items
              </div>
            </div>
            <div className="mt-[24px]">
              <Link
                href={""}
                className="bg-[#A93439] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-white"
              >
                See All{" "}
                <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
              </Link>
            </div>
          </div>
          <div className="col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] xl:gap-[1.250vw]">
              {props?.data?.rows?.map(item =>

                <div className="border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                  <div className="relative">
                    <Link className="col cursor-pointer" href={{ pathname: '/messageboard/discussiondetails', query: {post_id:item?.post_id,category_id:item?.category_id } }} onClick={() => { props?.checkLocalStorage,localStorage.setItem('post_id',item?.post_id),localStorage.setItem('category_id',item?.category_id),localStorage.setItem('pinnedStatus',item?.isPined),localStorage.setItem('topic_id',item?.topic_id) }}>
                      <span className="capitalize text-[#374151] text-[14px] xl:text-[0.729vw]">
                        {item?.user?.firstName +' '+ item?.user?.lastName}
                      </span>
                      <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                        {convertDateFormat(item?.createdAt)}
                      </span>
                    </Link>
                    <div onClick={() => Unpin(item?.topic_id, item?.pinnedStatus == 0 ? 'pin' : 'unpin')} className="absolute right-0 top-0 cursor-pointer pinWapper">
                      <span className={`inline-flex items-center justify-center w-[40px] xl:w-[2.083vw] h-[40px] xl:h-[2.083vw] rounded-full ${item?.pinnedStatus ? 'bg-[#A93439]' : 'bg-[#ccc]'}`}>
                        <i className="text-white text-[20px] austin-pin"></i>
                      </span>
                    </div>
                    <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                    <Link href={{ pathname: '/messageboard/discussiondetails', query: {post_id:item?.post_id,category_id:item?.category_id } }} onClick={() => { props?.checkLocalStorage(),localStorage.setItem('post_id',item?.post_id),localStorage.setItem('category_id',item?.category_id),localStorage.setItem('pinnedStatus',item?.isPined),localStorage.setItem('topic_id',item?.topic_id) }} className="cursor-pointer">
                      {item?.post}
                    </Link>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                    <div>
                      <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                        <i className="austin-eye text-[14px] xl:text-[0.729vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                        {item?.viewCount}
                      </div>
                    </div>
                    <div className="custmAvatar">
                        <AvatarGroup>
                          {item?.CommentDetails?.commentUser?.map(itr =>
                            itr?.user?.profile_pic ? <Avatar
                              image={itr?.user?.profile_pic}
                              shape="circle"
                            />
                              :
                              itr?.user?.profile_pic &&<div className="capitalize text-sm rounded-full w-6 h-6 flex items-center justify-center bg-gray-500 text-white">
                                {itr?.user?.firstName?.charAt(0)}
                              </div>
                          )}
                          {item?.CommentDetails?.commentCount > 3&&<div className="capitalize text-xs rounded-full w-6 h-6 flex items-center justify-center bg-[#232b25] text-white">+{item?.CommentDetails?.commentCount-3}</div>}
                        </AvatarGroup>
                      </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Toast ref={toast}></Toast>
    </>
  );
};
export default RelatedItems;
