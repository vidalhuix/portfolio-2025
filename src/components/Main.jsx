import React from "react";
import BackgroundMain from "/src/assets/bg-header.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitterSquare,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={BackgroundMain}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl font-bold text-4xl text-gray-800">
            I'm Arnau Vidal
          </h1>

          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I'm a Webdeveloper",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "I'm a Coder",
                1000,
                "I'm a Tech entusiast",
                1000,
                "I'm a Designer",
                1000,
                "in an incredible learning journey",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[100px] w-full">
            {/* <FaTwitterSquare className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" /> */}
            <FaGithub className="cursor-pointer scale-150" />
            <FaLinkedin className="cursor-pointer scale-150" />
          </div>
        </div>
      </div>
    </div>
  );
}
