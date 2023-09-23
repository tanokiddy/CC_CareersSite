export type FormContentType = {
  title: string;
  btn_title: string;
  place_holder: string;
  images: ImageType;
  related_items: {
    title: string;
    items: FormItemsType[];
  };
};

export type FormItemsType = {
  desc: string;
  href: string;
  image: ImageType;
  title: string;
};

export type ImageType = {
  src: string;
  alt: string;
};
