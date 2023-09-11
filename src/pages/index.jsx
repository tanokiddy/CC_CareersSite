import { HomeView } from "@/views/Home";
import { getGlassdoor } from "@/views/Home/stately/getGlassdoor";
import { getHotJob } from "@/views/Home/stately/getHotJob";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function HomePage({ hotJob, glassdoor }) {
  return (
    <HomeView hotJob={hotJob} glassdoor={glassdoor} />
    // <></>
  );
}

export async function getStaticProps({ locale }) {
  const hotJob = await getHotJob();
  const glassdoor = await getGlassdoor();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      hotJob,
      glassdoor,
    },
  };
}
