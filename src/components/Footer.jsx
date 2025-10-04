import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="relative text-[var(--text-title)] space-y-16">
      <div className="h-[5px] border border-zinc-700  rounded-full w-[80%] mx-auto"></div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-1 px-[5%] lg:px-[9%] xl:px-[15%] pb-10">
        <div className="space-y-1 text-center sm:text-start">
          <a href="#Navbar" className="text-2xl sm:text-3xl font-bold">
            <span>
              {" "}
              {t("footer.Eng")}
              {t("navbar.firstName")}
            </span>
            {i18n.language === "ar" && " "}
            <span className="text-[var(--nav-text)]">
              {t("navbar.secondName")}
            </span>
          </a>

          <div className="sm:text-xl">{t("footer.title")}</div>
        </div>
        <div className="space-y-2 lg:translate-y-2">
          <div className="text-center sm:text-start">
            {t("footer.copyright")}
          </div>
          <div className="flex items-center justify-center gap-2">
            <span> {t("footer.developed")}: </span>{" "}
            <a
              href="https://www.linkedin.com/in/ziadmostafa-dev/"
              target="_blank"
              className="bg-[var(--nav-bg)] font-bold hover:bg-[#205077] hover:text-white px-3 py-1 rounded-lg transition duration-500"
            >
              Ziad Mostafa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
