import { FaGithub, FaEye } from "react-icons/fa";

export const BtnLiveDemo = ({ homepage }) => {
  return (
    <div className="p-2 rounded-full bg-[#001b5e] no-underline hover:scale-105 ease-in duration-100 ">
      <a
        className="flex flex-row items-center "
        href={homepage}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEye size={30} className="invert" />
        <p className="text-white ml-2 whitespace-nowrap">Live demo</p>
      </a>
    </div>
  );
};

export const BtnViewCode = ({ git_url }) => {
  return (
    <div className="p-2 rounded-full bg-[#001b5e] no-underline hover:scale-105 ease-in duration-100 ">
      <a className="flex flex-row items-center " href={git_url} target="_blank">
        <FaGithub size={30} className="invert" />
        <p className="block text-white ml-2 whitespace-nowrap">View the code</p>
      </a>
    </div>
  );
};
