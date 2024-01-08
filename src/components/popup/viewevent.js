import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import Editevent from "./editevent";

import { Montserrat } from "@next/font/google";
const myMontserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const ViewEvent = (props) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [text, setText] = useState("");
  const [EditEventpopup, setEditEventpopup] = useState(false);

  const [ingredients, setIngredients] = useState([]);

  const onIngredientsChange = (e) => {
    let _ingredients = [...ingredients];

    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredients(_ingredients);
  };

  const toast = useRef(null);

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };
  const chooseOptions = {
    icon: "autinisd-document-upload",
    iconOnly: true,
    className: "w-full upload_icon",
  };

  return (
    <>
      <div>
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
                  Multilingual Education Advisory Committee Meeting
                </div>
                <div className="text-[#4B586E] xl:text-[0.729vw] text-sm font-normal leading-normal">
                  Date: Monday, October 2, 2023 - 6:00 pm to 7:45 pm
                </div>
              </div>
              <div className="xl:space-y-[1.250vw] space-y-6">
                <div className="text-[#4B586E] xl:text-[0.729vw] font-normal xl:leading-[0.938vw] leading-4 space-y-4 view_event-list">
                  <p>
                    Austin ISD s Multilingual Education Advisory Committee
                    (MEAC) works to inform and advise the school district on
                    matters related to students who are language learners.
                  </p>
                  <p>
                    The committee has three specific functions:
                    <ul>
                      <li>
                        Help the school district make decisions on program
                        planning, funding, staffing, designing, and evaluation
                        of the district s language programs.
                      </li>
                      <li>
                        Consult with Austin ISD about concerns, reports, and
                        recommendations to be submitted to the Superintendent or
                        Board of Trustees.
                      </li>
                      <li>
                        Help develop resources that educate parents, the
                        community, and the district on issues related to
                        students in the district's language programs.
                      </li>
                    </ul>
                    Meetings are open to all interested persons please see the
                    Communications and Visitor Guidelines on the Advisory Bodies
                    page.
                  </p>
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
              <div className="flex items-center xl:gap-[0.833vw] gap-4">
                <Link
                  href={""}
                  className="text-[#C81E1E] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]"
                >
                  Delete
                </Link>
                <Link
                  href={""}
                  className="text-white bg-[#1F2A37] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]"
                  onClick={() => setEditEventpopup(true)}
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </Sidebar>

        <Editevent
          visible={EditEventpopup}
          onHides={() => setEditEventpopup(false)}
        />
      </div>
    </>
  );
};

export default ViewEvent;
