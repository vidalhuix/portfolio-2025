import { useState } from "react";
import { FaCopy } from "react-icons/fa";

export const UnderContact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("arnauvidal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  return (
    <div className="w-full text-sm h-full bg-[#9f1239]">
      <div className="flex flex-col  text-white justify-center items-center p-7">
        {/* <p className="text-xl mb-2 font-bold">CONTACT</p> */}
        <p>Arnau Vidal</p>
        <p>+46708927033</p>
        <p
          onClick={handleCopy}
          className="text-white cursor-copy hover:text-gray-300 transition-colors"
        >
          arnauvidal@gmail.com
        </p> {copied && (
          <FaCopy className="text-sm text-gray-300 mt-2"/>
          
        )}
      </div>
    </div>
  );
};
