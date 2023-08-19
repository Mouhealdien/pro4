import React from 'react'
import ProfileCard from '../../components/ProfileCard'
import FilterCandidates from '../../components/FilterCandidates'


const index = () => {
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