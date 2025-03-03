import RecentPosts from "./RecentPosts";
import BackToBlogs from "./BackToBlogs";
import AuthorDetails from "./AuthorDetails";
import BlogContent from "./BlogContent";

interface BlogDetailsProps {
  blog: {
    id: number;
    title: string;
    content_short?: string;
    photo_url: string;
    slug: string;
    content_body?: string;
    url: string;
    description: string;
  };
}

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl grid grid-cols-12 gap-12">
      <aside className="col-span-3">
        <BackToBlogs />
        <AuthorDetails />
      </aside>

      <div className="col-span-6">
        <BlogContent blog={blog} />
      </div>

      <aside className="col-span-3">
        <RecentPosts />
      </aside>
    </div>
  );
};

export default BlogDetails;
