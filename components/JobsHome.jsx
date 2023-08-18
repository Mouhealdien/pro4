import React from "react";
import Logo1 from "../assets/companiesLogos/1.png";
import JobsCardHome from "./JobsCardHome";

// image,
// title,
// code,
// date,
// role,
// level,
// type,
// experience,
// location,

const data = [
  {
    title: "Software developer",
    image: Logo1,
    code: "5887",
    date: "12",
    role: "IT",
    level: "junior",
    type: "part time",
    experience: "2",
    location: "Aleppo",
    company: "source code",
    link: "/",
  },
  {
    title: "Software developer",
    image: Logo1,
    code: "5887",
    date: "12",
    role: "IT",
    level: "junior",
    type: "part time",
    experience: "2",
    location: "Aleppo",
    company: "source code",
    link: "/",
  },
  {
    title: "Software developer",
    image: Logo1,
    code: "5887",
    date: "12",
    role: "IT",
    level: "junior",
    type: "part time",
    experience: "2",
    location: "Aleppo",
    company: "source code",
    link: "/",
  },
  {
    title: "Software developer",
    image: Logo1,
    code: "5887",
    date: "12",
    role: "IT",
    level: "junior",
    type: "part time",
    experience: "2",
    location: "Aleppo",
    company: "source code",
    link: "/",
  },
  {
    title: "Software developer",
    image: Logo1,
    code: "5887",
    date: "12",
    role: "IT",
    level: "junior",
    type: "part time",
    experience: "2",
    location: "Aleppo",
    company: "source code",
    link: "/",
  },
  {
    title: "Software developer",
    image: Logo1,
    code: "5887",
    date: "12",
    role: "IT",
    level: "junior",
    type: "part time",
    experience: "2",
    location: "Aleppo",
    company: "source code",
    link: "/",
  },
  {
    title: "Software developer",
    image: Logo1,
    code: "5887",
    date: "12",
    role: "IT",
    level: "junior",
    type: "part time",
    experience: "2",
    location: "Aleppo",
    company: "source code",
    link: "/",
  },
  {
    title: "Software developer",
    image: Logo1,
    code: "5887",
    date: "12",
    role: "IT",
    level: "junior",
    type: "part time",
    experience: "2",
    location: "Aleppo",
    company: "source code",
    link: "/",
  },
];

const JobsHome = () => {
  return (
    <div className="py-10 bg-slate-200 ">
      <div className=" ">
        <h2 className=" text-2xl pt-5 lg:text-3xl  mb-10 text-center">
          Recent Jobs
        </h2>
        <p className="my-5 text-gray-600 text-center text-lg font-medium">
          Checkout Our Latest Open Jobs.
        </p>
      </div>
      <div className="w-full xl:px-36 px-5 flex flex-wrap justify-start">
        {data.map((item, idx) => (
          <JobsCardHome
            link={item.link}
            code={item.code}
            date={item.date}
            experience={item.experience}
            image={item.image}
            level={item.level}
            location={item.location}
            role={item.role}
            title={item.title}
            type={item.type}
            key={idx}
            company={item.company}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="inline-block rounded  px-10 py-3 my-7  font-medium 
         transition hover:scale-110 hover:shadow-xl focus:outline-none text-white text-2xl focus:ring bg-primary"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default JobsHome;
