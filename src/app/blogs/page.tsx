import DeveloperLogsHeader from "@/features/chronicles/components/DeveloperLogsHeader";
import BlogList from "@/features/chronicles/components/BlogList";

const Blogs = () => {
  return (
    <div className="py-20">
      <DeveloperLogsHeader />
      <BlogList />
    </div>
  );
};

export default Blogs;
