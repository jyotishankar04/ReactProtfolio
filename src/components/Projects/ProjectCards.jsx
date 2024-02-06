import React from "react";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <>
      <div className="flex-grow basis-[250px] max-w-[300px] bg-gray-300 rounded-md border hover:scale-105 transition-all ease-out duration-300">
        <img
          src={props.imgLink}
          className="h-[150px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{props.title}</h1>
          <p className="mt-3 text-sm text-gray-600">{props.details}</p>

          <div className="flex justify-evenly items-center gap-4">
            <Link
              to={props.visitLink}
              className="mt-4 rounded-sm bg-black w-[80%] py-1 px-5 text-center text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Visit Site
            </Link>

            <Link
              to={props.sourceLink}
              className="mt-4 rounded-sm bg-black w-[80%] py-1 px-5 text-center text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Source Code
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
