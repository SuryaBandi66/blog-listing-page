import Link from "next/link";
import Pagination from "../components/Pagination";
import { BlogData, fetchBlogs } from "../lib/api";

const BlogListing = async ({
  searchParams,
}: {
  searchParams: { page?: string };
}) => {
  const { page: pageParam } = searchParams;
  const page = parseInt(pageParam || "1", 10);
  const limit = 9;
  const offset = (page - 1) * limit;

  const data: BlogData = await fetchBlogs(offset, limit);
  const blogs = data.photos;
  const totalPages = Math.ceil(data.total_photos / limit);

  return (
    <main className="container mx-auto p-4">
      <div
        className="bg-cover bg-center h-96 mb-8"
        style={{
          backgroundImage: `url('https://idea-usher-blog.s3.ap-south-1.amazonaws.com/premium_photo-1675437553489-0ddf979f299a.avif')`,
        }}
      ></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {" "}
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border rounded-lg shadow hover:shadow-md transition-shadow duration-200 p-6"
          >
            <Link href={`/blog/${blog.id}`} className="block">
              <div className="transition-transform duration-300 transform hover:scale-110">
                <img
                  src={blog.url}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">{blog.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </main>
  );
};

export default BlogListing;
