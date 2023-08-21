import React from 'react'
import ProfileCard from '../../components/ProfileCard'
import FilterCandidates from '../../components/FilterCandidates'
import { useState, useEffect } from 'react'
import { axios } from '../../utils/axios'
import { BASE_SERVEFR_URL } from '../../utils/constant'
const index = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {

      try {
        const response = await axios(`/profile-details?populate=educations,workingCities,profileImage`);




        setUsers(response.data as any);

      } catch (error) {

        console.error(error);
      }
    };

    fetchDataAsync();
  }, []);
  console.log(users)



  return (
    <div>

      <div className=' w-[100%] px-10 pt-5 flex flex-col lg:flex-row items-center gap-4 lg:items-start   '>

        <FilterCandidates />
        <div className=' flex flex-row flex-wrap gap-3 justify-center'>
          {
            users?.length > 0 && users.map((e) => {
              return (
                <ProfileCard id={e.id} name={e?.firstName + " " + e?.lastName} gender={e.gender} Address={e?.workingCities && e?.workingCities[0]?.name}
                  educationlevel={e.educations && e?.educations?.[0]?.degree} yearsOFExperience={e?.yearsOfExperience} age={e?.birthDate} img={BASE_SERVEFR_URL + e?.profileImage.url} />
              )
            })
          }
        </div>


      </div>

    </div>
  )
}

export default index