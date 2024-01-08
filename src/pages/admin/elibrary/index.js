import React, { useState } from "react";
import AdminLayout from "@/components/adminlayout/layout";
import AddNewFile from "@/components/admin/popup/addnewfilepopup";
import Catalog from "./catalog";
import Usage from "./usage";
import General from "./general";
import Link from "next/link";

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);
  const [addNewFile, setAddNewFile] = useState(false);
  const [manageCategories, setManageCategories] = useState(false);

  return (
    <>
      <AdminLayout 
        leftPadding={true} 
        pageTitle="eLibrary"
        pageName='Admin'
        >
        <div className="pl-[129px] pr-[32px] xl:pr-[1.667vw] xl:py-[1.146vw] py-[22px] mb-[18px] xl:mb-[0.938vw] bg-[#F5F6F7]">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div
                onClick={() => setActiveTab(0)}
                className={`${
                  activeTab === 0
                    ? "bg-[#A93439] text-[#FFFFFF]"
                    : "bg-[#FFFFFF59] text-[#4B586E] border border-[#E5E7EB]"
                } font-normal text-[14px] xl:text-[0.729vw] px-[10px] xl:px-[0.521vw] py-[8px] xl:py-[0.417vw] rounded-full cursor-pointer`}
              >
                Catalog
              </div>
              <div
                onClick={() => setActiveTab(1)}
                className={`${
                  activeTab === 1
                    ? "bg-[#A93439] text-[#FFFFFF]"
                    : "bg-[#FFFFFF59] text-[#4B586E] border border-[#E5E7EB]"
                } font-normal text-[14px] xl:text-[0.729vw] px-[10px] xl:px-[0.521vw] py-[8px] xl:py-[0.417vw] rounded-full cursor-pointer`}
              >
                Usage
              </div>
              <div
                onClick={() => setActiveTab(2)}
                className={`${
                  activeTab === 2
                    ? "bg-[#A93439] text-[#FFFFFF]"
                    : "bg-[#FFFFFF59] text-[#4B586E] border border-[#E5E7EB]"
                } font-normal text-[14px] xl:text-[0.729vw] px-[10px] xl:px-[0.521vw] py-[8px] xl:py-[0.417vw] rounded-full cursor-pointer`}
              >
                General
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div
                onClick={() => setAddNewFile(true)}
                className="bg-[#A93439] text-[#FFFFFF] font-normal text-[14px] xl:text-[0.729vw] px-[12px] xl:px-[0.625vw] py-[10px] xl:py-[0.521vw] rounded-lg cursor-pointer"
              >
                New File
              </div>
              <Link
                href={"/admin/elibrary/category"}
                className="bg-[#1F2A37] text-[#FFFFFF] border border-[#E5E7EB] font-normal text-[14px] xl:text-[0.729vw] px-[12px] xl:px-[0.625vw] py-[10px] xl:py-[0.521vw] rounded-lg cursor-pointer"
              >
                Manage Categories
              </Link>
            </div>
          </div>
        </div>
        {/* Catalog start */}
        {activeTab === 0 ? <Catalog /> : null}
        {/* Catalog end */}

        {/* Usage start */}
        {activeTab === 1 ? (
          <div className=" ">
            <Usage />
          </div>
        ) : null}
        {/* Usage end */}

        {/* General start */}
        {activeTab === 2 ? (
          <div>
            <General />
          </div>
        ) : null}
        {/* General end */}

        <AddNewFile visible={addNewFile} onHides={() => setAddNewFile(false)} />
      </AdminLayout>
    </>
  );
}
