import React, { useEffect, useState } from 'react';
import { DataView } from 'primereact/dataview';
import Image from 'next/image';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Montserrat } from "@next/font/google";
import Loader from "@/components/loader";
import { convertDateFormat } from "@/service/utils/DateConversion";
import { Paginator } from 'primereact/paginator';
import Link from "next/link";
import { setGlobalState } from '@/redux/slice/globalState';
import { useDispatch } from "react-redux";

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export default function MessageBoardTable(props) {
    const dispatch = useDispatch();

    const [imageError, setImageError] = useState(false);
    const handleImageError = () => {
        setImageError(true);
    };
    const [avatarimageError, setavatarImageError] = useState(false);
    const avatarhandleImageError = () => {
        setavatarImageError(true);
    };
    const itemTemplate = (item) => {
        return (
            <div className={myMontserrat.className}>
                <Link href={{ pathname: '/messageboard/discussiondetails', query: {post_id:item?.post_id,category_id:item?.category_id } }} onClick={() => { localStorage.setItem('post_id', item?.post_id), localStorage.setItem('category_id', item?.category_id), localStorage.setItem('pinnedStatus', item?.pinnedStatus), localStorage.setItem('topic_id', item?.topic_id) }} className='cursor-pointer flex-wrap md:flex xl:flex justify-between gap-1 xl:mt-[0.833vw] mt-[16px] xl:mb-[0.833vw] mb-[16px]'>
                    <div className='flex justify-between gap-5'>
                        <div className='flex items-start gap-2'>
                            {item?.user?.profile_pic ? <Image src={item?.user?.profile_pic} width={56} height={56} alt='' onError={handleImageError} className='w-[56px] h-[56px] xl:w-[2.917vw] xl:h-[2.917vw]' />
                                :
                                <div className="capitalize text-xl rounded-full w-11 h-11 flex items-center justify-center bg-gray-500 text-white">
                                    {item?.user?.firstName?.charAt(0)}
                                </div>

                            }
                            <div>
                                <div className='text-[16px] xl:text-[0.833vw] text-[#374151] font-medium mb-[8px]'>{item?.post}</div>
                                <div className='flex items-center gap-2'>
                                    <div className='capitalize text-[14px] xl:text-[0.729vw] text-[#4B586E] font-medium'>{item?.user?.firstName +' '+ item?.user?.lastName}</div>
                                    <div className='text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal'>{convertDateFormat(item?.createdAt)}</div>
                                </div>
                            </div>
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
                            {item?.CommentDetails?.commentCount > 3 && <div className="capitalize text-sm rounded-full w-6 h-6 flex items-center justify-center bg-[#232b25] text-white">+{item?.CommentDetails?.commentCount}</div>}
                        </AvatarGroup>
                    </div>
                </Link>
            </div>
        );

    }


    return (
        <>
            {props?.TopicLoading ? <Loader height='100vh' /> :
                <div className='px-[32px] pb-[32px] xl:px-[1.667vw] xl:pb-[1.667vw] pt-[16px] xl:pt-[0.833vw] rounded-[24px] bg-[#FFFFFF] xl:rounded-[1.25vw]'>
                    <DataView
                        value={props?.TopicList}
                        itemTemplate={itemTemplate}
                        className='tableCust'
                    />
                    {props?.TopicList?.length > 0 && <Paginator
                        className="mt-4"
                        template={`FirstPageLink PrevPageLink PageLinks ${props?.totalRecords > 1 && 'CurrentPageReport'} NextPageLink LastPageLink`}
                        first={props?.pagination}
                        rows={props?.pageSize}
                        totalRecords={props?.totalRecords}
                        onPageChange={props?.onPageChange}
                    />
                    }
                </div>
            }
        </>
    )
}