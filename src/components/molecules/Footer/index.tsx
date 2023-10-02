import Link from "next/link";
import React from "react";
import { t } from "./FooterContent";

const Footer = () => {
  return (
    <footer className="bg-grayscale-10 pt-[30px] pb-20 md:py-20 text-grayscale-90 px-4">
      <div className="mx-4 max-w-max md:max-w-[1110px] md:mx-auto">
        <div className="max-w-max cursor-pointer">
          <Link href="/" legacyBehavior>
            <a rel="nofollow" target="_blank">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/images/logo_coccoc_careers_light.png"
                  alt="cốc cốc"
                />
              }
            </a>
          </Link>
        </div>
        <div className="mt-12 flex flex-col gap-y-10 md:flex-row md:gap-32 justify-center">
          <div className="w-full md:w-[50%]">
            <div>
              <div className="text-lg/[27px] font-semibold">
                {t.info_main.title}
              </div>
              {t.info_main.info.map((info, index) => (
                <div key={index} className="flex gap-2 mt-3">
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={info.icon}
                      alt="icon"
                      width="20"
                      height="20"
                      className="self-start"
                    />
                  }
                  <span className="text-grayscale-60 font-normal text-base">
                    {info.content}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <div className="text-lg/[27px] font-semibold">
                {t.info_branch.title}
              </div>
              {t.info_branch.info.map((info, index) => (
                <div key={index} className="flex gap-2 mt-3">
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={info.icon}
                      alt="icon"
                      width="20"
                      height="20"
                      className="self-start"
                    />
                  }
                  <span className="text-grayscale-60 font-normal text-base">
                    {info.content}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <div>
              <div className="text-lg/[27px] font-semibold">
                {t.about.title}
              </div>
              <Link href={t.about.link} legacyBehavior>
                <a
                  rel="nofollow"
                  target="_blank"
                  className="flex gap-2 mt-3 hover:text-primary-default text-grayscale-60 font-normal text-base"
                >
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={t.about.icon} width="20" height="20" alt="web" />
                  }
                  {t.about.name}
                </a>
              </Link>
            </div>
            <div className="mt-10">
              <div className="text-lg/[27px] font-semibold">
                {t.stay_in_touch.title}
              </div>
              <div className="flex gap-6 mt-3">
                {t.stay_in_touch.icons.map((icon, index) => (
                  <Link key={index} href={icon.link} legacyBehavior>
                    <a rel="nofollow" target="_blank">
                      {
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={icon.img}
                          width="32"
                          height="32"
                          alt="social"
                        />
                      }
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
