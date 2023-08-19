import React from 'react'
import CompaniesHome from '../../components/CompaniesHome'
import { useState, useEffect } from 'react';
import HeroSearchInput from '../../components/HeroSearchInput'
import axios from 'axios';
import { responseParser } from '../../lib/helper';
const index = () => {
  const [search, setsearch] = useState();
  const handleSearch = (e) => {
    setsearch(e.target.value);
    console.log(search);
  };
  const [Companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {

      try {
        const { data: response } = await axios(`/companies?populate[0]=profileImg`);



        setCompanies(responseParser(response) as any)

      } catch (error) {

        console.error(error);
      }
    };

    fetchDataAsync();
  }, []);
  console.log(Companies && Companies[0])
  return (
    <div className=' felx flex-col justify-center items-center'>
      <div className=' px-28'>
        <HeroSearchInput onChange={handleSearch} />
      </div>

      <CompaniesHome />



    </div>
  )
}

export default index