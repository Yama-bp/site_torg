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
  const t = await getTranslations({ locale, namespace: "FAQ" });

  return constructMetadata({
    page: "FAQ",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/faq`,
    canonicalUrl: `/faq`,
  });
}

export default async function FAQPage({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FAQ" });

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
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

      {/* ВОПРОСЫ */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-3xl space-y-5">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition hover:border-blue-400 dark:hover:border-blue-600"
            >
              <summary className="cursor-pointer list-none p-6 md:p-7 flex justify-between items-start gap-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 pr-4">
                  {item.q}
                </h2>
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950/50 rounded-lg flex items-center justify-center shrink-0 group-open:bg-blue-600 transition">
                  <svg
                    className="w-4 h-4 text-blue-600 dark:text-blue-400 group-open:text-white group-open:rotate-45 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </summary>
              <div className="px-6 md:px-7 pb-6 md:pb-7 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-gray-800 pt-5">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ФОРМА */}
      <OrderSection locale={locale} />
    </div>
  );
}