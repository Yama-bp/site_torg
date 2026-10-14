import { getTranslations } from "next-intl/server";
import OrderForm from "./OrderForm";

type Props = {
  locale: string;
  product?: string;
  productSlug?: string;
  withBackground?: boolean;
};

export default async function OrderSection({
  locale,
  product,
  productSlug,
  withBackground = true,
}: Props) {
  const t = await getTranslations({ locale, namespace: "Home" });

  return (
    <section
      id="order-form"
      className={`relative py-20 px-4 overflow-hidden ${
        withBackground ? "bg-gray-50 dark:bg-gray-900" : "bg-white dark:bg-gray-950"
      }`}
    >
      {withBackground && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #2563eb 0px, #2563eb 2px, transparent 2px, transparent 50px)",
          }}
        />
      )}
      <div className="relative container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t("orderTitle")}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {t("orderDescription")}
          </p>
        </div>
        <OrderForm locale={locale} product={product} productSlug={productSlug} />
      </div>
    </section>
  );
}