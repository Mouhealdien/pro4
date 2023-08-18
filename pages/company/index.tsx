import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faLocationArrow, faMailBulk, faUserGroup, faMobile, faPhone, faEdit } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
function index() {
    return (
        <div className='"bg-gray-200 px-20     sm:px-32  md:px-52 lg:px-96  text-base "'>
            <div className='flex  my-12   w-full   h-44 justify-between   shadow-slate-500 shadow-sm  flex-wrap  bg-gradient-to-t  from-slate-300  v via-slate-200   to-slate-300 '>
                <div className='  h-full   bg-slate-50     '>
                    <FontAwesomeIcon icon={faBuilding} size='2xl' className=' text-9xl m-10 text-primary' />
                </div>
                <div>
                    <Link href={`/edit`}>
                        <FontAwesomeIcon icon={faEdit} className='  m-10 text-primary' />
                    </Link>
                </div>
            </div>
            <div className='flex flex-wrap  justify-between  '>
                <div className='flex flex-col  w-full h-32 border  justify-center  my-5   '>
                    <div className=" mx-10 ">
                        <h1 className=' text-2xl  text-primary'>Uplink</h1>
                        <p className='text-gray-500'>Uplink Uplink Uplink Uplink Uplink Uplink</p>
                    </div>
                </div>
                <div className='flex  flex-wrap  w-full  h-60 justify-between  border   shadow-sm my-5    '>
                    <div className='   w-full h-full flex flex-col p-10 justify-evenly ite ' >
                        <h1 className=' text-2xl  text-primary'>Info</h1>
                        <div>  <FontAwesomeIcon icon={faLocationArrow} className=' text-gray-500 mr-4' /><span className='  text-primary'>location</span></div>
                        <div>  <FontAwesomeIcon icon={faBuilding} className=' text-gray-500  mr-4' /><span className=' text-primary'>comuter</span></div>
                        <div>  <FontAwesomeIcon icon={faMailBulk} className=' text-gray-500  mr-4 ' /><span className=' text-primary'></span></div>
                        <div>  <FontAwesomeIcon icon={faUserGroup} className=' text-gray-500  mr-4' /><span className=' text-primary'></span></div>
                        <div>  <FontAwesomeIcon icon={faMobile} className=' text-gray-500  mr-4' /><span className=' text-primary'></span></div>
                        <div>  <FontAwesomeIcon icon={faPhone} className=' text-gray-500  mr-4' /><span className=' text-primary'></span></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default index