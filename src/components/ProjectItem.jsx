import { BtnLiveDemo, BtnViewCode } from "./Buttons";

export const ProjectItem = ({
  name,
  description,
  created_at,
  homepage,
  git_url,
  topics,
}) => {
  const imageLink = `https://raw.githubusercontent.com/vidalhuix/${name}/main/src/assets/Featured-image.jpg`;
  const filteredTopics = topics.filter((topic) => topic !== "portfolio");

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#323235]">
      <h3 className="absolute text-white bg-black/50 px-2 text-2xl text-shadow font-bold text-center group-hover:hidden">
        {name.replace(/-/g, " ").toUpperCase()}
      </h3>
      <img
        className="rounded-xl w-full h-full cover group-hover:opacity-5"
        src={imageLink}
        alt="Project-image"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className=" flex flex-row flex-wrap gap-1 justify-center m-auto">
          {topics.length > 0 ? (
            <ul className="flex flex-row gap-4 pb-4 pt text-white text-center">
              {filteredTopics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          ) : (
            <p>No topics</p>
          )}
        </div>
        <p className="mb-10 overflow-hidden text-ellipsis whitespace-normal line-clamp-2">
          {description}
          <span className="text-white ml-auto"> Created {created_at}.</span>
        </p>
        <div className="flex flex-row items-center gap-4 justify-between">
          <BtnLiveDemo homepage={homepage} />
          <BtnViewCode git_url={git_url} />
        </div>
      </div>
    </div>
  );
};
