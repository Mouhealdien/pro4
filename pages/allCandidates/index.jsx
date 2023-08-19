import React from 'react'
import ProfileCard from '../../components/ProfileCard'
import FilterCandidates from '../../components/FilterCandidates'
import { useState,useEffect } from 'react'
import axios from '../.././utils/axios'
const index = () => {

    const [user, setUser] = useState();
  const [email, setemail] = useState();
  useEffect(() => {
    const fetchDataAsync = async () => {
      
      try {
        const response = await axios(`/profileDetail/populate=profileDetail,profileDetail.educations,profileDetail.experiences,profileDetail.languages,profileDetail.workingCities,profileDetail.militaryService,profileDetail.jobLevel,profileDetail.profileImage&fields[0]=id&fields[1]=email`);

        console.log(response.data)

        setemail(response.data.email)
        setUser(response.data.profileDetail);

      } catch (error) {

        console.error(error);
      }
    };

    fetchDataAsync();
  }, []);
  console.log(user)
    const candidates = [
        {
            Fname: "Ali",
            Lname: "Saleh",
            gender: "Male",
            Address: "Aleppo",
            educationlevel: "Master",
            yearsOFExperience: 2,
            age: 23

        }

    ]
    return (
        <div>

            <div className=' w-[100%] px-10 pt-5 flex flex-col lg:flex-row items-center gap-4 lg:items-start   '>

                <FilterCandidates />
                <div className=' flex flex-row flex-wrap gap-3 justify-center'>
                    {
                        candidates.map((e) => {
                            return (
                                <ProfileCard name={e.Fname + " " + e.Lname} gender={e.gender} Address={e.Address}
                                    educationlevel={e.educationlevel} yearsOFExperience={e.yearsOFExperience} age={e.age} />
                            )
                        })
                    }
                </div>


            </div>

        </div>
    )
}

export default index