import { CarretDown } from "@/components/atoms/icons";
import { useRouter } from "next/router";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/components/Select";

const locales = [
  {
    label: "VIE",
    value: "vi",
  },
  {
    label: "EN",
    value: "en",
  },
];

const LocaleSwitcher = ({ align }: { align?: "center" | "end" | "start" }) => {
  const router = useRouter();
  const { locale: activeLocale } = router;
  const handleSwitchLocale = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <SelectRoot defaultValue={activeLocale} onValueChange={handleSwitchLocale}>
      <SelectTrigger>
        <SelectValue />
        <CarretDown />
      </SelectTrigger>
      <SelectContent position="popper" align={align || "end"} sideOffset={14}>
        {locales.map((locale) => (
          <SelectItem key={locale.label} value={locale.value}>
            {locale.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

export default LocaleSwitcher;
