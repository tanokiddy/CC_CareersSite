export type GlassdoorSectionType = {
  title: string;
  btn_title: string;
  image: string;
  alt: string;
};

export type SearchSectionType = {
  title: string;
  place_holder: string;
  btn_title: string;
  departments: DepartmentItemType[];
};

export type DepartmentItemType = {
  department: string[];
};
