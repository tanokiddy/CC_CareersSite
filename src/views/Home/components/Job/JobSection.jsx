import React from "react";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { ButtonLink } from "@/components/atoms/components/Button/Button";
import ArrowRight from "@/components/atoms/icons/ArrowRight";

export default function JobSection({ hotJob }) {
  const { t } = useTranslation("home");
  const content = t("job_section", { returnObjects: true });

  if (!hotJob) return null;
  const topJob = hotJob.items.slice(0, 4);
  
  return (
    <section className="job-section">
      <div
        className={clsx(
          "flex flex-col space-y-6 justify-center py-[60px] px-4",
          "md:space-y-8 md:max-w-[1366px] md:w-full md:mx-auto",
          "lg:px-32 lg:py-20"
        )}
      >
        <div className={clsx("flex flex-col justify-center items-start space-y-3", "md:flex-row md:justify-between md:items-end md:space-y-0")}>
          <h2 className={clsx("text-[28px] leading-[36px] text-grayscale-20", "lg:text-[36px] lg:leading-[48px]")}>
            {content.title}
          </h2>
          <ButtonLink
            href="/jobs"
            iconEnd={<ArrowRight />}
            variant="transparent"
            className="!p-0"
            target="_blank"
          >
            {content.button_more}
          </ButtonLink>
        </div>
        <div
          className={clsx("grid grid-cols-1 gap-y-3","sm:grid-cols-2 sm:gap-3", "lg:grid-cols-4 lg:gap-x-[30px]")}
        >
          {topJob.map((job) => (
            <ButtonLink
              className={clsx(
                "group py-[60px] w-full rounded-lg flex flex-col [&>*:first-child]:space-y-4 !bg-grayscale-95 transition-all duration-300 ease-in-out justify-between flex-1",
                "md:p-6 md:[&>*:first-child]:space-y-6 md:h-[196px]",
                "lg:max-w-[255px]",
                "hover:!bg-primary-50",
                "active:!bg-primary-40"
              )}
              href={`/job/${job.job_slug}`}
              key={job.job_slug}
              target='_blank'
            >
              <div className="flex justify-between space-x-2">
                <p className="text-sm text-grayscale-50 font-normal group-hover:text-grayscale-100 line-clamp-1">
                  {job.location}
                </p>
                <p className="text-sm text-grayscale-60 font-semibold group-hover:text-grayscale-100">
                  {job.job_time}
                </p>
              </div>
              <p className="text-[24px] leading-9 text-grayscale-30 font-semibold group-hover:text-grayscale-100 line-clamp-3">
                {job.title}
              </p>
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
