import React from 'react'
import Male from '../../../assets/boy.png'
import Image from 'next/image'
const index = () => {

  return (
    <div className='bg-gray-200 px-20  h-full    sm:px-32  md:px-52 lg:px-96  text-base '>
            <div className='flex flex-row  gap-2  my-12   w-full   h-44    '>
 
                    <Image className='h-full' src={Male} width={170} height={170}/>
                    <Image src={Male} className='w-[75%] h-full' width={500} height={170}/>

            </div>
            <div>
            <div className='flex flex-col bg-secondary  w-full h-32 border  justify-center  my-5   '>
                    <div className=" mx-10 ">
                        <h1 className=' text-2xl  text-primary'>Uplink</h1>
                        <p className='text-gray-500'>Uplink Uplink Uplink Uplink Uplink Uplink</p>
                    </div>
            </div>
            <div className='flex flex-row items-center justify-center flex-wrab'>

            </div>
            </div>
    </div>
  )
}

export default index