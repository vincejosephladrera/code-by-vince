import Container from "@/components/Container";
import { blogs } from "../data/blogs";
import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <Container>
      <section className="grid gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </section>
    </Container>
  );
};

export default BlogList;
