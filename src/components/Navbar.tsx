import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold text-white cursor-pointer"
        >
          Blog
        </Link>

        {/* Mobile Menu Button (Toggle Checkbox) */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="md:hidden cursor-pointer text-gray-300 hover:text-white"
        >
          <Menu size={28} className="peer-checked:hidden" />
          <X size={28} className="hidden peer-checked:block" />
        </label>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-300 hover:text-white">
            About us
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Portfolio
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Web3
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Resources
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Industries
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className="hidden peer-checked:block md:hidden bg-gray-900">
        <div className="flex flex-col space-y-2 p-4">
          <Link href="#" className="text-gray-300 hover:text-white">
            About us
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Portfolio
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Web3
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Resources
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Industries
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
