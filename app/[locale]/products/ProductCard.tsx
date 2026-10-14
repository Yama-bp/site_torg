import { Link as I18nLink } from "@/i18n/routing";
import { BlogPost } from "@/types/blog";
import Image from "next/image";

export function ProductCard({ post, locale }: { post: BlogPost; locale: string }) {
  return (
    <I18nLink
      href={`/products${post.slug}`}
      prefetch={false}
      className="bg-transparent rounded-lg hover:underline block"
    >
      <div className="relative rounded shadow-md pt-[56.25%]">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover shadow-sm w-full rounded hover:shadow-lg transition-shadow duration-200"
        />
      </div>
      <div className="py-3 flex-1 flex flex-col">
        <h2 className="text-lg font-medium line-clamp-2 flex-grow">
          {post.title}
        </h2>
      </div>
    </I18nLink>
  );
}