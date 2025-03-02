import { fetchBlog } from "@/lib/api";

interface SingleBlog {
  id: number;
  title: string;
  slug: string;
  url: string;
  description: string;
}

const BlogPage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;

  if (!id) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold mt-10">
        Blog not found
      </div>
    );
  }

  const blog: SingleBlog = await fetchBlog(id);

  if (!blog) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold mt-10">
        Blog not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        {blog.title}
      </h1>

      <div className="w-full">
        <img
          src={blog.url}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="mt-6 text-lg text-gray-700 leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        Published on {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default BlogPage;
