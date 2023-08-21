
import React, { useState, useEffect, use, useRef } from 'react'
import ProfileHeader from '../../../components/ProfileHeader'
import EducationCard from '../../../components/EducationCard'
import ExperienceCard from '../../../components/ExperienceCard'
import SkillsCard from '../../../components/SkillsCard'
import LanguagesCard from '../../../components/LanguagesCard'
import { axios } from "../../../utils/axios";
import { useRouter } from 'next/router'
import { responseParser } from '../../../utils/helper'
import { BASE_SERVEFR_URL } from '../../../utils/constant'
const index = () => {

    const router = useRouter();
    const id = router.query.id
    console.log(id)
    const [user, setUser] = useState();
    const [email, setemail] = useState();
    useEffect(() => {

        const fetchDataAsync = async () => {
            console.log(id)
            try {
                const response = await axios(`/profile-details/${id}?populate=educations,experiences,languages,workingCities,militaryService,jobLevel,profileImage`);

                setemail(response.data.email)
                setUser(response.data);

            } catch (error) {

                console.error(error);
            }
        };

        fetchDataAsync();


    }, [id]);
    console.log(user)
    const reportTemplateRef = useRef(null);

    const handleGeneratePdf = () => {
        window.print()
    };
    const printContent = () => {
        const printableContent = document.getElementById("printable-content");
        const printWindow = window.open("", "", "height=1000,width=1000");
        printWindow.document.write(printableContent.innerHTML);
        printWindow.print();
    };
    const profileInfo = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        age: user?.birthDate,
        nationality: user?.nationality,
        gender: user?.gender,
        militaryStatus: user?.militaryService?.name,
        workCite: user?.workingCities,
        jobLevel: user?.jobLevel?.details,
        currentJobStatus: user?.currentJobStatus,
        experienceYears: user?.yearsOfExperience,
        phone: user?.phone,
        email: email,
        education: user?.educations,
        experience: user?.experiences,
        skills: user?.Skills,
        languages: user?.languages,
        img: user?.profileImage?.url ? BASE_SERVEFR_URL + user?.profileImage?.url : undefined
    }

    return (
        <div >

            <div className='flex flex-col gap-5' onLoad={() => window.print()}>



                <ProfileHeader Fname={profileInfo.firstName} Lname={profileInfo.lastName}
                    age={profileInfo.age} nationality={profileInfo.nationality}
                    gender={profileInfo.gender} militaryStatus={profileInfo.militaryStatus}
                    workCite={profileInfo.workCite} jobLevel={profileInfo.jobLevel} currentJobStatus={profileInfo.currentJobStatus}
                    experience={profileInfo.experienceYears} phone={profileInfo.phone} email={profileInfo.email} img={profileInfo.img}
                />
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-row  gap-5 items-baseline justify-center '>
                        <EducationCard education={profileInfo?.education} />
                        <SkillsCard skills={profileInfo?.skills} />
                    </div>

                    <div className='flex flex-row items-baseline gap-5 justify-center'>
                        <ExperienceCard experience={profileInfo?.experience} />
                        <LanguagesCard languages={profileInfo?.languages} />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default index