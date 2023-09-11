import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import useWindowSize from "@/hooks/useWindowSize";
import { Button } from "@/components/atoms/components/Button/Button";
import SearchIcon from "@/components/atoms/icons/SearchIcon";
import clsx from "clsx";
import TextField from "@/components/atoms/components/TextField/TextField";

SwiperCore.use([Navigation, Pagination]);

export default function HeroSection() {
  const { t } = useTranslation("home");
  const hero_content = t("hero_section", { returnObjects: true });
  const { swiper_items } = hero_content;
  const [content, setContent] = useState(swiper_items?.[0]);
  const size = useWindowSize();
  const isDesktop = size.width > 1023;

  const slideIndexChange = (swiper) => {
    const newIdx = swiper.snapIndex;
    setContent(swiper_items[newIdx]);
  };

  if (!content) return null;
  return (
    <section className="bg-gradient-to-r from-[#b8e0ec80] from-0% via-[#f6f9e280] via-53% to-[#f3ecfc80] to-100%">
      <div
        className={clsx(
          "px-4 py-[60px] space-y-8 flex flex-col mx-auto max-w-[1366px] w-full",
          "lg:px-16 lg:py-10 lg:flex-row-reverse lg:items-center lg:space-y-0 lg:space-x-reverse lg:space-x-[30px] lg:h-[518px]",
          "xl:space-x-[92px] xl:space-x-reverse xl:px-32 xl:py-20 "
        )}
      >
        <div className={clsx("flex-1")}>
          <Swiper
            grabCursor
            slidesPerView={1}
            initialSlide={0}
            spaceBetween={20}
            pagination={{
              clickable: true,
              bulletActiveClass: "!bg-grayscale-20 !w-[60px]",
              bulletClass: "bg-grayscale-60 w-1.5 h-1.5 mx-1 rounded-full inline-block duration-300 linear",
            }}
            onSnapIndexChange={slideIndexChange}
            className={clsx(
              "w-full space-y-3 rounded-lg",
              "lg:max-w-[540px]",
              "lg:[&>div:nth-child(2)]:justify-end lg:[&>div:nth-child(2)>span]:inline-block",
              "[&>div:nth-child(2)]:flex [&>div:nth-child(2)]:max-w-[540px] [&>div:nth-child(2)]:w-full [&>div:nth-child(2)]:mx-auto [&>div:nth-child(2)]:justify-center"
            )}
          >
            {swiper_items.map((item) => (
              <SwiperSlide
                key={item.alt}
                className={clsx("lg:max-w-[540px] !w-full")}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="rounded-lg mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className={clsx(
            "flex-1 flex flex-col space-y-4 max-w-[540px] w-full h-full mx-auto justify-center",
            "xl:justify-end xl:py-[45px]"
          )}
        >
          <h2
            dangerouslySetInnerHTML={{ __html: content.title }}
            className={clsx(
              "text-2xl font-semibold text-grayscale-20 [&>span]:text-primary-50 w-full",
              "lg:max-w-[380px] lg:text-4xl lg:leading-[48px]"
            )}
          />
          <div className="relative w-full space-y-2">
            <form>
              <TextField
                placeHolder={hero_content.place_holder}
                iconStart={isDesktop ? <SearchIcon /> : null}
                className={clsx(
                  "bg-grayscale-100 w-full rounded-lg ",
                  "lg:[&>input]:!p-[29px] lg:[&>input]:!pl-[60px] lg:[&>input]:!text-base [&>input]:w-full [&>input]:!text-sm [&>input]:!p-[17px] [&>input]:placeholder:!text-grayscale-60",
                  "lg:[&>label]:!top-[29px] lg:[&>label]:!left-[29px]"
                )}
              />
              <Button
                iconEnd={isDesktop ? null : <SearchIcon color="#FFFFFF"/>}
                className={clsx(
                  "[&>span]:p-0 absolute right-[8px] top-[8px] select-none !p-2",
                  "lg:top-[24px] lg:right-[24px] lg:px-4"
                )}
              >
                {isDesktop ? "Tìm kiếm" : null}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
