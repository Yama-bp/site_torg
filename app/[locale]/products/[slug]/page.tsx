import MDXComponents from "@/components/mdx/MDXComponents";
import OrderSection from "@/components/OrderSection";
import { Locale, LOCALES } from "@/i18n/routing";
import { getPosts } from "@/lib/getBlogs";
import { constructMetadata } from "@/lib/metadata";
import { BlogPost } from "@/types/blog";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import remarkGfm from "remark-gfm";

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};

type Params = Promise<{ locale: string; slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const { posts }: { posts: BlogPost[] } = await getPosts(locale);
  const post = posts.find((post) => post.slug === "/" + slug);

  if (!post) {
    return constructMetadata({
      title: "404",
      description: "Page not found",
      noIndex: true,
      locale: locale as Locale,
      path: `/products/${slug}`,
      canonicalUrl: `/products/${slug}`,
    });
  }

  return constructMetadata({
    page: "product",
    title: post.title,
    description: post.description,
    images: post.image ? [post.image] : [],
    locale: locale as Locale,
    path: `/products/${slug}`,
    canonicalUrl: `/products/${slug}`,
  });
}

export default async function ProductPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const { posts }: { posts: BlogPost[] } = await getPosts(locale);
  const post = posts.find((item) => item.slug === "/" + slug);

  if (!post) {
    return notFound();
  }

  const t = await getTranslations({ locale, namespace: "Product" });

  return (
    <div className="w-full">
      {/* HEADER товара */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 px-4 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #2563eb 0px, #2563eb 2px, transparent 2px, transparent 40px)",
          }}
        />
        <div className="relative container mx-auto max-w-5xl">
          <h1 className="break-words text-3xl md:text-4xl font-bold mb-4">
            {post.title}
          </h1>
          {post.tags && post.tags.split(",").length ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.split(",").map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white dark:bg-gray-800 border px-3 py-1 text-sm text-gray-600 dark:text-gray-400"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* КОНТЕНТ товара */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg w-full mb-8 shadow-sm"
            />
          )}

          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote
              source={post?.content || ""}
              components={MDXComponents}
              options={mdxOptions}
            />
          </div>

          <div className="mt-10 text-center">
            <a
              href="#order-form"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition shadow-md"
            >
              {t("requestButton")}
            </a>
          </div>
        </div>
      </section>

      {/* СЕРТИФИКАТЫ */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {t("certificatesTitle")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[3/4] border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-sm p-4 text-center"
              >
                {t("certificatePlaceholder")} {i}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            {t("certificatesNote")}
          </p>
        </div>
      </section>

      {/* ФОРМА — как на главной */}
      <OrderSection
        locale={locale}
        product={post.title}
        productSlug={post.slug}
      />
    </div>
  );
}

export async function generateStaticParams() {
  let posts = (await getPosts()).posts;
  posts = posts.filter((post) => post.slug);

  return LOCALES.flatMap((locale) =>
    posts.map((post) => {
      const slugPart = post.slug.replace(/^\//, "");
      return { locale, slug: slugPart };
    })
  );
}