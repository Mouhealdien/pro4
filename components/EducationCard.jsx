import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
const EducationCard = ( {education}) => {
  return (
    <div className=' px-5 w-[100%]  py-4  border-gray-300 border-[3px]  shadow-2xl  rounded-md border-l-primary  border-l-[6px] max-w-[680px] bg-secondary items-center'>
        <div className='flex flex-row items-center  gap-1 '>
        <FontAwesomeIcon className='text-primary text-xl' icon={faGraduationCap}/>
        <h2 className='text-primary px-3 text-xl  font-bold    '>Education</h2>
        </div>
        <ul >
        {
            education.map((e)=>{
            return(
            <li className='pt-5'>
                <ul className='text-sm border-b-2 border-b-gray-300'>
                    <li className='pb-2 font-bold text-base'>{e.degree}</li>
                    <li className='pb-2 text-black font-[500]' > {e.department} <span className='text-primary'>At</span> {e.university}</li>
                    <li className='pb-2 font-bold text-primary'>Start Date: <span className='text-black font-[500]'>{e.startDate}</span>  </li>
                    <li className='pb-2 font-bold text-primary'>End Date: <span className='text-black font-[500]'> {e.endDate} </span></li>
                </ul>
            </li>
            )
            })
        }
        
        </ul>
  </div> 
  )
}

export default EducationCard