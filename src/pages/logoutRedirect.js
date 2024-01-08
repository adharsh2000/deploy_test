import React from 'react'
import Image from 'next/image';
import Router from "next/router";
import { useRouter } from "next/router";

export default function logoutRedirect(props) {
  const { message } = props;

  const router = useRouter();

  const Logout = () => {
    sessionStorage.clear()
    router.push('/')
   }

  return (
    <div className='logoutredirect' >
      <div className='Errormessage'>
        <div className='grid px-96 text-center mt-10'>
          <Image className='mx-auto' height={150} width={150} src={"/assets/images/logo.png"}></Image>
          <Image className='mx-auto mt-5' height={120} width={80} src={"/assets/images/logout-Access-Restricted.png"}></Image>
          <div className='font-semibold text-[30px] mt-5'>Access Restricted</div>
          {message ? <div className='text-[18px]'>{message}</div> :
            <div className='text-[18px]'>You don't have permission to view this page. <br /> Please contact the Administrator.<br /></div>}
        </div>
      </div>
      <div className="Signoutbtn bg-[]" onClick={Logout}>Go to Login page</div>
    </div>
  )
}
