import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "../../icons";
import clsx from "clsx";
import React from "react";

//SelectItem
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    hiddenCheckIcon?: boolean;
  }
>(({ children, hiddenCheckIcon = false, className, ...props }, ref) => {
  const classes = clsx(
    "flex items-center space-x-2 py-2 px-4 focus-visible:outline-none cursor-pointer hover:bg-primary-95 active:bg-primary-95 select-none [&>span]:text-base [&>span]:text-grayscale-20",
    className
  );
  return (
    <SelectPrimitive.Item ref={ref} className={classes} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      {!hiddenCheckIcon && (
        <SelectPrimitive.ItemIndicator>
          <Check />
        </SelectPrimitive.ItemIndicator>
      )}
    </SelectPrimitive.Item>
  );
});

SelectItem.displayName = SelectPrimitive.Item.displayName;

//SelectContent
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const classes = clsx(
    "z-[99] bg-grayscale-100 shadow-[0_2px_20px_0_rgba(0,0,0,0.14)] rounded-lg",
    className
  );
  const viewportClasses = "py-2";
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content ref={ref} className={classes} {...props}>
        <SelectPrimitive.Viewport className={viewportClasses}>
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});

SelectContent.displayName = SelectPrimitive.Content.displayName;

//SelectTrigger
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const classes =
    "w-[56px] font-normal ml-0 flex items-center space-x-1 p-1 focus-visible:outline-none select-none [&>span]:text-sm";
  return (
    <SelectPrimitive.Trigger ref={ref} className={classes} {...props} aria-label="cc-locale-switcher">
      {children}
    </SelectPrimitive.Trigger>
  );
});

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

//SelectRoot
const SelectRoot = SelectPrimitive.Root;
//SelectValue
const SelectValue = SelectPrimitive.Value;

export { SelectRoot, SelectContent, SelectItem, SelectTrigger, SelectValue };
