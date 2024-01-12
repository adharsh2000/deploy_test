import MultilingualEducation from "@/components/admin/popup/MultilingualEducation ";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,    
  };

  const handleMultiple = () => {
    console.log("hfff");
    setAddMessageBoardMessageBoard(true);
  };
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
        <Slider {...settings} className="custslick-slider calendar-slider">
          {/**col**/}
          <div className="flex items-center ">
            <div className="h-[600px] overflow-hidden relative">
              <img
                src={"/assets/website/slider-img.png"}
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
                  Calendar of
                  <span className="font-extrabold"> Events</span>
                </div>
                <p className="text-base text-[#4B586E] mb-10 text-wrapping min-w-[400px] text-ellipsis overflow-hidden">
                  Figma ipsum component variant main layer. Shadow outline layer
                  create arrow duplicate list connection main strikethrough.
                  Main plugin variant rectangle opacity arrange pencil pencil
                  italic. Fill layer distribute vector mask follower. Pencil
                  editor thumbnail variant blur undo. Reesizing strikethrough
                  slice line pen arrange slice.
                </p>
                <h3 className="text-xl text-[#374151]">Next Events</h3>
                <div className="flex flex-col gap-3 mt-4">
                  <div
                    onClick={handleMultiple}
                    className="flex items-center shadow-sm bg-white border-l-4 border-[#982E33] gap-2 rounded-lg"
                  >
                    <Link href="#" onClick={handleMultiple}>
                      <div className="w-8/12 flex gap-2 flex-col py-4 px-6">
                        <h4 className="text-[#374151] text-base font-bold ">
                          Multilingual Education{" "}
                        </h4>
                        <p className="text-[#4B586E] font-light text-wrapping text-sm text-ellipsis overflow-hidden min-w-[250px]">
                          Indigenous People's Day is observed to honors the
                          lives and experiences of Indigenous people in the US
                          and is usually celebrated on the 2nd Monday in
                          October.{" "}
                        </p>
                      </div>
                    </Link>

                    <div className="pr-4 border-r border-[#E5E7EB]">
                      <h4 className="text-[#4B586E] font-extrabold text-base">
                        Wed <span className="block text-[22px] "> 28</span>{" "}
                      </h4>
                    </div>
                    <div className="px-4 flex flex-col gap-4 w-1/4">
                      <p className="xl:text-sm max-xl:text-base text-[#4B586E] flex gap-2">
                        6:00pm - 7:45pm
                      </p>
                      <p className="text-base text-[#4B586E] flex gap-2">
                        Online
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center shadow-sm bg-white border-l-4 border-[#9D5A38] gap-2 rounded-lg">
                    <div className="w-8/12 flex gap-2 flex-col py-4 px-6">
                      <p className="text-[#374151] font-light text-base text-ellipsis overflow-hidden min-w-[250px]">
                        Marshal Middle School Grand Opening Celebration
                      </p>
                    </div>
                    <div className="pr-4 border-r border-[#E5E7EB]">
                      <h4 className="text-[#4B586E] font-normal text-sm">
                        Wed{" "}
                        <span className="block text-[18px] font-bold"> 28</span>{" "}
                      </h4>
                    </div>
                    <div className="px-4 flex flex-col gap-2 w-1/4">
                      <p className="text-sm text-[#9CA1AB] flex gap-2">
                        6:00pm - 7:45pm
                      </p>
                      <p className="text-sm text-[#9CA1AB] flex gap-2">
                        Online
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center shadow-sm bg-white border-l-4 opacity-[0.7] border-[#152C4F] gap-2 rounded-lg">
                    <div className="w-8/12 flex gap-2 flex-col py-4 px-6">
                      <p className="text-[#374151] font-light min-w-[250px]">
                        Staff Development/Students
                      </p>
                    </div>
                    <div className="pr-4 border-r border-[#E5E7EB]">
                      <h4 className="text-[#4B586E] font-normal text-sm">
                        Wed{" "}
                        <span className="block text-[18px] font-bold"> 28</span>{" "}
                      </h4>
                    </div>
                    <div className="px-4 flex flex-col gap-2 w-1/4">
                      <p className="text-sm text-[#9CA1AB] flex gap-2">
                        6:00pm - 7:45pm
                      </p>
                      <p className="text-sm text-[#9CA1AB] flex gap-2">
                        Online
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center shadow-sm bg-white border-l-4 opacity-[0.5] border-[#046C4E] gap-2 rounded-lg">
                    <div className="w-8/12 flex gap-2 flex-col py-4 px-6">
                      <p className="text-[#374151] font-light">
                        Indigenous People’s Day
                      </p>
                    </div>
                    <div className="pr-4 border-r border-[#E5E7EB]">
                      <h4 className="text-[#4B586E] font-normal text-sm">
                        Wed{" "}
                        <span className="block text-[18px] font-bold"> 28</span>{" "}
                      </h4>
                    </div>
                    <div className="px-4 flex flex-col gap-2 w-1/4">
                      <p className="text-sm text-[#9CA1AB] flex gap-2">
                        6:00pm - 7:45pm
                      </p>
                      <p className="text-sm text-[#9CA1AB] flex gap-2">
                        Online
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="h-[590px] overflow-hidden relative">
              <img
                src={"/assets/website/slider-img.png"}
                alt="Banner"
                className="object-cover object-center w-full h-full"
              />
              <div className="w-2/5 absolute top-11 left-16">
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
                  Calendar of
                  <span className="font-extrabold"> Events</span>
                </div>
                <p className="text-base text-[#4B586E] mb-10 text-wrapping min-w-[400px] text-ellipsis overflow-hidden">
                  Figma ipsum component variant main layer. Shadow outline layer
                  create arrow duplicate list connection main strikethrough.
                  Main plugin variant rectangle opacity arrange pencil pencil
                  italic. Fill layer distribute vector mask follower. Pencil
                  editor thumbnail variant blur undo. Reesizing strikethrough
                  slice line pen arrange slice.
                </p>
                <h3 className="text-xl text-[#374151]">Next Events</h3>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center shadow-sm bg-white border-l-4 border-[#982E33] gap-2 rounded-lg">
                    <div className="flex gap-2 flex-col py-4 px-6">
                      <h4 className="text-[#374151] text-base font-bold ">
                        Multilingual Education{" "}
                      </h4>
                      <p className="text-[#4B586E] font-light text-wrapping text-sm text-ellipsis overflow-hidden min-w-[250px]">
                        Indigenous People's Day is observed to honors the lives
                        and experiences of Indigenous people in the US and is
                        usually celebrated on the 2nd Monday in October.{" "}
                      </p>
                    </div>
                    <div className="pr-4 border-r border-[#E5E7EB]">
                      <h4 className="text-[#4B586E] font-extrabold text-base">
                        Wed <span className="block text-[22px] "> 28</span>{" "}
                      </h4>
                    </div>
                    <div className="px-4 flex flex-col gap-4 min-w-[170px]">
                      <p className="text-base text-[#4B586E] flex gap-2">
                        6:00pm - 7:45pm
                      </p>
                      <p className="text-base text-[#4B586E] flex gap-2">
                        Online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-sm bg-white border-l-4 border-[#9D5A38] gap-2 rounded-lg">
                    <div className="flex gap-2 flex-col py-4 px-6">
                      <p className="text-[#374151] font-light min-w-[250px]">
                        Marshal Middle School Grand Opening Celebration
                      </p>
                    </div>
                    <div className="pr-4 border-r border-[#E5E7EB]">
                      <h4 className="text-[#4B586E] font-normal text-sm">
                        Wed{" "}
                        <span className="block text-[18px] font-bold"> 28</span>{" "}
                      </h4>
                    </div>
                    <div className="px-4 flex flex-col gap-2 min-w-[170px]">
                      <p className="text-sm text-[#9CA1AB] flex gap-2">
                        6:00pm - 7:45pm
                      </p>
                      <p className="text-sm text-[#9CA1AB] flex gap-2">
                        Online
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="h-[590px] overflow-hidden relative">
              <img
                src={"/assets/website/slider-img.png"}
                alt="Banner"
                className="object-cover object-center w-full h-full"
              />
              <div className="w-2/5 absolute top-11 left-16">
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
                  Calendar of
                  <span className="font-extrabold"> Events</span>
                </div>
                <p className="text-base text-[#4B586E] mb-10 text-wrapping min-w-[400px] text-ellipsis overflow-hidden">
                  Figma ipsum component variant main layer. Shadow outline layer
                  create arrow duplicate list connection main strikethrough.
                  Main plugin variant rectangle opacity arrange pencil pencil
                  italic. Fill layer distribute vector mask follower. Pencil
                  editor thumbnail variant blur undo. Reesizing strikethrough
                  slice line pen arrange slice.
                </p>
                <h3 className="text-xl text-[#374151]">Next Events</h3>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center shadow-sm bg-white border-l-4 border-[#982E33] gap-2 rounded-lg">
                    <div className="flex gap-2 flex-col py-4 px-6">
                      <h4 className="text-[#374151] text-base font-bold ">
                        Multilingual Education{" "}
                      </h4>
                      <p className="text-[#4B586E] font-light text-wrapping text-sm text-ellipsis overflow-hidden min-w-[250px]">
                        Indigenous People's Day is observed to honors the lives
                        and experiences of Indigenous people in the US and is
                        usually celebrated on the 2nd Monday in October.{" "}
                      </p>
                    </div>
                    <div className="pr-4 border-r border-[#E5E7EB]">
                      <h4 className="text-[#4B586E] font-extrabold text-base">
                        Wed <span className="block text-[22px] "> 28</span>{" "}
                      </h4>
                    </div>
                    <div className="px-4 flex flex-col gap-4 min-w-[170px]">
                      <p className="text-base text-[#4B586E] flex gap-2">
                        6:00pm - 7:45pm
                      </p>
                      <p className="text-base text-[#4B586E] flex gap-2">
                        Online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-sm bg-white border-l-4 border-[#9D5A38] gap-2 rounded-lg">
                    <div className="flex gap-2 flex-col py-4 px-6">
                      <p className="text-[#374151] font-light min-w-[250px]">
                        Marshal Middle School Grand Opening Celebration
                      </p>
                    </div>
                    <div className="pr-4 border-r border-[#E5E7EB]">
                      <h4 className="text-[#4B586E] font-normal text-sm">
                        Wed{" "}
                        <span className="block text-[18px] font-bold"> 28</span>{" "}
                      </h4>
                    </div>
                    <div className="px-4 flex flex-col gap-2 min-w-[170px]">
                      <p className="text-sm text-[#9CA1AB] flex gap-2">
                        6:00pm - 7:45pm
                      </p>
                      <p className="text-sm text-[#9CA1AB] flex gap-2">
                        Online
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**col**/}
        </Slider>
        <MultilingualEducation
            visible={addMessageBoard}
            onHides={() => setAddMessageBoardMessageBoard(false)}
          />
      </div>
    </div>
  );
}
