import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, settheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const [lang, setLang] = useState(localStorage.getItem("lang") ?? "ar");

  const toggleLang = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <header id="Navbar" className="bg-[var(--bg-primary)]  mx-auto">
      <div className="flex justify-between items-center pt-6 px-3 sm:px-10 md:px-2 lg:px-24 xl:px-36">
        <Link to="/" className="text-2xl sm:text-3xl font-bold">
          <span className="text-[var(--text-title)]">Taha</span>
          <span className="text-[var(--nav-text)]">Fawzy</span>
        </Link>

        <nav className="bg-[var(--nav-bg)] font-bold border border-[#313134] text-[var(--text-title)] px-2 md:px-4 lg:px-8 py-3 hidden md:flex justify-center items-center gap-5 sm:gap-10 rounded-full">
          <a href="#About" className="relative group">
            <span className="absolute left-0 -bottom-[1px] h-0.5 w-0 bg-[var(--nav-text)] transition-all duration-300 group-hover:w-full"></span>
            <span className=" group-hover:text-[var(--nav-text)] transition duration-300">
              About
            </span>
          </a>
          <a href="#Projects" className="relative group">
            <span className="absolute left-0 -bottom-[1px] h-0.5 w-0 bg-[var(--nav-text)] transition-all duration-300 group-hover:w-full"></span>
            <span className=" group-hover:text-[var(--nav-text)] transition duration-300">
              Projects
            </span>
          </a>
          <a href="#Certifications" className="relative group">
            <span className="absolute left-0 -bottom-[1px] h-0.5 w-0 bg-[var(--nav-text)] transition-all duration-300 group-hover:w-full"></span>
            <span className=" group-hover:text-[var(--nav-text)] transition duration-300">
              Certifications
            </span>
          </a>
          <a href="#Contact" className="relative group">
            <span className="absolute left-0 -bottom-[1px] h-0.5 w-0 bg-[var(--nav-text)] transition-all duration-300 group-hover:w-full"></span>
            <span className=" group-hover:text-[var(--nav-text)] transition duration-300">
              Contact
            </span>
          </a>
        </nav>
        <div className="flex gap-3">
          <button
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme === "dark" ? "light" : "dark"
              );
              settheme(localStorage.getItem("currentMode"));
            }}
            className="bg-[var(--nav-bg)] text-[var(--text-subtitle)] hover:text-[var(--text-title)] p-2 hidden md:flex justify-center items-center border-[0.5px] border-[var(--theme-border)] transform active:scale-90 cursor-pointer rounded-full transition duration-200"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="light-mode"
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
              >
                <path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z"></path>
              </svg>
            )}
          </button>
          <button
            onClick={toggleLang}
            className="bg-[var(--nav-bg)] text-[var(--text-subtitle)] hover:text-[var(--text-title)] p-2 hidden md:flex justify-center items-center border-[0.1px] border-blue-900 hover:border-blue-700 active:scale-90 cursor-pointer rounded-full transition duration-200"
          >
            <span className="flex justify-between items-center w-5 h-5">
              {lang === "ar" ? "EN" : "AR"}
            </span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[var(--nav-bg)] text-[var(--text-subtitle)] hover:text-[var(--text-title)] p-2 md:hidden flex justify-center items-center border-[0.5px] border-blue-900 hover:border-blue-700 active:scale-[0.9] cursor-pointer rounded-full transition duration-200"
          >
            {menuOpen ? (
              <i className="fa-solid fa-xmark w-5 "></i> // علامة X
            ) : (
              <i className="fa-solid fa-bars w-5 "></i> // علامة Bars
            )}
          </button>
        </div>
      </div>

      <div
        className={`
    absolute top-16 left-1/2 md:hidden -translate-x-1/2 rounded-b-xl w-[87%] z-10 
    bg-[var(--nav-bg)] text-[var(--text-title)] py-3 space-y-3
    transition-all duration-300 origin-top
    ${
      menuOpen
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    }
  `}
      >
        <div className="flex gap-3 p-1">
          <button
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme === "dark" ? "light" : "dark"
              );
              settheme(localStorage.getItem("currentMode"));
            }}
            className="bg-[var(--nav-bg)] text-[var(--text-subtitle)] hover:text-[var(--text-title)] p-2 flex justify-center items-center border-[0.5px] border-[var(--theme-border)]  active:scale-[0.9] cursor-pointer rounded-full transition duration-200"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="light-mode"
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
              >
                <path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z"></path>
              </svg>
            )}
          </button>
          <button
            onClick={toggleLang}
            className="bg-[var(--nav-bg)] text-[var(--text-subtitle)] hover:text-[var(--text-title)] p-2 flex justify-center items-center border-[0.5px] border-blue-900 hover:border-blue-700 active:scale-[0.9] cursor-pointer rounded-full transition duration-200"
          >
            <span className="flex justify-between items-center w-5 h-5">
              {lang === "ar" ? "EN" : "AR"}
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="#About"
            className="hover:bg-zinc-700 rounded-md transition duration-300 p-2"
          >
            About
          </a>
          <a
            href="#Projects"
            className="hover:bg-zinc-700 rounded-md transition duration-300 p-2"
          >
            Projects
          </a>
          <a
            href="#Certifications"
            className="hover:bg-zinc-700 rounded-md transition duration-300 p-2"
          >
            Certifications
          </a>
          <a
            href="#Contact"
            className="hover:bg-zinc-700 rounded-md transition duration-300 p-2"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
