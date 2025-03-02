const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Blog Website</h3>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition">
            🔵 Facebook
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            🔷 Twitter
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            📸 Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
