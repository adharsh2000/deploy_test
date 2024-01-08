import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import RemoveUser from "@/components/admin/popup/removeUser";

const Comments = (props) => {
  const [removeUser, setRemoveUser] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  return (
    <>
      {props.data.map((elm) => {
        return (
          <>
            <div className="mt-[24px] xl:mt-[1.25vw]">
              <div className="flex flex-wrap justify-between">
                <div className="flex gap-[12px] xl:gap-[0.625vw] mb-[10px] xl:mb-[0px]  items-center">
                  <Image
                    src={"/assets/images/userprofile.png"}
                    width={40}
                    height={40}
                    alt="active_user"
                  />
                  <h6 className="text-[#374151] text-[16px] xl:text-[0.938vw] font-semibold">
                    {elm.name}
                  </h6>
                  <span className="austin-dot text-[#A93439] text-[7px]"></span>
                  <p className="text-[#9CA1AB] text-[14px] xl:text-[0.729vw] font-light">
                    {elm.date}
                  </p>
                </div>
                <div className="flex justify-end xl:w-[9.813vw] w-[230px]">
                  <div className="px-[18px] xl:px-[1.042vw] py-[12px] xl:py-[0.433vw] bg-[#DBE1EA] text-[14px] xl:text-[0.829vw] text-[#4B586E] font-light rounded-full ">
                    <i
                      onClick={() => setRemoveUser(true)}
                      className="autinisd-user-delete  text-[18px] text-[#4B586E]  mr-2"
                    ></i>{" "}
                    Block this user
                  </div>
                </div>
              </div>
              <div className="xl:mt-[0.833vw] mt-[16px]">
                <div className="">
                  <div className="flex gap-[12px] xl:gap-[0.625vw] items-center">
                    <div className="flex-col gap-2 items-center">
                      <div>
                        {" "}
                        <Link
                          href=""
                          className="bg-[#FDE8E8] p-2  h-10 w-10 rounded-full text-[20px] leading-6 "
                        >
                          {" "}
                          <i
                            onClick={() => setDeleteUser(true)}
                            className="autinisd-trash"
                          ></i>
                        </Link>
                      </div>
                      <div className="mt-5">
                        {" "}
                        <Link
                          href=""
                          className="bg-[#E8EBF0] p-2  h-10 w-10 rounded-full text-[20px] leading-6"
                        >
                          {" "}
                          <i className="autinisd-eye-slash"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="bg-[#F5F6F8] rounded-md p-[14px] xl:p-[0.733vw] text-[#4B586E] text-[14px] xl:text-[0.733vw] font-light">
                      {elm.description}
                    </div>
                  </div>
                </div>
              </div>
              <RemoveUser
                visible={removeUser}
                onHides={() => setRemoveUser(false)}
                message="Are you sure you want to block this
             User?"
                icon="autinisd-user-delete"
              />
              <RemoveUser
                visible={deleteUser}
                onHides={() => setDeleteUser(false)}
                message="Are you sure you want to delete this User?"
                icon="autinisd-info-circle-fill"
              />
            </div>
          </>
        );
      })}
    </>
  );
};
export default Comments;
