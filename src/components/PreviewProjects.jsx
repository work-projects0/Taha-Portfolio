import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import ProjectSlider from "./projectSlider";
import { myProjects } from "../assets/data/projectsData";
import { useTranslation } from "react-i18next";

function PreviewProjects() {
  const { t, i18n } = useTranslation();

  const { id } = useParams();
  const btns = {
    primary:
      "bg-blue-600 py-2 px-4 rounded-md hover:-translate-y-1 transition duration-300 hover:bg-blue-700 hover:shadow-2xl",
    secondary:
      "bg-[rgb(39,96,143)] hover:bg-[rgb(32,80,119)] hover:-translate-y-1 hover:shadow-[0_3px_10px_rgba(34,211,238,0.9)] transition duration-300 rounded-lg py-3 px-4 w-full",
  };

  const project = myProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-[84vh] flex justify-center items-center text-center -translate-y-16 font-bold text-3xl text-red-500 mt-20">
        🚨 المشروع غير موجود
      </div>
    );
  }
  return (
    <section
      id="Projects"
      className="bg-[var(--bg-primary)] text-[var(--text-title)] pt-36 px-3 sm:px-10 md:px-2 lg:px-24 xl:px-36"
    >
      <div className="space-y-24">
        <div data-aos="fade-up" className="relative mx-auto max-w-full lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-title)]">
              {t(`${project.i18nKey}.title`)}
            </h2>
          </div>
        </div>

        <div className="space-y-24">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center">
            <div className="max-w-md xl:max-w-xl 2xl:max-w-2xl space-y-8">
              <h1 className="font-bold text-2xl text-[var(--text-title)]">
                {t(`${project.i18nKey}.title`)}
              </h1>
              <p className="text-xl text-[var(--text-title)]">
                {t(`${project.i18nKey}.description`)}{" "}
              </p>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="space-x-1">
                  <i class="fa-solid fa-location-dot text-blue-500"></i>
                  <span>Location: {t(`${project.i18nKey}.location`)}</span>
                </div>
                <div className="space-x-1">
                  <i class="fa-solid fa-clock"></i>{" "}
                  <span>Duration: {t(`${project.i18nKey}.duration`)}</span>
                </div>
              </div>
              <a
                href={project.pdf}
                className={`text-white space-x-2 ${btns.secondary}`}
                download
              >
                <i className="fas fa-download"></i>
                <span>{t("projects.buttons.button3")}</span>{" "}
              </a>
            </div>
            <div>
              <img
                src={project.imgPath}
                className="w-[600px] rounded-md"
                alt="project"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <iframe
              src={project.pdf}
              className="w-[700px] h-[700px]"
              height="300px"
            ></iframe>
          </div>
          <ProjectSlider images={project.images} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
export default PreviewProjects;
