import Layout from '@/components/layout/layout';
import React from 'react';
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import Aisdtvbanner from '@/components/website/aisdtv/asidtvbanner';
import Image from "next/image";
import LastStreamedPrograms from '@/components/website/aisdtv/laststreamedprograms';
const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  return (
    <Layout pageClass="" pageTitle="AISD TV">
      <Aisdtvbanner />
      <LastStreamedPrograms/>


     
    </Layout>
  )
}
