import React from "react";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <>
      <div className="py-[20px] px-[10px] w-[calc(100%)] flex gap-5 overflow-y-scroll  flex-wrap items-start justify-evenly  h-[calc(100vh-70px)] ">
        <ProjectCards
          title="Weather App"
          details="A simple weather app using HTML, CSS, JS"
          imgLink="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          sourceLink="https://github.com/jyotishankar04/weather-app"
          visitLink="https://jyotishankar04.github.io/weather-app/"
        ></ProjectCards>
        <ProjectCards
          title="To-Do List"
          details="To-Do List using HTML, CSS, JS"
          imgLink="https://images.pexels.com/photos/1888009/pexels-photo-1888009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          sourceLink="https://github.com/jyotishankar04/To-Do-List"
          visitLink="https://jyotishankar04.github.io/To-Do-List"
        ></ProjectCards>
        <ProjectCards
          title="Bubble Game"
          details="Bubble Game using HTML, CSS, JS"
          imgLink="https://images.pexels.com/photos/7232914/pexels-photo-7232914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          sourceLink="https://github.com/jyotishankar04/Bubble-Game"
          visitLink="https://jyotishankar04.github.io/Bubble-Game"
        ></ProjectCards>
        <ProjectCards
          title="Portfolio"
          details="This is my old portfolio made using HTML, CSS, JS"
          imgLink="https://images.pexels.com/photos/14936124/pexels-photo-14936124.jpeg?auto=compress&cs=tinysrgb&w=600"
          sourceLink="https://github.com/jyotishankar04/portfolio"
          visitLink="https://jyotishankar04.github.io/portfolio"
        ></ProjectCards>
        <ProjectCards
          title="Rock-Paper-Scissor "
          details="Rock paper scissor game using HTML, CSS, JS"
          imgLink="https://images.pexels.com/photos/8456131/pexels-photo-8456131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          sourceLink="https://github.com/jyotishankar04/Rock-Paper"
          visitLink="https://jyotishankar04.github.io/Rock-Paper"
        ></ProjectCards>
        <ProjectCards
          title="Tic-Tak-Toe-Game "
          details="HTML, CSS, JS"
          imgLink="https://images.pexels.com/photos/220053/pexels-photo-220053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          sourceLink="https://github.com/jyotishankar04/Tic-Tak-Toe-Game"
          visitLink="https://jyotishankar04.github.io/Tic-Tak-Toe-Game"
        ></ProjectCards>
        <ProjectCards
          title="Random-Color-Generator"
          details="Random-Color-Generator (HTML, CSS, JS)"
          imgLink="https://images.pexels.com/photos/4237148/pexels-photo-4237148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          sourceLink="https://github.com/jyotishankar04/Random-Color-Generator"
          visitLink="https://jyotishankar04.github.io/Random-Color-Generator"
        ></ProjectCards>
        <ProjectCards
          title="Calculator"
          details="A simple calculator with basic functionalities(HTML, CSS, JS)"
          imgLink="https://images.pexels.com/photos/6927334/pexels-photo-6927334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          sourceLink="https://github.com/jyotishankar04/Calculator-1st-Project"
          visitLink="https://jyotishankar04.github.io/Calculator-1st-Project"
        ></ProjectCards>
      </div>
    </>
  );
}

export default Projects;
