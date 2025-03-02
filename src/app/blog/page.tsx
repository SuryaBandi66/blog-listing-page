import { fetchBlogs } from "@/lib/api";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";

export default async function BlogListPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = Number(searchParams?.page) || 1;
  const blogs = await fetchBlogs(page);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Pagination currentPage={page} />
    </div>
  );
}
