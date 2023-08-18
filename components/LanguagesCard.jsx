import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const LanguagesCard = ({languages}) => {
  return (
    <div className=' px-5 w-[100%]  py-4  border-gray-300 border-[3px]  shadow-2xl  rounded-md border-l-primary  border-l-[6px] max-w-[300px] bg-secondary items-center'>
        <div className='flex flex-row items-center  gap-1'>
            <FontAwesomeIcon className='text-primary text-xl' icon={faLanguage}/>
            <h2 className='text-primary px-3 text-xl  font-bold  pb-2'>Languages</h2>
        </div>
        <ul className='flex flex-col  gap-2'>
            {
                languages.map((e)=>{
                    return(
                        <li className='flex flex-row justify-between'>
                            <p>{e.language}</p>
                            <p>{e.rate}</p>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default LanguagesCard