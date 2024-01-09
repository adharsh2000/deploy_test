import React from "react";
import Link from "next/link";
import { InputText } from "primereact/inputtext";

export default function Advancedsearch() {
  return (
    <div className="bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] p-[24px] xl:p-[1.250vw] rounded-[16px] xl:rounded-[0.833vw]">
      <div className="text-[#374151] text-[18px] xl:text-[0.938vw] font-semibold mb-[24px] xl:mb-[1.250vw]">
        Advanced Search
      </div>
      <div className="mb-[34px] xl:mb-[1.771vw] searchWaper">
      <div className="p-inputgroup">
            <InputText placeholder="Search" />
            <span className="p-inputgroup-addon">
              <i className="austin-search"></i>
            </span>
          </div>
      </div>
      <div className="advancedSearchLinks space-y-[8px] xl:space-y-[0.417vw]">
        <Link href={""}>Board</Link>
        <Link href={""}>2024 Trustee Elections</Link>
        <Link href={""}>Boundaries</Link>
        <Link href={""}>Finance Reports</Link>
        <Link href={""}>Legislative Issues Affecting Austin ISD</Link>
        <Link href={""}>Members</Link>
        <Link href={""}>Redistricting 2022</Link>
        <Link href={""}>Superintendent Search</Link>
        <Link href={""}>Watch Live</Link>
        <Link href={""}>Joint Subcommittee (City, County, AISD)</Link>
        <Link href={""}>Meetings</Link>
        <Link href={""}>Internal Audit</Link>
        <Link href={""}>Policy</Link>
      </div>
    </div>
  );
}
