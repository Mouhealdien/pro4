import React from 'react'
import boy from '../assets/boy.png'
import girl from '../assets/girl.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const ProfileHeader = ({ Fname, Lname, age, nationality, gender, militaryStatus, workCite, jobLevel, currentJobStatus, experience, phone, email, img }) => {
    return (
        <div className=' px-5 w-[100%] m-auto py-4  border-gray-300 border-[3px]  shadow-2xl  rounded-md border-l-primary  border-l-[6px] max-w-[1000px] bg-secondary items-center'>
            <div className=' flex flex-row items-center gap-2'>
                <Image width={300} height={300} className=' w-28 h-28 rounded-full' src={img ? img : (gender == "Male" ? boy : girl)} />

                <p className='text-lg'> {Fname} {Lname} </p>
            </div>
            <div className='flex flex-row border-b-2 border-gray-200  items-center justify-around'>

                <div>
                    <h3 className=' pb-2 text-lg font-bold'>Personal Information</h3>
                    <div className='flex flex-col'>
                        <ul>
                            <li className='pb-2 text-primary font-bold' >Age: <span className='text-black font-[600]'>{age}</span>  </li>
                            <li className='pb-2 text-primary font-bold'>Nationality: <span className='text-black font-[600]'>{nationality}</span>  </li>
                            <li className='pb-2 text-primary font-bold'>Gender: <span className='text-black font-[600]'>{gender}</span> </li>
                            <li className='pb-2 text-primary font-bold'>military status: <span className='text-black font-[600]'>{militaryStatus}</span> </li>
                        </ul>
                    </div>
                </div>
                <div className='border-l-gray-200 border-l-2 pl-4'>
                    <h3 className=' pb-2 text-lg font-bold'>Career Information</h3>
                    <div className='  flex flex-col'>
                        <ul>
                            <li className='pb-2 text-primary font-bold'>Work Cities: {workCite?.map((i) => <span className='text-black font-[600]'> {i.name}</span>)}</li>
                            <li className='pb-2 text-primary font-bold'>Job Level: <span className='text-black font-[600]'>{jobLevel}</span></li>
                            <li className='pb-2 text-primary font-bold'>Current job Status: <span className='text-black font-[600]'>{currentJobStatus}</span></li>
                            <li className='pb-2 text-primary font-bold'>Experience: <span className='text-black font-[600]'>{experience}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' py-3 flex flex-row items-center justify-between'>
                <h3 className='text-lg font-bold'>Contact Information</h3>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon className='text-primary text-xl' icon={faPhone} />
                        <p>{phone}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <FontAwesomeIcon className='text-primary text-xl' icon={faEnvelope} />
                        <p>{email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader