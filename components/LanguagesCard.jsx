import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const LanguagesCard = ({ languages, edit }) => {
    return (
        <div className=' px-5 w-[100%]  py-4  border-gray-300 border-[3px]  shadow-2xl  rounded-md border-l-primary  border-l-[6px] max-w-[300px] bg-secondary items-center'>
            <div className='flex flex-row items-center  gap-1'>
                <FontAwesomeIcon className='text-primary text-xl' icon={faLanguage} />
                <h2 className='text-primary px-3 text-xl  font-bold  pb-2'>Languages</h2>
                {edit ? <button className='bg-primary  hover:bg-secondary  text-secondary hover:border-primary  hover:border-2 hover:text-primary transition duration-300  Hover:text-primary rounded-md px-4 py2'> <Link href="../Languages/add">Add</Link> </button> : ""}

            </div>
            <ul className='flex flex-col  gap-2'>
                {
                    languages?.map((e) => {
                        return (
                            <li className='flex flex-row justify-between items-center'>
                                <p>{e.name}</p>
                                <p>{e.rate}</p>
                                {edit ? <button className='bg-red-600 mt-2  inline hover:bg-secondary  text-secondary hover:border-red-600  hover:border-2 hover:text-red-600 transition duration-300  Hover:text-red-600 rounded-md px-4 py2'>Delete</button> : ""}

                            </li>

                        )
                    })
                }
            </ul>
        </div>
    )
}

export default LanguagesCard