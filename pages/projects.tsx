import React from "react";
import ProjectCard from "./components/ProjectCard";

function Projects() {
  return (
    <div
      id="projects"
      className="lg:my-0 my-48 lg:flex lg:grid-flow-row lg:grid-cols-3 lg:gap-44 lg:m-12 m-4 lg:justify-center"
    >
      <ProjectCard
        id="fitplan"
        title={"Fitplan"}
        description={
          "A fullstack app built with Blitz, Tailwind, and React Final Form. I created this project originally to help me keep track of my workouts at home."
        }
        desktopScreenshot={"/fitplan-desktop.jpg"}
        website={"https://fit-plan-2.vercel.app/"}
        videoSrc={"/fitplan-demo.mp4"}
        repoLink={"https://github.com/lbd1607/FITplan-2"}
      />
      <ProjectCard
        id="cdv4democracy"
        title={"Campaign website"}
        description={
          "A website built with Next and Tailwind. A friend of mine decided to run for US Senate, so I built him a website on a short timeframe to his specs."
        }
        desktopScreenshot={"/cdv4democracy-desktop.jpg"}
        mobileScreenshot={"/cdv4democracy-mobile.jpg"}
        website={"https://www.cdv4democracy.com/"}
        videoSrc={"/cdv-demo.mp4"}
      />
    </div>
  );
}

export default Projects;
