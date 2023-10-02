import React from "react";
import { useTranslation } from "next-i18next";
import RelateSection from "./RelateSection";
import clsx from "clsx";
import { Button } from "@/components/atoms/components/Button/Button";
import TextField from "@/components/atoms/components/TextField/TextField";
import { FormContentType } from "@/types/Home";

export default function FormSubmitSection() {
  const { t } = useTranslation("home");
  const content: FormContentType = t("form_section", { returnObjects: true });

  if (!content) return null;
  return (
    <>
      <section
        className={clsx(
          "px-4 py-[60px] flex mx-auto w-full",
          "lg:px-[128px] py-[80px] lg:max-w-[1366px]"
        )}
      >
        <div
          className={clsx(
            "rounded-lg p-0 flex flex-col-reverse  bg-gradient-to-r from-[#97C93D] to-[#4FBA69]",
            "md:flex-row "
          )}
        >
          <div className="flex-1 mx-auto">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={content?.images?.src}
                alt={content?.images?.alt}
                className={clsx("object-cover h-full select-none", "md:w-auto md:h-full")}
              />
            }
          </div>
          <div
            className={clsx(
              "p-6 space-y-4 flex-1 flex flex-col h-full",
              "md:p-0 md:justify-center md:px-[30px] md:h-[300px]",
              "lg:px-[60px]  lg:max-w-[50%] lg:w-full"
            )}
          >
            <h2
              className={clsx(
                "text-2xl font-semibold text-grayscale-100",
                "lg:text-[28px] lg:leading-9 "
              )}
            >
              {content.title}
            </h2>
            <div
              className={clsx(
                "space-y-2 flex flex-col",
                "md:flex-row md:space-y-0 md:space-x-2"
              )}
            >
              <TextField
                required
                
                placeHolder={content.place_holder}
                className={clsx(
                  "placeholder:text-grayscale-60 bg-grayscale-100 rounded-lg [&>input]:!p-[13px]",
                  "md:[&>input]:!p-[15px]"
                )}
              />
              <Button variant="orangeGradient" className="w-full md:w-fit">
                {content.btn_title}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <RelateSection content={content}/>
    </>
  );
}
