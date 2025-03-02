import { fetchBlog } from "@/lib/api";
import BlogDetails from "@/components/BlogDetails";

interface BlogPageProps {
  params: { id: string };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold mt-10">
        Blog not found
      </div>
    );
  }

  const blog = await fetchBlog(id);

  if (!blog) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold mt-10">
        Blog not found
      </div>
    );
  }

  return <BlogDetails blog={blog} />;
};

export default BlogPage;
