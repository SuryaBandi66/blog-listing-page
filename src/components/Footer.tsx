export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg font-semibold">🌍 Stay Connected</p>
        <p className="text-gray-400 text-sm">Follow us for more updates</p>
        <div className="flex space-x-6 mt-4">
          <a href="#" className="hover:text-blue-400">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-400">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-400">
            GitHub
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          © 2025 My Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
