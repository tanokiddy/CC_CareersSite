import { HomeView } from "@/views/Home";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsContext } from "next";
import {
  GlassdoorType,
  HotJobType,
  getGlassdoor,
  getHotJob,
} from "@/views/Home/stately";

export default function HomePage({
  hotJob,
  glassdoor,
}: {
  hotJob: HotJobType;
  glassdoor: GlassdoorType;
}) {
  return <HomeView hotJob={hotJob} glassdoor={glassdoor} />;
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
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
};
