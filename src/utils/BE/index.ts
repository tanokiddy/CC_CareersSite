import { HotJobType, JobItemType } from "@/views/Home/stately";

export const handleSearchItem = (searchItem: HotJobType, searchParams: string | string[]) => {
  return searchItem.items.filter(
    (item) =>
      item["job_category"]
        .toLocaleLowerCase()
        .includes(searchParams as string) ||
      item["title"].toLocaleLowerCase().includes(searchParams as string)
  );
}
