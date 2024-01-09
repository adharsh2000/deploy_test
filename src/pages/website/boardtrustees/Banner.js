import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

// const adminStylesheets = ['/styles/website/banner.css'];
// import '/styles/website/banner.css'
const websiteStylesheets = [
  "/styles/website/vkstyle.css",
  "/styles/website/banner.css",
  "/styles/website/astyle.css",
  "/styles/website/nstyle.css",
  "/styles/website/skstyle.css",
  "/styles/website/systyle.css",
  "/styles/website/vsstyle.css",
];

export default function Banner() {
  const router = useRouter();
  const [addMessageBoard, setAddMessageBoardMessageBoard] = useState(false);

  return (
    <div className="mt-1">
      <div className="text-black">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {router.pathname.startsWith("/website") &&
            websiteStylesheets.map((stylesheet, index) => (
              <link key={index} rel="stylesheet" href={stylesheet} />
            ))}
        </Head>
        <div className="custslick-slider calendar-slider">
          {/**col**/}
          <div className="flex items-center ">
            <div className="h-[600px] overflow-hidden relative">
              <img
                src={"/assets/website/boardtrustees-slider.png"}
                alt="Banner"
                className="object-cover object-center w-full h-full"
              />
              <div className="w-2/5 absolute top-10 left-16">
                <div className="col">
                  <div className="breadCrumb flex justify-star gap-[16px] mb-[20px]">
                    <div className="col">
                      <Link href={""}>
                        <i className="austin-home"></i> Home
                      </Link>
                    </div>
                    <div className="col">
                      <i className="austin-arrow-open-right"></i>
                    </div>
                    <div className="col">Calendar of Events</div>
                  </div>
                </div>
                <div className="text-[#374151] text-[40px] font-normal mb-4">
                  Board of
                  <span className="font-extrabold"> Trustees</span>
                </div>
                <div className="space-y-[16px] xl:space-y-[0.833vw]">
                  <p className="text-base text-[#4B586E]  text-wrapping min-w-[400px] text-ellipsis overflow-hidden">
                    Guiding the Austin Independent School District toward
                    excellence is the goal of the nine-member AISD Board of
                    Trustees. As the district's elected leaders, trustees
                    represent community expectations as they chart the direction
                    of educational programs and services and establish the
                    standard by which success is measured.
                  </p>
                  <p className="text-base text-[#4B586E] text-wrapping min-w-[400px] text-ellipsis overflow-hidden">
                    Trustees employ the superintendent, approve the budget and
                    monitor expenditures, set the tax rate, and may call for a
                    bond or tax rate election. The board also establishes
                    policies for operating the district and ensuring its
                    financial viability.
                  </p>
                  <div className="border border-[#BECDE3] p-[24px] xl:p-[1.250vw] rounded-[8px] xl:rounded-[0.417vw] space-y-[16px] xl:space-y-[0.833vw]">
                    <div className="text-[#374151] text-[20px] xl:text-[1.042vw]">
                      AISD Board Meetings
                    </div>
                    <div className="text-[#4B586E] text-[0.833vw] xl:text-[0.833vw] leading-none">
                      Meetings will broadcast on{" "}
                      <Link href={""} className="underline">
                        AISD.TV
                      </Link>{" "}
                      and on{" "}
                      <Link href={"#"} className="underline">
                        YouTube.
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-[16px] xl:gap-[0.833vw]">
                    <div className="boxshadow bg-white py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] rounded-[6px] xl:rounded-[0.313vw]">
                      <div className="text-[#374151] text-[14px] xl:text-[0.729vw] font-medium">
                        <i className="autinisd-doc-file text-[#A93439] text-[18px] xl:text-[0.938vw] mr-[0.833vw]"></i>{" "}
                        Public Comment Policy & Public Testimony at Regular
                        Voting Meetings
                      </div>
                    </div>
                    <div className="boxshadow bg-white py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] rounded-[6px] xl:rounded-[0.313vw]">
                      <div className="text-[#374151] text-[14px] xl:text-[0.729vw] font-medium">
                        <i className="autinisd-doc-file text-[#A93439] text-[18px] xl:text-[0.938vw] mr-[0.833vw]"></i>{" "}
                        Board Service
                      </div>
                    </div>
                    <div className="boxshadow bg-white py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] rounded-[6px] xl:rounded-[0.313vw]">
                      <div className="text-[#374151] text-[14px] xl:text-[0.729vw] font-medium">
                        <i className="autinisd-doc-file text-[#A93439] text-[18px] xl:text-[0.938vw] mr-[0.833vw]"></i>{" "}
                        Board Service
                      </div>
                    </div>
                    <div className="boxshadow bg-white py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] rounded-[6px] xl:rounded-[0.313vw]">
                      <div className="text-[#374151] text-[14px] xl:text-[0.729vw] font-medium">
                        <i className="autinisd-doc-file text-[#A93439] text-[18px] xl:text-[0.938vw] mr-[0.833vw]"></i>{" "}
                        District Policies
                      </div>
                    </div>
                    <div className="boxshadow bg-white py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] rounded-[6px] xl:rounded-[0.313vw]">
                      <div className="text-[#374151] text-[14px] xl:text-[0.729vw] font-medium">
                        <i className="autinisd-doc-file text-[#A93439] text-[18px] xl:text-[0.938vw] mr-[0.833vw]"></i>{" "}
                        Operating Procedures
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**col**/}

          
        </div>
      </div>
    </div>
  );
}
