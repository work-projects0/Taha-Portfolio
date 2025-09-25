import cardImage from "../assets/images/cardImage.png";
import CV from "../assets/files/TAHA FAWZY, CV.pdf";
import { Link, useParams } from "react-router-dom";
import cardImage2 from "../assets/images/projects/project2/main.JPG";
import Footer from "./Footer";
import Slider from "./Certificates";
import ProjectSlider from "./projectSlider";

function PreviewProjects() {
  const btns = {
    primary:
      "bg-blue-600 py-2 px-4 rounded-md hover:-translate-y-1 transition duration-300 hover:bg-blue-700 hover:shadow-2xl",
    secondary:
      "bg-[rgb(39,96,143)] hover:bg-[rgb(32,80,119)] hover:-translate-y-1 hover:shadow-[0_3px_10px_rgba(34,211,238,0.9)] transition duration-300 rounded-lg py-3 px-4 w-full",
  };
  return (
    <section
      id="Projects"
      className="bg-[var(--bg-primary)] text-[var(--text-title)] pt-36 px-3 sm:px-10 md:px-2 lg:px-24 xl:px-36"
    >
      <div className="space-y-24">
        <div
          data-aos="fade-up"
          className="relative mx-auto max-w-full lg:px-8"
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-title)]">
              Al-Jabr Wedding Hall
            </h2>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between items-center">
            <div className="max-w-2xl space-y-8">
              <h1 className="font-bold text-2xl text-[var(--text-title)]">
                Al-Jabr Wedding Hall
              </h1>
              <p className="text-xl text-[var(--text-title)]">
                Al-Jabr Wedding Hall is a modern venue designed and built to
                host elegant weddings and large gatherings. The project focused
                on high-quality finishing, efficient space planning, and durable
                structures, creating a luxurious and welcoming atmosphere for
                guests.
              </p>
              <div className="flex flex-col md:flex-row gap-5 ">
                <div className="space-x-1">
                  <i class="fa-solid fa-location-dot text-blue-500"></i>
                  <span>Location: Egypt, Cairo City</span>
                </div>
                <div className="space-x-1">
                  <i class="fa-solid fa-clock"></i>{" "}
                  <span>Duration: 3 months</span>
                </div>
              </div>
              <a href="#Projects" className={`text-white space-x-2 ${btns.secondary}`}>
                <i className="fas fa-download"></i>
                <span>Downlaod Layout PDF</span>{" "}
              </a>
            </div>
            <div>
              <img src={cardImage2} className="w-[600px] rounded-md" alt="" />
            </div>
          </div>
          <ProjectSlider />
        </div>
        <Footer />
      </div>
    </section>
  );
}
export default PreviewProjects;
