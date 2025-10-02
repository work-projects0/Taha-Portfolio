import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { myProjects } from "../assets/data/projectsData";

const btns = {
  primary:
    "bg-blue-600 py-2 px-4 rounded-md hover:-translate-y-1 transition duration-300 hover:bg-blue-700 hover:shadow-2xl",
  secondary:
    "bg-[rgb(39,96,143)] hover:bg-[rgb(32,80,119)] hover:-translate-y-1 hover:shadow-[0_3px_10px_rgba(34,211,238,0.9)] transition duration-300 rounded-lg py-3 px-4 w-full",
};

function Projects() {
  const { t, i18n } = useTranslation();

  const [visibleCount, setVisibleCount] = useState(3); // هيبدأ يعرض 2 بس

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3); // كل مرة يزود 2
  };

  return (
    <section
      id="Projects"
      className="bg-[var(--bg-primary)] text-[var(--text-main-dark)] pt-24"
    >
      <div className="space-y-24">
        <div data-aos="fade-up" className="relative mx-auto max-w-full lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-title)]">
              {t("projects.head.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-subtitle)]">
              {t("projects.head.description")}
            </p>
          </div>
        </div>

        <div className="relative z-0 px-2 text-[var(--text-title)] flex flex-wrap justify-center items-start gap-10">
          {myProjects.slice(0, visibleCount).map((item) => {
            return (
              <div key={item.id} data-aos="zoom-in" className="w-[460px]">
                <div className="bg-[var(--bg-card-dark)] hover:border-cyan-500 hover:-translate-y-0.5 hover:rotate-1 transition duration-300 border border-[var(--border)] shadow-xl rounded-lg">
                  <div className="transition duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.7)]">
                    <img
                      src={item.imgPath}
                      loading="lazy"
                      className="rounded-t-lg h-[250px] w-full"
                      alt=""
                    />
                    <div className="px-7 py-6">
                      <div className="mb-5">
                        <h1 className="font-bold">
                          {t(`${item.i18nKey}.title`)}
                        </h1>
                        <p>
                          {t(`${item.i18nKey}.description`).length > 198
                            ? t(`${item.i18nKey}.description`).slice(0, 198) +
                              " ..."
                            : t(`${item.i18nKey}.description`)}
                        </p>
                      </div>

                      <Link
                        to={`/project/${item.id}`}
                        className={`block text-center text-white ${btns.secondary}`}
                      >
                        <span>{t("projects.buttons.button1")}</span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {visibleCount < myProjects.length && (
          <button
            onClick={handleSeeMore}
            className="flex flex-col text-[var(--text-title)] mx-auto items-center cursor-pointer"
          >
            <span className="text-xl font-bold">
              {t("projects.buttons.button2")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-10 animate-bounce"
            >
              <path
                fill="currentColor"
                d="M16.9 9.2c-.4-.4-1-.4-1.4 0L12 12.7L8.5 9.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.2 4.2c.2.2.4.3.7.3s.5-.1.7-.3l4.2-4.2c.4-.4.4-1 0-1.4"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
export default Projects;
