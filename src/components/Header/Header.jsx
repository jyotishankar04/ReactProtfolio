import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="w-full h-[70px] px-[20px] flex items-center justify-between text-white ">
        <div>
          <div className="logo text-4xl ">SUVAM.</div>
        </div>

        <Link
          to="https://github.com/jyotishankar04"
          target="_blank"
          className="bg-[#E0E1DD] text-[#0D1B2A] font-mono rounded-lg outline-none  px-[20px] py-[5px] hover:bg-[#5f6265] hover:text-[#E0E1DD] transition-all duration-100 ease-linear"
        >
          Github
        </Link>
      </div>
    </>
  );
}

export default Header;
