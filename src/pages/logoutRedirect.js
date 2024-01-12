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
    <div className='logoutredirect' style={{ backgroundColor: '#e5e7eb', display: 'flex', flexDirection: 'column',alignItems: 'center', height: '100vh'}}>
      <div className='Errormessage'>
        <div className='grid px-96 text-center mt-10'>
          <Image className='mx-auto my-5' height={300} width={300} src={"/assets/images/logo.svg"}></Image>
          <Image className='mx-auto my-5' height={120} width={80} src={"/assets/images/logout-Access-Restricted.png"}></Image>
          <div className='font-semibold text-[30px] my-5'>Access Restricted</div>
          {message ? <div className='text-[18px] my-5'>{message}</div> :
            <div className='text-[18px]'>You don't have permission to view this page. <br /> Please contact the Administrator.<br /></div>}
        </div>
      </div>
      <div className="Signoutbtn bg-[] my-5" style={{ cursor: 'pointer', marginLeft: 'auto', marginRight: 'auto', textDecoration: 'underline'}} onClick={Logout}>Go to Login page</div>
    </div>
  )
}
