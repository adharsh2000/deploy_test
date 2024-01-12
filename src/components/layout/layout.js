import Top from "./top";
import Head from "next/head";
import { Inter } from '@next/font/google'
import Footer from "./footer";
import { useRouter } from 'next/router'

const websiteStylesheets = ['/styles/website/vkstyle.css', '/styles/website/astyle.css', '/styles/website/nstyle.css', '/styles/website/skstyle.css', '/styles/website/systyle.css', '/styles/website/vsstyle.css'];

const myInter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: "swap",
})

export default function Layout({ children, ...pageProps }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to Austin ISD</title>
        <meta name="google-site-verification" content="W6XmndxNINBwm3c3p5KH0Sar2-92Hufz7t4kD0-d1HA" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {router.pathname.startsWith('/admin') ? '' :
          websiteStylesheets.map((stylesheet, index) => (
            <link key={index} rel="stylesheet" href={stylesheet} />
          ))
        }
      </Head>
      <div className={pageProps.pageClass}>
        <Top />                 
        <div className={`${myInter.className}`}>
          <main>
            {children}
          </main>
        </div>
        <Footer />

      </div>
    </>
  );
}
