function Navbar() {
  return (
    <nav className="w-full border-b border-gray-300 bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <div className="text-2xl font-extrabold tracking-wide">
          Event<span className="text-yellow-400">Zone</span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-semibold sm:flex">
          <a
            href="#home"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            Home
          </a>

          <a
            href="#events"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            Events
          </a>

          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            Contact
          </a>
        </div>

        <a
          href="#events"
          className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-gray-900 shadow-sm transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg"
        >
          Explore
        </a>
      </div>
    </nav>
  );
}

export default Navbar;