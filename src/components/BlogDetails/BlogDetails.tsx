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
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <aside className="md:col-span-3 space-y-6">
          <BackToBlogs />
          <AuthorDetails />
        </aside>

        <div className="md:col-span-6">
          <BlogContent blog={blog} />
        </div>

        <aside className="md:col-span-3">
          <RecentPosts />
        </aside>
      </div>
    </div>
  );
};

export default BlogDetails;
