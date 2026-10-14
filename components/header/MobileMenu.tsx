"use client";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link as I18nLink, usePathname } from "@/i18n/routing";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MobileMenu() {
  const t = useTranslations("Home");
  const tHeader = useTranslations("Header");
  const pathname = usePathname();

  const headerLinks = [
    { name: tHeader("products"), href: "/products" },
    { name: tHeader("about"), href: "/about" },
    { name: tHeader("faq"), href: "/faq" },
    { name: tHeader("contacts"), href: "/contacts" },
  ];

  return (
    <div className="flex items-center gap-1 md:hidden">
      <LocaleSwitcher />
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2">
          <Menu className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuLabel>
            <I18nLink
              href="/"
              title={t("title")}
              prefetch={true}
              className="flex items-center space-x-1 font-bold"
            >
              <Image
                alt={t("title")}
                src="/logo.svg"
                className="w-6 h-6"
                width={32}
                height={32}
              />
              <span className="highlight-text">{t("title")}</span>
            </I18nLink>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {headerLinks.map((link) => (
              <DropdownMenuItem key={link.href}>
                <I18nLink
                  href={link.href}
                  title={link.name}
                  prefetch={true}
                  className={`w-full ${
                    pathname === link.href ? "font-semibold" : ""
                  }`}
                >
                  {link.name}
                </I18nLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}