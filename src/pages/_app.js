import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import '@/styles/globals.css';
import '@/styles/login.css';
import { ThemeProvider } from 'next-themes'
import { Inter } from '@next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from "@/redux/store";
import { Provider } from "react-redux";

import { Montserrat } from '@next/font/google';
import { useRouter } from "next/router";
import { useEffect } from "react";
const myMontserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})




export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {  
    if(router.pathname === '/aisdtv') 
    { 
      document.body.classList.add('tvBodyColor'); 
    }else{
      document.body.classList.remove('tvBodyColor'); 
    }     
  }, [router.pathname]);

  return <main className={myMontserrat.className}>
    <Provider store={store}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </GoogleOAuthProvider>
    </Provider>
  </main>
}





