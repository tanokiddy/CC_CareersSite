import clsx from "clsx";
import React from "react";

const btn_variant = {
  green: "bg-primary-60",
  transparent: "!bg-transparent text-grayscale-20",
};

const btn_size = {
  md: "px-4 py-2",
  lg: "px-6 py-3",
};

function Button(props) {
  const {
    iconStart,
    iconEnd,
    children,
    className,
    variant = "green",
    size = "md",
    ...rest
  } = props;
  return (
    <button
      className={clsx(
        "flex items-center outline-none rounded-lg text-grayscale-100 font-normal",
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

function ButtonLink(props) {
  const {
    href,
    children,
    iconStart,
    iconEnd,
    className,
    variant = "green",
    size = "md",
    ...rest
  } = props;
  
  return (
    <a
      href={href}
      className={clsx(
        "flex items-center outline-none outline-offset-2 rounded-lg text-grayscale-100 font-semibold w-fit",
        btn_variant[variant],
        btn_size[size],
        className
      )}
      {...rest}
    >
      {iconStart ? iconStart : null}
      <span className={clsx(iconStart || iconEnd ? "px-2" : "")}>
        {children}
      </span>
      {iconEnd ? iconEnd : null}
    </a>
  );
}

export { Button, ButtonLink };
