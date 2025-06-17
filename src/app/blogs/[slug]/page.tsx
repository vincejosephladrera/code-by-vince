import Container from "@/components/Container";
import { blogs } from "@/features/chronicles/data/blogs";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return {};

  return {
    title: `${blog.title} | Code By Vince`,
    description: blog.excerpt,
  };
}

const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  const { title, content, datePublished, tags } = blog;

  const formattedDate = format(datePublished, "MMMM d, yyyy");

  const Content = content;

  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <p className="mb-6 text-center text-sm font-medium text-gray-600">
          {formattedDate}
        </p>
        <h1 className="text-game-slate mb-6 text-center text-5xl font-bold">
          {title}
        </h1>
        <div className="mb-10 flex justify-center">
          {tags.map((tag, index) => (
            <Badge key={index} className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="blogs-dynamic-content">
          <Content />
        </div>
      </Container>
    </section>
  );
};

export default Blog;
