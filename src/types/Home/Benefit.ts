export type BenefitContentType = {
  title: string;
  desc: string;
  images: BenefitImageType[];
};

export type BenefitImageType = {
  title: string;
  src: string;
  alt: string;
  btn_title: string;
};
