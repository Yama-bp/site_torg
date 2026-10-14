import { Link as I18nLink } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-8 mt-12 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          {t("Copyright", { year, name: siteConfig.name })}
        </p>
        <div className="flex gap-4 text-sm">
          <I18nLink
            href="/privacy-policy"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            {t("PrivacyPolicy")}
          </I18nLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;