import Image from "next/image";

const AuthorDetails = () => {
  return (
    <div className="bg-white p-5 shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-lg font-bold mb-4">✍ Author Details</h2>
      <div className="flex items-center gap-4">
        <Image
          src="https://idea-usher-blog.s3.ap-south-1.amazonaws.com/pexels-jude-stevens-270399-915216.jpg"
          alt="Author"
          width={60}
          height={60}
          className="rounded-full shadow-md"
        />
        <div>
          <h3 className="text-md font-semibold">John Doe</h3>
          <p className="text-sm text-gray-600">Tech Writer & Blogger</p>
        </div>
      </div>
      <p className="text-gray-700 mt-4 text-sm leading-relaxed">
        John is a passionate writer covering the latest in web development and
        AI. Follow for more insights.
      </p>
    </div>
  );
};

export default AuthorDetails;
