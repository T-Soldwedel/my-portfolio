import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./styles/App.css";
import { FaGithub } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const isActive = ({ isActive }) => {
  return {
    // color: isActive ? "rgba(255, 255, 0, 0.75)" : "",
    background: isActive ? "rgb(255, 255, 0,0.5)" : "",
  };
};

const App = () => {
  return (
    <>
      <div className="page-container">
        <header>
          <div className="name-container">
            <h1>Thomas Soldwedel</h1>
            <p>Fullstack Web Developer</p>
          </div>

          <nav className="navigation">
            <ul>
              <li>
                <NavLink className="navlink" to="/" style={isActive}>
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/projects" style={isActive}>
                  Projects
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route />
          </Routes>
        </main>

        <footer>
          <span>
            <a
              href="https://github.com/T-Soldwedel"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </span>

          <span>
            <a
              href="https://www.linkedin.com/in/thomas-soldwedel/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </span>
        </footer>
      </div>
    </>
  );
};

export default App;
