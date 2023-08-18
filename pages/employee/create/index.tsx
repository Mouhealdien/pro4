'use client'

import Input from "../../../components/Input";

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Select from "../../../components/Select";
import { useState } from "react";
import RadioGroup from "../../../components/RadioGroup";
import TextArea from "../../../components/TextArea";
import ImageUploader from "../../../components/ImageUploader";
import DateInput from "../../../components/DateInput";
function Index() {
    const profileInfo = {
        firstName: "Ahmad",
        lastName: "Hashem",
        age: 28,
        nationality: "Syrian",
        gender: "Male",
        militaryStatus: "Exempt",
        workCite: "Aleppo",
        jobLevel: "senior",
        currentJobStatus: "unemployed",
        experienceYears: "1",
        phone: "+963945674825",
        email: "random@gmail.com",
    }

    const Locationsoptions = [
        { value: 'remote', label: 'Remote' },
        { value: 'nonremote', label: 'Non Remote' },

    ];
    const Typesoptions = [
        { value: 'fulltime', label: 'Full time' },
        { value: 'parttime', label: 'Part time' },

    ];
    const Categoryoptions = [
        { value: 'bla1', label: 'Development' },
        { value: 'bla2', label: 'Freelance' },

    ];
    const genderoptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'noPrefrence', label: 'No Prefrence' },


    ];
    const jobstatus = [
        { value: 'Unemployed', label: 'Unemployed' },
        { value: 'Working', label: 'Working' },
    ]
    const inputstyle = "pl-1  text-[0.5rem] md:text-xs lg:text-sm xl:text-md rounded-[10px] border border-stone-500 bg-background border-l-8   text-gray-400 h-8  md:h-10 lg:h-12"
    const lableStyle = "font-dosis   text-[0.5rem] md:text-xs lg:text-sm xl:text-md font-medium  "
    const selectStyle = "text-gray-700 font-dosis  text-[0.5rem] md:text-xs lg:text-sm xl:text-md  font-normal"
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
    } = useForm<any>();

    const onSubmit: SubmitHandler<any> = (data) => {
        alert(JSON.stringify(data))
        console.log(errors)
    };
    return (
        <div className="bg-gray-200 px-10 text-base ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-5 bg-white h-full   mx-10 md:mx-32 lg:mx-60 rounded-xl pt-4  pb-10 px-6 md:px-12  border-l-8   border-primary  shadow-md  shadow-slate-300">
                    <h1 className=" text-primary text-xl md:text-2xl lg:text-3xl  mt-6">
                        Basic Info


                    </h1>
                    <h2 className="text-sm md:text-md lg:text-lg text-slate-500  mt-2 mb-12">

                    </h2>
                    <hr className="mb-5"></hr>


                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap my-7 ">
                        <div className="w-1/2">
                            <Controller
                                name="FirstName"
                                control={control}
                                rules={{
                                    required: 'FirstName is required',
                                    maxLength: {
                                        value: 20,
                                        message: 'FirstName should be at max 20 characters long',
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'FirstName should be at min 5 characters long',
                                    },
                                }}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "FirstName",
                                            name: "FirstName",
                                            type: "text",
                                            placeholder: "First Name",
                                        }}
                                        inputStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        label={"First Name"}
                                        required={true}
                                    />
                                )}
                            />
                            {errors.FirstName && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.FirstName.message}`}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <Controller
                                name="LastName"
                                control={control}
                                rules={{
                                    required: 'LastName is required',
                                    maxLength: {
                                        value: 20,
                                        message: 'LastName should be at max 20 characters long',
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'LastName should be at min 5 characters long',
                                    },
                                }}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "LastName",
                                            name: "LastName",
                                            type: "text",
                                            placeholder: "Last Name",
                                        }}
                                        inputStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        label={"Last Name"}
                                        required={true}
                                    />
                                )}
                            />
                            {errors.LastName && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.LastName.message}`}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap  my-7 ">
                        <div className="w-1/2 ">
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: 'email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Please enter a valid EmailL',
                                    },
                                }}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "email",
                                            name: "email",
                                            type: "text",
                                            placeholder: "Email",
                                        }}
                                        inputStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        label={"Email"}
                                        required={true}
                                    />
                                )}
                            />
                            {errors.email && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.email.message}`}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2 ">
                            <Controller
                                name="City"
                                control={control}
                                rules={{
                                    required: 'city is required',
                                }}

                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        selectProps={{ placeholder: "City" }}
                                        {...field}
                                        onChange={(value: string) => field.onChange(value)}
                                        label={"City"}
                                        required={true}
                                    >
                                        <option
                                            value={undefined}
                                        >
                                            {"City"}
                                        </option>
                                        {Typesoptions.map((i) => (
                                            <option
                                                key={i.value}
                                                value={i.value}
                                            >
                                                {i.label}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                            />
                            {errors.City && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"City is required"}
                                </p>
                            )}
                        </div>

                    </div>

                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap  my-7 ">
                        <div className="w-1/2 ">
                            <Controller
                                name="Nationality"
                                control={control}
                                rules={{
                                    required: 'Nationality is required',
                                }}

                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        selectProps={{ placeholder: "Nationality" }}
                                        {...field}
                                        onChange={(value: string) => field.onChange(value)}
                                        label={"Nationality"}
                                        required={true}
                                    >
                                        <option
                                            value={undefined}
                                        >
                                            {"Nationality"}
                                        </option>
                                        {Typesoptions.map((i) => (
                                            <option
                                                key={i.value}
                                                value={i.value}
                                            >
                                                {i.label}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                            />
                            {errors.Nationality && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"Nationality is required"}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2 ">
                            <Controller
                                name="MilitaryService"
                                control={control}
                                rules={{
                                    required: 'Military Service is required',
                                }}

                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        selectProps={{ placeholder: "Military Service" }}
                                        {...field}
                                        onChange={(value: string) => field.onChange(value)}
                                        label={"Military Service"}
                                        required={true}
                                    >
                                        <option
                                            value={undefined}
                                        >
                                            {"Military Service"}
                                        </option>
                                        {Typesoptions.map((i) => (
                                            <option
                                                key={i.value}
                                                value={i.value}
                                            >
                                                {i.label}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                            />
                            {errors.MilitaryService && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"Military Service is required"}
                                </p>
                            )}
                        </div>

                    </div>
                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap  my-7 ">

                        <div className="w-1/2 ">
                            <Controller
                                name="Gender"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <RadioGroup
                                        options={genderoptions}
                                        onChange={(value: string) => {
                                            field.onChange(value);
                                        }}
                                        label={"Gender"}
                                        lableStyle={lableStyle}
                                        optionStyle={selectStyle}
                                        required={true}
                                    />
                                )}
                            />
                            {errors.Gender && (
                                <p className="text-sm text-red-700">
                                    {"Gender is required"}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2 ">
                            <Controller
                                name="BirthDay"
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field }) => (
                                    <DateInput
                                        Datestyle={`${inputstyle} mr-5`}
                                        Dateprops={{ placeholder: "Birth Day" }}
                                        label={'Birth Day'}
                                        lableStyle={lableStyle}
                                        {...field}
                                        onChange={(value: string) => {
                                            field.onChange(value);
                                        }}
                                    />

                                )}
                            />
                            {errors.BirthDay && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"Birth Day is required"}
                                </p>
                            )}
                        </div>
                    </div>
                </div>


                <div className="my-5 bg-white h-full   mx-10 md:mx-32 lg:mx-60 rounded-xl pt-4  pb-10 px-6 md:px-12  border-l-8   border-primary  shadow-md  shadow-slate-300">
                    <h1 className=" text-primary text-xl md:text-2xl lg:text-3xl  mt-6">
                        Career Interests
                    </h1>
                    <h2 className="text-sm md:text-md lg:text-lg text-slate-500  mt-2 mb-12">

                    </h2>
                    <hr className="mb-5"></hr>

                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap my-7 ">
                        <div className="w-1/2">
                            <Controller
                                name="JobLevel"
                                control={control}
                                rules={{
                                    required: 'Job Level is required',
                                }}

                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        selectProps={{ placeholder: "Job Level" }}
                                        {...field}
                                        onChange={(value: string) => field.onChange(value)}
                                        label={"Job Level"}
                                        required={true}
                                    >
                                        <option
                                            value={undefined}
                                        >
                                            {"Job Level"}
                                        </option>
                                        {Typesoptions.map((i) => (
                                            <option
                                                key={i.value}
                                                value={i.value}
                                            >
                                                {i.label}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                            />
                            {errors.JobLevel && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"Job Level is required"}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <Controller
                                name="ExperienceYears"
                                control={control}
                                rules={{
                                    required: 'Experience Years is required',
                                    maxLength: {
                                        value: 20,
                                        message: 'Experience Years should be at max 20 characters long',
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Experience Years should be at min 5 characters long',
                                    },
                                }}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "Experience Years",
                                            name: "Experience Years",
                                            type: "text",
                                            placeholder: "Experience Years",
                                        }}
                                        inputStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        label={"Experience Years"}
                                        required={true}
                                    />
                                )}
                            />
                            {errors.ExperienceYears && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.ExperienceYears.message}`}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap  my-7 ">
                        <div className="w-1/2 ">
                            <Controller
                                name="CurrentJobStatus"
                                control={control}


                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        selectProps={{ placeholder: "Current Job Status" }}
                                        {...field}
                                        onChange={(value: string) => field.onChange(value)}
                                        label={"Current Job Status"}

                                    >
                                        <option
                                            value={undefined}
                                        >
                                            {"Current Job Status"}
                                        </option>
                                        {jobstatus.map((i) => (
                                            <option
                                                key={i.value}
                                                value={i.value}
                                            >
                                                {i.label}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                            />
                            {errors.CurrentJobStatus && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"Current Job Status is required"}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2 ">

                        </div>

                    </div>







                </div>


                <div className=" flex">
                    <button className=" bg-stone-500 text-secondary w-40  rounded-md h-10 m-auto  text-center" type="submit">
                        Create Employee
                    </button>
                </div>
            </form >
        </div >


    );
}

export default Index;