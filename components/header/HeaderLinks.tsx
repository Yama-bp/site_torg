"use client";

import { Link as I18nLink, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const HeaderLinks = () => {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const headerLinks = [
    { name: t("products"), href: "/products" },
    { name: t("about"), href: "/about" },
    { name: t("faq"), href: "/faq" },
    { name: t("contacts"), href: "/contacts" },
  ];

  return (
    <div className="hidden md:flex flex-row items-center gap-x-1 text-base font-medium text-muted-500">
      {headerLinks.map((link) => (
        <I18nLink
          key={link.href}
          href={link.href}
          title={link.name}
          prefetch
          className={cn(
            "rounded-xl px-5 py-2.5 flex items-center gap-x-1 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
            pathname === link.href &&
              "font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/30"
          )}
        >
          {link.name}
        </I18nLink>
      ))}
    </div>
  );
};

export default HeaderLinks;