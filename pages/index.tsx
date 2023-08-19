import React from "react";
import NavBar from "../components/navbar/index";
import Hero from "../components/Hero";
import CompaniesHome from "../components/CompaniesHome";
import JobsHome from "../components/JobsHome";
import CategoriesHome from "../components/CategoriesHome";
import LocationHome from "../components/LocationHome";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <CompaniesHome />
      <JobsHome />
      <CategoriesHome />
      <LocationHome />
      <Footer />
    </div>
  );
};

export default HomePage;
