import BlogCard from "./BlogCard";
import { BlogData } from "../lib/api";

interface BlogGridProps {
  blogs: BlogData["photos"];
}

const BlogGrid = ({ blogs }: BlogGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {blogs.map((blog) => (
      <BlogCard key={blog.id} blog={blog} />
    ))}
  </div>
);

export default BlogGrid;
