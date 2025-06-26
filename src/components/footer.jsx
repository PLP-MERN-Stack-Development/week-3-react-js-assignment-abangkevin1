function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-8">
      <div className="max-w-4xl mx-auto px-4 py-4 text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Abang Task Manager. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;