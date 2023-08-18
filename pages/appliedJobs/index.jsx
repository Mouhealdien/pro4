import React, {  useState } from 'react'
import AppliedJobCard from '../../components/appliedJobCard'

const index = () => {

 const appliedJobs=[{
    jobTitle:"Angular Developer",
    companyName:"codzecc"
  },
  {
    jobTitle:"Angular Developer",
    companyName:"codzeccc"
  },
  {
    jobTitle:"Angular Developer",
    companyName:"codzeccc"
  },
  {
    jobTitle:"Angular Developer",
    companyName:"codzeccc"
  },
  
]



  return (
    <div className='border-b-2 m-auto border-b-gray-300 items-center max-w-xl border-gray-300 border-[3px] p-4 border-l-primary  border-l-[6px]  shadow-xl  rounded-md'>
       <h2 className='text-primary px-3 text-2xl border-b-2 pb-2 border-gray-300  font-bold    '>Applied Jobs</h2>
      <div className=' py-3 w-full flex flex-col items-center gap-5 justify-center'>
      {
          appliedJobs.map((e)=>{
          return   (
              <AppliedJobCard jobTitle={e.jobTitle} companyName={e.companyName} /> 
            )
              
          })
        }   
      </div>
        
    </div>
  )
}

export default index