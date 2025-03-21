import BackgroundMain from "/src/assets/bg-header.jpg";

import ProfileImg from "/src/assets/profile-pic.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Main() {
  return (
    <div id="main" className="relative">
      <img
        className="w-full h-[75vh] object-cover object-left "
        src={BackgroundMain}
        alt="/"
      />
      <div className="w-full hh-[75vh] absolute top-0 left-0 bg-white/5">
        <div className="m-auto pl-10 p-4 max-w-4xl h-full w-full flex flex-col justify-center items-start">
          <h1 className="sm:text-5xl my-4 text-4xl text-gray-800">
            Hi,
            <br />
            I'm
            <span className="text-[#145a5a]"> Arnau Vidal</span>
          </h1>
          <h1 className="sm:text-5xl font-bold text-4xl text-gray-800">
            Web Developer.
          </h1>

          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                "A Coder.",
                1000,
                "A Tech enthusiast.",
                1000,
                "A Designer.",
                1000,
                "In a great learning journey.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[100px] w-full">
            <a
              href="https://www.linkedin.com/in/arnau-vidal-4266a940/"
              target="_blank"
            >
              <FaLinkedin
                size={35}
                className="cursor-pointer scale-150 fill-gray-800"
              />
            </a>
            <a href="https://github.com/vidalhuix" target="_blank">
              <FaGithub
                size={33}
                className="cursor-pointer scale-150 fill-gray-800"
              />
            </a>
          </div>
        </div>
      </div>
      <img
        src={ProfileImg}
        alt="profile image"
        className="absolute bottom-11 border-4 shadow-lg rounded-full right-4 w-[200px] translate-y-1/3 scale-x-[1] md:mr-[25%]"
      ></img>
    </div>
  );
}
