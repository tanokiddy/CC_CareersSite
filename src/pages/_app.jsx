import React from "react";
import { appWithTranslation } from "next-i18next";
import DefaultLayout from "@/layouts";
import './globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default appWithTranslation(MyApp);
