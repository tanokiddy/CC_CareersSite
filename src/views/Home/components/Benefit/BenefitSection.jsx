import React from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { Button, Dialog, Tabs } from "@coccoc-ui/react";
import { Close } from "@coccoc-ui/icons";

export default function BenefitSection() {
  const { t } = useTranslation("home");
  const content = t("benefit_section", { returnObjects: true });
  if (!content) return null;
  return (
    <section
      className={clsx(
        "px-4 py-[60px] space-y-6 max-w-[1366px] w-full mx-auto",
        "lg:px-32 lg:py-20"
      )}
    >
      <div className="flex flex-col space-y-4">
        <h2
          className={clsx(
            "text-[28px] leading-9 text-grayscale-20",
            "md:text-center",
            "lg:text-[36px] leading-[48px]"
          )}
        >
          {content.title}
        </h2>
        <div
          className={clsx(
            "text-sm text-grayscale-30 mx-auto",
            "md:text-center md:max-w-[730px] md:w-full",
            "lg:text-base"
          )}
          dangerouslySetInnerHTML={{ __html: content.desc }}
        />
      </div>
      <div className={clsx("flex flex-col", "md:flex-row md:space-x-[81px]")}>
        {content.images.map((item) => (
          <div
            className={clsx(
              "space-y-4 flex-1 group transition-all duration-300 ease-in-out",
              "hover:scale-[1.2]"
            )}
            key={item.alt}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={clsx("h-auto max-w-[316px] w-full object-cover mx-auto")}
            />
            <div
              className={clsx(
                "text-center flex flex-col space-y-2",
                "md:space-y-0"
              )}
            >
              <p className="font-semibold line-clamp-1 text-[18px] leading-[26px] text-grayscale-30">
                {item.title}
              </p>
              <Dialog.Root>
                <Dialog.Trigger
                  className={clsx(
                    "w-fit px-4 py-2 text-sm font-semibold text-primary-60 mx-auto border-[1px] border-solid border-primary-60 rounded-lg outline-none focus-visible:outline-none",
                    "md:border-none md:p-0 "
                  )}
                >
                  {item.btn_title}
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay />
                  <Dialog.Content
                    className={clsx(
                      "md:max-w-[881px] md:w-full md:min-h-[484px] md:px-[50px] md:py-[68px]"
                    )}
                  >
                    <Dialog.Close
                      className={clsx("absolute", "md:top-5 md:right-5")}
                    >
                      <Button
                        iconEnd={<Close />}
                        className={clsx(
                          "text-base text-grayscale-30 p-0 [&>span]:p-0 font-normal [&>svg]:transition-all [&>svg]:duration-300 [&>svg]:ease-in-out",
                          "[&>span]:hover:text-grayscale-30 [&>svg]:hover:rotate-[-180deg] [&>svg]:hover:text-grayscale-30"
                        )}
                        variant="transparent"
                      >
                        Đóng
                      </Button>
                    </Dialog.Close>
                    <Tabs.Root defaultValue={0}>
                      <Tabs.List
                        className={clsx(
                          "w-full rounded-lg !border-b-0 !outline-1 !outline-primary-50 !outline overflow-hidden",
                          "md:h-[46px]"
                        )}
                      >
                        {content.dialog.map((item, index) => (
                          <Tabs.Trigger
                            key={index}
                            value={index}
                            className={clsx(
                              "w-full text-center text-grayscale-50 font-semibold !border-b-0 !ml-0",
                              "md:text-[16px] md:leading-[22px]",
                              "data-[state=active]:bg-primary-50 data-[state=active]:!text-grayscale-100",
                              "data-[state=inactive]:hover:bg-primary-90 data-[state=inactive]:hover:text-grayscale-30"
                            )}
                          >
                            {item.title}
                          </Tabs.Trigger>
                        ))}
                      </Tabs.List>
                      <div className="md:mt-6">
                        {content.dialog.map((item, index) => (
                          <Tabs.Content value={index} key={index}>
                            <ul className="marker:text-primary-50 list-disc marker:text-[24px] pl-8 space-y-3">
                              {item.desc.map((desc) => (
                                <li
                                  key={desc}
                                  className="text-base text-grayscale-30"
                                >
                                  {desc}
                                </li>
                              ))}
                            </ul>
                          </Tabs.Content>
                        ))}
                      </div>
                    </Tabs.Root>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
