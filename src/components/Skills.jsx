export const Skills = () => {
  const skillsData = [
    {
      category: "Code",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript ES6",
        "React",
        "Styled Components",
        "Tailwind",
      ],
    },
    {
      category: "Toolbox",
      items: [
        "VS Code",
        "GitHub",
        "Postman",
        "Slack, Tuple",
        "Figma",
        "Trello",
        "2D & 3D tools",
        "Agile methodology",
      ],
    },
    {
      category: "More",
      items: [
        "Architecture degree:",
        "12 years working experience:",
        "+2 years as a supervisor",
        "In large projects",
        "In collaboration",
        "In process design",
        "In concept development",
        "In planning and delivery",
      ],
    },
    {
      category: "Upcoming",
      items: ["TypeScript", "Next.js", "Python", ".Net", "C#"],
    },
  ];

  return (
    <div id="skills" className="  bg-gray-100">
      <div className=" m-auto sm:pl-10 p-5 max-w-4xl flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-gray-800">Skills</h1>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {skillsData.map((skillSection, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="inline-block px-2 py-1 font-semibold text-xl text-white bg-gray-800 rounded-md">
                {skillSection.category}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {skillSection.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-sm text-gray-600 px-2 py-1 bg-gray-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
