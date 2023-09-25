import { handleSearchItem } from "@/utils/BE";
import { getHotJob } from "@/views/Home/stately";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
const {search, per_page, page} = req.query
  if (search) {
    const data = await getHotJob();
    const searchedItem = handleSearchItem(data, search)
    res.status(200).json({ 
      _link: '',
      total: searchedItem.length,
      per_page: Number(per_page) || 5,
      items: searchedItem.slice(0, 5 * (Number(page) || 1))
     });
  } else {
    res.status(500).json({ status: "false", message: "not found" });
  }
}
