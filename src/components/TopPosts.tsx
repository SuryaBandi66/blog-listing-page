import Image from "next/image";
import Link from "next/link";
import { fetchTopBlogs } from "@/lib/api";

interface Blog {
  id: number;
  url: string;
  title: string;
}

export default async function TopPosts() {
  const topBlogs: Blog[] = await fetchTopBlogs(5);

  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-300 p-5 rounded-xl shadow-lg border border-gray-300">
      <h2 className="text-lg font-bold text-gray-800 flex items-center mb-3">
        🔥 <span className="ml-2">Top Posts</span>
      </h2>
      <ul className="space-y-3">
        {topBlogs.map((blog) => (
          <li
            key={blog.id}
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition-all"
          >
            <Image
              src={blog.url}
              alt={blog.title}
              width={56}
              height={56}
              className="rounded-md shadow-md object-cover"
            />

            <Link
              href={`/blog/${blog.id}`}
              className="text-blue-700 text-sm font-semibold hover:underline"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
