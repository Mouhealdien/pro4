import Link from 'next/link'
import React, { useContext } from 'react'
import JobDetailsCard from '../../../components/JobDetailsCard'
import JobDescriptionCard from '../../../components/JobDescriptionCard'
import JobRequirementsCard from '../../../components/JobRequirementsCard'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { axios } from '../../../utils/axios'
import { AuthContext } from '../../../contexts/AuthContext'

const index = () => {
    const auth = useContext(AuthContext);
    console.log(auth)
    const router = useRouter();
    const userid = auth.user.id
    const isComany = auth.isCompany
    const id = router.query.id;
    const [jobDetails, setJobDetails] = useState();
    console.log(id)
    const job = {
        id: jobDetails?.id,
        jobDate: jobDetails?.JobDate,
        jobTitle: jobDetails?.jobTitle,
        gender: jobDetails?.gender,
        jobrole: jobDetails?.jobRoles,
        age: jobDetails?.ageRange,
        carrerLevel: jobDetails?.carrerLevel,
        education: jobDetails?.education,
        salary: jobDetails?.salary,
        jobType: jobDetails?.jobType,
        experience: jobDetails?.yearOfExperience,
        numberOfCandidates: 4,
        jobDescription: jobDetails?.jobDescription,
        jobRequirements: jobDetails?.jobRequirements,
        idComapny: jobDetails?.company.id
    }


    useEffect(() => {
        const fetchDataAsync = async () => {

            try {
                const { data: response } = await axios(`/jobs/${id}?populate=jobRoles,company `);


                setJobDetails(response)

            } catch (error) {

                console.error(error);
            }
        };

        id ? fetchDataAsync() : " "
    }, [id]);

    console.log(jobDetails)


    return (<div>
        <div className='flex flex-row h-36 px-4 bg-primary items-center justify-evenly'>
            <div className='flex flex-col items-center gap-2'>
                <h2 className=' text-white text-3xl'>{job.jobTitle}</h2>
                <h3 className='text-white'>Created At: {job.jobDate}</h3>
                {userid === job?.idComapny && isComany ?
                    <div className='  flex flex-row gap-5'>
                        <Link href={`${job.id}/edit`}>
                            <button className=' bg-secondary  hover:bg-primary  hover:border-secondary  hover:border-2 hover:text-secondary transition duration-300 text-primary rounded-md px-4 py2'> Edit Job</button>
                        </Link>

                        <button className='bg-red-600 transition duration-300 hover:bg-primary hover:text-red-600 hover:border-red-600 hover:border-2 text-secondary rounded-md px-4 py2'>Delete job</button>

                    </div> : ""
                }
                {!isComany ? <div className=' flex flex-col items-center gap-2'>

                    <Link href={""}>
                        <button className=' bg-secondary  hover:bg-primary  hover:border-secondary  hover:border-2 hover:text-secondary transition duration-300  text-primary rounded-md px-4 py2'>Apply </button>
                    </Link>
                </div> : ""}
            </div>
            {userid === job?.idComapny && isComany ? <div className=' flex flex-col items-center gap-2'>
                <h2 className='text-5xl text-secondary'>{job.numberOfCandidates}</h2>
                <p className='text-secondary '>Candidates</p>
                <Link href={`${job.id}/candidates`}>
                    <button className=' bg-secondary  hover:bg-primary  hover:border-secondary  hover:border-2 hover:text-secondary transition duration-300  text-primary rounded-md px-4 py2'>See Candidates</button>
                </Link>
            </div> : ""}



        </div>
        <div className=' py-10 flex flex-row justify-center gap-5 flex-wrap '>
            <JobDetailsCard
                id={job.id}
                gender={job.gender}
                jobRole={job.jobrole} age={job.age} carerrLevel={job.carrerLevel}
                education={job.education} jobType={job.jobType}
                salary={job.salary}
                experience={job.experience} />

            <JobDescriptionCard jobRole={job.jobrole} jobDescription={job.jobDescription} />
            <JobRequirementsCard JobRequirements={job.jobRequirements} />

        </div>

    </div>

    )
}

export default index