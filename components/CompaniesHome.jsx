import React from "react";

import Logo1 from "../assets/companiesLogos/1.png";
import Logo2 from "../assets/companiesLogos/2.png";
import Logo3 from "../assets/companiesLogos/3.jpg";
import Logo4 from "../assets/companiesLogos/4.jpg";
import Logo5 from "../assets/companiesLogos/5.jpg";
import Logo6 from "../assets/companiesLogos/6.png";
import SliderHome from "./SliderHome";
import SliderCard from "./SliderCard";
import { SwiperSlide } from "swiper/react";

const data = [
  { title: "Companie 1", imgUrl: Logo1 },
  { title: "Companie 2", imgUrl: Logo2 },
  { title: "Companie 3", imgUrl: Logo3 },
  { title: "Companie 4", imgUrl: Logo4 },
  { title: "Companie 5", imgUrl: Logo5 },
  { title: "Companie 6", imgUrl: Logo6 },
];

const CompaniesHome = () => {
  return (
    <div className=" py-10  bg-white">
      <div className="mx-auto container">
        <h2 className=" text-2xl  lg:text-3xl  mb-10 text-center">
          Join Syria's Top Companies
        </h2>
        <SliderHome
          autoplay={true}
          infinite={true}
          numberOfActiveItems={4}
          showIndicators={false}
          height="50vh"
          breakpoints={{
            1: { width: 414, slidesPerView: 1 },
            2: { width: 1200, slidesPerView: 3 },
            3: { width: 1920, slidesPerView: 5 },
          }}
        >
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              <div>
                <SliderCard title={slide.title} imgurl={slide.imgUrl} />
              </div>
            </SwiperSlide>
          ))}
        </SliderHome>
      </div>
    </div>
  );
};

export default CompaniesHome;
