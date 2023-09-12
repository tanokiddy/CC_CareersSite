import HeroSection from "./components/Hero/HeroSection";
import JobSection from "./components/Job/JobSection";
import BenefitSection from "./components/Benefit/BenefitSection";
import ProductSection from "./components/Product/ProductSection";
import FormSubmitSection from "./components/Form/FormSubmitSection";
import SearchGlassdoorSection from "./components/SearchGlassdoor/SearchGlassdoorSection";

export const HomeView = ({ hotJob, glassdoor }) => {
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
