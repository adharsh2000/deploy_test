import React,{useState} from "react";
import { Montserrat } from "@next/font/google";
import Image from "next/image";
import Loader from "@/components/loader";
import { convertDateFormat } from "@/service/utils/DateConversion";
import { Paginator } from 'primereact/paginator';
import Link from "next/link";
import {setGlobalState } from '@/redux/slice/globalState';
import { useDispatch } from "react-redux";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index(props) {
  const dispatch = useDispatch();

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>

      <div className="col-span-8">
        <div className="bg-white h-full rounded-[24px] xl:rounded-[1.250vw] p-[32px] xl:p-[1.667vw]">
          <div className="mb-[24px] xl:mb-[1.250vw]">
            <div className={myMontserrat.className}>
              <div className="text-[#374151] text-[32px] xl:text-[1.667vw] font-semibold leading-[1.3]">
                Unanswered Topics
              </div>
              <div className="text-[#9CA1AB] text-[16px] xl:text-[0.833vw] font-medium">
                Discussions with no comments. Be first to post a comment.
              </div>
            </div>
          </div>
          {props?.UnansweredLoading ? <Loader height='50vh'/> :
            <div className="space-y-[18px] xl:space-y-[0.938vw]">
              {/* row */}
              {props?.Unanswered?.map(item =>
                <Link href={'/messageboard/discussiondetails'} onClick={() => { localStorage.setItem('post_id',item?.posts?.post_id),localStorage.setItem('category_id',item?.topic_category_id),localStorage.setItem('pinnedStatus',item?.isPined) }} className="border-b border-[#E5E7EB] pb-[16px] pb-[0.833vw]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[16px] xl:gap-[0.833vw]">
                      <div className="col">
                        <div className="userpic">
                          {imageError ? <Image
                            src={item?.user?.profile_pic}
                            width={"32"}
                            height={"32"}
                            className="rounded-full object-cover min-w-[32px] min-h-[32px]"
                            onError={handleImageError}
                          /> :
                            <div className="capitalize text-md rounded-full w-7 h-7 flex items-center justify-center bg-gray-500 text-white">
                              {item?.user?.firstName?.charAt(0)}
                            </div>}
                        </div>
                      </div>
                      <div className=" col space-x-[8px] xl:space-x-[0.417vw]">
                        <span className="capitalize text-[#374151] text-[18px] xl:text-[0.938vw] font-semibold">
                          {item?.user?.firstName +' '+ item?.user?.lastName}
                        </span>
                        <span className="text-[#9CA1AB] text-[18px] xl:text-[0.938vw]">
                          posted at {convertDateFormat(item?.createdAt)}
                        </span>
                      </div>
                    </div>
                    <div className={`${myMontserrat.className} col text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium`}>
                      <i className="austin-chat mr-[8px] xl:mr-[0.417vw]"></i>0
                      comments
                    </div>
                  </div>
                  <div className="ml-10 text-[#4B586E] text-[20px] xl:text-[1.042vw] font-medium mb-5">
                    {item?.post}
                  </div>
                </Link>
              )}
            </div>
          }
          <div className="relative">
          <Paginator
                className="mt-4 bg-transparent"
                template={`FirstPageLink PrevPageLink PageLinks ${props?.unansweredtotalRecords > 1 && 'CurrentPageReport'} NextPageLink LastPageLink ${props?.unansweredtotalRecords}`}
                first={props?.unansweredpagination}
                rows={props?.unansweredpageSize}
                totalRecords={props?.unansweredtotalRecords}
                onPageChange={props?.unansweredonPageChange}
            />
            {/* <span className="absolute top-[22px] left-[5vw] text-[#6f767d] text-sm">{props?.unansweredtotalRecords} topics</span> */}
            </div>
        </div>
      </div>

    </>
  );
}
