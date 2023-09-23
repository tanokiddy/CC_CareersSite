import { get } from "@/utils/fetchAPI";

export type GlassdoorType = {
  total: number;
  per_page: number;
  items: GlassdoorItemType[];
};

export type GlassdoorItemType = {
  id: number;
  title: string;
  excerpt: string;
  department: string;
  location: string;
  salary: string;
  job_time: string;
  job_category: string;
  job_slug: string;
};

export const getGlassdoor = () => get<GlassdoorType>(process.env.NEXT_PUBLIC_GD_API as string);
