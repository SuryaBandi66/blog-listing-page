import Image from "next/image";

interface BlogContentProps {
  blog: {
    title: string;
    url: string;
    description: string;
  };
}

const BlogContent = ({ blog }: BlogContentProps) => {
  return (
    <>
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center leading-tight">
        {blog.title}
      </h1>

      <Image
        src={blog.url}
        alt={blog.title}
        width={800}
        height={384}
        className="w-full h-96 object-cover rounded-xl shadow-xl"
      />

      <div className="mt-8 text-lg text-gray-700 leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        Published on {new Date().toLocaleDateString()}
      </div>
    </>
  );
};

export default BlogContent;
