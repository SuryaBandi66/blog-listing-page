import Image from "next/image";

interface BlogDetailsProps {
  blog: {
    id: number;
    title: string;
    url: string;
    description: string;
  };
}

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        {blog.title}
      </h1>

      <div className="w-full">
        <Image
          src={blog.url}
          alt={blog.title}
          width={800}
          height={384}
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

export default BlogDetails;
