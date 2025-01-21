import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
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
        <div className="flex flex-row m-auto justify-between pt-6 max-w-[100px] w-full">
          <a
            href="https://www.linkedin.com/in/arnau-vidal-4266a940/"
            target="_blank"
          >
            <FaLinkedin
              size={35}
              className="cursor-pointer scale-150 fill-[#9f1239]"
            />
          </a>
          <a href="https://github.com/vidalhuix" target="_blank">
            <FaGithub
              size={33}
              className="cursor-pointer scale-150 fill-[#9f1239]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
