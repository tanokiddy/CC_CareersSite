import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";
import SwiperCore, { Pagination, Navigation } from "swiper";
import clsx from "clsx";
import { Button, ButtonLink } from "@/components/atoms/components/Button/Button";
import { ArrowLeft, ArrowRight } from "@/components/atoms/icons";

import IconButtonMore from "./IconButtonMore";

SwiperCore.use([Pagination, Navigation]);

export default function ProductSection() {
  const { t } = useTranslation("home");
  const product_intro = t("product_section", { returnObjects: true });
  const { swiper_items } = product_intro;
  const [content, setContent] = useState(swiper_items?.[0]);

  const slideIndexChange = (swiper) => {
    const newIdx = swiper.snapIndex;
    setContent(swiper_items[newIdx]);
  };

  if (!content) return null;
  return (
    <section
      className={clsx(
        "px-4 py-[60px] space-y-4 flex flex-col w-full mx-auto",
        "md:flex-row md:space-x-[30px] md:space-y-0 md:min-h-[420px]",
        "lg:px-32 lg:py-20 lg:max-w-[1366px]"
      )}
    >
      <Swiper
        grabCursor
        // centeredSlides
        spaceBetween={20}
        // initialSlide={0}
        slidesPerView={1}
        navigation={{
          disabledClass: "disabled",
          nextEl: ".button-next-product",
          prevEl: ".button-prev-product",
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "bg-grayscale-30",
          bulletClass: "bg-grayscale-100 w-2 h-2 mx-1.5 rounded-full",
        }}
        onSnapIndexChange={slideIndexChange}
        className={clsx(
          "relative overflow-hidden rounded-lg",
          "[&>div:nth-child(2)]:absolute [&>div:nth-child(2)]:bottom-0 [&>div:nth-child(2)]:z-10 [&>div:nth-child(2)]:py-3 [&>div:nth-child(2)]:left-[50%] [&>div:nth-child(2)]:translate-x-[-50%]",
          "md:flex-[3] max-w-[768px] w-full"
        )}
      >
        {swiper_items?.map((item) => (
          <SwiperSlide key={item.alt}>
            <img
              src={item.src}
              alt={item.alt}
              className={clsx("object-cover rounded-lg h-full")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={clsx(
          "w-full flex flex-col mx-auto relative min-h-[266px] justify-between",
          "md:flex-[2] md:space-y-0"
        )}
      >
        <div className="space-y-2 md:space-y-4">
          <h2 className="text-[28px] leading-9 text-grayscale-20">
            {content?.title}
          </h2>
          <div
            className={clsx(
              "flex flex-col p-0 items-start space-y-reverse space-y-2",
              "md:flex-col-reverse md:space-y-reverse md:space-y-4"
            )}
          >
            <ButtonLink
              variant="transparent"
              className="!p-0 [&>span]:px-0"
              iconEnd={<IconButtonMore />}
              href="https://coccoc.com"
              target="_blank"
            >
              {content.button_more}
            </ButtonLink>
            <p className="text-sm text-grayscale-40">{content?.desc}</p>
          </div>
        </div>
        <div className="flex justify-center ">
          <Button className="button-prev-product !p-2 [&>span]:!p-0 !m-[7px] !rounded-full">
            <ArrowLeft />
          </Button>
          <Button className="button-next-product !p-2 [&>span]:!p-0 !m-[7px] !rounded-full">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
