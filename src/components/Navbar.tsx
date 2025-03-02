import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 sticky top-0">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold text-white cursor-pointer"
        >
          Blog
        </Link>{" "}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            About us
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Portfolio
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Web3
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Resources
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Industries
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
