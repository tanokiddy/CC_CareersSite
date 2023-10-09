import { ButtonLink } from "@/components/atoms/components/Button/Button";
import { MenuHeader } from "@/types/layout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LocaleSwitcher from "../LocaleSwitcher";
import useWindowSize from "@/hooks/useWindowSize";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import clsx from "clsx";
import { isActive } from "@/utils";

const Header = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  const [isOpen, setOpen] = useState<boolean>(false);

  const size = useWindowSize();
  const isDesktop = size.width > 1110;

  const { t } = useTranslation("header");
  const header: MenuHeader = t("menu_header", {
    returnObjects: true,
  });
  const { menu: menuHeader } = header;

  useEffect(() => {
    if (isDesktop) {
      setOpen(false);
    }
    if (isOpen) {
      document.body.style.position = "sticky";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [isOpen, isDesktop]);

  if (Array.isArray(menuHeader) && !menuHeader.length) return null;
  return (
    <header
      className={clsx(
        "header-main h-15 flex justify-between items-center bg-grayscale-100 relative w-full"
      )}
    >
      <div className="header-logo">
        <ButtonLink href="/" variant="transparent" className="py-[14px]">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/logo.svg" alt="header-logo" />
          }
        </ButtonLink>
      </div>
      <div className="header-menu flex space-x-2 items-center justify-end">
        {isDesktop ? (
          <>
            <MenuDesktop currentPath={currentPath} menuHeader={menuHeader} />
            <LocaleSwitcher />
          </>
        ) : (
          <MenuMobile isOpen={isOpen} setOpen={setOpen} />
        )}
      </div>
      <div
        className={clsx(
          "absolute top-15 w-full bg-grayscale-100 flex-col justify-center space-y-15 items-center z-[98] overflow-hidden",
          isOpen ? "animate-slideDown flex" : "animate-slideUp hidden",
          isDesktop && "animate-slideUp"
        )}
      >
        <div className={clsx("flex flex-col items-center justify-center space-y-2")}>
          {menuHeader?.map((item) => (
            <ButtonLink
              key={item.title}
              href={item.href}
              variant="transparent"
              className={clsx(
                "!text-grayscale-20 !font-normal transition-all duration-200",
                "hover:!text-primary-60",
                isActive(currentPath, item.href)
                  ? "!text-primary-60 !font-semibold"
                  : ""
              )}
            >
              {item.title}
            </ButtonLink>
          ))}
        </div>
        <LocaleSwitcher align="center" />
      </div>
    </header>
  );
};
export default Header;
