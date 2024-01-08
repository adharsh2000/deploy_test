import React from "react";
import { Montserrat } from "@next/font/google";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import Link from "next/link";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function LatestTopics() {
  return (
    <>
      <div className="bg-white rounded-[24px] xl:rounded-[1.250vw] py-[24px] xl:py-[1.250vw] px-[28px] px-[1.458vw]">
        <div className="md:flex items-start lg:items-center gap-[26px] xl:gap-[1.354vw] space-y-5 md:space-y-0">
          <div className="col">
            <div className="flex grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-[20px] xl:gap-[0.938vw] items-center">
              <div className="col">
                <div className={myMontserrat.className}>
                  <div className="text-[#374151] text-[15px] xl:text-[0.833vw] leading-[1.2]">
                    Message Board
                  </div>
                  <div className="text-[#374151] text-[30px] xl:text-[1.667vw] leading-[1.2] ">
                    Latest <span className="font-extrabold">Topics</span>
                  </div>
                </div>
                <div className="mt-[24px]">
                  <Link
                    href={""}
                    className="hover:bg-[#982E33] hover:text-[#fff] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-[#762428]  border border-[#982E33]"
                  >
                    Manage{" "}
                    <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
              </div>

              <div className="border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                  <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                      Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                      Mon Sep 11, 2023
                    </span>
                  </div>

                  <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[14px] xl:mt-[0.533vw] min-h-[40px] xl:min-h-[2.804vw]">
                    Questions Regarding Item 83 for the September 14th, 2023,
                    Council Meeting
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                  <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                      <i className="austin-eye text-[12px] xl:text-[0.625vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                      614
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
              <div className="border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                  <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                      Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                      Mon Sep 11, 2023
                    </span>
                  </div>

                  <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[14px] xl:mt-[0.533vw] min-h-[40px] xl:min-h-[2.804vw]">
                    Questions Regarding Item 83 for the September 14th, 2023,
                    Council Meeting
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                  <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                      <i className="austin-eye text-[12px] xl:text-[0.625vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                      614
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
              <div className="border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                  <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                      Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                      Mon Sep 11, 2023
                    </span>
                  </div>

                  <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[14px] xl:mt-[0.533vw] min-h-[40px] xl:min-h-[2.804vw]">
                    Questions Regarding Item 83 for the September 14th, 2023,
                    Council Meeting
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                  <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                      <i className="austin-eye text-[12px] xl:text-[0.625vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                      614
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
              <div className="border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                  <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                      Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                      Mon Sep 11, 2023
                    </span>
                  </div>

                  <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[14px] xl:mt-[0.533vw] min-h-[40px] xl:min-h-[2.804vw]">
                    Questions Regarding Item 83 for the September 14th, 2023,
                    Council Meeting
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                  <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                      <i className="austin-eye text-[12px] xl:text-[0.625vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                      614
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
