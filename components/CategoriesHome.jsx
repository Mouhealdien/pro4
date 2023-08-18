import React from "react";
import Photo from "../assets/hero.jpg";
import CategoryCard from "./CategoryCard";
import CategoryLink from "./CategoryLink";

const data = [
  {
    title: "IT / SoftWear Development",
    link: "/",
    image: Photo,
    jobCount: "23",
  },
  {
    title: "IT / SoftWear Development",
    link: "/",
    image: Photo,
    jobCount: "23",
  },
  {
    title: "IT / SoftWear Development",
    link: "/",
    image: Photo,
    jobCount: "23",
  },
  {
    title: "IT / SoftWear Development",
    link: "/",
    image: Photo,
    jobCount: "23",
  },
];
const Categories = [
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
  {
    title: "IT / development",
    link: "/",
    count: "23",
  },
];

const CategoriesHome = () => {
  return (
    <div className="py-10 mx-auto container ">
      <h2 className=" text-2xl  lg:text-3xl  mb-10 text-center">
        Browse Jobs by Category
      </h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {data.map((item, idx) => (
          <CategoryCard
            image={item.image}
            link={item.link}
            jobsCount={item.jobCount}
            key={idx}
            title={item.title}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {Categories.map((item, idx) => (
          <CategoryLink
            count={item.count}
            link={item.link}
            title={item.title}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesHome;
