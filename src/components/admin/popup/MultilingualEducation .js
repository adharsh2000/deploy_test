import Link from "next/link";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";

const MultilingualEducation = (props) => {
  const [date, setDate] = useState(null);
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <>
      <div>
        <Sidebar
          visible={props.visible}
          position="right"
          blockScroll={true}
          style={{
            background: "#FFF",
            width: "760px",
          }}
          className="custmSidebar  calendar-eventview-modal"
          onHide={() => props.onHides(false)}
        >
          <div className="flex flex-col justify-between h-full xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5">
            {/**row***/}
            <div className="relative">
              <img
                src={"/assets/website/calendar-eventbanner.png"}
                className="max-w-full"
              />
              <div className="absolute flex w-full justify-between px-6 -bottom-4">
                <button className="flex items-center p-2 gap-2 text-sm text-white bg-[#A93439] rounded">
                  <i className=""></i> Add to my Calendar
                </button>
                <div className="bg-[#E8EBF0] rounded-md py-[6px] px-3 text-xs text-[#0F1F38] flex items-center">
                Virtual Meeting / Reunion virtual
                </div>  
              </div>
            </div>
            <div className="mt-9 mb-4">
              <h4 className="text-[#374151] font-bold text-2xl">
                Multilingual Education Advisory Committee Meeting
              </h4>
              <p className="text-[#4B586E] font-normal text-sm mt-1">
                Date: Monday, October 2, 2023 - 6:00 pm to 7:45 pm
              </p>
            </div>
            <div className="mb-2">
              <p className="text-[#4B586E] font-normal text-sm">
                Austin ISD’s Multilingual Education Advisory Committee (MEAC)
                works to inform and advise the school district on matters
                related to students who are language learners
              </p>
            </div>

            <p className="text-[#4B586E] font-normal text-sm">
              The committee has three specific functions:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-[#4B586E] font-normal text-sm">
                Help the school district make decisions on program planning,
                funding, staffing, designing, and evaluation of the district’s
                language programs.
              </li>
              <li className="text-[#4B586E] font-normal text-sm">
                Consult with Austin ISD about concerns, reports, and
                recommendations to be submitted to the Superintendent or Board
                of Trustees.
              </li>
              <li className="text-[#4B586E] font-normal text-sm">
                Help develop resources that educate parents, the community, and
                the district on issues related to students in the district's
                language programs.
              </li>
            </ul>
            <p className="text-[#4B586E] font-normal text-sm mt-2">
              Meetings are open to all interested persons please see the
              Communications and Visitor Guidelines on the Advisory Bodies page.
            </p>

            <div className="mt-6 p-6 border border-solid border-[#BECDE3] flex flex-col gap-4 rounded-lg">
              <h4 className="text-[#374151] font-normal text-xl ">
                More Information
              </h4>
              <p className="text-[#4B586E] font-normal text-sm">
                For more information, contact MEAC at 414-4734 or visit the MEAC
                Site.
              </p>
            </div>

            {/**Footer**/}
            <div className="flex justify-end py-[24px] xl:py-[1.25vw]">
              <div className="flex items-center xl:gap-[0.833vw] gap-4">

              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default MultilingualEducation;
