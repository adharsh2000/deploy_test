import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { Carousel } from "primereact/carousel";
import { ScrollPanel } from "primereact/scrollpanel";
import { CarouselService } from "@/service/Carousel";
import ReactPlayer from "react-player";
import { Montserrat } from "@next/font/google";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const CatalogDetailVideo = (props) => {

  /* Popup scroll height start */    
const topTitleRef = useRef(null);
const playerRef = useRef(null);
const transcriptTitleRef = useRef(null);
const relatedTitleRef = useRef(null);
const [elementHeight, setElementHeight] = useState(0);
const [elementHeight1, setElementHeight1] = useState(0);
useEffect(() => {

  const updateTapScrollHeight = () => {
    let timeoutId = setTimeout(() => {  
      if(playerRef.current){        
        setElementHeight(topTitleRef.current.offsetHeight + playerRef.current.offsetHeight + transcriptTitleRef.current.offsetHeight);
        setElementHeight1(topTitleRef.current.offsetHeight + relatedTitleRef.current.offsetHeight);
        
      }
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }

  // Initial update
  updateTapScrollHeight();

  // Update elementHeight on window resize
  const handleResize = () => {
    updateTapScrollHeight();
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize);
  }

  // Cleanup: remove the event listener on component unmount
  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize);
    }
  };

}, [props.visible]);

const elementStyle = {
  height: `calc(100vh - ${elementHeight}px)`,
};
const elementStyle1 = {
  height: `calc(100vh - ${elementHeight1}px)`,
};
/* Popup scroll height end */

  return (
    <>
      <div>
        <Sidebar
          visible={props.visible}
          position="bottom"
          style={{ background: "#FFF", borderRadius: "8px 8px 0 0" }}
          className="custmSidebar width1660 catalogdetail-video"
          onHide={() => props.onHides(false)}
          blockScroll={true}

        >
          <div className="xl:px-[6.667vw] px-[20px]">
            <div ref={topTitleRef}>
              <div className="flex items-center justify-center">
                <Link
                  href={""}
                  onClick={() => {
                    props.onHides(false);
                  }}
                  className="text-white xl:text-[1.146vw] bg-[#982E33] rounded-br-[10px] rounded-bl-[10px] h-[36px] xl:h-[2.917vw] w-[36px] xl:w-[3.021vw] flex items-center justify-center"
                >
                  <i className="austin-close-circle"></i>
                </Link>
              </div>
              <div className="flex-wrap xl:flex-nowrap flex items-center justify-between gap-1">
                  <div className="col">
                  <div className="flex items-center gap-[10px] xl:gap-[0.521vw] mb-[10px]">
                  <div>
                    <Image
                      src={"/assets/images/catalogicon/icon01.png"}
                      width={"28"}
                      height={"28"}
                      alt=""
                    ></Image>
                  </div>
                  <div className="text-[#A93439] text-[12px] xl:text-[0.625vw] font-bold">
                    AISD Shorts
                  </div>
                </div>
                  <div className="text-[#374151] text-[24px] xl:text-[1.250vw] font-bold -tracking-[0.72px]">
                    CouncilNavarro Early College High School Agriculture Program
                  </div>
                  <div className="text-[#9CA1AB] text-[12px] xl:text-[0.625vw]">
                    2023, apr 23rd 12:23 pm
                  </div>
                  </div>
              <div className="col flex items-center gap-[18px] xl:gap-[0.938vw] iconsList">
                  {/* <Link href={""} width={""} height={""}>
                      <i className="austin-user-search"></i>
                  </Link> */}
                  <Link href={""} width={""} height={""}>
                      <i className="austin-file-download"></i>
                  </Link>
                  <Link href={""} width={""} height={""}>
                      <i className="austin-star-outline"></i>
                  </Link>
                  <Link href={""} width={""} height={""}>
                      <i className="austin-share"></i>
                  </Link>
              </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-[16px] xl:gap-[1.25vw]">
              {/**col-span-7**/}
              <div className="col-span-12 xl:col-span-7">
                <div ref={playerRef} className="xl:pt-[0.885vw] pt-4">
                  <div className="xl:h-[27.125vw]">
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      controls={true}
                      width={"100%"}
                      height={"100%"}
                      light={
                        <img
                          src="/assets/images/video-thumb.png"
                          alt="Thumbnail"
                          style={{maxHeight: '100%'}}
                        />
                      }
                    />
                  </div>
                </div>
                <div>
                  <div ref={transcriptTitleRef} className="text-[#374151] xl:text-[1.250vw] text-xl font-medium pb-3 pt-4 xl:pt-[1.563vw]">
                    Video Transcription
                  </div>
                  <div className="scrollpanel-demo">
                    <ScrollPanel
                      style={ elementStyle }
                      className="custombar1"
                    >
                      <div className="grid gap-3 xl:gap-[1.04vw]">
                        <div className="flex justify-between items-start gap-3 xl:gap-[1.25vw]">
                          <p className="font-medium text-[#374151] text-[13px] xl:text-[0.730vw]">
                            Agriculture, food and natural resources benefit students because everybody eats. Everybody wears clothing, and I think students need to get back to their roots and kind of figuring out
                          </p>
                          <span className="border border-[#E5E7EB] bg-[#F5F6F7] rounded text-[13px] xl:text-[0.730vw] px-[8px] xl:px-[0.417vw] py-[2px] xl:py-[0.104vw]">00:09</span>
                        </div>
                        <div className="flex justify-between items-start gap-3 xl:gap-[1.25vw]">
                          <p className="text-[#9CA1AB] text-[13px] xl:text-[0.730vw]">
                            where their fruit comes from, where their fiber comes from. Uh, and then after they figure that out, we always try to look for ways that we can get them ingrained into the
                          </p>
                          <span className="border border-[#E5E7EB] bg-[#F5F6F7] rounded text-[13px] xl:text-[0.730vw] px-[8px] xl:px-[0.417vw] py-[2px] xl:py-[0.104vw]">00:17</span>
                        </div>
                        <div className="flex justify-between items-start gap-3 xl:gap-[1.25vw]">
                          <p className="text-[#9CA1AB] text-[13px] xl:text-[0.730vw]">
                            agricultural field.
                          </p>
                          <span className="border border-[#E5E7EB] bg-[#F5F6F7] rounded text-[13px] xl:text-[0.730vw] px-[8px] xl:px-[0.417vw] py-[2px] xl:py-[0.104vw]">00:25</span>
                        </div>
                        <div className="flex justify-between items-start gap-3 xl:gap-[1.25vw]">
                          <p className="text-[#9CA1AB] text-[13px] xl:text-[0.730vw]">
                            where their fruit comes from, where their fiber comes from. Uh, and then after they figure that out, we always try to look for ways that we can get them ingrained into the
                          </p>
                          <span className="border border-[#E5E7EB] bg-[#F5F6F7] rounded text-[13px] xl:text-[0.730vw] px-[8px] xl:px-[0.417vw] py-[2px] xl:py-[0.104vw]">00:17</span>
                        </div>
                        <div className="flex justify-between items-start gap-3 xl:gap-[1.25vw]">
                          <p className="text-[#9CA1AB] text-[13px] xl:text-[0.730vw]">
                            agricultural field.
                          </p>
                          <span className="border border-[#E5E7EB] bg-[#F5F6F7] rounded text-[13px] xl:text-[0.730vw] px-[8px] xl:px-[0.417vw] py-[2px] xl:py-[0.104vw]">00:25</span>
                        </div>
                        <div className="flex justify-between items-start gap-3 xl:gap-[1.25vw]">
                          <p className="text-[#9CA1AB] text-[13px] xl:text-[0.730vw]">
                            where their fruit comes from, where their fiber comes from. Uh, and then after they figure that out, we always try to look for ways that we can get them ingrained into the
                          </p>
                          <span className="border border-[#E5E7EB] bg-[#F5F6F7] rounded text-[13px] xl:text-[0.730vw] px-[8px] xl:px-[0.417vw] py-[2px] xl:py-[0.104vw]">00:17</span>
                        </div>
                        <div className="flex justify-between items-start gap-3 xl:gap-[1.25vw]">
                          <p className="text-[#9CA1AB] text-[13px] xl:text-[0.730vw]">
                            agricultural field.
                          </p>
                          <span className="border border-[#E5E7EB] bg-[#F5F6F7] rounded text-[13px] xl:text-[0.730vw] px-[8px] xl:px-[0.417vw] py-[2px] xl:py-[0.104vw]">00:25</span>
                        </div>
                      </div>
                    </ScrollPanel>
                  </div>
                </div>
              </div>
              {/**col-span-5**/}
              <div className="col-span-12 xl:col-span-5">
                <div ref={relatedTitleRef}  className={`${myMontserrat.className} text-[#374151] xl:text-[1.250vw] text-[18px] font-semibold border-b border-[#C4C4C4] leading-[1] xl:pb-[0.730vw] pb-2 xl:pt-[0.833vw] pt-4`}>
                  Related files
                </div>
                <div className="scrollpanel-demo">
                  <ScrollPanel
                    style={ elementStyle1 }
                    className="custombar1"
                  >
                    <div className="grid gap-2 gap-[0.417vw]">
                      <div className="bg-[#fff] rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]" style={{boxShadow: '0px 9px 33px 0px rgba(196, 196, 196, 0.10)'}}>
                        <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                            <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                        </div>  
                        <div className="mb-[10px] xl:mb-[0.625vw]">
                            <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                        </div>
                        <div className="grid gap-[0.104vw]">
                            <h4 className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Navarro Early College High School Agriculture Program</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                        </div>             
                      </div>  
                      <div className="bg-[#fff] rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]" style={{boxShadow: '0px 9px 33px 0px rgba(196, 196, 196, 0.10)'}}>
                        <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                            <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                        </div>  
                        <div className="mb-[10px] xl:mb-[0.625vw]">
                            <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                        </div>
                        <div className="grid gap-[0.104vw]">
                            <h4 className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Navarro Early College High School Agriculture Program</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                        </div>             
                      </div>  
                      <div className="bg-[#fff] rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]" style={{boxShadow: '0px 9px 33px 0px rgba(196, 196, 196, 0.10)'}}>
                        <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                            <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                        </div>  
                        <div className="mb-[10px] xl:mb-[0.625vw]">
                            <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                        </div>
                        <div className="grid gap-[0.104vw]">
                            <h4 className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Navarro Early College High School Agriculture Program</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                        </div>             
                      </div>  
                      <div className="bg-[#fff] rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]" style={{boxShadow: '0px 9px 33px 0px rgba(196, 196, 196, 0.10)'}}>
                        <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                            <Image src="/assets/images/svg/video.svg" width="32" height="32" />  
                            <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">AISD Shorts</h4>
                        </div>  
                        <div className="mb-[10px] xl:mb-[0.625vw]">
                            <Image className="rounded-[8px] xl:rounded-[0.833vw]" src="/assets/images/catalog1.png" width="368" height="303" style={{width: '100%'}} />  
                        </div>
                        <div className="grid gap-[0.104vw]">
                            <h4 className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">Navarro Early College High School Agriculture Program</h4>
                            <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]">2023, apr 23rd 12:23 pm</p>
                        </div>             
                      </div>  
                    </div>
                  </ScrollPanel>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default CatalogDetailVideo;
