import clsx from "clsx";
import React from "react";

const input_size = {
  md: "[&>input]:px-4 [&>input]:py-2",
  lg: "[&>input]:px-6 [&>input]:py-3",
};

const TextField = ({
  iconStart,
  iconEnd,
  disabled,
  className,
  placeHolder,
  size = "md",
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "w-fit relative [&>label]:absolute [&>label]:top-2",
        iconStart ? "[&>label]:left-2" : "",
        iconEnd ? "[&>label]:right-2" : "",
        input_size[size],
        className
      )}
    >
      <label htmlFor="customInput">{iconStart ? iconStart : null} </label>
      <input
        id="customInput"
        disabled={disabled}
        type="text"
        placeholder={placeHolder}
        className={clsx(
          "outline-none border-grayscale-90 border border-solid rounded-lg placeholder:text-grayscale-60",
          "focus:border-primary-60 focus:shadow-[0_0_0_1px_#4FBA69] focus:outline-none",
          iconStart ? "!pl-10" : "",
          iconEnd ? "!pr-10" : ""
        )}
      />
      {iconEnd ? iconEnd : null}
    </div>
  );
};

export default TextField;
