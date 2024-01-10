import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Checkbox } from "primereact/checkbox";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useRouter } from "next/router";
import Loader from "@/components/loader";
import fetchAPI from '@/service/api/fetchAPI';
import { Toast } from 'primereact/toast';


const adminStylesheets = ['/styles/admin/filtercomponent.css', '/styles/admin/leftmenu.css', '/styles/admin/nstyle.css', '/styles/admin/skstyle.css', '/styles/admin/systyle.css'];

export default function Index() {

  const [Loading, setLoading] = useState(false)
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [EmailInput, setEmailInput] = useState('');
  const [PasswordInput, setPasswordInput] = useState('');

  const toast = useRef(null);

  const router = useRouter();
  // Google Login
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      setLoading(true)
      sessionStorage.setItem('GoogleAccessToken', tokenResponse?.access_token)
      try {
        axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${tokenResponse?.access_token}`)
          .then(resp => {
            // sessionStorage.setItem("UserName", resp?.data?.name)
            sessionStorage.setItem("UserImage", resp?.data?.picture)
            sessionStorage.setItem("UserEmail", resp?.data?.email)
            axios.post(process.env.BASE_URL + '/auth/login',
              {
                email: resp?.data?.email,
              }).then(response => {
                response?.data?.message.includes('successfully') && sessionStorage.setItem("UserName", `${response?.data?.user?.firstName} ${response?.data?.user?.lastName}`)
                // response?.data?.message.includes('successfully') && sessionStorage.setItem("UserImage", `${response?.data?.user?.profile_pic}`)
                response?.data?.message.includes('successfully') && sessionStorage.setItem("AccessToken", `${response?.data?.token}`)
                response?.data?.message.includes('successfully') && sessionStorage.setItem("UserID", `${response?.data?.user?.user_id}`)
                response?.data?.message.includes('successfully') && sessionStorage.setItem('IsAuthenticated', true)
                router.push('/website')
              }
              )
              .catch(error => {
                router.push('/logoutRedirect')
                console.log(error, 'error logged')
              });
          })
      }
      catch (error) {
        setLoading(false)
        console.log(error, 'error logged')
      }
    },
    onFailure: error => console.log(error, 'error logged')
  });
  // Manual Login
  // const PostLoginDetail = async () => {
  //   setLoading(true)
  //   let data = {
  //     email: EmailInput,
  //     // password: PasswordInput
  //   }
  //   const CheckMandat = EmailInput === '' || PasswordInput === '';
  //   if ((EmailInput === '') || (PasswordInput === '')) {
  //     toast.current.show({ severity: 'error', detail: 'Enter credentials to login', life: 3000 });
  //     setLoading(false);
  //   }
  //   try {
  //     !CheckMandat && await fetchAPI(`/auth/login`, 'POST', data, 'application/json')
  //       .then((response) => {
  //         if (response?.data?.message?.includes('wrong')) {
  //           setLoading(false);
  //           toast.current.show({ severity: 'error', detail: 'Invalid Credentials', life: 3000 });
  //         }
  //         response.message.includes('successfully') && router.push('/website')
  //         response.message.includes('successfully') && sessionStorage.setItem("UserName", `${response?.user?.firstName} ${response?.user?.lastName}`)
  //         response.message.includes('successfully') && sessionStorage.setItem("UserImage", `${response?.user?.profile_pic}`)
  //         response.message.includes('successfully') && sessionStorage.setItem("UserEmail", `${response?.user?.email}`)
  //         response.message.includes('successfully') && sessionStorage.setItem("AccessToken", `${response?.token}`)
  //         response.message.includes('successfully') && sessionStorage.setItem("UserID", `${response?.user?.user_id}`)
  //         response.message.includes('successfully') && sessionStorage.setItem('IsAuthenticated', 'true')


  //         setLoading(false)
  //       }
  //       )
  //   }
  //   catch (error) {
  //     console.log(error, 'error logged')
  //   }
  // }

  return (
    <>
      {Loading ? <Loader message='Authenticating' /> :
        <>
          <Head>
            <title>Welcome to Austin ISD</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="google-site-verification" content="W6XmndxNINBwm3c3p5KH0Sar2-92Hufz7t4kD0-d1HA" />
            <link rel="icon" href="/favicon.ico" />
            {router.pathname.startsWith('/admin') &&
              adminStylesheets.map((stylesheet, index) => (
                <link key={index} rel="stylesheet" href={stylesheet} />
              ))
            }
          </Head>

          <div className='bg-[#FAF9F9] website_login-wrap-bg  h-screen'>
            <div className='flex items-center justify-between py-[16px] px-[115px] xl:py-[0.833vw] xl:px-[5.990vw] bg-[#FAF9F9] border-[1px] border-[#E6E3D9] z-[999999]'>
              <div>
                <Image
                  src="/assets/images/logo.svg"
                  width="24"
                  height="24"
                  className="w-[10.365vw]"
                  alt=""
                />
              </div>
              <div className='text-[16px] xl:text-[0.833vw] font-semibold px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] rounded-[8px] cursor-pointer text-[#FFFFFF] bg-[#1F2A37]'>
                Contact Us
              </div>
            </div>
            <div className="flex-row grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-0">
              <div className="flex flex-wrap flex-row justify-center auto-rows-max xl:pt-[5.958vw]">
                <div className=" max-w-md 2xl:max-w-lg w-full p-2">
                  <form autoComplete="off">
                    <div className="mb-[26px] xl:mb-[1.354vw]">
                      <h2 className="text-[24px] xl:text-[1.875vw] font-semibold text-[#242526]">Login</h2>
                      {/* <div className="text-[#53565A] text-[18px] xl:text-[0.938vw] font-medium pt-2">Provide your credentials to proceed, please.</div> */}
                    </div>

                    {/* <div className="relative  mb-2 xl:mb-[0.781vw] loginInput">
                      <div className="pb-2 "><label htmlFor="" className="text-[#344054] text-sm font-medium">Email</label></div>
                      <InputText
                        value={EmailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        id=""
                        className="w-full placeholder:text-[#667085] placeholder:text-sm"
                        placeholder="olivia@mail.com"
                      />
                    </div> */}

                    {/* <div className="relative mb-2 xl:mb-[0.781vw] custPassword loginInput">
                      <div className="py-2"><label htmlFor="username" className="text-[#344054] text-sm font-medium">Password</label></div>
                      <Password
                        value={PasswordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        toggleMask
                        placeholder="***********"
                        className="w-full placeholder:text-[#667085] placeholder:text-sm"
                      />
                    </div> */}

                    {/* <div className="flex items-center justify-between ">
                      <div className="flex items-center">
                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                        <label htmlFor="ingredient1" className="ml-2 text-[#53565A] text-[14px] font-medium">Remember me</label>
                      </div>
                      <div>
                        <Link href="" className="text-[#2B407D] font-medium text-[12px] hover:underline" >Forgot password?</Link>
                      </div>
                    </div> */}

                    {/* <div className="cursor-pointer flex w-full mt-[26px] xl:mt-[1.354vw] mb-[16px] xl:mb-[0.833vw]">
                      <span className="text-[#FFFFFF] text-[16px] xl:text-[0.833vw] bg-[#A93439] hover:bg-[#952e33] rounded-lg w-full text-center py-[12px] xl:py-[0.625vw]">Login</span>
                    </div> */}

                    {/* <div className='flex items-center justify-center text-[#A7A9AE] text-[15px] xl:text-[0.781vw] font-normal text-center mb-[16px] xl:mb-[0.833vw]'><div className='border-[1px] w-[120px] xl:w-[6.250vw] border-[#E6E3D9]'></div>&nbsp; Or Sign in with Google &nbsp;<div className='border-[1px] w-[120px] xl:w-[6.250vw] border-[#E6E3D9]'></div></div> */}

                    <div className="flex w-full mb-[40px] xl:mb-[2.083vw]">
                      <span onClick={() => login()} className="cursor-pointer flex items-center justify-center gap-2 text-[#53565A] bg-[#FFFFFF] border-[1px] border-[#E6E3D9] text-[16px] xl:text-[0.833vw] rounded-lg w-full text-center py-[12px] xl:py-[0.625vw] ">
                        <Image
                          src="/assets/images/Google_icon.png"
                          width="24"
                          height="24"
                          className=""
                          alt=""
                        />
                        Sign in with Google</span>
                    </div>

                    {/* <div className="flex items-center justify-center mb-8 xl:mb-[2.083vw] text-[16px] xl:text-[0.833vw] font-medium text-[#A7A9AE]">
                      Not Registered Yet?
                      <Link href='/' className="ml-2 font-medium text-[#2B407D] hover:text-[#2B407D]">
                        Create account.
                      </Link>
                    </div> */}

                  </form>
                </div>
              </div>

              <div className="">
                <div className="">
                </div>
              </div>
            </div>
          </div>
        </>
      }
      <Toast ref={toast}></Toast>
    </>
  );
}
