import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import Filelistcatalog from "@/components/popup/filelistcatalog";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const [filelistcatalog, setfilelistcatalog] = useState(false);
  return (
    <>
      <div className="space-y-[16px] xl:space-y-[0.833vw]">
        {/* row */}
        <div className="bg-white border border-[#E5E7EB] shadow-[0px_9px_33px_0px_rgba(196,196,196,0.10)] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:col-span-5">
              <div className="space-y-[8px] xl:space-y-[0.417vw]">
                <div className="col">
                  <div className="flex items-center gap-[10px] xl:gap-[0.521vw]">
                    <div>
                      <Image
                        src={"/assets/images/catalogicon/icon01.png"}
                        width={"28"}
                        height={"28"}
                        alt=""
                      ></Image>
                    </div>
                    <div className="text-[#BC6D46] text-[12px] xl:text-[0.625vw] font-bold">
                      AISD Shorts
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="text-[#374151] text-[16px] text-[0.833vw] font-medium">
                    Navarro Early College High School Agriculture Program
                  </div>
                </div>
                <div className="col">
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Create:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Owner:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      Jhon Wayne
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Release Date:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-7 border-l border-[#E5E7EB] pl-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-[8px] xl:gap-[0.417vw]">
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-file-download ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-star-outline ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={() => setfilelistcatalog(true)}
                    className="inline-block border border-[#4B586E] hover:border-[#A93439] hover:bg-[#A93439] rounded-[4px] xl:rounded-[0.208vw] text-[#4B586E] hover:text-[#fff] text-[14px] xl:text-[0.833vw] p-[8px] xl:p-[0.417vw]"
                  >
                    More Details
                    <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
              </div>
              <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.417vw] px-[10px] xl:px-[0.521vw] mt-[8px] xl:mt-[0.417vw]">
                The Department of Building and Safety issues permits for the
                construction, remodeling, and repair of buildings and structures
                in the City of Los Angeles. Permits are categorized into
                building permits, electrical permits, and mechanical permits
                (which include plumbing, HVAC systems, fire sprinklers,
                elevators, and pressure vessels). Depending on the complexity of
                a project, a permit may be issued the same day with Express
                Permit or e-Permit ("No Plan Check" category), or a permit may
                require that the plans be reviewed ("Plan Check" category) by a
                Building and Safety Plan Check personnel.
              </div>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="bg-white border border-[#E5E7EB] shadow-[0px_9px_33px_0px_rgba(196,196,196,0.10)] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:col-span-5">
              <div className="space-y-[8px] xl:space-y-[0.417vw]">
                <div className="col">
                  <div className="flex items-center gap-[10px] xl:gap-[0.521vw]">
                    <div>
                      <Image
                        src={"/assets/images/catalogicon/icon02.png"}
                        width={"28"}
                        height={"28"}
                        alt=""
                      ></Image>
                    </div>
                    <div className="text-[#35527F] text-[12px] xl:text-[0.625vw] font-bold">
                      Audio
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="text-[#374151] text-[16px] text-[0.833vw] font-medium">
                    Navarro Early College High School Agriculture Program
                  </div>
                </div>
                <div className="col">
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Create:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Owner:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      Jhon Wayne
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Release Date:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-7 border-l border-[#E5E7EB] pl-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-[8px] xl:gap-[0.417vw]">
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-file-download ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-star-outline ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={() => setfilelistcatalog(true)}
                    className="inline-block border border-[#4B586E] hover:border-[#A93439] hover:bg-[#A93439] rounded-[4px] xl:rounded-[0.208vw] text-[#4B586E] hover:text-[#fff] text-[14px] xl:text-[0.833vw] p-[8px] xl:p-[0.417vw]"
                  >
                    More Details
                    <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
              </div>
              <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.417vw] px-[10px] xl:px-[0.521vw] mt-[8px] xl:mt-[0.417vw]">
                The Department of Building and Safety issues permits for the
                construction, remodeling, and repair of buildings and structures
                in the City of Los Angeles. Permits are categorized into
                building permits, electrical permits, and mechanical permits
                (which include plumbing, HVAC systems, fire sprinklers,
                elevators, and pressure vessels). Depending on the complexity of
                a project, a permit may be issued the same day with Express
                Permit or e-Permit ("No Plan Check" category), or a permit may
                require that the plans be reviewed ("Plan Check" category) by a
                Building and Safety Plan Check personnel.
              </div>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="bg-white border border-[#E5E7EB] shadow-[0px_9px_33px_0px_rgba(196,196,196,0.10)] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:col-span-5">
              <div className="space-y-[8px] xl:space-y-[0.417vw]">
                <div className="col">
                  <div className="flex items-center gap-[10px] xl:gap-[0.521vw]">
                    <div>
                      <Image
                        src={"/assets/images/catalogicon/icon03.png"}
                        width={"28"}
                        height={"28"}
                        alt=""
                      ></Image>
                    </div>
                    <div className="text-[#4B7E73] text-[12px] xl:text-[0.625vw] font-bold">
                      Document
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="text-[#374151] text-[16px] text-[0.833vw] font-medium">
                    Navarro Early College High School Agriculture Program
                  </div>
                </div>
                <div className="col">
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Create:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Owner:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      Jhon Wayne
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Release Date:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-7 border-l border-[#E5E7EB] pl-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-[8px] xl:gap-[0.417vw]">
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-file-download ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-star-outline ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={() => setfilelistcatalog(true)}
                    className="inline-block border border-[#4B586E] hover:border-[#A93439] hover:bg-[#A93439] rounded-[4px] xl:rounded-[0.208vw] text-[#4B586E] hover:text-[#fff] text-[14px] xl:text-[0.833vw] p-[8px] xl:p-[0.417vw]"
                  >
                    More Details
                    <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
              </div>
              <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.417vw] px-[10px] xl:px-[0.521vw] mt-[8px] xl:mt-[0.417vw]">
                The Department of Building and Safety issues permits for the
                construction, remodeling, and repair of buildings and structures
                in the City of Los Angeles. Permits are categorized into
                building permits, electrical permits, and mechanical permits
                (which include plumbing, HVAC systems, fire sprinklers,
                elevators, and pressure vessels). Depending on the complexity of
                a project, a permit may be issued the same day with Express
                Permit or e-Permit ("No Plan Check" category), or a permit may
                require that the plans be reviewed ("Plan Check" category) by a
                Building and Safety Plan Check personnel.
              </div>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="bg-white border border-[#E5E7EB] shadow-[0px_9px_33px_0px_rgba(196,196,196,0.10)] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:col-span-5">
              <div className="space-y-[8px] xl:space-y-[0.417vw]">
                <div className="col">
                  <div className="flex items-center gap-[10px] xl:gap-[0.521vw]">
                    <div>
                      <Image
                        src={"/assets/images/catalogicon/icon04.png"}
                        width={"28"}
                        height={"28"}
                        alt=""
                      ></Image>
                    </div>
                    <div className="text-[#A93439] text-[12px] xl:text-[0.625vw] font-bold">
                      Image
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="text-[#374151] text-[16px] text-[0.833vw] font-medium">
                    Navarro Early College High School Agriculture Program
                  </div>
                </div>
                <div className="col">
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Create:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Owner:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      Jhon Wayne
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Release Date:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-7 border-l border-[#E5E7EB] pl-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-[8px] xl:gap-[0.417vw]">
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-file-download ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-star-outline ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={() => setfilelistcatalog(true)}
                    className="inline-block border border-[#4B586E] hover:border-[#A93439] hover:bg-[#A93439] rounded-[4px] xl:rounded-[0.208vw] text-[#4B586E] hover:text-[#fff] text-[14px] xl:text-[0.833vw] p-[8px] xl:p-[0.417vw]"
                  >
                    More Details
                    <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
              </div>
              <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.417vw] px-[10px] xl:px-[0.521vw] mt-[8px] xl:mt-[0.417vw]">
                The Department of Building and Safety issues permits for the
                construction, remodeling, and repair of buildings and structures
                in the City of Los Angeles. Permits are categorized into
                building permits, electrical permits, and mechanical permits
                (which include plumbing, HVAC systems, fire sprinklers,
                elevators, and pressure vessels). Depending on the complexity of
                a project, a permit may be issued the same day with Express
                Permit or e-Permit ("No Plan Check" category), or a permit may
                require that the plans be reviewed ("Plan Check" category) by a
                Building and Safety Plan Check personnel.
              </div>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="bg-white border border-[#E5E7EB] shadow-[0px_9px_33px_0px_rgba(196,196,196,0.10)] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:col-span-5">
              <div className="space-y-[8px] xl:space-y-[0.417vw]">
                <div className="col">
                  <div className="flex items-center gap-[10px] xl:gap-[0.521vw]">
                    <div>
                      <Image
                        src={"/assets/images/catalogicon/icon04.png"}
                        width={"28"}
                        height={"28"}
                        alt=""
                      ></Image>
                    </div>
                    <div className="text-[#A93439] text-[12px] xl:text-[0.625vw] font-bold">
                      Image
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="text-[#374151] text-[16px] text-[0.833vw] font-medium">
                    Navarro Early College High School Agriculture Program
                  </div>
                </div>
                <div className="col">
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Create:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Owner:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      Jhon Wayne
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Release Date:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-7 border-l border-[#E5E7EB] pl-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-[8px] xl:gap-[0.417vw]">
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-file-download ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-star-outline ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={() => setfilelistcatalog(true)}
                    className="inline-block border border-[#4B586E] hover:border-[#A93439] hover:bg-[#A93439] rounded-[4px] xl:rounded-[0.208vw] text-[#4B586E] hover:text-[#fff] text-[14px] xl:text-[0.833vw] p-[8px] xl:p-[0.417vw]"
                  >
                    More Details
                    <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
              </div>
              <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.417vw] px-[10px] xl:px-[0.521vw] mt-[8px] xl:mt-[0.417vw]">
                The Department of Building and Safety issues permits for the
                construction, remodeling, and repair of buildings and structures
                in the City of Los Angeles. Permits are categorized into
                building permits, electrical permits, and mechanical permits
                (which include plumbing, HVAC systems, fire sprinklers,
                elevators, and pressure vessels). Depending on the complexity of
                a project, a permit may be issued the same day with Express
                Permit or e-Permit ("No Plan Check" category), or a permit may
                require that the plans be reviewed ("Plan Check" category) by a
                Building and Safety Plan Check personnel.
              </div>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="bg-white border border-[#E5E7EB] shadow-[0px_9px_33px_0px_rgba(196,196,196,0.10)] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:col-span-5">
              <div className="space-y-[8px] xl:space-y-[0.417vw]">
                <div className="col">
                  <div className="flex items-center gap-[10px] xl:gap-[0.521vw]">
                    <div>
                      <Image
                        src={"/assets/images/catalogicon/icon01.png"}
                        width={"28"}
                        height={"28"}
                        alt=""
                      ></Image>
                    </div>
                    <div className="text-[#BC6D46] text-[12px] xl:text-[0.625vw] font-bold">
                      AISD Shorts
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="text-[#374151] text-[16px] text-[0.833vw] font-medium">
                    Navarro Early College High School Agriculture Program
                  </div>
                </div>
                <div className="col">
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Create:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Owner:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      Jhon Wayne
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Release Date:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-7 border-l border-[#E5E7EB] pl-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-[8px] xl:gap-[0.417vw]">
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-file-download ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-star-outline ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={() => setfilelistcatalog(true)}
                    className="inline-block border border-[#4B586E] hover:border-[#A93439] hover:bg-[#A93439] rounded-[4px] xl:rounded-[0.208vw] text-[#4B586E] hover:text-[#fff] text-[14px] xl:text-[0.833vw] p-[8px] xl:p-[0.417vw]"
                  >
                    More Details
                    <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
              </div>
              <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.417vw] px-[10px] xl:px-[0.521vw] mt-[8px] xl:mt-[0.417vw]">
                The Department of Building and Safety issues permits for the
                construction, remodeling, and repair of buildings and structures
                in the City of Los Angeles. Permits are categorized into
                building permits, electrical permits, and mechanical permits
                (which include plumbing, HVAC systems, fire sprinklers,
                elevators, and pressure vessels). Depending on the complexity of
                a project, a permit may be issued the same day with Express
                Permit or e-Permit ("No Plan Check" category), or a permit may
                require that the plans be reviewed ("Plan Check" category) by a
                Building and Safety Plan Check personnel.
              </div>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="bg-white border border-[#E5E7EB] shadow-[0px_9px_33px_0px_rgba(196,196,196,0.10)] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:col-span-5">
              <div className="space-y-[8px] xl:space-y-[0.417vw]">
                <div className="col">
                  <div className="flex items-center gap-[10px] xl:gap-[0.521vw]">
                    <div>
                      <Image
                        src={"/assets/images/catalogicon/icon01.png"}
                        width={"28"}
                        height={"28"}
                        alt=""
                      ></Image>
                    </div>
                    <div className="text-[#BC6D46] text-[12px] xl:text-[0.625vw] font-bold">
                      AISD Shorts
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="text-[#374151] text-[16px] text-[0.833vw] font-medium">
                    Navarro Early College High School Agriculture Program
                  </div>
                </div>
                <div className="col">
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Create:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Owner:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      Jhon Wayne
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Release Date:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-7 border-l border-[#E5E7EB] pl-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-[8px] xl:gap-[0.417vw]">
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-file-download ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-star-outline ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={() => setfilelistcatalog(true)}
                    className="inline-block border border-[#4B586E] hover:border-[#A93439] hover:bg-[#A93439] rounded-[4px] xl:rounded-[0.208vw] text-[#4B586E] hover:text-[#fff] text-[14px] xl:text-[0.833vw] p-[8px] xl:p-[0.417vw]"
                  >
                    More Details
                    <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
              </div>
              <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.417vw] px-[10px] xl:px-[0.521vw] mt-[8px] xl:mt-[0.417vw]">
                The Department of Building and Safety issues permits for the
                construction, remodeling, and repair of buildings and structures
                in the City of Los Angeles. Permits are categorized into
                building permits, electrical permits, and mechanical permits
                (which include plumbing, HVAC systems, fire sprinklers,
                elevators, and pressure vessels). Depending on the complexity of
                a project, a permit may be issued the same day with Express
                Permit or e-Permit ("No Plan Check" category), or a permit may
                require that the plans be reviewed ("Plan Check" category) by a
                Building and Safety Plan Check personnel.
              </div>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="bg-white border border-[#E5E7EB] shadow-[0px_9px_33px_0px_rgba(196,196,196,0.10)] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:col-span-5">
              <div className="space-y-[8px] xl:space-y-[0.417vw]">
                <div className="col">
                  <div className="flex items-center gap-[10px] xl:gap-[0.521vw]">
                    <div>
                      <Image
                        src={"/assets/images/catalogicon/icon01.png"}
                        width={"28"}
                        height={"28"}
                        alt=""
                      ></Image>
                    </div>
                    <div className="text-[#BC6D46] text-[12px] xl:text-[0.625vw] font-bold">
                      AISD Shorts
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="text-[#374151] text-[16px] text-[0.833vw] font-medium">
                    Navarro Early College High School Agriculture Program
                  </div>
                </div>
                <div className="col">
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Create:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Owner:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      Jhon Wayne
                    </span>
                  </div>
                  <div className="col">
                    <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                      Release Date:
                    </span>
                    <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                      2023, apr 23rd 12:23 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-7 border-l border-[#E5E7EB] pl-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-[8px] xl:gap-[0.417vw]">
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-file-download ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                  <Link
                    href={""}
                    className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                  >
                    <i className="austin-star-outline ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
                <div>
                  <Link
                    href={""}
                    onClick={() => setfilelistcatalog(true)}
                    className="inline-block border border-[#4B586E] hover:border-[#A93439] hover:bg-[#A93439] rounded-[4px] xl:rounded-[0.208vw] text-[#4B586E] hover:text-[#fff] text-[14px] xl:text-[0.833vw] p-[8px] xl:p-[0.417vw]"
                  >
                    More Details
                    <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
              </div>
              <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.417vw] px-[10px] xl:px-[0.521vw] mt-[8px] xl:mt-[0.417vw]">
                The Department of Building and Safety issues permits for the
                construction, remodeling, and repair of buildings and structures
                in the City of Los Angeles. Permits are categorized into
                building permits, electrical permits, and mechanical permits
                (which include plumbing, HVAC systems, fire sprinklers,
                elevators, and pressure vessels). Depending on the complexity of
                a project, a permit may be issued the same day with Express
                Permit or e-Permit ("No Plan Check" category), or a permit may
                require that the plans be reviewed ("Plan Check" category) by a
                Building and Safety Plan Check personnel.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Filelistcatalog
        visible={filelistcatalog}
        onHides={() => setfilelistcatalog(false)}
      />
    </>
  );
}
