import { Link as I18nLink } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import OrderSection from "@/components/OrderSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #2563eb 0px, #2563eb 2px, transparent 2px, transparent 40px)",
          }}
        />
        <div className="relative container mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                {t("badge")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                {t("title")}
              </h1>
              <p className="text-lg md:text-xl text-blue-700 dark:text-blue-400 font-medium mb-4">
                {t("tagLine")}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {t("description")}
              </p>
              <div className="flex flex-wrap gap-3">
                <I18nLink
                  href="/products"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md"
                >
                  {t("ctaProducts")}
                </I18nLink>
                <a
                  href="#order-form"
                  className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 px-6 py-3 rounded-lg font-medium transition"
                >
                  {t("ctaOrder")}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-7 shadow-md border border-gray-100 dark:border-gray-700 aspect-square flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  2005
                </div>
                <div className="text-sm text-gray-500">{t("since")}</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-7 shadow-md border border-gray-100 dark:border-gray-700 aspect-square flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  99,9999%
                </div>
                <div className="text-sm text-gray-500">{t("purity")}</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-7 shadow-md border border-gray-100 dark:border-gray-700 aspect-square flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  20+
                </div>
                <div className="text-sm text-gray-500">{t("countries")}</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-7 shadow-md border border-gray-100 dark:border-gray-700 aspect-square flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  ISO
                </div>
                <div className="text-sm text-gray-500">9001-2015</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О КОМПАНИИ */}
      <section className="relative py-20 px-4 bg-white dark:bg-gray-950 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-1/2 h-full opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #2563eb 0px, #2563eb 2px, transparent 2px, transparent 50px)",
          }}
        />
        <div className="relative container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("aboutTitle")}
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>{t("aboutP1")}</p>
                <p>{t("aboutP2")}</p>
                <p>{t("aboutP3")}</p>
              </div>
              <I18nLink
                href="/about"
                className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                {t("aboutMore")} →
              </I18nLink>
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>{t("aboutImagePlaceholder")}</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600/10 dark:bg-blue-400/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-600/5 dark:bg-blue-400/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* СЕРТИФИКАТЫ */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {t("certificatesTitle")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {t("certificatesSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-center justify-center p-6 text-center"
              >
                <svg
                  className="w-14 h-14 text-blue-300 dark:text-blue-800 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <div className="text-sm text-gray-500">
                  {t("certificatePlaceholder")} {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {t("contactsTitle")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {t("contactsSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:+79174357548"
              className="group bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition">
                <svg
                  className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white"
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
              <div className="text-gray-600 dark:text-gray-400">
                +7 917 435 75 48
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                +7 917 403 13 59
              </div>
            </a>

            <a
              href="mailto:ufaust10@yandex.ru"
              className="group bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition">
                <svg
                  className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white"
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
              <div className="text-gray-600 dark:text-gray-400 break-all">
                ufaust10@yandex.ru
              </div>
              <div className="text-gray-600 dark:text-gray-400 break-all">
                sts.ufa@mail.ru
              </div>
            </a>

            <a
              href="https://wa.me/79174357548"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-900 rounded-2xl p-7 border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition">
                <svg
                  className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="font-semibold text-lg mb-2">
                {t("whatsappLabel")}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                +7 917 435 75 48
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <OrderSection locale={locale} />
    </div>
  );
}