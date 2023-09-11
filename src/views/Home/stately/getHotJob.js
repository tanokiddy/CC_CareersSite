import { get } from "@/utils/fetchAPI";

export const getHotJob = async () => {
  return get(process.env.NEXT_PUBLIC_JOB_API);
};
