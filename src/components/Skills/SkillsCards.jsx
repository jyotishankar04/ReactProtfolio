import React from "react";
import { MdHtml, MdCss, MdJavascript } from "react-icons/md";
import { FaReact, FaNode, FaGit, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
function SkillsCards(props) {
  let icon;
  switch (props.name) {
    case "HTML":
      icon = (
        <MdHtml className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300 cursor-pointer ease-in" />
      );
      break;
    case "css":
      icon = (
        <MdCss className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300 cursor-pointer ease-in" />
      );
      break;
    case "js":
      icon = (
        <MdJavascript className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300 cursor-pointer ease-in" />
      );
      break;
    case "react":
      icon = (
        <FaReact className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300 cursor-pointer ease-in" />
      );
      break;
    case "node":
      icon = (
        <FaNode className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300 cursor-pointer ease-in" />
      );
      break;
    case "tailwind":
      icon = (
        <SiTailwindcss className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300 cursor-pointer ease-in" />
      );
      break;
    case "express":
      icon = (
        <SiExpress className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300 cursor-pointer ease-in" />
      );
      break;
    case "mongo":
      icon = (
        <SiMongodb className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300 cursor-pointer ease-in" />
      );
      break;
    case "mysql":
      icon = (
        <SiMysql className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300 cursor-pointer ease-in" />
      );
      break;
    case "git":
      icon = (
        <FaGit className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300 cursor-pointer ease-in" />
      );
      break;
    case "cpp":
      icon = (
        <TbBrandCpp className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300 cursor-pointer ease-in" />
      );
      break;
    case "java":
      icon = (
        <FaJava className="text-[100px]  text-gray-800 group-hover:scale-110 transition-transform duration-300  cursor-pointer ease-in" />
      );
      break;
  }
  return (
    <>
      <div className="bg-gray-200 basis-[200px] max-w-[200px]  group hover:scale-95  flex-grow flex justify-center transition-all ease-out duration-300 hover:shadow-xl hover:shadow-gray-500 items-center rounded-lg">
        {icon}
      </div>
    </>
  );
}

export default SkillsCards;
