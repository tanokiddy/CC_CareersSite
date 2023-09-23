import HeroSection from "./components/Hero/HeroSection";
import JobSection from "./components/Job/JobSection";
import BenefitSection from "./components/Benefit/BenefitSection";
import ProductSection from "./components/Product/ProductSection";
import FormSubmitSection from "./components/Form/FormSubmitSection";
import SearchGlassdoorSection from "./components/SearchGlassdoor/SearchGlassdoorSection";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "@/pages";

export const HomeView = ({
  hotJob,
  glassdoor,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <HeroSection />
      <JobSection hotJob={hotJob} />
      <BenefitSection />
      <ProductSection />
      <FormSubmitSection />
      <SearchGlassdoorSection glassdoor={glassdoor} />
    </>
  );
};
