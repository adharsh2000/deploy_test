import React, { useEffect } from 'react';
import { Montserrat } from "@next/font/google";

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
  });

const TranslateComponent = ({ lang }) => {
  useEffect(() => {
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    googleTranslateScript.async = true;
    document.body.appendChild(googleTranslateScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: lang }, 'google_translate_element');
    };

    return () => {
      // Cleanup when the component is unmounted
      document.body.removeChild(googleTranslateScript);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className={myMontserrat.className} id="google_translate_element">
      {'.'}
    </div>
  );
};

export default TranslateComponent;