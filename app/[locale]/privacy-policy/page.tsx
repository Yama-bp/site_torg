import OrderSection from "@/components/OrderSection";
import { Locale } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });

  return constructMetadata({
    page: "PrivacyPolicy",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/privacy-policy`,
    canonicalUrl: `/privacy-policy`,
  });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Params;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });

  const sections = [
    { title: t("s1Title"), text: t("s1Text") },
    { title: t("s2Title"), text: t("s2Text") },
    { title: t("s3Title"), text: t("s3Text") },
    { title: t("s4Title"), text: t("s4Text") },
    { title: t("s5Title"), text: t("s5Text") },
    { title: t("s6Title"), text: t("s6Text") },
    { title: t("s7Title"), text: t("s7Text") },
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-16 px-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #2563eb 0px, #2563eb 2px, transparent 2px, transparent 40px)",
          }}
        />
        <div className="relative container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* РАЗДЕЛЫ */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-4xl space-y-6">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/50 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    {i + 1}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 pt-1.5">
                  {section.title}
                </h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed pl-0 md:pl-14">
                {section.text}
              </div>
            </div>
          ))}

          <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6 md:p-8 border border-blue-200 dark:border-blue-900/50">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>{t("contactLabel")}:</strong>{" "}
              <a
                href="mailto:ufaust10@yandex.ru"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                ufaust10@yandex.ru
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <OrderSection locale={locale} />
    </div>
  );
}