import { get } from "@/utils/fetchAPI";

export type HotJobType = {
  glassdoor_approve_of_ceo: number;
  glassdoor_rating: number;
  glassdoor_recommend_to_a_friend: number;
};

export const getHotJob = () => get<HotJobType>(process.env.NEXT_PUBLIC_JOB_API as string);
