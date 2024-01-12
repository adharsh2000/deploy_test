import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import Editevent from "./editevent";

import { Montserrat } from "@next/font/google";
import fetchAPI from "@/service/api/fetchAPI";
import { Toast } from "primereact/toast";
import moment from "moment";
const myMontserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const ViewEvent = (props) => {
  const { eventDetails, onHides, editDetails } = props;


  const deleteEvent = async (id) => {
    if (!id) return
    try {
      const response = await fetchAPI(`/event/${id}`, 'DELETE', {}, 'application/json')

      if (response) {
        toast?.current.show({ severity: 'success', detail: 'Event deleted successfully', life: 3000 })
        onHides(true)
      }
    } catch (event) {
      toast?.current.show({ severity: 'eror', detail: 'Something went wrong', life: 3000 })
    }
  }

  const toast = useRef(null);
  const startTime = eventDetails.start_time ? moment(eventDetails.start_time, 'HH:mm:ss').format('hh:mm A') : null
  const endTime = eventDetails.end_time ? moment(eventDetails.end_time, 'HH:mm:ss').format('hh:mm A') : null
  const formatedDate = eventDetails.date ? moment(eventDetails.date).format('dddd, MMMM D, YYYY') : null

  return (
    <>
      <div>
        <Toast ref={toast}></Toast>
        <Sidebar
          visible={props.visible}
          position="right"
          style={{ borderRadius: "16px 0 0 16px" }}
          className="custmSidebar width768 viewevent-bgwrap"
          onHide={() => props.onHides(false)}
        >
          <div className="flex flex-col justify-between h-full xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5">
            {/**row***/}
            <div className="xl:space-y-[0.833vw] space-y-4">
              <div className="relative">
                <Image
                  src={"/assets/admin/event.png"}
                  width={720}
                  height={174}
                  alt="event"
                  className="w-full"
                />
                <div className="absolute xl:right-[0.521vw] right-2.5 xl:-bottom-[0.417vw] -bottom-1.5">
                  <div className="text-[#0F1F38] xl:text-[0.625vw] text-xs font-normal xl:leading-[1.042vw] leading-5 bg-[#E8EBF0] rounded-md xl:rounded-[0.417vw] xl:py-[0.313vw] py-1.5 xl:px-[0.625vw] px-3">
                    Virtual Meeting / Reunion virtual
                  </div>
                </div>
              </div>
              <div className="xl:pb-[0.833vw] pb-4">
                <div className="text-[#374151] xl:text-[1.250vw] text-2xl font-bold leading-normal">
                  {eventDetails.title}
                </div>
                <div className="text-[#4B586E] xl:text-[0.729vw] text-sm font-normal leading-normal">
                  {formatedDate} - {eventDetails.is_all_day ? 'All Day' : startTime + " to " + endTime}
                </div>
              </div>
              <div className="xl:space-y-[1.250vw] space-y-6">
                <div dangerouslySetInnerHTML={{ __html: eventDetails.meeting_notes }} className="text-[#4B586E] xl:text-[0.729vw] font-normal xl:leading-[0.938vw] leading-4 space-y-4 view_event-list">

                </div>
                <div className="xl:p-[1.250vw] p-6 border border-[#BECDE3] xl:rounded-[0.417vw] rounded-lg xl:space-y-[0.833vw] space-y-4">
                  <div className={myMontserrat.className}>
                    <div className="text-[#374151] xl:text-[1.042vw] text-xl font-normal leading-normal">
                      More Information
                    </div>
                  </div>
                  <div className="xl:text-[0.729vw] text-sm font-normal leading-normal">
                    For more information, contact MEAC at 414-4734 or visit the
                    MEAC Site.
                  </div>
                </div>
              </div>
            </div>
            {/**Footer**/}
            <div className="flex justify-end">
              {
                // Same component is used on user and admin side
                editDetails ?
                  <div className="flex items-center xl:gap-[0.833vw] gap-4">
                    <Link
                      href={""}
                      onClick={() => deleteEvent(eventDetails?.id)}
                      className="text-[#C81E1E] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]"
                    >
                      Delete
                    </Link>
                    <Link
                      href={""}
                      className="text-white bg-[#1F2A37] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]"
                      onClick={() => editDetails(eventDetails?.id)}
                    >
                      Edit
                    </Link>
                  </div> : null
              }

            </div>
          </div>
        </Sidebar>

        {/* <Editevent
          visible={EditEventpopup}
          onHides={() => setEditEventpopup(false)}
        /> */}
      </div>
    </>
  );
};

export default ViewEvent;
