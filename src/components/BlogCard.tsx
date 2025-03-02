import Link from "next/link";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className="block bg-white border rounded-lg p-4 hover:shadow-lg transition"
    >
      <img
        src={blog.image || "https://source.unsplash.com/400x250/?technology"}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-3">{blog.title}</h2>
      <div className="text-gray-500 text-sm mt-1">
        By {blog.author || "Unknown Author"}
      </div>
    </Link>
  );
}
