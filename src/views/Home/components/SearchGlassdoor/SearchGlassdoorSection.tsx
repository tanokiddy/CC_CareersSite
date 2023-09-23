import React from "react";
import SearchSection from "./SearchSection";
import GlassdoorSection from "./GlassdoorSection";
import clsx from "clsx";
import { GlassdoorType } from "../../stately";

export default function SearchGlassdoorSection({
  glassdoor,
}: {
  glassdoor: GlassdoorType;
}) {
  return (
    <div className="bg-grayscale-95">
      <div
        className={clsx(
          "px-4 py-[60px] space-y-[60px] w-full",
          "lg:max-w-[1366px] lg:mx-auto lg:px-32 lg:py-20"
        )}
      >
        <SearchSection />
        <GlassdoorSection glassdoor={glassdoor} />
      </div>
    </div>
  );
}
