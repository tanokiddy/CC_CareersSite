import { ButtonLink } from "@/components/atoms/components/Button/Button";
import { MenuHeaderItem } from "@/types/layout";
import { isActive } from "@/utils";
import clsx from "clsx";
import React from "react";

const MenuDesktop = ({
  menuHeader,
  currentPath,
}: {
  menuHeader: MenuHeaderItem[];
  currentPath: string;
}) => {
  return menuHeader?.map((item) => (
    <ButtonLink
      key={item.href}
      href={item.href}
      className={clsx(
        "p-2 !font-normal !text-grayscale-40 transition-all duration-200",
        "hover:!text-primary-60",
        isActive(currentPath, item.href)
          ? "!text-primary-60 !font-semibold"
          : ""
      )}
      variant="transparent"
    >
      {item.title}
    </ButtonLink>
  ));
};

export default MenuDesktop;
