import React, { useState } from "react";
import NavMenuButton from "../NavMenuButton/NavMenuButton";
import { RiExpandLeftFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import "./scrollbar.css";
function Sidebar() {
  const [sideWidth, setSideWidth] = useState("w-1/5");
  const [isSideOpen, setIsSideOpen] = useState(1);
  const [rotateIcon, setRotate] = useState(" rotate-0");
  const [showSoclialLink, setShowSocialLink] = useState("block");

  function changeSidebarWidth() {
    if (isSideOpen === 1) {
      setSideWidth("w-auto");
      setIsSideOpen(0);
      setShowSocialLink("hidden");
      setRotate(" rotate-180");
    } else {
      setSideWidth("w-1/5");
      setIsSideOpen(1);
      setShowSocialLink("block");
      setRotate(" rotate-0");
    }
  }

  return (
    <>
      <div
        className={`bg-[#1B263B] ${sideWidth}  h-[calc(100vh-70px)] py-[10px] px-[10px] rounded-lg flex flex-col items-center justify-start gap-[5px] overflow-y-scroll`}
      >
        <div className="flex w-[90%] justify-end items-center text-gray-300 mt-2">
          <RiExpandLeftFill
            className={`p-[10px] bg-[#0D1B2A] text-4xl cursor-pointer rounded-lg hover:bg-[#132d4b] ${rotateIcon}`}
            onClick={changeSidebarWidth}
          />
        </div>
        <div className="w-[90%]">
          <NavMenuButton isOpen={isSideOpen} to="/" menuText="Home" />
        </div>

        <div className="w-[90%]">
          <NavMenuButton
            to="/projects"
            isOpen={isSideOpen}
            menuText="Projects"
          />
        </div>
        <div className="w-[90%]">
          <NavMenuButton to="/skills" isOpen={isSideOpen} menuText="Skills" />
        </div>
        <div className="w-[90%]">
          <NavMenuButton to="/contact" isOpen={isSideOpen} menuText="Contact" />
        </div>
        <h1
          className={`text-2xl ${showSoclialLink}  text-gray-500 w-[90%] font-mono`}
        >
          Social Links
        </h1>
        <div className="w-[90%]">
          <SocialMediaLinks
            to="https://linkedin.com/in/jyotishankar-patra"
            isOpen={isSideOpen}
            menuText="Linkedin"
          />
          <SocialMediaLinks
            to="https://github.io/jyotishankar04"
            isOpen={isSideOpen}
            menuText="Github"
          />
          <SocialMediaLinks
            to="https://instagram.com/suvam.io"
            isOpen={isSideOpen}
            menuText="Instagram"
          />
          <SocialMediaLinks
            to="mailto:jyotipatra.subham@gmail.com"
            isOpen={isSideOpen}
            menuText="Mail"
          />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
