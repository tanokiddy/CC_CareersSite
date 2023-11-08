import Head from "next/head";
import React from "react";

type HelmetPropsType ={
  title: string
  description?: string
  imageSrc?: string
}

const Helmet = ({title, description, imageSrc}: HelmetPropsType) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta property="title" content={title || "Cốc Cốc Careers"} />
      <meta
        property="image"
        content={imageSrc || "https://careers.coccoc.com/images/banner.png"}
      />
      <meta property="description" content={description || title} />
      <meta property="og:title" content={title || "Cốc Cốc Careers"} />
      <meta
        property="og:image"
        content={imageSrc || "https://careers.coccoc.com/images/banner.png"}
      />
      <meta property="og:description" content={description || title} />
      <meta name="description" content={description || title} />
    </Head>
  );
};

export default Helmet;
