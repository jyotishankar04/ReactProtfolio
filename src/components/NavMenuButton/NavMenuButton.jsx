import React, { useEffect, useState } from "react";
import { GrContact, GrHomeRounded, GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { NavLink } from "react-router-dom";

function NavMenuButton(props) {
  const [hiddenText, setHiddenText] = useState(
    props.isOpen === 1 ? "block" : "hidden"
  );
  useEffect(() => {
    setHiddenText(props.isOpen === 0 ? "hidden" : "block");
  }, [props.isOpen]);

  let icon;
  switch (props.menuText) {
    case "Home":
      icon = <GrHomeRounded className="text-gray-300 text-2xl" />;
      break;

    case "Projects":
      icon = <GrProjects className="text-gray-300 text-2xl" />;
      break;
    case "Skills":
      icon = <GiSkills className="text-gray-300 text-2xl" />;
      break;
    case "Contact":
      icon = <IoMdContacts className="text-gray-300 text-2xl" />;
      break;
  }

  return (
    <>
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          `${
            isActive ? "bg-[#184472]" : "bg-[#0D1B2A]"
          } bg-[#0D1B2A] flex gap-5 items-center  w-full text-gray-300 rounded-lg cursor-pointer   py-[10px] px-[10px]  mt-5  hover:bg-[#21354b]`
        }
      >
        {icon}
        <h1 className={`${hiddenText}`}>{props.menuText}</h1>
      </NavLink>
    </>
  );
}

export default NavMenuButton;
