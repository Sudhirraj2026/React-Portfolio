function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Sudhir Kumar. All rights reserved.
        </p>

        <p className="text-gray-500 text-sm mt-2">
          Built with React & Tailwind CSS 🚀
        </p>
      </div>
    </footer>
  );
}

export default Footer;