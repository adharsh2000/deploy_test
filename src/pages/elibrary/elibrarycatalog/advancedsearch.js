import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import Link from "next/link";

export default function Index() {
  const [ingredient, setIngredient] = useState("");
  const [checked, setChecked] = useState(false);
  

  return (
    <>
      <div className="border-[#E5E7EB] bg-[#FFFFFF] rounded-[16px] xl:rounded-[0.833vw] tilesShadow h-full">
        <div className="p-[24px] xl:p-[1.25vw]">
          <div className="text-[18px] xl:text-[0.938vw] text-[#374151] font-medium mb-[24px] xl:mb-[1.25vw]">
            Advanced Search
          </div>
          <div className="p-inputgroup custom_search mb-[38px] xl:mb-[1.979vw]">
            <InputText placeholder="Search" />
            <span className="p-inputgroup-addon">
              <i className="austin-search"></i>
            </span>
          </div>
          <div className="flex items-center gap-2 mb-[24px] xl:mb-[1.25vw]">
            <div className="text-[#fff] bg-[#1F2A37] font-normal text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.521vw] py-[12px] xl:py-[0.625vw] rounded-full cursor-pointer">
              All
            </div>
            <div className="text-[#4B586E] bg-[#FFFFFF59] border border-[#E5E7EB] font-normal text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.521vw] py-[12px] xl:py-[0.625vw] rounded-full cursor-pointer">
              Video
            </div>
            <div className="text-[#4B586E] bg-[#FFFFFF59] border border-[#E5E7EB] font-normal text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.521vw] py-[12px] xl:py-[0.625vw] rounded-full cursor-pointer">
              Audio
            </div>
            <div className="text-[#4B586E] bg-[#FFFFFF59] border border-[#E5E7EB] font-normal text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.521vw] py-[12px] xl:py-[0.625vw] rounded-full cursor-pointer">
              Adhoc Reporting
            </div>
          </div>
          <div className="customAccordion">
            <Accordion activeIndex={[0, 1, 2]} multiple={true}>
              <AccordionTab header="Category">
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient1"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Bulletins
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Memorandums
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Handbooks
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Newsletters
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Plans and Resources
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Presentations
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Reference Guides
                    </label>
                  </div>
                </div>
                <div>
                <div className="flex items-center py-[8px]">
                  <Link href={""} className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-medium">
                    <i className="austin-three-dots-rectangle text-[18px] xl:text-[0.938vw] mr-2"></i>
                    Show more
                  </Link>
                </div>
                </div>
              </AccordionTab>
              <AccordionTab header="Format">
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient1"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      PDF
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Image
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      DOC / DOCX
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      XLS/ XLSX
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      ZIP (Compressed files)
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      CSV
                    </label>
                  </div>
                </div>
                <div className="flex items-center py-[8px]">
                  <Link href={""} className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-medium">
                    <i className="austin-three-dots-rectangle text-[18px] xl:text-[0.938vw] mr-2"></i>
                    Show more
                  </Link>
                </div>
              </AccordionTab>
              <AccordionTab header="KeyWords">
                <div className="m-0 mt-[8px] mb-[24px] xl:mb-[1.25vw]">
                  <div className="keywordSearch">
                    <span className="p-input-icon-left w-full">
                      <i className="autinisd-search" />
                      <InputText placeholder="Type in here" className="w-full" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-[24px] xl:mb-[1.25vw]">
                  <div className="flex items-center custRadio">
                    <RadioButton
                      inputId="ingredient1"
                      name="pizza"
                      value="Cheese"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "Cheese"}
                    />
                    <label
                      htmlFor="ingredient1"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Any Word
                    </label>
                  </div>

                  <div className="flex items-center custRadio">
                    <RadioButton
                      inputId="ingredient2"
                      name="pizza"
                      value="kjjkj"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "kjjkj"}
                    />
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      All Words
                    </label>
                  </div>

                  <div className="flex items-center custRadio">
                    <RadioButton
                      inputId="ingredient3"
                      name="pizza"
                      value="pnnir"
                      onChange={(e) => setIngredient(e.value)}
                      checked={ingredient === "pnnir"}
                    />
                    <label
                      htmlFor="ingredient3"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Exact Phase
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient1"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      PDF
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      Image
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      DOC / DOCX
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      XLS/ XLSX
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      ZIP (Compressed files)
                    </label>
                  </div>
                </div>
                <div className="m-0">
                  <div className="flex items-center py-[8px]">
                    <Checkbox
                      onChange={(e) => setChecked(e.checked)}
                      checked={checked}
                      className="custumCheckbox"
                    ></Checkbox>
                    <label
                      htmlFor="ingredient2"
                      className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium"
                    >
                      CSV
                    </label>
                  </div>
                </div>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
