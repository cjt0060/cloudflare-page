import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime(),
    );

  return rss({
    title: "Cloud Engineer Blog",
    description: "Articles about cloud engineering, Kubernetes, AWS, Terraform, and DevOps.",
    site: context.site!.toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedDate),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: `<language>en-us</language>`,
  });
}
