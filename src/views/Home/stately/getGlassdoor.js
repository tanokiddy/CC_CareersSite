import { get } from "@/utils/fetchAPI";

export const getGlassdoor = async () => {
  return get(process.env.NEXT_PUBLIC_GD_API)
};
