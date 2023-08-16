import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
function index() {
    return (
        <div className='"bg-gray-200 px-20     sm:px-32  md:px-52 lg:px-96  text-base "'>
            <div className='flex  my-12   w-full   h-44    shadow-slate-500 shadow-sm  flex-wrap  bg-gradient-to-t  from-slate-300  v via-slate-200   to-slate-300 '>
                <div className=' m-auto lg:m-0  h-full   bg-slate-50    '>

                    <FontAwesomeIcon icon={faBuilding} size='2xl' className=' text-9xl m-10 text-primary' />

                </div>
            </div>
            <div className='flex flex-wrap  justify-between  '>
                <div className='flex flex-col  w-full h-32 border  justify-center  my-5   '>
                    <div className=" mx-10 ">
                        <h1 className=' text-2xl  text-primary'>Uplink</h1>
                        <p>Uplink Uplink Uplink Uplink Uplink Uplink</p>
                    </div>
                </div>
                <div className='flex  flex-wrap  w-full  h-60 justify-between  border   shadow-sm my-5    '>
                    <div className=' border  max-w-lg h-full'></div>
                    <div className=' border  w-10 h-full'></div>

                </div>
            </div>

        </div>
    )
}

export default index