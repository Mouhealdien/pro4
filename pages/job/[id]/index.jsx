import Link from 'next/link'
import React from 'react'
import JobDetailsCard from '../../../components/jobDetailsCard'
import JobDescriptionCard from '../../../components/JobDescriptionCard'
import JobRequirementsCard from '../../../components/JobRequirementsCard'
const index = () => {
    const job={
        id:1,
        jobDate:"2/10/2023",
        jobTitle:"Angular Developer",
        gender:"male",
        jobrole:"IT",
        age:20,
        carrerLevel:"graduate",
        education:"bac",
        salary:"2000",
        jobType:"part Time",
        experience:"3years",
        language:"arabic",
        numberOfCandidates:4,
        jobDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, est quis. Id deserunt placeat, rem est odio asperiores rerum hic aliquam magnam esse cumque, reprehenderit quam officiis ipsam facilis voluptatem?" ,
        jobRequirements:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, est quis. Id deserunt placeat, rem est odio asperiores rerum hic aliquam magnam esse cumque, reprehenderit quam officiis ipsam facilis voluptatem?" ,
    }
  return (<div>
                <div className='flex flex-row h-36 px-4 bg-primary items-center justify-evenly'>
                    <div className='flex flex-col items-center gap-2'>
                        <h2 className=' text-white text-3xl'>{job.jobTitle}</h2>
                        <h3 className='text-white'>Created At: {job.jobDate}</h3>
                        <div className='  flex flex-row gap-5'>
                            <Link href={`${job.id}/edit`}>
                                <button className=' bg-secondary  hover:bg-primary  hover:border-secondary  hover:border-2 hover:text-secondary transition duration-300 text-primary rounded-md px-4 py2'> Edit Job</button>
                            </Link>
                            
                            <button className='bg-red-600 transition duration-300 hover:bg-primary hover:text-red-600 hover:border-red-600 hover:border-2 text-secondary rounded-md px-4 py2'>Delete job</button>

                        </div>
                    </div>
                    <div className=' flex flex-col items-center gap-2'>
                        <h2 className='text-5xl text-secondary'>{job.numberOfCandidates}</h2>
                        <p className='text-secondary '>Candidates</p>
                        <Link href={`${job.id}/candidates`}>
                                <button className=' bg-secondary  hover:bg-primary  hover:border-secondary  hover:border-2 hover:text-secondary transition duration-300  text-primary rounded-md px-4 py2'>See Candidates</button>
                        </Link>
                    </div>
                </div>
            <div className=' py-10 flex flex-row justify-center gap-5 flex-wrap '> 
                <JobDetailsCard 
                id={job.id}
                gender={job.gender}
                jobRole={job.jobrole} age={job.age} carerrLevel={job.carrerLevel} 
                education={job.education} jobType={job.jobType}
                salary={job.salary}
                experience={job.experience} lanuage={job.language} />

                <JobDescriptionCard jobRole={job.jobrole}   jobDescription={job.jobDescription}/>
                <JobRequirementsCard JobRequirements={job.jobRequirements}   />


                

                

            </div>

        </div>

  )
}

export default index