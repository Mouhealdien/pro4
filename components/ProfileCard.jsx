import React from 'react'
import Image from 'next/image'
import male from '../assets/boy.png'
import female from '../assets/boy.png'
const ProfileCard = ({ name, gender, Address, educationlevel, yearsOFExperience, age, img }) => {
  return (
    <div>
      <div className=' border-b-2 border-b-gray-300 flex flex-row gap-2 items-center max-w-md border-gray-300 border-[3px] p-4 border-l-primary  border-l-[6px]  shadow-xl  rounded-md'>
        <Image width={300} height={300} className='w-32 h-32 rounded-full' src={img ? img : gender == "Male" ? male : female} />
        <div className='flex flex-col'>

          <ul className=''>
            <li className='text-primary font-bold pb-1'>Name: <span className='text-black font-[500]'>{name}</span> </li>
            <li className='text-primary font-bold pb-1' >Address: <span className='text-black font-[500]'>{Address}</span> </li>
            <li className='text-primary font-bold pb-1'>Education Level: <span className='text-black font-[500]'>{educationlevel}</span> </li>
            <li className='text-primary font-bold pb-1'>Years Of Experience: <span className='text-black font-[500]'>{yearsOFExperience} Years</span> </li>
            <li className='text-primary font-bold pb-1'>Age: <span className='text-black font-[500]'>{age}</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard