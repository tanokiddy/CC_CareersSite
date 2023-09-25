import { get } from "@/utils";

export type HotJobType = {
  total: number;
  per_page: number;
  items: JobItemType[];
};

export type JobItemType = {
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

export const getHotJob = () => get<HotJobType>(process.env.NEXT_PUBLIC_JOB_API as string);
