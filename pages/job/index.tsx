import React from 'react'
import CompaniesHome from '../../components/CompaniesHome'
import { useState, useEffect } from 'react';
import HeroSearchInput from '../../components/HeroSearchInput'
import axios from 'axios';
import JobsCardHome from '../../components/JobsCardHome';
import { responseParser } from '../../lib/helper';
const index = () => {
  const data = [
    {
      title: "Software developer",
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
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
      image: '',
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
  
  const [search, setsearch] = useState();
  const handleSearch = (e) => {
    setsearch(e.target.value);
    console.log(search);
  };
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {

      try {
        const { data: response } = await axios(`/jobs`);


        setjobs(responseParser(response) as any)

      } catch (error) {

        console.error(error);
      }
    };

    fetchDataAsync();
  }, []);
  console.log(jobs)
  return (
    <div className=' felx flex-col justify-center items-center'>
      <div className=' px-28'>
        <HeroSearchInput onChange={handleSearch} />
      </div>
    
      <CompaniesHome/>

      <div className=' flex flex-row items-center justify-center'> 
          {
            
          }
      </div>
    </div>
  )
}

export default index