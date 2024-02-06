import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaMailchimp,
  //   FaMailBulk,
} from "react-icons/fa6";

import { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";

function SocialMediaLinks(props) {
  const [hiddenText, setHiddenText] = useState(
    props.isOpen === 1 ? "block" : "hidden"
  );
  useEffect(() => {
    setHiddenText(props.isOpen === 0 ? "hidden" : "block");
  }, [props.isOpen]);

  let icon;
  switch (props.menuText) {
    case "Instagram":
      icon = <FaInstagram className="text-gray-300 text-2xl" />;
      break;
    case "Github":
      icon = <FaGithub className="text-gray-300 text-2xl" />;
      break;
    case "Linkedin":
      icon = <FaLinkedinIn className="text-gray-300 text-2xl" />;
      break;
    case "Mail":
      icon = <FaEnvelope className="text-gray-300 text-2xl" />;
      break;
  }
  return (
    <>
      <Link
        target="_blank"
        to={props.to}
        className={`
          bg-[#0D1B2A] flex gap-5 items-center  w-full text-gray-300 rounded-lg cursor-pointer   py-[10px] px-[10px]  mt-5  hover:bg-[#21354b]`}
      >
        {icon}
        <h1 className={`${hiddenText}`}>{props.menuText}</h1>
      </Link>
    </>
  );
}

export default SocialMediaLinks;
