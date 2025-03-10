import Banner from "@/components/Banner";
import BlogGrid from "@/components/BlogGrid";
import Pagination from "@/components/Pagination";
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
      <BlogGrid blogs={blogs} />
      <Pagination currentPage={page} totalPages={totalPages} />
    </main>
  );
};

export default BlogListing;
