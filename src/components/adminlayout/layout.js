import Top from "./top";
import Left from "./left";
import Head from "next/head";
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'

const adminStylesheets = ['/styles/admin/filtercomponent.css', '/styles/admin/leftmenu.css', '/styles/admin/nstyle.css', '/styles/admin/skstyle.css', '/styles/admin/systyle.css'];

const myInter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: "swap",
})

export default function AdminLayout({ children, ...pageProps }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to Claremont Graduate University</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {router.pathname.startsWith('/admin') &&
          adminStylesheets.map((stylesheet, index) => (
            <link key={index} rel="stylesheet" href={stylesheet} />
          ))   
        }
      </Head>
      <>
        <Top topTab={pageProps.topTab} pageTitle={pageProps.pageTitle} pageName={pageProps.pageName} />         
        <Left />
        <div className={`${myInter.className} ${pageProps.leftPadding ? 'pl-[0px] pr-[0px]' : 'pl-[129px] pr-[32px] xl:pr-[1.667vw]'}  pb-6 xl:pb-[1.25vw] dark:bg-[#0F1013]`}>
          <main>
            {children}
          </main>
        </div>
      </>
    </>
  );
}
