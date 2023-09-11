import { ButtonLink } from "@coccoc-ui/react";
import { cx } from "@coccoc-ui/utils";
import React from "react";
import { useTranslation } from "next-i18next";

export default function RelateSection() {
  const { t } = useTranslation("home");
  const content = t("form_section", { returnObjects: true });
  const { related_items } = content;

  if (!related_items) return null;
  return (
    <section
      className={cx(
        "px-4 py-[60px] space-y-6 w-full",
        "lg:max-w-[1366px] lg:px-32 lg:py-20 lg:mx-auto"
      )}
    >
      <h2 className="text-[28px] leading-9 text-grayscale-20">
        {related_items.title}
      </h2>
      <div
        className={cx(
          "space-y-6 flex flex-col",
          "md:flex-row md:space-y-0 md:space-x-[30px]"
        )}
      >
        {related_items.items.map((item, index) => (
          <ButtonLink
            variant="transparent"
            key={index}
            href={item.href}
            target="_blank"
            className={cx(
              "flex-1 p-0 w-full h-full group",
              "[&>span]:p-0 [&>span]:space-y-4 [&>span]:w-full"
            )}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="object-cover w-full h-auto transition-all duration-300 ease-in-out group-hover:scale-[1.1]"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-grayscale-30 transition-all duration-300 ease-in-out group-hover:text-primary-50">
                {item.title}
              </h3>
              <p className="text-sm text-grayscale-40 font-normal">{item.desc}</p>
            </div>
          </ButtonLink>
        ))}
      </div>
    </section>
  );
}
