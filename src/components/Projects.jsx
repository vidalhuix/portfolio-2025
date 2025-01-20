import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const url = "https://api.github.com/users/vidalhuix/repos?per_page=100";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was wrong");
        }
        return response.json();
      })
      .then((jsonData) => {
        const filteredData = jsonData.filter((repo) =>
          repo.topics.includes("portfolio")
        ); // Filter repositories with "important" topic
        const sortedData = filteredData.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setData(sortedData);
        console.log(jsonData);
        console.log(
          "Filtered array:",
          jsonData.map((repo) => ({
            id: repo.id,
            starred_url: repo.starred_url,
            name: repo.name,
            description: repo.description,
            created_at: repo.created_at,
            git_url: repo.html_url,
            homepage: repo.homepage,
            topics: repo.topics,
          }))
        );
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  //This function will modify the timestamp using date-fns library imported at the top
  const calculateTimeDifference = (timestamp) => {
    const distance = formatDistanceToNow(new Date(timestamp), {
      addSuffix: true,
    });
    return distance;
  };

  return (
    <div className=" px-10 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center text-[#001b5e]">
        Featured projects
      </h1>
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div className="grid md:grid-cols-2 gap-12 lg:grid-cols-3 ">
          {data.map((repo) => (
            <ProjectItem
              key={repo.id}
              name={repo.name}
              description={repo.description}
              created_at={calculateTimeDifference(repo.created_at)}
              homepage={repo.homepage}
              topics={repo.topics}
              git_url={repo.html_url}
            />
          ))}
        </div>
      )}
    </div>
  );
};
