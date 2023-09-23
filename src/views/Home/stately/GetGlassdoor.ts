import { get } from "@/utils/fetchAPI";

export type GlassdoorType = {
  glassdoor_approve_of_ceo: number;
  glassdoor_rating: number;
  glassdoor_recommend_to_a_friend: number;
};

export const getGlassdoor = () => get<GlassdoorType>(process.env.NEXT_PUBLIC_GD_API as string);
