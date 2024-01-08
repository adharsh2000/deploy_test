import React, { useState, useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import Image from "next/image";
import Link from "next/link";
import { MultiSelect } from "primereact/multiselect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function PreviousNextMethods(props) {
  const [value, setValue] = useState("");
  const [selectedCities, setSelectedCities] = useState(null);


  const [tabIndex, setTabIndex] = useState(0);


  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props,
  };
  return (
    <>
      <div className="text-black">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabPanel>
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="text-[#4B586E] xl:text-[1.145vw] text-[18px] font-[400]">
                Where do you live or Where do you want the School?
              </div>
              <div className="xl:mt-[1.145vw] mt-[18px] flex items-center xl:gap-[0.382vw] gap-1.5">
                <div>
                  <InputText
                    value={value}
                    className="cutm_inputext placeholder:text-[#9CA1AB] placeholder:text-xs"
                    placeholder="Enter the Address or Zipcode."
                    style={{ height: "51.3px" }}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
                <div>
                  <Link
                    href={""}
                    className="bg-white border border-[#BECDE3] text-[#4B586E] font-normal xl:text-[0.625vw] text-sm h-[51.3px] w-[146px] flex items-center justify-center gap-2 rounded"
                  >
                    <Image
                      src={"/assets/website/map.svg"}
                      width={14}
                      height={14}
                      alt="map"
                    />{" "}
                    <span>Use your Location</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </TabPanel>
          <TabPanel>
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="text-[#4B586E] xl:text-[1.145vw] text-[18px] font-[400]">
                What type of school are you looking for?
              </div>
              <div className="xl:mt-[1.145vw] mt-[18px] flex items-center justify-center flex-wrap xl:gap-[0.382vw] gap-1.5">
                <Link
                  href={""}
                  className="bg-[rgba(255,255,255,0.35)] border border-[#E5E7EB] rounded-full xl:px-[1.042vw] xl:py-[0.382vw] text-[#4B586E] text-sm font-normal whitespace-nowrap"
                >
                  Pre K
                </Link>
                <Link
                  href={""}
                  className="bg-[rgba(255,255,255,0.35)] border border-[#E5E7EB] rounded-full xl:px-[1.042vw] xl:py-[0.382vw] text-[#4B586E] text-sm font-normal whitespace-nowrap"
                >
                  Middle Schools
                </Link>
                <Link
                  href={""}
                  className="bg-[rgba(255,255,255,0.35)] border border-[#E5E7EB] rounded-full xl:px-[1.042vw] xl:py-[0.382vw] text-[#4B586E] text-sm font-normal whitespace-nowrap"
                >
                  Elementary Schools
                </Link>
                <Link
                  href={""}
                  className="bg-[rgba(255,255,255,0.35)] border border-[#E5E7EB] rounded-full xl:px-[1.042vw] xl:py-[0.382vw] text-[#4B586E] text-sm font-normal whitespace-nowrap"
                >
                  High Schools
                </Link>
              </div>
            </div>
          </div>
          </TabPanel>
          <TabPanel>
          <div  className="flex items-center">
            <div className="flex flex-col text-center">
              <div className="text-[#4B586E] xl:text-[1.145vw] text-[18px] font-[400]">
                Which programs would you like the school to have?{" "}
              </div>
              <div className="xl:mt-[1.145vw] mt-[18px] xl:gap-[0.382vw] gap-1.5">
                <MultiSelect
                  value={selectedCities}
                  onChange={(e) => setSelectedCities(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select Cities"
                  maxSelectedLabels={3}
                  className="w-full custm_MultiSelect"
                />
              </div>
            </div>
          </div>
          </TabPanel>
          <TabPanel>
          <div  className="flex items-center">
            <div className="flex flex-col text-center">
              <div className="text-[#4B586E] xl:text-[1.145vw] text-[18px] font-[400]">
                We are looking for schools who fits your necessity, please wait
                a moment.{" "}
              </div>
            </div>
          </div>
          </TabPanel>

          <div
          style={{ textAlign: "center" }}
          className="xl:mt-[2.702vw] mt-[40px] flex justify-center item-center gap-[8px]"
        >
          <button
            className="button border border-[#BECDE3] text-[#4B586E] text-[16px] font-[400] bg-white xl:py-[0.766vw] py-[16px] xl:px-[0.953vw] px-[16px] rounded-[8px]"
            onClick={() => tabIndex != 0 ? setTabIndex(tabIndex - 1) : null}
          >
            Previous
          </button>
          <button
            className="button text-white text-[16px] font-[400] bg-[#A93439] xl:py-[0.766vw] py-[16px] xl:px-[0.953vw] px-[16px] rounded-[8px]"
            onClick={() => tabIndex != 3 ? setTabIndex(tabIndex + 1) : setTabIndex(0)}
          >
            Next
          </button>
        </div>
        </Tabs>
        

      




       
      </div>
    </>
  );
}

export default PreviousNextMethods;
