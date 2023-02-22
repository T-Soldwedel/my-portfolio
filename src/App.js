import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./styles/App.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import profileImg from "./assets/profileImg.png";

const isActive = ({ isActive }) => {
  return {
    color: isActive ? "rgba(255, 255, 255)" : "",
    background: isActive ? "rgba(0, 0, 255, 0.45)" : "",
  };
};

const App = () => {
  window.onload = function () {
    const greenBtn = document.querySelector("#green");
    const purpleBtn = document.querySelector("#purple");
    const blueBtn = document.querySelector("#blue");
    const blackBtn = document.querySelector("#black");

    purpleBtn.addEventListener("click", () => {
      document.documentElement.style.setProperty("--first-color", "#3e015195");
      // set back to ""
      document.documentElement.style.setProperty("--second-font-color", "");
      document.documentElement.style.setProperty("--first-font-color", "");
    });
    blueBtn.addEventListener("click", () => {
      document.documentElement.style.setProperty("--first-color", "#0b3f64");
      document.documentElement.style.setProperty("--second-font-color", "");
      document.documentElement.style.setProperty("-font-color", "#e8d35e");
      // set back to ""
      document.documentElement.style.setProperty("--first-font-color", "");
    });

    greenBtn.addEventListener("click", () => {
      document.documentElement.style.setProperty("--first-color", "#026d06a8");
      // set back to ""
      document.documentElement.style.setProperty("--second-font-color", "");
      document.documentElement.style.setProperty("--first-font-color", "");
    });

    blackBtn.addEventListener("click", () => {
      document.documentElement.style.setProperty("--first-color", "#000000");
      document.documentElement.style.setProperty(
        "--second-font-color",
        "#e8d35e"
      );
      document.documentElement.style.setProperty("--first-font-color", "white");
    });
  };

  return (
    <>
      <div className="page-container">
        <header>
          <div className="name-container">
            <img src={profileImg} alt="profile"></img>
            <div>
              <h1>Thomas Soldwedel</h1>
              <p>Fullstack Web Developer</p>
            </div>
          </div>

          <nav className="navigation">
            <ul>
              <div className="navlinks">
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
              </div>

              <li className="color-btns">
                <button id="purple" className="color-btn"></button>

                <button id="green" className="color-btn"></button>

                <button id="blue" className="color-btn"></button>

                <button id="black" className="color-btn"></button>
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
