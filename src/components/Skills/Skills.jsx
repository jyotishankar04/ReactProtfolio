import React from "react";
import ReactSkillbar from "react-skillbars";
import SkillsCards from "/skillsCards";
function Skills(props) {
  const skillsData = [
    {
      type: "HTML",
      level: 90,
      color: "blue",
      duration: 5,
    },
    {
      type: "CSS",
      level: 80,
      color: "pink",
      duration: 5,
    },
    {
      type: "Java Script",
      level: 60,
      color: "salmon",
      duration: 5,
    },
    {
      type: "ReactJS",
      level: 30,
      color: "green",
      duration: 5,
    },
    {
      type: "Node",
      level: 50,
      color: "yellow",
      duration: 5,
    },
  ];
  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };
  return (
    <>
      <div className="w-[calc(100%)] overflow-y-scroll flex flex-col justify-start items-center h-[calc(100vh-70px)] ">
        <div className="w-[90%] ">
          <ReactSkillbar skills={skillsData} colors={colors} />
        </div>
        <h1 className="text-[50px] text-gray-500 font-mono font-bold m-[10px]">
          Skills
        </h1>
        <div className="w-[90%] justify-around  items-start gap-5 mb-[20px] flex flex-wrap ">
          <SkillsCards name="HTML" />
          <SkillsCards name="css" />
          <SkillsCards name="js" />
          <SkillsCards name="react" />
          <SkillsCards name="tailwind" />
          <SkillsCards name="node" />
          <SkillsCards name="express" />
          <SkillsCards name="mongo" />
          <SkillsCards name="mysql" />
          <SkillsCards name="git" />
          <SkillsCards name="cpp" />
          <SkillsCards name="java" />
        </div>
      </div>
    </>
  );
}

export default Skills;
