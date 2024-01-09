import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import Addsuccessfulpopup from "@/components/admin/popup/addsuccessfulpopup";
import fetchAPI from "@/service/api/fetchAPI";
import adminFetchAPI from "@/service/api/adminFetchApi";

const AddNewUser = (props) => {
  const [date, setDate] = useState(null);
  const [text, setText] = useState("");
  const toast = useRef(null);
  const [visible, setVisible] = useState(false);
  const [roles, setRoles] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("")

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setRole("");
    setEmail("")
  }

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };
  const chooseOptions = {
    icon: "autinisd-document-upload",
    iconOnly: true,
    className: "w-full upload_icon",
  };

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const fetchRoles = async () => {
    try {
      let data = {
        "page": 1,
        "limit": 10,
        "search": ""
      }
      const response = await fetchAPI(`/role/list`, 'POST', data, 'application/json');
      console.log(response)
      setRoles(response?.rows);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRoles();
  }, [])

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("userCode", "213123");
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("role_id", role);
    formData.append("isBlocked", "0");
    formData.append("isConfirmed", "0");
    formData.append("profile_pic", "img.png");
    formData.append("designation", null);
    formData.append("created_by", sessionStorage.getItem("userId"));

    try {
      await adminFetchAPI(`/user`, 'POST', formData, 'multipart/form-data');
      // resetForm()
      setVisible(true);
    } catch (error) {
      console.log(error)
    }
  }

  const onHide = () => {
    setVisible(false);
    resetForm();
  }

  return (
    <>
      <div>
        <Sidebar
          visible={props.visible}
          position="right"
          blockScroll={true}
          style={{
            background: "#FFF",
            borderRadius: "16px 0 0 16px",
            width: "30vw",
          }}
          className="custmSidebar width576"
          onHide={() => props.onHides(false)}
        >
          <div className="flex flex-col justify-between h-full xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5">
            {/**row***/}
            <div>
              <div className="text-[#374151] xl:text-[1.25vw] text-[24px] font-semibold ">
                Add New User
              </div>
              <div className="xl:mt-[0.833vw] mt-4 xl:space-y-[0.833vw] space-y-4 ">
                <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                  <div className="col-span-12 xl:col-span-12 xl:mb-[0.833vw] mb-[16px] ">
                    <div className="col-span-12 xl:mb-[0.833vw] mb-[16px]">
                      <div className="flex flex-col customInput">
                        <label
                          htmlFor="username"
                          className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                        >
                          First Name
                        </label>
                        <InputText
                          id="username"
                          placeholder="Type here"
                          className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                          aria-describedby="username-help"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 xl:mb-[0.833vw] mb-[16px]">
                      <div className="flex flex-col customInput">
                        <label
                          htmlFor="username"
                          className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                        >
                          Last Name
                        </label>
                        <InputText
                          id="username"
                          placeholder="Type here"
                          className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                          aria-describedby="username-help"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6 xl:mb-[0.833vw] mb-[16px]">
                      <div className="flex flex-col customDropdown">
                        <label
                          htmlFor="username"
                          className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                        >
                          Role
                        </label>
                        <Dropdown
                          value={role}
                          onChange={(e) => setRole(e.value)}
                          options={roles}
                          optionLabel="role"
                          optionValue="role_id"
                          placeholder="Select an option"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 xl:mb-[0.833vw] mb-[16px] ">
                      <div className="flex flex-col customInput">
                        <label
                          htmlFor="username"
                          className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                        >
                          Email
                        </label>
                        <InputText
                          id="username"
                          placeholder="Type here"
                          className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                          aria-describedby="username-help"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col xl:mb-[0.833vw] mb-[16px]">
                      <label
                        htmlFor="username"
                        className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                      >
                        Avatar
                      </label>
                      <div className="bg-[#F5F6F7] border-dashed border border-[#BECDE3] rounded-lg flex flex-col items-center py-2.5 px-4 gap-2.5">
                        <Toast ref={toast}></Toast>
                        <FileUpload
                          mode="basic"
                          name="demo[]"
                          url="/api/upload"
                          accept="image/*"
                          maxFileSize={1000000}
                          onUpload={onUpload}
                          chooseOptions={chooseOptions}
                        />
                        <div className="text-[#9CA1AB] xl:text-[0.729vw] text-sm font-normal">
                          Drag Thumbnail to upload
                        </div>
                        <div className="border border-[#A93439] bg-white rounded text-[#A93439] text-xs font-normal py-1 px-2 cursor-pointer">
                          Select File
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**Editor**/}
              </div>
            </div>
            {/**Footer**/}
            <div className="flex justify-end py-[24px] xl:py-[1.25vw]">
              <div className="flex items-center xl:gap-[0.833vw] gap-4">
                <Link
                  href={""}
                  onClick={() => props.onHides(false)}
                  className="text-[#4B586E] text-[16px] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]"
                >
                  Cancel
                </Link>
                <Link
                  href={""}
                  className="text-white bg-[#1F2A37] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#1F2A37] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]"
                  // onClick={() => setVisible(true)}
                  onClick={handleSubmit}
                >
                  Add User
                </Link>
              </div>
            </div>
          </div>

          <Addsuccessfulpopup
            visible={visible}
            onHides={() => setVisible(false)}
            message={`New user ${firstName} ${lastName} add successfully `}
            resetForm={resetForm}
            setVisible={setVisible}
            setAddNewUser={props?.setAddNewUser}
          />
        </Sidebar>
      </div>
    </>
  );
};

export default AddNewUser;
