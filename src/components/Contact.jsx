import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("arnauvidal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  return (
    <div id="contact" className="mx-auto my-7 p-4 ">
      <div className="max-w-3xl m-auto  p-4">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">
          For more
        </h1>
        <div className="flex flex-row m-auto justify-center gap-4 items-center pt-6 max-w-[100px] w-full">
          <a
            href="https://www.linkedin.com/in/arnau-vidal-4266a940/"
            target="_blank"
          >
            <FaLinkedin
              size={35}
              className="cursor-pointer scale-150 mr-2 fill-[#9f1239]"
            />
          </a>
          <a href="https://github.com/vidalhuix" target="_blank">
            <FaGithub
              size={33}
              className="cursor-pointer scale-150 fill-[#9f1239]"
            />
          </a>
          <a
              href="/CV Arnau Vidal - Web developer.pdf"
              download="CV Arnau Vidal - Web developer.pdf"
              className="relative flex flex-row justify-center items-center  py-2 border-gray-800  hover:scale-105  duration-100 group"
            >
              <FaFileDownload size={42} className="fill-[#9f1239]  " />
              <span className="absolute hidden w-[300px] text-[#9f1239] font-semibold text-sm gray-200 overflow-hidden group-hover:block group-hover:animate-reveal pl-[200px]">
                CV Arnau Vidal - Web developer.pdf
              </span>
            </a>
        </div>
      </div>
    </div>
  );
};
