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
  const t = await getTranslations({ locale, namespace: "Contacts" });

  return constructMetadata({
    page: "Contacts",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/contacts`,
    canonicalUrl: `/contacts`,
  });
}

export default async function ContactsPage({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contacts" });

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

      {/* КОНТАКТЫ — карточки без ссылок */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Телефон */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-800">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="font-semibold text-lg mb-2">{t("phoneLabel")}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                +7 917 435 75 48
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                +7 917 403 13 59
              </div>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-800">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="font-semibold text-lg mb-2">{t("emailLabel")}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm break-all">
                ufaust10@yandex.ru
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm break-all">
                sts.ufa@mail.ru
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-800">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="font-semibold text-lg mb-2">{t("whatsappLabel")}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                +7 917 435 75 48
              </div>
            </div>

            {/* Адрес */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-800">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="font-semibold text-lg mb-2">{t("addressLabel")}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {t("addressValue")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* РЕКВИЗИТЫ */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("requisitesTitle")}
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Наименование */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/50 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"
                    />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900 dark:text-gray-100">
                  {t("reqName")}
                </div>
              </div>
              <div className="md:col-span-2 text-lg text-gray-700 dark:text-gray-300 md:pt-2">
                ООО Башкирское Предприятие «УФАСНАБТОРГ»
              </div>
            </div>

            {/* Адрес */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/50 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900 dark:text-gray-100">
                  {t("reqAddress")}
                </div>
              </div>
              <div className="md:col-span-2 text-lg text-gray-700 dark:text-gray-300 md:pt-2">
                450000, г. Уфа, Республика Башкортостан, Россия
              </div>
            </div>

            {/* Телефон */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/50 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900 dark:text-gray-100">
                  {t("reqPhone")}
                </div>
              </div>
              <div className="md:col-span-2 text-lg text-gray-700 dark:text-gray-300 md:pt-2">
                +7 917 435 75 48 · +7 917 403 13 59
              </div>
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/50 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900 dark:text-gray-100">
                  {t("reqEmail")}
                </div>
              </div>
              <div className="md:col-span-2 text-lg text-gray-700 dark:text-gray-300 md:pt-2 break-all">
                ufaust10@yandex.ru · sts.ufa@mail.ru
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* КАРТА */}
      <section className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="aspect-[16/9] rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400">
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
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <div>{t("mapPlaceholder")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <OrderSection locale={locale} />
    </div>
  );
}