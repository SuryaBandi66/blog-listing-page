import Link from "next/link";

const BackToBlogs = () => {
  return (
    <div className="bg-white p-5 shadow-lg rounded-lg border border-gray-200 mb-6">
      <Link href="/blog">
        <div className="text-blue-600 font-semibold flex items-center gap-2 cursor-pointer">
          ← Back to Blogs
        </div>
      </Link>
    </div>
  );
};

export default BackToBlogs;
