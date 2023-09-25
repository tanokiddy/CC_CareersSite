import React, { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import IconDot from "../Product/IconDot";
import clsx from "clsx";

import useWindowSize from "@/hooks/useWindowSize";
import {
  Button,
  ButtonLink,
} from "@/components/atoms/components/Button/Button";
import { SearchIcon } from "@/components/atoms/icons";
import AngleRight from "@/components/atoms/icons/AngleRight";
import TextField from "@/components/atoms/components/TextField/TextField";
import { SearchSectionType } from "@/types/Home";
import { JobItemType, SearchJob } from "../../stately";
import { getPath } from "@/utils";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchSection() {
  const { t } = useTranslation("home");
  const content: SearchSectionType = t("search_section", {
    returnObjects: true,
  });
  const size = useWindowSize();
  const isDesktop = size.width > 1023;

  const [path, setPath] = useState<string>('')
  const [searchInput, setSearchInput] = useState<string>("");
  const [dataSearch, setDataSearch] = useState<JobItemType[] | []>([]);
  const debouncedValue = useDebounce<string>(searchInput, 200)
  

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  


  const fetchSearchApi = async () => {
    if (searchInput.trim() !== "") {
      const data = await SearchJob(searchInput, path);
      setDataSearch(data.items);
    } else {
      setDataSearch([]);
    }
  };

  useEffect(() => {
    setPath(getPath(window.location.href))
  },[])

  useEffect(() => {
    fetchSearchApi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[debouncedValue])

  if (!content) return null;
  return (
    <section className="space-y-6">
      <div
        className={clsx(
          "space-y-10 flex flex-col",
          "lg:flex-row-reverse lg:space-y-0 lg:space-x-reverse lg:space-x-[30px] lg:items-start",
          "xl:space-x-[120px] xl:space-x-reverse"
        )}
      >
        <div className="relative space-y-2 md:w-1/2 lg:flex-1 lg:w-full md:space-y-2 lg:space-y-2]">
          <form onSubmit={handleOnSubmit}>
            <TextField
              className={clsx(
                "placeholder:text-grayscale-60 bg-grayscale-100 rounded-lg [&>input]:!p-[13px] text-[16px] leading-[24px]",
                "md:[&>input]:p-[15px]"
              )}
              placeHolder={content.place_holder}
              onChange={handleOnSearch}
            />
            <Button
              iconEnd={<SearchIcon />}
              className={clsx(
                "!p-2 [&>span]:p-0 absolute right-[6.5px] !top-[6.5px]",
                "md:top-[8px] md:right-[8px]"
              )}
            />
          </form>
          {dataSearch.length ? (
            <div
              className={clsx(
                "absolute !top-[52px] right-0 py-3 rounded-lg w-full bg-grayscale-100 space-y-2 z-10 flex flex-col items-start",
                "lg:top-[84px]"
              )}
            >
              {dataSearch?.map((item) => (
                <ButtonLink
                  variant="transparent"
                  href={`/job/${item.job_slug}`}
                  target="_blank"
                  className={clsx(
                    "py-2 px-4 text-base !text-grayscale-30 !font-normal [&>span]:p-0 hover:!text-primary-60 active:!text-primary-40"
                  )}
                  key={item.job_slug}
                >
                  {item.title}
                </ButtonLink>
              ))}
            </div>
          ) : null}
        </div>
        <h2 className="text-[28px] leading-9 text-grayscale-20 lg:flex-1">
          {content.title}
        </h2>
      </div>
      <div
        className={clsx(
          "space-y-2 flex flex-col",
          "lg:flex-row lg:space-y-3 lg:flex-wrap"
        )}
      >
        {content?.departments?.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "flex flex-col items-start space-y-2",
              "md:flex-row md:space-y-0"
            )}
          >
            {item.department.map((department, index) => (
              <ButtonLink
                variant="transparent"
                iconEnd={isDesktop ? <IconDot /> : <AngleRight />}
                className={clsx(
                  "!p-0 [&>span]:p-0 text-[18px] leading-[26px] !text-grayscale-40 font-semibold",
                  "hover:!text-primary-40 active:!text-primary-30",
                  "lg:text-2xl",
                  "xl:text-[28px] xl:leading-9 ",
                  "lg:[&>svg]:m-[10px] lg:[&>svg]:ml-[18px]",
                  "[&:nth-child(3)]:!ml-0 [&:nth-child(5)]:!ml-0"
                )}
                key={index}
              >
                {department}
              </ButtonLink>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
