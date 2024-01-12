import { Montserrat } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});
export default function Banner() {



    return (
        <>
            <div className="enrollimg h-[922px] xl:h-[48.021vw] relative w-full">
                <div className={myMontserrat.className}>
                    <div className="text-[71px]  text-[#F5F6F8] text-center font-extrabold xl:text-[3.698vw]">Have it All</div>
                    <div className="text-center items-center flex justify-center">
                        <Image
                            src={"/assets/images/enroll_In.svg"}
                            width={76}
                            height={76}
                            className=""
                            alt='enrollimg'
                        />
                        <div className="text-[#BECDE3] text-[64px] ml-[12px]  xl:ml-[0.625vw] xl:text-[3.333vw]">Austin ISD</div>
                    </div>

                    <div className="flex justify-center mt-[25px] xl:mt-[1.302vw]">
                        <Image
                            src={"/assets/images/startenrollimg.svg"}
                            width={459}
                            height={66}
                            className=""
                            alt='enrollimg'
                        />

                    </div>

                </div>
                <div className="text-center text-[#FFFFFF] mt-[68px] xl:mt-[3.542vw] font-medium text-[30px] xl:text-[1.563vw]">Welcome to Austin ISD!</div>
                <div className="w-full max-w-[500px] mx-auto text-center text-[#FFFFFF] font-light mt-[14px] text-[18px] xl:mt-[0.729vw] xl:text-[0.938vw]">Whether you're longtime learners or new to the district, we're glad you're here. To enroll for the 2023–24 school year, please be sure you have an AISD Portal account. Visit portal.austinisd.org to create one or log in.</div>
                <div className="flex justify-center items-center mt-[44px] xl:mt-[2.292vw]">
                    <div className="inline-block text-[#fff] py-[17px] px-[82px] xl:py-[0.885vw] xl:px-[4.271vw] bg-[#A93439] rounded-full shadow-xl shadow-[#0000000A]">
                        <Link href={""} className=" flex items-center justify-center text-[18px] xl:text-[0.938vw]">Enrol today

                            <Image
                                src={"/assets/images/arrow-right.svg"}
                                width={24}
                                height={18}
                                className=""
                                alt='enrollimg'
                            />
                        </Link>
                    </div>
                </div>

                <div className="">
                <Image
                    src={"/assets/images/enrollimg3.png"}
                    width={350}
                    height={941}
                    className="absolute right-0 bottom-[-34%]"
                    alt='enrollimg'

                />
            </div>
            </div>

            <div className={myMontserrat.className}>
                <div className=" ">
                    <div className="mx-[15px] lg:mx-[5.208vw] pr-[200px] rounded-2xl bg-[#FFFFFF] grid grid-cols-12 items-center mb-[36px] xl:mb-[1.875vw] ">
                        <div className="col-span-3 text-[#374151] text-[56px] pl-[87px] xl:pl-[2.604vw] py-[32px] xl:py-[1.667vw] xl:text-[2.917vw] font-normal ">Find your <span className="font-bold">School</span>
                            <div className="">
                                <div className="bg-[#A93439] inline-block   text-[#fff] text-[16px] xl:text-[0.833vw] rounded-[8px]">
                                    <Link href={""} className=" text-[16px] xl:text-[rounded-[8px]] flex items-center py-[8px] px-[10px] ">
                                        Find  <Image
                                            src={"/assets/images/arrow-right1.svg"}
                                            width={24}
                                            height={18}
                                            className="ml-[5px]"
                                            alt='enrollimg'
                                        />
                                    </Link>


                                </div>
                            </div>
                        </div>
                        <div className=" col-span-9 text-[#4B586E] text-[24px] leading-[24px] xl:text-[0.950vw] px-[70px] xl:px-[3.646vw] mr-[40px] py-[52px] xl:py-[2.708vw] ">From Pre-K through their senior year, Austin ISD students can explore their interests with dozens of programs that prepare them for college, careers and life. From fine arts academies and dual language to earning free college credits, you can have it all in Austin ISD. Explore below, or use our new School Finder to find the school near you that best matches your child's interests.</div>
                    </div>
             
                </div>
            </div>
        




        </>
    )
}