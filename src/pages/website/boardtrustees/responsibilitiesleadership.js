import React from "react";
import Link from "next/link";
import { Montserrat } from "@next/font/google";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Responsibilitiesleadership() {
  return (
    <div className="bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] p-[24px] xl:p-[1.250vw] rounded-[16px] xl:rounded-[0.833vw]">
      <div className={myMontserrat.className}>
      <div className="text-[#374151] text-[32px] xl:text-[32px] font-semibold mb-[24px] xl:mb-[1.250vw]">
        Responsibilities of Leadership
      </div>
      </div>
      <div className="space-y-[16px] xl:space-y-[0.833vw]">
        <p className="text-[#4B586E] text-[18px] xl:text-[0.938vw]">
          Guiding the Austin Independent School District toward excellence is
          the goal of the nine-member AISD Board of Trustees. As the district's
          elected leaders, trustees represent community expectations as they
          chart the direction of educational programs and services and establish
          the standard by which success is measured.
        </p>
        <p className="text-[#4B586E] text-[18px] xl:text-[0.938vw]">
          Trustees employ the superintendent, approve the budget and monitor
          expenditures, set the tax rate, and may call for a bond or tax rate
          election. The board also establishes policies for operating the
          district and ensuring its financial viability.
        </p>
        <div className="border border-[#BECDE3] p-[24px] xl:p-[1.250vw] rounded-[8px] xl:rounded-[0.417vw] space-y-[16px] xl:space-y-[0.833vw]">
          <div className="text-[#374151] text-[20px] xl:text-[1.042vw] leading-none">
            AISD Board Meetings
          </div>
          <div className="text-[#4B586E] text-[16px] xl:text-[0.833vw]">
            Meetings will broadcast on
            <Link href={""} className="underline text-[#A93439]">
              AISD.TV
            </Link>
            and on
            <Link href={"#"} className="underline text-[#A93439]">
              YouTube.
            </Link>
          </div>
        </div>
        <div className="text-[#4B586E] text-[18px] xl:text-[0.938vw]">
          <p>
            The AISD Board of Trustees generally meets on the second and fourth
            Thursday evenings of the month (except November, December and May;
            there are no meetings in July) in the Board Auditorium at Central
            Office, 4000 S. IH-35 Frontage Road.
          </p>
          <p>Here are the types of board meetings and when they are:</p>
          <ul class="list-disc pl-[24px] xl:pl-[1.250vw]">
            <li>
              Information Sessions are the second Thursday of the month; and
            </li>
            <li>
              Regular Voting Meetings are the fourth Thursday of the month.
            </li>
          </ul>
          <p>
            NOTE: Check the <span className="underline">district calendar</span>
            for any changes to board meetings.
          </p>
          <p>
            Information sessions and regular voting meetings are cablecast live
            on AISD.TV and are periodically re-cablecast. AISD board meetings
            are open to the public. Within the limits of the Texas Open Meetings
            Act, however, parts of board meetings, such as consideration of real
            estate transactions, personnel matters, student hearings and legal
            matters, may be closed to the public.
          </p>
        </div>
        <div className="text-[#4B586E] text-[24px] xl:text-[1.250vw] font-semibold">
          Public Comment Policy & Public Testimony at Regular Voting Meetings
        </div>
        <div className="border border-[#BECDE3] p-[24px] xl:p-[1.250vw] rounded-[8px] xl:rounded-[0.417vw]">
          <div className="text-[#374151] leading-[1.2]">
            General public comment will take place during Board Information
            Sessions and may pertain to any issue or topic the public would like
            to address. Please visit the 
            <span className="underline"> board meetings page</span>  for
            information.
          </div>
        </div>
        <div className="text-[#4B586E] text-[24px] xl:text-[1.250vw] font-semibold">
          Board Service
        </div>
        <p className="text-[#4B586E] text-[18px] xl:text-[0.938vw]">
          Members are elected to a four-year term of office. On a rotating
          basis, board seats are filled during biannual elections held on the
          first Tuesday in November. Vacancies are filled by appointment until
          the next election. Candidates must conform to the eligibility
          requirements of the Texas Election Code. The president, vice president
          and secretary are elected by the other members of the board. Trustees
          provide public service to the Austin community without financial
          compensation.
        </p>
        <div className="text-[#4B586E] text-[24px] xl:text-[1.250vw] font-semibold">
          District policies
        </div>
        <p className="text-[#4B586E] text-[18px] xl:text-[0.938vw]">
          <span className="underline">District policies</span> are revised as
          needed to reflect changes in federal or state law, Texas education
          guidelines and local options. Policies posted online are generally
          current, however, delays of up to 30 days may occur before newly
          adopted policies appear.
        </p>
        <div className="text-[#4B586E] text-[24px] xl:text-[1.250vw] font-semibold">
          Operating Procedures
        </div>
        <p className="text-[#4B586E] text-[18px] xl:text-[0.938vw]">
          The Austin ISD Board of Trustees adopts operating procedures to guide
          the organizational, logistical and role-specific activities related to
          the work of the board.
        </p>
      </div>
    </div>
  );
}
