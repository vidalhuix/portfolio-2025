import { WorkItem } from "./WorkItem";
import { FaLink } from "react-icons/fa6";

export const Work = () => {
  const data = [
    {
      year: 2024,
      title: "Internship at Campusbokhandeln",
      duration: "3 month",
      details:
        "I developed a web application with React and Laravel to automate book purchases based on course data. Designed a database, with large data sets and created features for improved UX. Aim to save time for the staff.",
    },
    {
      year: 2024,
      title: "Webb Development bootcamp at Technigo",
      duration: "7 month",
      details:
        "Front End Development with JavaScript (ES6), React. HTML5 & CSS3. Responsive web design using APIs and https requests. Backend programming with Node.js and Express. Data storage using MongoDB-database and Mongoose. Use of industry-standard tools for version control, deployment, and methods for teamwork and remote development.",
    },
    {
      year: 2023,
      title: "HTML & JavaScript Course",
      duration: "2 month",
      details:
        "LinkedIn HTML Essential Training & JavaScript Essential Training for begginers.",
    },
    {
      year: 2010,
      title: "Design Architect",
      duration: "+13 years",
      details: "More in the link below.",
    },
  ];
  return (
    <div id="resume" className="m-auto  my-7 sm:pl-10 p-4 bg-stone-100">
      <div className="relative max-w-3xl m-auto  my-7 p-4">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">
          Work
        </h1>
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
        <a
          href="https://arnau-vidal.netlify.app/"
          className="absolute inline-block cursor-pointer left-[8px]"
        >
          <FaLink className="fill-[#9f1239]  inline-block " />
          <span className="text-[#9f1239] ml-4">Click here</span>
        </a>
      </div>
    </div>
  );
};
