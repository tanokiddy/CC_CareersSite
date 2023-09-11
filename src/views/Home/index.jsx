import HeroSection from "./components/Hero/HeroSection";
// import BenefitSection from "./components/Benefit/BenefitSection";
// import FormSubmitSection from "./components/Form/FormSubmitSection";
// import JobSection from "./components/Job/JobSection";
// import ProductSection from "./components/Product/ProductSection";
// import SearchGlassdoorSection from "./components/SearchGlassdoor/SearchGlassdoorSection";

export const HomeView = ({ hotJob, glassdoor }) => {
  return (
    <>
      <HeroSection />
      {/* <JobSection hotJob={hotJob} /> */}
      {/* <BenefitSection /> */}
      {/* <ProductSection /> */}
      {/* <FormSubmitSection /> */}
      {/* <SearchGlassdoorSection glassdoor={glassdoor} /> */}
    </>
  );
};
