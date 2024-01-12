import React, { useState } from "react";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import Loader from "@/components/loader";
import { convertDateFormat } from "@/service/utils/DateConversion";
import fetchAPI from '@/service/api/fetchAPI'
import { Paginator } from 'primereact/paginator';
import { setGlobalState } from '@/redux/slice/globalState';
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function MessageBoardGrid(props) {
    const dispatch = useDispatch();

    const Unpin = async (topic_id, action) => {
        // props?.setPinnedLoading(true)
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
    const [imageError, setImageError] = useState(false);
    const handleImageError = () => {
        setImageError(true);
    };
    return (
        <>
            <div className="flex justify-between mb-[40px] xl:mb-[2.09vw]">
                <h2 className="text-[#374151] text-[32px] xl:text-[1.667vw] leading-[1.3]">Latest <span className="font-bold">Topics</span></h2>
            </div>
            {props?.TopicLoading ? <Loader height='50vh' /> :
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] xl:gap-[1.250vw]">
                    {props?.TopicList?.map(item =>
                        <span className="shadow border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                            <div className="relative">
                                <Link href={{ pathname: '/messageboard/discussiondetails', query: {post_id:item?.post_id,category_id:item?.category_id } }} onClick={() => { localStorage.setItem('post_id', item?.post_id), localStorage.setItem('category_id', item?.category_id), localStorage.setItem('pinnedStatus', item?.pinnedStatus), localStorage.setItem('topic_id', item?.topic_id) }} className="col">
                                    <span className="capitalize text-[#374151] text-[14px] xl:text-[0.729vw]">
                                        {item?.user?.firstName +' '+ item?.user?.lastName}
                                    </span>
                                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                                        {convertDateFormat(item?.createdAt)}
                                    </span>
                                </Link>
                                {/* <div onClick={() => Unpin(item?.topic_id, item?.pinnedStatus == 0 ? 'pin' : 'unpin')} className="absolute right-0 top-0 cursor-pointer">
                                    <i className="text-[#E5E7EB] bg-[#9CA1AB] rounded-full text-[40px] xl:text-[2.083vw] austin-pin-circle"></i>
                                </div> */}
                                <div onClick={() => Unpin(item?.topic_id, item?.pinnedStatus == 0 ? 'pin' : 'unpin')} className="absolute right-0 top-0 cursor-pointer pinWapper">
                                    <span className={`inline-flex items-center justify-center w-[40px] xl:w-[2.083vw] h-[40px] xl:h-[2.083vw] rounded-full ${item?.pinnedStatus ? 'bg-[#A93439]' : 'bg-[#ccc]'}`}>
                                        <i className="text-white text-[20px] austin-pin"></i>
                                    </span>
                                </div>
                                <div className=" text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                                    <Link href={{ pathname: '/messageboard/discussiondetails', query: {post_id:item?.post_id,category_id:item?.category_id } }} onClick={() => { localStorage.setItem('post_id', item?.post_id), localStorage.setItem('category_id', item?.category_id), localStorage.setItem('pinnedStatus', item?.pinnedStatus), localStorage.setItem('topic_id', item?.topic_id) }} className="cursor-pointer">
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
                                                itr?.user?.profile_pic && <div className="capitalize text-sm rounded-full w-6 h-6 flex items-center justify-center bg-gray-500 text-white">
                                                    {itr?.user?.firstName?.charAt(0)}
                                                </div>
                                        )}
                                        {item?.CommentDetails?.commentCount > 3 && <div className="capitalize text-sm rounded-full w-6 h-6 flex items-center justify-center bg-[#232b25] text-white">+{item?.CommentDetails?.commentCount-3}</div>}
                                    </AvatarGroup>
                                </div>
                            </div>
                        </span>
                    )}
                </div>
            }
            <Paginator
                className="mt-4 bg-transparent"
                template={`FirstPageLink PrevPageLink PageLinks ${props?.totalRecords > 1 && 'CurrentPageReport'} NextPageLink LastPageLink`}
                first={props?.pagination}
                rows={props?.pageSize}
                totalRecords={props?.totalRecords}
                onPageChange={props?.onPageChange}
            />
        </>
    );
}
