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
  const t = await getTranslations({ locale, namespace: "About" });

  return constructMetadata({
    page: "About",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/about`,
    canonicalUrl: `/about`,
  });
}

export default async function AboutPage({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

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

      {/* ТЕКСТ + КАРТИНКА */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded mb-4" />
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
              <p>{t("p4")}</p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950/40 dark:to-gray-900 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center text-blue-300 dark:text-blue-800 text-sm shadow-lg">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-3 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <div>{t("imagePlaceholder")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЦИФРЫ */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                2005
              </div>
              <div className="text-sm text-gray-500">{t("statSince")}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                99,9999%
              </div>
              <div className="text-sm text-gray-500">{t("statPurity")}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                20+
              </div>
              <div className="text-sm text-gray-500">{t("statCountries")}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                ISO
              </div>
              <div className="text-sm text-gray-500">9001-2015</div>
            </div>
          </div>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {t("advantagesTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">
                    {i}
                  </span>
                </div>
                <div className="font-semibold mb-2">
                  {t(`adv${i}Title`)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t(`adv${i}Text`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <OrderSection locale={locale} />
    </div>
  );
}