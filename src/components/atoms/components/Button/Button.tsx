import clsx from "clsx";
import React from "react";

type ButtonType = {
  iconStart?: JSX.Element | null;
  iconEnd?: JSX.Element | null;
  children?: JSX.Element | string | null;
  className: string;
  variant?: 'green' | 'transparent' | 'orangeGradient';
  size?: 'md' | 'lg';
  href?: string
  target?: '_self' | '_blank'
};

const btn_variant = {
  green: "bg-primary-60 hover:bg-primary-40 active:bg-primary-30",
  transparent:
    "!bg-transparent text-primary-60 hover:text-primary-40 active:text-primary-30",
  orangeGradient:
    "bg-gradient-to-b from-[#FF9838] from-0% to-[#FF6438] to-100% hover:from-[#de471d] hover:to-[#de471d] active:from-[#b82901] active:to-[#b82901] font-semibold",
};

const btn_size = {
  md: "px-4 py-2",
  lg: "px-6 py-3",
};

function Button(props: ButtonType) {
  const {
    iconStart,
    iconEnd,
    children,
    className,
    variant = "green",
    size = "md",
    target = '_blank',
    ...rest
  } = props;
  return (
    <button
      className={clsx(
        "flex items-center justify-center outline-none rounded-lg text-grayscale-100 font-semibold disabled:pointer-events-none disabled:text-grayscale-50 disabled:opacity-[0.38]",
        btn_variant[variant],
        btn_size[size],
        className
      )}
      {...rest}
    >
      {iconStart ? iconStart : null}
      <span className={clsx(iconEnd || iconStart ? "px-2" : "")}>
        {children}
      </span>
      {iconEnd ? iconEnd : null}
    </button>
  );
}

function ButtonLink(props: ButtonType) {
  const {
    href,
    children,
    iconStart,
    iconEnd,
    className,
    variant = "green",
    size = "md",
    target = "_self",
    ...rest
  } = props;

  return (
    <a
      href={href}
      className={clsx(
        "flex items-center outline-none outline-offset-2 rounded-lg text-grayscale-100 font-semibold w-fit cursor-pointer",
        btn_variant[variant],
        btn_size[size],
        className
      )}
      target={target}
      {...rest}
    >
      {iconStart ? iconStart : null}
      <div className={clsx(iconStart || iconEnd ? "px-2" : "")}>
        {children}
      </div>
      {iconEnd ? iconEnd : null}
    </a>
  );
}

export { Button, ButtonLink };
