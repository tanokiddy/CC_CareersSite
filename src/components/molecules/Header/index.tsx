import { ButtonLink } from "@/components/atoms/components/Button/Button";
import { MenuHeader } from "@/types/layout";
import { isActive } from "@/utils";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import LocaleSwitcher from "../LocaleSwitcher";

const Header = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  const { t } = useTranslation("header");
  const header: MenuHeader = t("menu_header", {
    returnObjects: true,
  });
  const { menu: menuHeader } = header;

  if (menuHeader && !menuHeader.length) return null;
  return (
    <div className="header-main h-15 flex justify-between items-center bg-grayscale-100">
      <div className="header-logo">
        <ButtonLink href="/" variant="transparent" className="py-[14px]">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/logo.svg" alt="header-logo" />
          }
        </ButtonLink>
      </div>
      <div className="header-menu flex space-x-2 items-center justify-end">
        {menuHeader?.map((item) => (
          <ButtonLink
            key={item.href}
            href={item.href}
            className={clsx(
              "p-2 !font-normal !text-grayscale-40",
              isActive(currentPath, item.href)
                ? "!text-primary-60 !font-semibold"
                : ""
            )}
            variant="transparent"
          >
            {item.title}
          </ButtonLink>
        ))}
        <LocaleSwitcher />
      </div>
    </div>
  );
};
export default Header;
