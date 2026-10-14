import { ProductCard } from "@/app/[locale]/products/ProductCard";
import { Locale, LOCALES } from "@/i18n/routing";
import { getPosts } from "@/lib/getBlogs";
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
  const t = await getTranslations({ locale, namespace: "Products" });

  return constructMetadata({
    page: "Products",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/products`,
    canonicalUrl: `/products`,
  });
}

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  const { posts } = await getPosts(locale);
  const t = await getTranslations("Products");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <ProductCard key={post.slug} locale={locale} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}