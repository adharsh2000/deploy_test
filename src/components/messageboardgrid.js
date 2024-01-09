import React from "react";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import Loader from "@/components/loader";
import { convertDateFormat } from "@/service/utils/DateConversion";
import fetchAPI from '@/service/api/fetchAPI'
import { Paginator } from 'primereact/paginator';

export default function MessageBoardGrid(props) {

    const Unpin = async (topic_id, action) => {
        props?.setPinnedLoading(true)
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
            <div className="flex justify-between mb-[40px] xl:mb-[2.09vw]">
                <h2 className="text-[#374151] text-[32px] xl:text-[1.667vw] leading-[1.3]">Latest <span className="font-bold">Topics</span></h2>
            </div>
            {props?.TopicLoading ? <Loader height='50vh' /> :
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] xl:gap-[1.250vw]">
                    {props?.TopicList?.map(item =>
                        <span className="shadow border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                            <div className="relative">
                                <div className="col cursor-pointer" onClick={() => { props?.setShowDiscussionDetail(true), props?.setPost_id(item?.topic_id),props?.setCategory_id(item?.category_id) }}>
                                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                                        {item?.user?.firstName + item?.user?.lastName}
                                    </span>
                                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                                        {convertDateFormat(item?.createdAt)}
                                    </span>
                                </div>
                                <div onClick={() => Unpin(item?.topic_id, 'pin')} className="absolute right-0 top-0 cursor-pointer">
                                    <i className="text-[#E5E7EB] bg-[#9CA1AB] rounded-full text-[40px] xl:text-[2.083vw] austin-pin-circle"></i>
                                </div>
                                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                                    {item?.post}
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
                                        <Avatar
                                            image="/assets/images/userpic1.png"
                                            shape="circle"
                                        />
                                        <Avatar
                                            image="/assets/images/userpic2.png"
                                            shape="circle"
                                        />
                                        <Avatar
                                            image="/assets/images/userpic3.png"
                                            shape="circle"
                                        />
                                        <Avatar
                                            image="/assets/images/userpic4.png"
                                            shape="circle"
                                        />
                                        <Avatar label="+4" shape="circle" />
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
