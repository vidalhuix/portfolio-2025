import BackgroundMain from "/src/assets/bg-header.jpg";
import ProfileImg from "/src/assets/profile-pic.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Main() {
  return (
    <div id="main" className="relative">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={BackgroundMain}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20 ">
        <div className="max-w[700px] p-5 sm:p-[100px] h-full w-full flex flex-col justify-center items-start">
          <h1 className="sm:text-5xl my-4 text-4xl text-gray-800">
            Hi,
            <br />
            I'm 
            <span className="text-[#9f1239]"> Arnau Vidal</span>
          </h1>
          <h1 className="sm:text-5xl font-bold text-4xl text-gray-800">
            Web Developer.
          </h1>

          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                "A Coder",
                1000,
                "A Tech enthusiast",
                1000,
                "A Designer",
                1000,
                " In an great learning journey",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[100px] w-full">
            <a href="https://www.linkedin.com/in/arnau-vidal-4266a940/">
              <FaLinkedin size={40} className="cursor-pointer scale-150 m-5" />
            </a>
            <a href="https://github.com/vidalhuix" target="_blank">
              <FaGithub size={38} className="cursor-pointer scale-150 m-5" />
            </a>
          </div>
          <img
            src={ProfileImg}
            alt="profile image"
            className="absolute bottom-11 right-4 w-[250px] translate-y-1/3 scale-x-[-1]"
          ></img>
        </div>
      </div>
      <div className=" flex items-center max-w-[700px] m-5 sm:mx-[100px] mt-14">
        <p className="sm:text-3xl text-2xl   text-gray-800">
          <span className="mr-0 w-10 h-1 inline-block border-t-2 bg-[#9f1239] align-middle"></span>
          <span className=" w-3 h-3 inline-block mr-2 rounded-full bg-[#9f1239] "></span>
          I'm a web developer trained in JavaScript and React with basic PHP & Laravel knowledge. I speak four languages and I have a background in
          architectural design.
        </p>
      </div>
    </div>
  );
}
