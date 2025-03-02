import Link from "next/link";
import Image from "next/image";
import { BlogData } from "../lib/api";

interface BlogCardProps {
  blog: BlogData["photos"][number];
}

const BlogCard = ({ blog }: BlogCardProps) => (
  <div className="bg-white border rounded-lg shadow hover:shadow-md transition-shadow duration-200 p-6">
    <Link href={`/blog/${blog.id}`} className="block">
      <div className="transition-transform duration-300 transform hover:scale-105">
        <Image
          src={blog.url}
          alt={blog.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h2>
      <p className="text-gray-600 line-clamp-3">{blog.description}</p>
    </Link>
  </div>
);

export default BlogCard;
