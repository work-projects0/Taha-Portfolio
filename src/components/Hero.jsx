import StarfieldBackground from "./Particles";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import heroAnimation2 from "../assets/animations/space boy developer.json";
import build from "../assets/animations/build.json";
import CV from "../assets/files/TAHA FAWZY, CV.pdf";
import personalPhoto from "../assets/images/personalphoto.png";
import personalPhoto1 from "../assets/images/personalphoto1.jpg";
import personalPhoto2 from "../assets/images/personalphoto2.jpg";
import verifiedIcon from "../assets/images/icons8-verified-480.png";
import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";

function Hero() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setshowScrollBtn(false) : setshowScrollBtn(true);
    });
  }, []);
  const [showScrollBtn, setshowScrollBtn] = useState(true);
  const btns = {
    primary:
      "bg-blue-600 py-2 px-4 rounded-md hover:-translate-y-1 transition duration-300 hover:bg-blue-700 hover:shadow-2xl",
    secondary:
      "bg-[rgb(39,96,143)] hover:bg-[rgb(32,80,119)] hover:-translate-y-1 hover:shadow-[0_3px_10px_rgba(34,211,238,0.9)] transition duration-300 rounded-lg py-3 px-4 w-full",
  };
  const state = {
    openToWork: "bg-green-600 py-0.5 px-3 rounded-full",
    Employed: "bg-red-600 py-0.5 px-3 rounded-full",
  };
  const SocialIcon =
    "flex justify-center items-center w-10 h-10 bg-white hover:bg-blue-600 border border-gray-300 hover:border-blue-600 text-blue-600 hover:text-white  rounded-full transition duration-300 hover:-translate-y-0.5";
  return (
    <div
      id="Home"
      className="min-h-[80vh] bg-[var(--bg-primary)] text-[var(--text-main-dark)] relative isolate transform-gpu flex items-center"
    >
      <div className="w-full flex mt-10 md:mt-0 flex-col md:flex-row justify-between items-center px-3 sm:px-10 md:px-2 lg:px-24 xl:px-36">
        {/* Left-Section */}
        <div className="space-y-10 ">
          <div className="flex items-end">
            <img
              src={personalPhoto2}
              className="rounded-full w-24 h-24 border border-amber-500 p-[1px] shadow-[2px_2px_40px_rgba(203,200,200,0.586)_inset] "
              alt="TahaFawzy-Photo"
            />
            <div className="flex items-center gap-1">
              <img
                src={verifiedIcon}
                className="w-5 h-5 "
                alt="TahaFawzy-Photo"
              />
              <span className={state.openToWork}>Open to work</span>
            </div>
          </div>
          <h1 className="text-3xl text-[var(--text-title)] sm:text-4xl max-w-2xl font-bold">
            <Typewriter
              key={i18n.language}
              words={[`${t("hero.title")}`]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={50}
            />
          </h1>
          <p className="max-w-2xl text-[var(--text-title)]">
            {t("hero.description")}
          </p>
          <div
            className="space-x-6 space-y-3 w-full sm:w-1/2 md:w-fit"
            dir="ltr"
          >
            <a
              href={CV}
              className={`block rtl:text-right ltr:text-left md:inline space-x-2 ${btns.secondary}`}
              dir="ltr"
              download
            >
              <i className="fas fa-download"></i>
              <span> {t("hero.buttons.downloadCV")}</span>{" "}
            </a>
            <a
              href="#Projects"
              className={`block rtl:text-right ltr:text-left md:inline space-x-2 ${btns.secondary}`}
              dir="ltr"
            >
              <i className="fas fa-eye"></i>
              <span> {t("hero.buttons.viewWork")}</span>{" "}
            </a>
          </div>

          <div className="flex gap-4 text-[var(--text-title)]">
            <a
              href="https://www.linkedin.com/in/taha-fawzi-662602129/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-[var(--hero-links)]/60 to-[var(--hero-links)]/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-[var(--hero-links)]/40 group relative overflow-hidden"
            >
              {/* تأثير اللمعة */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

              {/* أيقونة LinkedIn */}
              <div className="relative z-10">
                <svg
                  className="w-5 h-5  group-hover:text-blue-400 transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path
                    d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.09 108 0 83.5 0 53.8 
  0 24.6 24.09 0 53.84 0c29.7 0 53.78 24.6 53.78 53.8 0 
  29.7-24.08 54.2-53.78 54.2zM447.9 448h-92.4V304.1c0-34.3-.7-78.3-47.7-78.3-47.7 
  0-55 37.2-55 75.6V448h-92.4V148.9h88.6v40.8h1.3c12.3-23.2 
  42.4-47.7 87.2-47.7 93.3 0 110.5 61.4 110.5 141.3V448z"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://www.facebook.com/share/1DgdChcfgs/"
              target="_blank"
              className="p-3 rounded-full backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-[var(--hero-links)]/60 to-[var(--hero-links)]/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-[var(--hero-links)]/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <svg
                  className="w-5 h-5 fill-current group-hover:text-blue-400 transition-colors duration-300"
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91V127.42c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.1 44.38-121.1 124.72V195.3H22.89V288h81.36v224h100.17V288z" />
                </svg>
              </div>
            </a>
            <a
              href="https://wa.me/201033961208" // 👈 غير الرقم بتاعك هنا
              target="_blank"
              className="p-3 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-tr from-[var(--hero-links)]/60 to-[var(--hero-links)]/40 shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-green-500/50 hover:bg-gradient-to-tr hover:from-green-500/10 hover:to-[var(--hero-links)]/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <svg
                  className="w-5 h-5 fill-current group-hover:text-green-400 transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 100.7 32 0 132.7 0 256c0 45.1 11.8 89.2 34.3 127.7L0 480l99.7-32.9c36.2 19.8 76.9 30.2 118.2 30.2h.1c123.2 0 223.9-100.7 223.9-224 0-59.3-23.1-115.1-65-157zm-157 341.6c-36.1 0-71.5-9.8-102.4-28.4l-7.3-4.3-59.2 19.6 19.5-57.8-4.8-7.5C54.4 329.5 44.6 293.2 44.6 256c0-99 80.4-179.4 179.3-179.4 47.9 0 92.9 18.7 126.7 52.5 33.8 33.8 52.5 78.8 52.5 126.7 0 99-80.4 179.4-179.2 179.4zm101-134.7c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66.1-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.3s19.9 53.7 22.7 57.4c2.8 3.7 39.1 59.7 94.8 83.7 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.3 4.6-12.8 4.6-23.7 3.2-26.3-1.3-2.6-5-4.1-10.5-6.9z" />
                </svg>
              </div>
            </a>
            <a
              href="https://www.instagram.com/eng.taha_fawzy?utm_source=qr&igsh=MmZubHFqYWlsaG14"
              target="_blank"
              className="p-3 rounded-full backdrop-blur-lg border border-pink-500/20 bg-gradient-to-tr from-[var(--hero-links)]/60 to-[var(--hero-links)]/40 shadow-lg hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-pink-500/50 hover:bg-gradient-to-tr hover:from-pink-500/10 hover:to-[var(--hero-links)]/40 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <svg
                  className="w-5 h-5 fill-current group-hover:text-pink-400 transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9s-58-34.5-93.9-36.2C293.1 32 154.9 32 111.6 34.6c-35.9 1.7-67.7 9.9-93.9 36.2S-16.8 128.8-18.5 164.7C-21.1 208-21.1 336.2-18.5 379.5c1.7 35.9 9.9 67.7 36.2 93.9s58 34.5 93.9 36.2c43.3 2.6 181.5 2.6 224.8 0 35.9-1.7 67.7-9.9 93.9-36.2s34.5-58 36.2-93.9c2.6-43.3 2.6-181.5 0-224.8zM398.8 388c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
        {/* Right-Section */}
        <div className="sm:w-[500px]">
          <Lottie animationData={build} loop={true} />
        </div>
      </div>
      <a
        href="#Cards"
        style={{ opacity: showScrollBtn ? 1 : 0 }}
        className="absolute text-[var(--text-title)] bottom-10 left-1/2 -translate-x-1/2 -translate-y-[74px] animate-bounce transition duration-500"
      >
        <i className="fas fa-chevron-down text-2xl"></i>
      </a>
    </div>
  );
}
export default Hero;
