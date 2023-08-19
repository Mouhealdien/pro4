import React, { useState } from 'react'
import { BASE_SERVEFR_URL } from "../../../utils/constant"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { axios } from '../../../utils/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow,faBuilding,faMailBulk,faUserGroup,faMobile,faPhone } from '@fortawesome/free-solid-svg-icons'
const index = () => {   
        const router=useRouter();
        
        const id=router.query.id;
        
        const [company,setCompany]=useState();

        useEffect(() => {
                  const fetchDataAsync = async () => {
            
                  try {
                    const { data: response } = await axios(`/companies/${id}?populate=profileImg,cities,cities.name,users `);
                    
                    setCompany((response) )
                
                  } catch (error) {
            
                    console.error(error);
                  }
                };
            
                id?fetchDataAsync():" "
              }, [id]);
              
              console.log(company)

  return (
    <div className=' px-20 text-base '>
            
                <div className=' h-full gap-5 flex flex-row justify-center items-center flex-wrap'>
                        <img className='' src={BASE_SERVEFR_URL + company?.profileImg?.data?.attributes?.url} width={170} height={170}/>
                        <div className='flex w-full border-l-primary border-l-4 rounded-md   flex-wrap max-w-sm  h-60 justify-between  border  shadow-sm my-5    '>
                                <div className=' bg-secondary   w-full h-full flex flex-col p-10 justify-evenly ite ' >
                                        <h1 className=' text-2xl pb-2  text-primary'>{company?.name}</h1>
                                        <div>  <FontAwesomeIcon icon={faLocationArrow} className=' text-gray-500 mr-4' /><span className='  text-primary'>{company?.cities.data.map((e)=> e.attributes?.name)}</span></div>
                                        <div>  <FontAwesomeIcon icon={faBuilding} className=' text-gray-500  mr-4' /><span className=' text-primary'>{company?.address}</span></div>
                                        <div>  <FontAwesomeIcon icon={faMailBulk} className=' text-gray-500  mr-4 ' /><span className=' text-primary'>{company?.users?.data?.attributes?.email}</span></div>
                                        <div>  <FontAwesomeIcon icon={faUserGroup} className=' text-gray-500  mr-4' /><span className=' text-primary'>{company?.companySize}</span></div>
                                        <div>  <FontAwesomeIcon icon={faMobile} className=' text-gray-500  mr-4' /><span className=' text-primary'>{company?.phone}</span></div>
                                        <div>  <FontAwesomeIcon icon={faPhone} className=' text-gray-500  mr-4' /><span className=' text-primary'>{company?.officePhone}</span></div>
                                </div>
                        </div>
                </div>
                   
                   


            <div className='flex flex-row items-center justify-center flex-wrab'>

            </div>
         </div>
    
  )
}

export default index