import React from "react";
import profilePic from "./profile-pic.png";
import FrameImg from "./Frame.png";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
function Home() {
  return (
    <>
      <div className=" w-[calc(100%)] overflow-y-scroll h-[calc(100vh-70px)]">
        <div className="flex flex-col items-center gap-5 justify-start ">
          <div
            className={`flex justify-between items-center w-[95%] bg-gradient-to-r from-fuchsia-500 to-cyan-500 backdrop-blur-xl rounded-xl`}
          >
            <div className="flex items-center m-[10px] gap-5">
              <img
                src={profilePic}
                className="w-[160px]   outline-dotted outline-offset-2 outline-sky-100 rounded-full"
              />
              <div className="">
                <h1 className="text-3xl font-mono text-gray-100">
                  Jyotishankar Patra
                </h1>
                <p className="text-sm font-light text-gray-200">
                  Full stack developer
                </p>
              </div>
            </div>
            <div className="mr-[40px] font-mono ">
              <Link
                to="https://linkedin.com/in/jyotishankar-patra"
                className="flex items-center gap-4 border-[1px] border-gray-100 text-gray-100 border-solid px-[10px] py-[5px] rounded-sm hover:translate-x-1 transition-all ease-linear duration-100"
              >
                <FaLinkedinIn />
                Lets Connect
              </Link>
            </div>
          </div>
          <div className="w-[95%] flex flex-col items-center justify-center ">
            <div className="font-mono flex justify-center items-center flex-col ">
              <h1 className="text-gray-300 text-4xl">Hello i am a</h1>
              <TypeAnimation
                className="text-purple-700 text-5xl text-center"
                style={{
                  width: "100%",
                  display: "block",
                  // border: "solid 1px rgb(0,0,0)",
                }}
                sequence={["Programmer", 1000, "Full Stack Developer", 1000]}
                speed={10}
                repeat={Infinity}
              />
            </div>
            <p className="w-[80%] text-gray-500 text-center mt-[50px]">
              Welcome to my digital space! I'm Jyotishankar Patra, a passionate
              individual deeply engaged in programming and web development.
              Learning and expanding my skills is what keeps me excited.
              <br />
              <br />
              In my programming journey, I've become proficient in various
              languages and frameworks like C, C++, HTML, CSS, JavaScript,
              Tailwind CSS, Node.js, and React. I find joy in solving coding
              challenges and creating efficient solutions.
              <br />
              <br />
              With a focus on web development, I specialize in Front-end,
              crafting user-friendly websites. I also delve into the backend
              world using Node.js and work with React to build dynamic and
              interactive user interfaces. My knowledge extends to working with
              databases to ensure seamless data management.
              <br />
              <br />
              Feel free to connect with me on LinkedIn or any other social
              platform. Let's explore the tech world together!
              <br />
              <br />
              <span className="uppercase text-purple-600 font-bold">
                Thanks for visiting my page!
              </span>
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
