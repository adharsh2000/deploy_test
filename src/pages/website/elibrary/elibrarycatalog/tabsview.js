import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";


export default function Index(props) {
  const [view, setView] = useState("Row");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const Category = [
    { name: "Category 1", code: "C1" },
    { name: "Category 2", code: "C2" },
    { name: "Category 3", code: "C3" },
    { name: "Category 4", code: "C4" },
  ];
  return (
    <>
      <div className="mb-[24px] xl:mb-[1.250vw]">
        <div className="flex justify-between items-center gap-2">
          <div className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal leading-none">
            <span className="text-[16px] xl:text-[0.833vw] font-semibold">
              32
            </span>{" "}
            Files Fold
          </div>
          <div className="flex items-center gap-2">
            <div className="custom_selectdropdown flex gap-1 items-center bg-[#fff] border border-[#BECDE3] rounded-lg py-[8px] xl:py-[0.521vw] px-[10px] xl:px-[0.625vw] xl:text-[#4B586E] text-[0.729vw]">
              <span className="w-[80px]">Sort by:</span>
              <Dropdown
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.value)}
                options={Category}
                optionLabel="name"
                placeholder="Categories"
                className="w-full"
              />
            </div>

            <div
              onClick={
                () => {
                  props.setView("Row");
                  setView("Row")
                }
              }
              className={`${
                view === "Row"
                  ? "bg-[#1F2A37]"
                  : "border-[#BECDE3] bg-[#FFFFFF]"
              } flex items-center justify-center rounded-[8px] xl:rounded-[0.417vw] cursor-pointer w-[48px] xl:w-[2.500vw] h-[48px] xl:h-[2.500vw]`}
            >
              <i
                className={`${
                  view === "Row" ? "text-[#fff]" : "text-[#4B586E]"
                } austin-rowview text-[24px] xl:text-[1.25vw]`}
              ></i>
            </div>
            <div
              onClick={
                () => {
                  props.setView("Grid");
                  setView("Grid")
                }
              }
              className={`${
                view === "Grid"
                  ? "bg-[#1F2A37]"
                  : "border-[#BECDE3] bg-[#FFFFFF]"
              } flex items-center justify-center rounded-[8px] xl:rounded-[0.417vw] cursor-pointer w-[48px] xl:w-[2.500vw] h-[48px] xl:h-[2.500vw]`}
            >
              <i
                className={`${
                  view === "Grid" ? "text-[#fff]" : "text-[#4B586E]"
                } austin-grid text-[24px] xl:text-[1.25vw]`}
              ></i>
            </div>
            <div
              onClick={
                () => {
                  props.setView("List");
                  setView("List")
                }
              }
              className={`${
                view === "List"
                  ? "bg-[#1F2A37]"
                  : "border-[#BECDE3] bg-[#FFFFFF]"
              } flex items-center justify-center rounded-[8px] xl:rounded-[0.417vw] cursor-pointer w-[48px] xl:w-[2.500vw] h-[48px] xl:h-[2.500vw]`}
            >
              <i
                className={`${
                  view === "List" ? "text-[#fff]" : "text-[#4B586E]"
                } austin-menu-drawer text-[24px] xl:text-[1.250vw]`}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
