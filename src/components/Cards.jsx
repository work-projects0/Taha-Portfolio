import { useEffect, useState } from "react";

function Cards() {
  const [aosType, setAosType] = useState("fade-up");
  const [aosType2, setAosType2] = useState("fade-up");

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setAosType("fade-left");
        setAosType2("fade-right");
      } else {
        setAosType("fade-up");
        setAosType2("fade-up");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const card =
    "bg-[var(--bg-card-dark)] text-[var(--text-title)] p-6 text-center border border-[var(--border)] backdrop-blur-md rounded-xl transition-all duration-300 ease-in-out shadow-md hover:-translate-y-1 hover:shadow-[0_5px_10px_rgba(34,211,238,0.7)]";
  return (
    <section
      id="Cards"
      className="bg-[var(--bg-primary)] text-[var(--text-main-dark)]"
    >
      <div className="space-y-24">
        <div
          // data-aos="fade-up"
          className="relative mx-auto max-w-full lg:px-8"
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-title)]">
              Civil Engineering Journey
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-subtitle)]">
              With 12+ years of experience in Egypt and Saudi Arabia, I’ve
              worked on residential, commercial, and infrastructure projects,
              ensuring quality and impact from planning to completion.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div data-aos={aosType}>
              <div className={card}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 mx-auto text-blue-600 mb-4"
                >
                  <path
                    fill="currentColor"
                    d="M20 16v-6h2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h8v2H8v12zm-9.09-8.92L14 10.17l6.59-6.59L22 5l-8 8l-4.5-4.5zM16 20v2H4a2 2 0 0 1-2-2V7h2v13z"
                  />
                </svg>{" "}
                <h4 className="font-bold mb-2">QA/QC Management</h4>
                <p>
                  {" "}
                  Ensuring top construction quality through inspections, audits,
                  and compliance with international standards.
                </p>
              </div>
            </div>
            <div data-aos={aosType2}>
              {" "}
              <div className={card}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 mx-auto text-red-600 mb-4"
                >
                  <path
                    fill="currentColor"
                    d="M21 11.11V5a2 2 0 0 0-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h6.11c1.26 1.24 2.98 2 4.89 2c3.87 0 7-3.13 7-7c0-1.91-.76-3.63-2-4.89M12 3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M5 19V5h2v2h10V5h2v4.68c-.91-.43-1.92-.68-3-.68H7v2h4.1c-.6.57-1.06 1.25-1.42 2H7v2h2.08c-.05.33-.08.66-.08 1c0 1.08.25 2.09.68 3zm11 2c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m.5-4.75l2.86 1.69l-.75 1.22L15 17v-5h1.5z"
                  />
                </svg>
                <h4 className="font-bold mb-2">
                  Construction & Project Management
                </h4>
                <p>
                  {" "}
                  Managing projects from planning to handover, controlling time,
                  cost, and stakeholder coordination.
                </p>
              </div>
            </div>
            <div data-aos={aosType}>
              <div className={card}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 mx-auto text-green-600 mb-4"
                >
                  <path
                    fill="currentColor"
                    d="m22.9 21.2l-4.1-4.1c.4-1 .2-2.3-.7-3.1c-.9-.9-2.2-1.1-3.3-.6l1.9 1.9l-1.4 1.4l-2-2c-.5 1.1-.3 2.4.6 3.4c.9.9 2.1 1.1 3.1.7l4.1 4.1c.2.2.5.2.6 0l1-1c.3-.3.3-.6.2-.7M13 20H2v-2c0-2.2 3.6-4 8-4c.5 0 1 0 1.4.1c-.3.6-.4 1.2-.4 1.9c0 1.6.8 3.1 2 4M10 4C7.8 4 6 5.8 6 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4"
                  />
                </svg>
                <h4 className="font-bold mb-2">Consultancy & Supervision</h4>
                <p>
                  {" "}
                  Supervising site execution to ensure compliance with designs,
                  safety, and client requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Cards;
