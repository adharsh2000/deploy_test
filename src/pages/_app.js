import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import '@/styles/globals.css';
import '@/styles/login.css';
import { ThemeProvider } from 'next-themes'
import { Inter } from '@next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Montserrat } from '@next/font/google';
const myMontserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})

export default function App({ Component, pageProps }) {
  return <main className={myMontserrat.className}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </GoogleOAuthProvider>
  </main>
}





