import { HomeView } from "@/views/Home";
import { getGlassdoor } from "@/views/Home/stately/GetGlassdoor";
import { getHotJob } from "@/views/Home/stately/GetHotJob";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextPageContext } from "next";
import { HotJobType, GlassdoorType } from "@/views/Home/stately";

export type HomePageProps = {
  hotJob: HotJobType;
  glassdoor: GlassdoorType;
};

export default function HomePage({ hotJob, glassdoor }: HomePageProps) {
  return <HomeView hotJob={hotJob} glassdoor={glassdoor} />;
}

export async function getStaticProps(context: NextPageContext) {
  const { locale } = context;
  const hotJob = await getHotJob();
  const glassdoor = await getGlassdoor();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["home"])),
      hotJob,
      glassdoor,
    },
  };
}
