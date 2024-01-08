import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import Loader from "@/components/loader";
import { convertDateFormat } from "@/service/utils/DateConversion";
import fetchAPI from '@/service/api/fetchAPI'

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index(props) {

  const [SeeAll, setSeeAll] = useState(false)

  const PinnedList = SeeAll ? props?.PinnedList : props?.PinnedList?.slice(0, 4)

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
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }
  return (
    <>
      <div className="bg-white rounded-[24px] xl:rounded-[1.250vw] py-[24px] xl:py-[1.250vw] px-[28px] px-[1.458vw]">
        <div className="md:flex gap-[26px] xl:gap-[1.354vw] space-y-5 md:space-y-0">
          <div className="col">
            <div className={myMontserrat.className}>
              <div className="text-[#374151] text-[46px] xl:text-[2.396vw] leading-[1.2]">
                Pinned
              </div>
              <div className="text-[#374151] text-[56px] xl:text-[2.917vw] leading-[1.2] font-extrabold">
                Items
              </div>
            </div>
            <div className="cursor-pointer mt-[24px]">
              <span
                onClick={() => setSeeAll(!SeeAll)}
                href={""}
                className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-white"
              >
                {SeeAll ? 'See Less' : 'See All'}
                <i className={`${SeeAll ? 'austin-arrow-open-up' : 'austin-arrow-open-down'} ml-[8px] xl:ml-[0.417vw]`}></i>
              </span>
            </div>
          </div>
          {props.PinnedLoading ? <div className="w-full"><Loader height='100%' /></div> :
            <div className="col">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] xl:gap-[1.250vw]">
                {PinnedList?.map(item =>
                  <div className="border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                    <div className="relative">
                      <div className="col cursor-pointer" onClick={() => { props?.setShowDiscussionDetail(true), props?.setPost_id(item?.topic_id) }}>
                        <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                          {item?.user.firstName + item?.user?.lastName}
                        </span>
                        <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                          {convertDateFormat(item?.viewed_on)}
                        </span>
                      </div>
                      <div onClick={() => Unpin(item?.topic_id, item?.isPined == 0 ? 'pin' : 'unpin')} className="absolute right-0 top-0 cursor-pointer pinWapper">
                        <span className={`inline-flex items-center justify-center w-[40px] xl:w-[2.083vw] h-[40px] xl:h-[2.083vw] rounded-full ${item?.isPined ? 'bg-[#A93439]' : 'bg-[#ccc]'}`}>
                          <i className="text-white text-[20px] austin-pin"></i>
                        </span>
                      </div>
                      <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                        {item?.topic?.topic}
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
                  </div>
                )
                }
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
}
