import { get } from "@/utils";
import { HotJobType } from "./GetHotJob";

export const SearchJob = (
  query: string,
  path: string
) =>{
  const params = {
    search: query,
    per_page: 5,
    page: 1
  }
  return get<HotJobType>(`${path}/api/search`, params);
}
