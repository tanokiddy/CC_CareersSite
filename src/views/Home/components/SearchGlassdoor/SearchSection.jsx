import React from "react";
import { useTranslation } from "next-i18next";
import IconDot from "../Product/IconDot";
import clsx from "clsx";

import useWindowSize from "@/hooks/useWindowSize";
import { Button, ButtonLink } from "@/components/atoms/components/Button/Button";
import { SearchIcon } from "@/components/atoms/icons";
import AngleRight from "@/components/atoms/icons/AngleRight";
import TextField from "@/components/atoms/components/TextField/TextField";

export default function SearchSection() {
  const { t } = useTranslation("home");
  const content = t("search_section", { returnObjects: true });
  const size = useWindowSize();
  const isDesktop = size.width > 1023;
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
        <div className="relative md:w-1/2 lg:flex-1 lg:w-full">
          <TextField
            className={clsx(
              "placeholder:text-grayscale-60 bg-grayscale-100 rounded-lg [&>input]:p-[13px]",
              "md:[&>input]:p-[15px]"
            )}
            placeholder={content.place_holder}
          />
          <Button
            iconEnd={<SearchIcon />}
            className={clsx(
              "!p-2 [&>span]:p-0 absolute right-[6.5px] !top-[6.5px]",
              "md:top-[8px] md:right-[8px]"
            )}
          />
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
