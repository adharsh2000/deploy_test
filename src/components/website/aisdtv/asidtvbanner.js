import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';


const myInter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: "swap",
})
const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

function Aisdtvbanner() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  return (
    <>
    <div>Banner</div>
    </>
  );
}

export default Aisdtvbanner;
