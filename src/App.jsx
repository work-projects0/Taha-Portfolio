import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Cards from "./components/Cards";
import Projects from "./components/Projects";
import PreviewProjects from "./components/PreviewProjects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setshowScrollBtn(true) : setshowScrollBtn(false);
    });
  }, []);
  const [showScrollBtn, setshowScrollBtn] = useState(false);
  return (
    <>
      <div className="w-[90%] mx-auto border-x border-[var(--border)]">
        <Navbar />
        <Routes>
          <Route
            path="/project/:id"
            element={
              <>
                <PreviewProjects />{" "}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Hero />
                {/* <About /> */}
                <Cards />
                <Projects />
                <Certificates />
                <Contact />

                <a
                  href="#Navbar"
                  style={{ opacity: showScrollBtn ? 1 : 0 }}
                  className="fixed bottom-5 right-5 w-10 h-10 shadow-lg flex justify-center items-center rounded-full transition duration-700 border border-blue-500/20 text-blue-500"
                >
                  <i className="fas fa-arrow-up"></i>
                </a>
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
  // return (
  //   <div className="w-[90%] mx-auto border-x border-[var(--border)]">
  //     <Navbar />
  //     <Hero />
  //     {/* <About /> */}
  //     <Projects />
  //     <Certificates />
  //     <Contact />

  //     <a
  //       href="#Navbar"
  //       style={{ opacity: showScrollBtn ? 1 : 0 }}
  //       className="fixed bottom-5 right-5 w-10 h-10 shadow-lg flex justify-center items-center rounded-full transition duration-700 border border-blue-500/20 text-blue-500"
  //     >
  //       <i className="fas fa-arrow-up"></i>
  //     </a>
  //   </div>
  // );
}

export default App;
