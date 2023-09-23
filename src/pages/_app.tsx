import React from "react";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import DefaultLayout from "@/layouts";
import "./globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default appWithTranslation(MyApp);
