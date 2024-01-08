import React, { useState } from "react";
import Link from "next/link";
import AdminLayout from '@/components/adminlayout/layout';
import FilterComponent from "@/components/filtercomponent";
import Fullcalendar from "./fullcalendar";
import { InputText } from "primereact/inputtext";
import Addnewevent from "@/components/popup/addnewevent";
import ViewEvent from "@/components/popup/viewevent"

export default function Index() {

    const [Addneweventpopup, setAddneweventpopup] = useState(false);
    const [ViewEventpopup, setViewEventpopup] = useState(false);

    return (
        <>
            <AdminLayout pageTitle="Manage Events">
            <div className="xl:pt-[0.833vw] pt-4">
            <div className="custom_search_input">
            <span className="p-input-icon-right">
            <i className="pi pi-search" />
            <InputText placeholder="Quick Search" className="placeholder:text-[#9CA1AB] placeholder:font-[300] xl:text-[0.833vw] text-[16px]  xl:w-[15.625vw] w-[200px]" />
            </span>
            </div>
            <div className="xl:pt-[0.833vw] pt-4">
            <FilterComponent />
            </div>
            <div className="xl:mt-[2.083vw] mt-[35px]">
                <div className="flex items-center justify-between">
                    <div className="text-[1.563vw] text-[#374151] font-bold xl:leading-[1.771vw] leading-9">Events</div>
                    <div>
                        <div><Link href={''} className="text-[#FFFFFF] xl:text-[0.729vw] text-sm font-normal xl:leading-[1.250vw] leading-6 -tracking-[-0.28px] inline-block bg-[#A93439] xl:rounded-[3.125vw] rounded-[50px] xl:py-[0.625vw] py-3 xl:px-[1.875vw]" onClick={() => setAddneweventpopup(true)}>Add New Event</Link></div>
                    </div>
                </div>
            </div>
            <div>
            <div className="cursor-pointer" onClick={() => setViewEventpopup(true)}>Calendar View Event Popup</div>
            <Fullcalendar />
            </div>
            </div>
            </AdminLayout>

            <Addnewevent
                visible={Addneweventpopup}
                onHides={() => setAddneweventpopup(false)}
              />
              <ViewEvent
                visible={ViewEventpopup}
                onHides={() => setViewEventpopup(false)}
              />
        </>
    );
}
