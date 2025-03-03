import { fetchBlog } from "@/lib/api";
import BlogDetails from "@/components/BlogDetails/BlogDetails";

interface BlogPageParams {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ id?: string }>;
}
export default async function BlogPage({ searchParams }: BlogPageParams) {
  const resolvedParams = await searchParams;

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
