import clsx from "clsx";
import React from "react";

type TextFieldType = {
  iconStart?: React.ReactElement | null;
  iconEnd?: React.ReactElement | null;
  disabled?: boolean;
  className: string;
  placeHolder: string;
  size?: "md" | "lg";
  required?: boolean;
  onChange?: Function;
};

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
  required,
  onChange,
  ...rest
}: TextFieldType) => {
  return (
    <div
      className={clsx(
        "w-full relative [&>label]:absolute [&>label]:top-2",
        iconStart ? "[&>label]:left-2" : "",
        iconEnd ? "[&>label]:right-2" : "",
        input_size[size],
        className
      )}
    >
      {iconStart ? <label htmlFor="customInput">{iconStart}</label> : null}
      <input
        required={required}
        id="customInput"
        disabled={disabled}
        type="text"
        placeholder={placeHolder}
        className={clsx(
          "outline-none border-grayscale-90 border border-solid rounded-lg placeholder:text-grayscale-60",
          "focus:border-primary-60 focus:shadow-[0_0_0_1px_#4FBA69] focus:outline-none w-full",
          iconStart ? "!pl-10" : "",
          iconEnd ? "!pr-10" : ""
        )}
        {...rest}
        onChange={onChange ? (e) => onChange(e) : () => {}}
      />
      {iconEnd ? iconEnd : null}
    </div>
  );
};

export default TextField;
