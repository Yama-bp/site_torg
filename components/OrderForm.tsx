import { getTranslations } from "next-intl/server";

type Props = {
  locale: string;
  product?: string;
  productSlug?: string;
};

export default async function OrderForm({ locale, product, productSlug }: Props) {
  const t = await getTranslations({ locale, namespace: "Home" });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {/* Подсказка */}
      <aside className="md:col-span-1 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-7 rounded-2xl shadow-xl flex flex-col">
        <h3 className="font-semibold text-xl mb-5">{t("hintTitle")}</h3>
        <ul className="space-y-4 text-sm text-blue-50 flex-1">
          <li className="flex items-start gap-3">
            <span className="text-blue-200 mt-0.5">✓</span>
            <div>
              <div className="font-medium text-white">{t("hintProduct")}</div>
              <div className="text-blue-200 text-xs mt-0.5">
                {t("hintProductDetail")}
              </div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-200 mt-0.5">✓</span>
            <div>
              <div className="font-medium text-white">{t("hintQuantity")}</div>
              <div className="text-blue-200 text-xs mt-0.5">
                {t("hintQuantityDetail")}
              </div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-200 mt-0.5">✓</span>
            <div>
              <div className="font-medium text-white">{t("hintPayment")}</div>
              <div className="text-blue-200 text-xs mt-0.5">
                {t("hintPaymentDetail")}
              </div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-200 mt-0.5">✓</span>
            <div>
              <div className="font-medium text-white">{t("hintDelivery")}</div>
              <div className="text-blue-200 text-xs mt-0.5">
                {t("hintDeliveryDetail")}
              </div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-200 mt-0.5">✓</span>
            <div>
              <div className="font-medium text-white">{t("hintContacts")}</div>
              <div className="text-blue-200 text-xs mt-0.5">
                {t("hintContactsDetail")}
              </div>
            </div>
          </li>
        </ul>
        <div className="mt-6 pt-5 border-t border-blue-400/40 text-xs text-blue-100">
          {t("hintFooter")}
        </div>
      </aside>

      {/* Форма */}
      <form
        action="https://formspree.io/f/mqpeynnj"
        method="POST"
        className="md:col-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl space-y-5"
      >
        {product && <input type="hidden" name="product" value={product} />}
        {productSlug && (
          <input type="hidden" name="product_slug" value={productSlug} />
        )}
        <input type="hidden" name="locale" value={locale} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("formName")} *
            </label>
            <input
              type="text"
              name="name"
              required
              minLength={2}
              maxLength={100}
              pattern="^[A-Za-zА-Яа-яЁё\s\-]+$"
              title={t("validationName")}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("formEmail")} *
            </label>
            <input
              type="email"
              name="email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title={t("validationEmail")}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {t("formPhone")} *
          </label>
          <input
            type="tel"
            name="phone"
            required
            inputMode="tel"
            pattern="^\+?[0-9\s\-\(\)]{7,20}$"
            title={t("validationPhone")}
            placeholder="+7 ___ ___ __ __"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {t("formMessage")}
          </label>
          <textarea
            name="message"
            rows={6}
            maxLength={500}
            placeholder={t("formMessagePlaceholder")}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-y"
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
          <input type="checkbox" required className="mt-1" />
          <span>{t("formConsent")}</span>
        </label>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-medium transition shadow-md w-full md:w-auto"
        >
          {t("formSubmit")}
        </button>
      </form>
    </div>
  );
}