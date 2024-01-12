import React from "react";
import Layout from "@/components/layout/layout";
import HighlightedDepartments from "@/components/website/departments/highlighteddepartments";
import Departmentsbanner from "@/components/website/departments/departmentsbanner";
import Link from "next/link";
import Image from "next/image";

export default function Index() {
  const HighlightedDepartmentsData = [
    {
      departmentImg: "department-img1.png",
      dapartmentname: "Academics",
      dapartmentdescription: "The Academics Department is a teaching and learning community composed of professional teams who create curriculum, work with school communities to develop and coordinate programs, and pro",
    },
    {
      departmentImg: "department-img2.png",
      dapartmentname: "Athletics",
      dapartmentdescription: "The mission of the Austin ISD Athletic Program is to create an environment that fosters respect, leadership, teamwork, sportsmanship and a commitment to excellence. Competitive athleti",
    },
    {
      departmentImg: "department-img3.png",
      dapartmentname: "Construction Management",
      dapartmentdescription: "The Construction Management Department’s mission is to successfully plan, design, construct and complete educational and support facilities ",
    },
    {
      departmentImg: "department-img4.png",
      dapartmentname: "Fine Arts",
      dapartmentdescription: "The Austin ISD Fine Arts Department believes that a Fine Arts education is essential for the development of the whole child. The arts provide students with unique experiences that allow the",
    },
  ];
  return (
   <>
   <Layout pageClass="" pageTitle="All Departments">    
    {/***Department***/}
    <div className="departments_banner_warp">
        <Departmentsbanner />

    <div className="xl:py-[1vw] py-[20px] xl:px-[5.990vw] px-[100px]">
        <div>
          <div className='flex items-center gap-2'>
            <div className="text-[#374151] text-[46px] xl:text-[1.875vw] leading-[1.2]">
              Highlighted
            </div>
            <div className="text-[#374151] text-[56px] xl:text-[1.875vw] leading-[1.2] font-extrabold">
              Departments
            </div>
          </div>

          <HighlightedDepartments   data={HighlightedDepartmentsData}
                  className="grid grid-cols-1 xl:grid-cols-4 gap-[24px] xl:gap-[1.25vww] xl:mt-[1.927vw] mt-[30px]"/>
          </div>
          </div>
        
     
  
    {/***Department***/}
          <div className="xl:pt-[1.771vw] pt-[34px] xl:px-[5.990vw] px-[100px]">
          <div className='flex flex-wrap justify-between items-center gap-2'>
            <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="text-[#374151] text-[46px] xl:text-[1.875vw] leading-[1.2]">
              Highlighted
            </div>
            <div className="text-[#374151] text-[56px] xl:text-[1.875vw] leading-[1.2] font-extrabold">
              Departments
            </div>
            </div>

          <div className="flex border border-[#E5E7EB] shadow-sm rounded-l-md">
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#fff] bg-[#1F2A37] xl:text-[0.729vw] text-[14px] rounded-l-lg">All</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">A</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">B</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">C</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">D</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">E</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">F</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">G</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">H</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">I</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">J</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">K</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">L</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">M</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">N</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">O</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">P</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">Q</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">R</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">S</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">T</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">U</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">V</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">W</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">X</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px]">Y</Link>
            <Link href='' className="xl:p-[0.517vw] p-[8px] text-[#9CA1AB] bg-[#fff] xl:text-[0.729vw] text-[14px] rounded-r-lg">Z</Link>
          </div>
          
          </div>

              <div className="xl:mt-[1.927vw] mt-[30px]">
                {/* *********** A**************** */}
                <div className="bg-[#fff] xl:rounded-[1.55vw] rounded-[24px] border border-[#E5E7EB] xl:p-[1.25vw] p-[22px] xl:mb-[1.927vw] mb-[30px]">
                  <div className="xl:text-[1.563vw] text-[30px] text-[#A93439] font-semibold">A</div>

                  <div className="xl:mt-[0.833vw] mt-[16px] grid grid-cols-2 xl:grid-cols-3 gap-[24px] xl:gap-[1.25vww]">
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small01.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        About Austin ISD
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small02.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Advanced Academics
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small03.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Athletics 
                        </div>
                      </Link>
                      <Link href='/website/acadamics' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small04.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Academics 
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small05.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        AISD Advisory Bodies
                        </div>
                      </Link>
                   <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small06.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Attendance
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small06.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Accessibility Resources
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small08.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        AISD PALS Program
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small09.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        AVID–Advancement Via Individual Determination
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small10.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Accountability and Assessment
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small11.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        AISD TEA Partnership Parent Advisory Committee
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small12.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        ACE–Austin
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small12.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        AISD Youth Mentoring
                        </div>
                      </Link>

                  </div>
                </div>

                {/* *********** B**************** */}
                <div className="bg-[#fff] xl:rounded-[1.55vw] rounded-[24px] border border-[#E5E7EB] xl:p-[1.25vw] p-[22px] xl:mb-[1.927vw] mb-[30px]">
                  <div className="xl:text-[1.563vw] text-[30px] text-[#A93439] font-semibold">B</div>

                  <div className="xl:mt-[0.833vw] mt-[16px] grid grid-cols-2 xl:grid-cols-3 gap-[24px] xl:gap-[1.25vww]">
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Back to School 2023-24
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Board of Trustees
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Bond Steering Committee (BSC) 
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Budget 
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Budget and Finance Advisory Committee
                        </div>
                      </Link>
                   <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                           Budget Stabilization Task Force
                        </div>
                      </Link>
                    

                  </div>
                </div>

                {/* *********** C**************** */}
                <div className="bg-[#fff] xl:rounded-[1.55vw] rounded-[24px] border border-[#E5E7EB] xl:p-[1.25vw] p-[22px] xl:mb-[1.927vw] mb-[30px]">
                  <div className="xl:text-[1.563vw] text-[30px] text-[#A93439] font-semibold">C</div>

                  <div className="xl:mt-[0.833vw] mt-[16px] grid grid-cols-2 xl:grid-cols-3 gap-[24px] xl:gap-[1.25vww]">
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Calendar Task Force
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Campus & District Accountability
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Campus Advisory Councils
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Career and Technical Education
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Career and Technical Education Advisory Committee
                        </div>
                      </Link>
                   <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        College and Career Readiness
                        </div>
                      </Link>
                   <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Communications & Community Engagement 
                        </div>
                      </Link>
                   <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Community Bond Oversight Committee
                        </div>
                      </Link>
                   <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Construction Management
                        </div>
                      </Link>
                   <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Contract and Procurement Services
                        </div>
                      </Link>
                    

                  </div>
                </div>

                   {/* *********** D**************** */}
                   <div className="bg-[#fff] xl:rounded-[1.55vw] rounded-[24px] border border-[#E5E7EB] xl:p-[1.25vw] p-[22px] xl:mb-[1.927vw] mb-[30px]">
                  <div className="xl:text-[1.563vw] text-[30px] text-[#A93439] font-semibold">D</div>

                  <div className="xl:mt-[0.833vw] mt-[16px] grid grid-cols-2 xl:grid-cols-3 gap-[24px] xl:gap-[1.25vww]">
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        District Advisory Council
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        District of Innovation
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Dual Language
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Dyslexia 
                        </div>
                      </Link>
                  </div>
                  </div>

                   {/* *********** E**************** */}
                   <div className="bg-[#fff] xl:rounded-[1.55vw] rounded-[24px] border border-[#E5E7EB] xl:p-[1.25vw] p-[22px] xl:mb-[1.927vw] mb-[30px]">
                  <div className="xl:text-[1.563vw] text-[30px] text-[#A93439] font-semibold">E</div>
                  <div className="xl:mt-[0.833vw] mt-[16px] grid grid-cols-2 xl:grid-cols-3 gap-[24px] xl:gap-[1.25vww]">
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Early Learning
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Earth Week
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Elementary & Secondary School Emergency Relief
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Emergency Management 
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Environmental Stewardship Advisory Committee 
                        </div>
                      </Link>
                    
                  </div>
                  </div>

                   {/* *********** F**************** */}
                   <div className="bg-[#fff] xl:rounded-[1.55vw] rounded-[24px] border border-[#E5E7EB] xl:p-[1.25vw] p-[22px] xl:mb-[1.927vw] mb-[30px]">
                  <div className="xl:text-[1.563vw] text-[30px] text-[#A93439] font-semibold">F</div>
                  <div className="xl:mt-[0.833vw] mt-[16px] grid grid-cols-2 xl:grid-cols-3 gap-[24px] xl:gap-[1.25vww]">
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Facilities and Bond Planning Advisory Committee
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Facilities Maintenance
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Facility Master Plan
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Facility Naming
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                            Facility Use
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                        Fine Arts
                        </div>
                      </Link>
                      <Link href='' className="bg-[#F5F6F7] rounded-[16px]  xl:gap-[0.833vw] gap-[16px] relative h-[40px] flex items-center">
                        <div className="absolute left-0">
                          <Image src='/assets/website/department_small13.png' width={53} height={40} alt="department" className="rounded-2xl" />
                        </div>
                        <div className="text-[#374151] text-[14px] xl:text-[0.729vw] leading-[1.2] xl:pl-[3.604vw] pl-[150px]">
                            Food Service
                        </div>
                      </Link>
                    
                  </div>
                  </div>
              </div>

            </div>

            </div>        
   </Layout>
   </>
  )
}

