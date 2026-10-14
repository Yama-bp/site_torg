import HeaderLinks from "@/components/header/HeaderLinks";
import MobileMenu from "@/components/header/MobileMenu";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";
import { Link as I18nLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("Home");

  return (
    <header className="py-4 px-6 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-950/80">
      <nav className="flex justify-between items-center w-full mx-auto max-w-7xl">
        <div className="flex items-center space-x-8 md:space-x-14">
          <I18nLink
            href="/"
            prefetch={false}
            className="flex items-center space-x-2 font-bold text-lg"
          >
            <Image
              alt={siteConfig.name}
              src="/logo.svg"
              className="w-8 h-8"
              width={40}
              height={40}
            />
            <span className="text-gray-900 dark:text-gray-100">
              {t("title")}
            </span>
          </I18nLink>
          <HeaderLinks />
        </div>

        <div className="flex items-center gap-x-3 md:gap-x-5 flex-1 justify-end">
          <div className="hidden md:flex items-center gap-x-5">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;