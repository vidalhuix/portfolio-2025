import { WorkItem } from "./WorkItem";

export const Work = () => {
  const data = [
    {
      year: 2024,
      title: "Intership at Campusbokhandeln",
      duration: "3 month",
      details:
        "I developed a web application with React and Laravel to automate book purchases based on course data. Designed a database, with large data sets and created features for improved UX. Aim to save time for the staff.",
    },
    {
      year: 2024,
      title: "Webbdevelopment bootcamp at Technigo",
      duration: "7 month",
      details:
        "Front End Development with JavaScript (ES6), React. HTML5 & CSS3. Responsive web design  and availability APIs and https requests. Backend programming with Node.js and Express. Storage of data with MongoDB-database and Mongoose. Industry standard tool for version control, distribution, etc. methods for teamwork development and remote work.",
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
      details: "Click here to go to my earlier professional life.",
    },
  ];
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-center text-[#001b5e]">
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
    </div>
  );
};
