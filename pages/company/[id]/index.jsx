import React, { useState } from 'react'
import { BASE_SERVEFR_URL } from "../../../utils/constant"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { axios } from '../../../utils/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow,faBuilding,faMailBulk,faUserGroup,faMobile,faPhone } from '@fortawesome/free-solid-svg-icons'
import JobsCardHome from '../../../components/JobsCardHome';
const index = () => {   
        const router=useRouter();
        console.log(router)
        const id=router.query.id;
        
        const [company,setCompany]=useState();
      
        useEffect(() => {
                  const fetchDataAsync = async () => {
            
                  try {
                    const { data: response } = await axios(`/companies/${id}?populate=profileImg,cities,cities.name,user ,jobs , jobs.jobLevel ,jobs.jobRoles  `);
                    setCompany((response) )
                    
                  } catch (error) {
            
                    console.error(error);
                  }
                };
            
                id?fetchDataAsync():" "
              }, [id]);
              
              console.log(company?.jobs[0]?.jobRoles[0]?.details)
              

  return (
    <div className=' px-20 text-base '>
            
                <div className=' h-full gap-5 flex flex-row justify-center items-center flex-wrap'>
                        <img className='' src={BASE_SERVEFR_URL + company?.profileImg?.url} width={170} height={170}/>
                        <div className='flex w-full border-l-primary border-l-4 rounded-md   flex-wrap max-w-sm  h-60 justify-between  border  shadow-sm my-5    '>
                                <div className=' bg-secondary   w-full h-full flex flex-col p-10 justify-evenly ite ' >
                                        <h1 className=' text-2xl pb-2  text-primary'>{company?.name}</h1>
                                        <div>  <FontAwesomeIcon icon={faLocationArrow} className=' text-gray-500 mr-4' /><span className='  text-primary'>{company?.cities?.map((e)=> e.name)}</span></div>
                                        <div>  <FontAwesomeIcon icon={faBuilding} className=' text-gray-500  mr-4' /><span className=' text-primary'>{company?.address}</span></div>
                                        <div>  <FontAwesomeIcon icon={faMailBulk} className=' text-gray-500  mr-4 ' /><span className=' text-primary'>{company?.user?.email}</span></div>
                                        <div>  <FontAwesomeIcon icon={faUserGroup} className=' text-gray-500  mr-4' /><span className=' text-primary'>{company?.companySize}</span></div>
                                        <div>  <FontAwesomeIcon icon={faMobile} className=' text-gray-500  mr-4' /><span className=' text-primary'>{company?.phone}</span></div>
                                        <div>  <FontAwesomeIcon icon={faPhone} className=' text-gray-500  mr-4' /><span className=' text-primary'>{company?.officePhone}</span></div>
                                </div>
                        </div>
                </div>
                   
                   


            <div className='flex flex-row items-center justify-center flex-wrab'>
                {
                        company?.jobs.map((e)=>{
                                return(
                                        <JobsCardHome image={BASE_SERVEFR_URL + company?.profileImg?.url} title={e.jobTitle} code={e.id} type={e.jobType} experience={e.yearOfExperience} location={e.address} company={company?.name} link={`job/${e?.id}`} level={e.jobLevel?.details} role={e.jobRoles?e.jobRoles[0].details:""} />
                                )
                        })
                }
            </div>
         </div>
    
  )
}

export default index