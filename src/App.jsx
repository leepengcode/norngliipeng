import React, { useRef } from "react";
import Headroom from "react-headroom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Skill from "./pages/Skill";
import Home from "./pages/home";

function App() {
  const home = useRef(null);
  const portfolio = useRef(null);
  const blog = useRef(null);
  const contact = useRef(null);
  const skill = useRef(null);
  const service = useRef(null);
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Headroom className="border-b ">
        <div className="w-[75%]  mx-auto flex justify-between items-center h-[70px] bg-transparent  ">
          <div>
            <h1
              className=" cursor-pointer text-3xl font-semibold hover:text-cyan-650 hover: drop-shadow:
                1px 1px 2px black,
                0 0 1em blue,
                0 0 0.2em blue, transition-all duration-100 hover:animate-pulse"
            >
              Peng.
            </h1>
          </div>
          <div className="">
            <ul className="flex items-center gap-10 text-center cursor-pointer text-lg font-semibold">
              <li
                onClick={() => scrollToSection()}
                className=" hover:text-cyan-650 transition-all duration-100 hover:animate-pulse hover:border-b"
              >
                Home
              </li>
              <li
                onClick={() => scrollToSection(skill)}
                className=" hover:text-cyan-650 transition-all duration-100 hover:animate-pulse hover:border-b"
              >
                Skill
              </li>
              <li
                onClick={() => scrollToSection(portfolio)}
                className=" hover:text-cyan-650  transition-all duration-100 hover:animate-pulse hover:border-b"
              >
                Portfolio
              </li>
              <li
                onClick={() => scrollToSection(service)}
                className=" hover:text-cyan-650  transition-all duration-300 hover:animate-pulse hover:border-b"
              >
                Service
              </li>
              <li
                onClick={() => scrollToSection(about)}
                className=" hover:text-cyan-650  transition-all duration-300 hover:animate-pulse hover:border-b"
              >
                About
              </li>
              <li
                onClick={() => scrollToSection(about)}
                className=" hover:text-cyan-650  transition-all duration-100 hover:animate-pulse hover:border-b "
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </Headroom>
      <div>
        <div ref={home} className="home">
          <Home />
        </div>
        <hr />
        <div ref={skill} className="skill">
          <Skill />
        </div>
        <hr />
        <div ref={portfolio} className="portfolio">
          <Portfolio />
        </div>
        <hr />
        <div ref={service} className="service">
          <Service />
        </div>
        <hr />
        <div ref={about} className="about">
          <About />
        </div>
        <hr />
        <div ref={contact} className="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
