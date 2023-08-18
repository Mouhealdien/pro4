
import React from 'react'


import ProfileHeader from '../../../components/ProfileHeader'

import EducationCard from '../../../components/EducationCard'
import ExperienceCard from '../../../components/ExperienceCard'
import SkillsCard from '../../../components/SkillsCard'
import LanguagesCard from '../../../components/LanguagesCard'
const index = () => {
  const profileInfo={
    firstName:"Ahmad",
    lastName:"Hashem",
    age:28,
    nationality:"Syrian",
    gender:"Male",
    militaryStatus:"Exempt",
    workCite:"Aleppo",
    jobLevel:"senior",
    currentJobStatus:"unemployed",
    experienceYears:"1",
    phone:"+963 945674825",
    email:"random@gmail.com",
    education:[
      {
        degree:"Master",
        department:"IT",
        university:"Aleppo university",
        startDate:"3/1/2018",
        endDate:"9/10/2023"
      },
      {
        degree:"Master",
        department:"Law",
        university:"Aleppo university",
        startDate:"3/1/2018",
        endDate:"9/10/2023"
      }
    ],
    experience:[
      {
        job:"Frontend Developer",
        company:'codezc',
        startDate:"1/2/2022",
        endDate:"7/8/2022",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sunt vitae eveniet quos, dolore ipsa, quae repellendus itaque sint iste nostrum eaque? Omnis itaque voluptas magni, delectus repudiandae praesentium dignissimos."
      }
    ],
    skills:["React.js","HTML5","CSS","Java Script","Next.Js","Taliwind"],
    languages:[{
      language:"Arabic",
      rate:"native"
    },
    {
      language:"English",
      rate:"B2"
    }
  
  ]
  }
  return (
    <div className='px-2 py-2'>
      
      <div className='flex flex-col gap-5'>
      <ProfileHeader Fname={profileInfo.firstName} Lname={profileInfo.lastName}
      age={profileInfo.age} nationality={profileInfo.nationality}
      gender={profileInfo.gender} militaryStatus={profileInfo.militaryStatus}
      workCite={profileInfo.workCite} jobLevel={profileInfo.jobLevel} currentJobStatus={profileInfo.currentJobStatus}
      experience={profileInfo.experienceYears} phone={profileInfo.phone} email={profileInfo.email}
      />
      <div className='flex flex-col gap-5'>
      <div className='flex flex-row  gap-5 items-baseline justify-center '>
        <EducationCard education={profileInfo.education}/>
        <SkillsCard skills={profileInfo.skills}/>
      </div>
      
      <div className='flex flex-row items-baseline gap-5 justify-center'>
        <ExperienceCard experience={profileInfo.experience}/>
        <LanguagesCard languages={profileInfo.languages}/>
      </div>
      </div>
      </div>
    
      
      
    </div>
  )
}

export default index