import { HomeView } from "@/views/Home";
import { getGlassdoor } from "@/views/Home/stately/GetGlassdoor";
import { getHotJob } from "@/views/Home/stately/GetHotJob";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

export default function HomePage({
  hotJob,
  glassdoor,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
