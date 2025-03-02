import { fetchBlog } from "@/lib/api";
import BlogDetails from "@/components/BlogDetails";

interface BlogPageParams {
  params: Promise<{ id: string }>;
}

export default async function BlogPage({ params }: BlogPageParams) {
  const resolvedParams = await params;

  const blogId = Number(resolvedParams.id);

  const blog = await fetchBlog(blogId);

  if (!blog) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold mt-10">
        Blog not found
      </div>
    );
  }

  return <BlogDetails blog={blog} />;
}
