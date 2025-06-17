import FirstBlog from "../components/static-blogs/FirstBlog";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  tags: string[];
  content: typeof FirstBlog;
  datePublished: Date;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Starting My Developer Blog: Here’s Why",
    slug: "starting-my-developer-blog-heres-why",
    excerpt:
      "One of my biggest regrets as a career shifter is not documenting the journey earlier. After years of building web apps and learning in isolation, I'm finally starting this blog—to reflect, reinforce what I’ve learned, and share it with others walking a similar path.",
    content: FirstBlog,
    tags: ["Dev Life"],
    datePublished: new Date("2025-06-17T08:00:00Z"),
  },
];

export type { Blog };
export { blogs };
