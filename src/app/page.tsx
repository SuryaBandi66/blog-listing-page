import Banner from "@/components/Banner";
import BlogGrid from "@/components/BlogGrid";
import Pagination from "@/components/Pagination";
import TopPosts from "@/components/TopPosts";
import { BlogData, fetchBlogs } from "@/lib/api";

interface BlogListingProps {
  searchParams: Promise<{ page?: string }>;
}

const BlogListing = async ({ searchParams }: BlogListingProps) => {
  const params = await searchParams;

  const page = parseInt(params.page || "1", 10);
  const PAGE_LIMIT = 9;
  const offset = (page - 1) * PAGE_LIMIT;

  const { photos: blogs, total_photos: totalBlogs }: BlogData =
    await fetchBlogs(offset, PAGE_LIMIT);
  const totalPages = Math.ceil(totalBlogs / PAGE_LIMIT);

  return (
    <main className="container mx-auto p-4">
      <Banner />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
        <div className="md:col-span-3">
          <BlogGrid blogs={blogs} />
        </div>

        <aside className="md:col-span-1">
          <TopPosts />
        </aside>
      </div>

      <div className="mt-8">
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
    </main>
  );
};

export default BlogListing;
