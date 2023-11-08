import HeroSection from "./components/Hero/HeroSection";
import JobSection from "./components/Job/JobSection";
import BenefitSection from "./components/Benefit/BenefitSection";
import ProductSection from "./components/Product/ProductSection";
import FormSubmitSection from "./components/Form/FormSubmitSection";
import SearchGlassdoorSection from "./components/SearchGlassdoor/SearchGlassdoorSection";
import { GlassdoorType, HotJobType } from "./stately";
import Helmet from "@/components/molecules/Helmet";

const helmetInfo = {
  title: "Cốc Cốc Careers",
  description:
    "Officially launched in May 2013, Cốc Cốc is a browser and search engine developed by Vietnamese developers. Cốc Cốc’s vision is to become the gateway to the Internet used every day by most Vietnamese in 2024",
  imageSrc: "https://careers.coccoc.com/images/banner.png",
};

export const HomeView = ({
  hotJob,
  glassdoor,
}: {
  hotJob: HotJobType;
  glassdoor: GlassdoorType;
}) => {
  return (
    <>
      <Helmet
        title={helmetInfo.title}
      />
      <HeroSection />
      <JobSection hotJob={hotJob} />
      <BenefitSection />
      <ProductSection />
      <FormSubmitSection />
      <SearchGlassdoorSection glassdoor={glassdoor} />
    </>
  );
};
