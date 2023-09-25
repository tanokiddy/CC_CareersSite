import React from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { ButtonLink } from "@/components/atoms/components/Button/Button";
import { FormContentType } from "@/types/Home";

export default function RelateSection({
  content,
}: {
  content: FormContentType;
}) {
  const { t } = useTranslation("home");
  const { related_items } = content;

  if (!related_items) return null;
  return (
    <section
      className={clsx(
        "px-4 py-[60px] space-y-6 w-full",
        "lg:max-w-[1366px] lg:px-32 lg:py-20 lg:mx-auto"
      )}
    >
      <h2 className="text-[28px] leading-9 text-grayscale-20">
        {related_items.title}
      </h2>
      <div
        className={clsx(
          "space-y-6 flex flex-col",
          "md:flex-row md:space-y-0 md:space-x-[30px]"
        )}
      >
        {related_items.items.map((item, index) => (
          <ButtonLink
            variant="transparent"
            key={index}
            // href={item.href}
            target="_blank"
            className={clsx(
              "flex-1 p-0 !w-full h-full group",
              "!p-0 [&>span]:space-y-4 [&>span]:w-full"
            )}
          >
            <div className="space-y-4 ">
              <div className="overflow-hidden rounded-lg">
                {
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="object-cover w-full h-auto transition-all duration-300 ease-in-out group-hover:scale-[1.1]"
                  />
                }
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold transition-all duration-300 ease-in-out text-grayscale-30 group-hover:text-primary-50">
                  {item.title}
                </h3>
                <p className="text-sm font-normal text-grayscale-40">
                  {item.desc}
                </p>
              </div>
            </div>
          </ButtonLink>
        ))}
      </div>
    </section>
  );
}
