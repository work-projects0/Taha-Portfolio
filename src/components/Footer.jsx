function Footer() {
  return (
    <footer className="relative text-[var(--text-title)] space-y-16">
      <div className="h-[5px] border border-zinc-700  rounded-full w-[80%] mx-auto"></div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-1 px-[9%] xl:px-[15%] pb-10">
        <div className="space-y-1 text-center sm:text-start">
          <a href="#Navbar" className="text-2xl sm:text-3xl font-bold">
            <span>Taha</span>
            <span className="text-[var(--nav-text)]">Fawzy</span>
          </a>

          <div className="sm:text-xl">
            Civil Engineer & Section Head & Quality Leader
          </div>
        </div>
        <div className="text-center sm:text-start">
          © 2025 Taha Fawzy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
