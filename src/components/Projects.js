import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div>
      <div className="all-projects-container">
        {/* <h5>- Projects (Design & Development) -</h5> */}

        <div className="single-project-container">
          <a
            href="https://t-soldwedel.github.io/bogus-website/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <h3>TrioMio</h3>
            <p>2022 / Pro bono / Website</p>
          </a>
        </div>

        <div className="single-project-container">
          <a
            href="https://in-place.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <h3>InPlace Learning Project</h3>
            <p>2023 / Training / Fullstack App</p>
          </a>
        </div>

        <div className="single-project-container">
          <a
            href="https://in-place.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <h3>Next.js Learning Project</h3>
            <p>2023 / Training / Fullstack App</p>
          </a>
        </div>
      </div>
    </div>
  );
}
