import React from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import IconStar from "./IconStar";
import IconButtonMore from "../Product/IconButtonMore";
import { ButtonLink } from "@/components/atoms/components/Button/Button";
import { GlassdoorType } from "../../stately";
import { GlassdoorSectionType } from "@/types/Home";

export default function GlassdoorSection({
  glassdoor,
}: {
  glassdoor: GlassdoorType;
}) {
  const { t } = useTranslation("home");
  const content: GlassdoorSectionType = t("glassdoor_section", {
    returnObjects: true,
  });

  if (!content) return null;
  return (
    <section className="space-y-6 bg-grayscale-95">
      <div>
        <h2 className="text-[28px] leading-9 text-grayscale-20">
          {content.title}
        </h2>
        <ButtonLink
          variant="transparent"
          className="!p-0 [&>span]:p-0"
          iconEnd={<IconButtonMore />}
          href="https://www.glassdoor.com/Reviews/C%E1%BB%91c-C%E1%BB%91c-Reviews-E887996.htm"
          target="_blank"
        >
          {content.btn_title}
        </ButtonLink>
      </div>
      {glassdoor ? (
        <div
          className={clsx(
            "max-w-[343px] w-full space-y-6 flex flex-col",
            "xl:max-w-none xl:space-y-0 xl:flex-row xl:space-x-12"
          )}
        >
          <div className="max-w-[341px] justify-center rounded-lg flex items-center space-x-3 px-8 py-3 border-dashed border-[2px] border-grayscale-80 bg-gradient-to-b from-[#FF9838] to-[#FF6438] bg-clip-text text-[transparent]">
            <span className="text-[36px] leading-[48px] font-semibold">
              {glassdoor?.glassdoor_rating?.toFixed(1)}
            </span>
            <div className="flex space-x-3">
              {Array.from({ length: 5 }, (_, i) => i + 1).map((key) => (
                <IconStar key={key} />
              ))}
            </div>
          </div>
          <div className={clsx("space-x-6 flex flex-wrap", "lg:space-x-0")}>
            <div
              className={clsx(
                "flex space-x-3 flex-1 items-center max-w-[192px] w-full"
              )}
            >
              <span className="text-primary-50 text-[28px] leading-9 font-semibold">
                {glassdoor.glassdoor_recommend_to_a_friend}%
              </span>
              <span
                className={clsx(
                  "text-sm text-grayscale-30 font-semibold",
                  "lg:text-base lg:leading-[22px]"
                )}
              >
                Recommend to a Friend
              </span>
            </div>
            <div className="flex space-x-3 flex-1 items-center max-w-[156px] w-full">
              <span className="text-primary-50 text-[28px] leading-9 font-semibold">
                {glassdoor.glassdoor_approve_of_ceo}%
              </span>
              <span
                className={clsx(
                  "text-sm text-grayscale-30 font-semibold",
                  "lg:text-base lg:leading-[22px]"
                )}
              >
                Approve of CEO
              </span>
            </div>
          </div>
          <div className={clsx("flex space-x-3", "lg:items-center")}>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={content.image}
                alt={content.alt}
                className="w-12 h-12"
              />
            }
            <div className="flex flex-col">
              <span className="text-base font-semibold text-grayscale-30">
                Nguyễn Vũ Anh
              </span>
              <span className="text-base text-grayscale-50">Cốc Cốc CEO</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
