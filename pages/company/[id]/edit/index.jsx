import React from 'react'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faLocationArrow, faMailBulk, faUserGroup, faMobile, faPhone, faEdit } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {axios} from '../../../../utils/axios'
import { BASE_SERVEFR_URL } from '../../../../utils/constant'
import JobEditCard from '../../../../components/JobEditCard'
function index() {
    const router=useRouter();
    const id=router.query.id;
    console.log(id);

    const [company,setCompany]=useState();
      
        useEffect(() => {
                  const fetchDataAsync = async () => {
            
                  try {
                    const { data: response } = await axios(`/companies/${id}?populate=profileImg,cities,cities.name,user ,jobs , jobs.jobLevel ,jobs.jobRoles , jobs.jobRequest   `);
                    setCompany((response) )
                    
                  } catch (error) {
            
                    console.error(error);
                  }
                };
            
                id?fetchDataAsync():" "
              }, [id]);
              
              console.log(company)


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
            <div className=' h-full gap-5 flex flex-row justify-center items-center flex-wrap'>
                       
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
                                        <JobEditCard numOfCandidates={e.jobRequest.length} id={e.id} title={e.jobTitle} />
                                )
                        })
                }
            </div>
        </div >
    )
}

export default index