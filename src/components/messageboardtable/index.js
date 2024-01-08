import React, { useEffect, useState } from 'react';
import { DataView } from 'primereact/dataview';
import Image from 'next/image';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Montserrat } from "@next/font/google";
import Loader from "@/components/loader";
import { convertDateFormat } from "@/service/utils/DateConversion";
import { Paginator } from 'primereact/paginator';

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export default function MessageBoardTable(props) {

    const [imageError, setImageError] = useState(false);
    const handleImageError = () => {
        setImageError(true);
    };
    
    const itemTemplate = (item) => {
        return (
            <div className={myMontserrat.className}>
                <span onClick={() => { props?.setShowDiscussionDetail(true), props?.setPost_id(item?.topic_id) }} className='cursor-pointer flex-wrap md:flex xl:flex justify-between gap-1 xl:mt-[0.833vw] mt-[16px] xl:mb-[0.833vw] mb-[16px]'>
                    <div className='flex justify-between gap-5'>
                        {imageError ? <div className="text-xl rounded-full w-11 h-11 flex items-center justify-center bg-gray-500 text-white">
                            {item?.user?.firstName?.charAt(0)}
                        </div>
                            :
                            <Image src={item?.user?.profile_pic} width={56} height={56} alt='' onError={handleImageError} className='w-[56px] h-[56px] xl:w-[2.917vw] xl:h-[2.917vw]' />}
                        <div className='flex items-start gap-2'>
                            <div>
                                <div className='text-[16px] xl:text-[0.833vw] text-[#374151] font-medium mb-[8px]'>{item?.post}</div>
                                <div className='flex items-center gap-2'>
                                    <div className='text-[14px] xl:text-[0.729vw] text-[#4B586E] font-medium'>{item?.user?.firstName + item?.user?.lastName}</div>
                                    <div className='text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal'>{convertDateFormat(item?.createdAt)}</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='custAvatar'>
                        <AvatarGroup>
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" size='50px' />
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" shape="circle" />
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                            <Avatar label="+2" shape="circle" />
                        </AvatarGroup>
                    </div>
                </span>
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
                    <Paginator
                        className="mt-4"
                        template={`FirstPageLink PrevPageLink PageLinks ${props?.totalRecords > 1 && 'CurrentPageReport'} NextPageLink LastPageLink`}
                        first={props?.pagination}
                        rows={props?.pageSize}
                        totalRecords={props?.totalRecords}
                        onPageChange={props?.onPageChange}
                    />
                </div>
            }
        </>
    )
}