'use client'

import Input from "../../../../components/Input";

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Select from "../../../../components/Select";
import { useState } from "react";
import RadioGroup from "../../../../components/RadioGroup";
import TextArea from "../../../../components/TextArea";
import ImageUploader from "../../../../components/ImageUploader";
import DateInput from "../../../../components/DateInput";
function Index() {
    const educations = [
        {
            degree: "Master",
            department: "IT",
            university: "Aleppo university",
            startDate: "3/1/2018",
            endDate: "9/10/2023"
        },]
    const Typesoptions = [
        { value: 'fulltime', label: 'Full time' },
        { value: 'parttime', label: 'Part time' },

    ];
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

    const startDate = watch('FromDate');
    const endDate = watch('ExpectedDate');

    const validateDateRange = () => {
        if (startDate && endDate && startDate > endDate) {
            return 'From Date must be greater than or equal to Expected Date';
        }
        return true;
    };
    return (
        <div className="bg-gray-200 px-10 text-base    ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-5 bg-white h-full   mx-10 md:mx-32 lg:mx-60 rounded-xl pt-4  pb-10 px-6 md:px-12  border-l-8   border-primary  shadow-md  shadow-slate-300">
                    <h1 className=" text-primary text-xl md:text-2xl lg:text-3xl  mt-6">
                        Education Info


                    </h1>
                    <h2 className="text-sm md:text-md lg:text-lg text-slate-500  mt-2 mb-12">

                    </h2>
                    <hr className="mb-5"></hr>


                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap my-7 ">
                        <div className="w-full">
                            <Controller
                                name="University"
                                control={control}
                                rules={{
                                    required: 'University is required',
                                    maxLength: {
                                        value: 30,
                                        message: 'University should be at max 20 characters long',
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'University should be at min 5 characters long',
                                    },
                                }}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "University",
                                            name: "University",
                                            type: "text",
                                            placeholder: "At University/Institution",
                                        }}
                                        inputStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        label={"At University/Institution"}
                                        required={true}
                                    />
                                )}
                            />
                            {errors.University && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.University.message}`}
                                </p>
                            )}
                        </div>

                    </div>

                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap  my-7 ">
                        <div className="w-1/2">
                            <Controller
                                name="Certificate"
                                control={control}
                                rules={{
                                    required: 'Certificate is required',
                                }}

                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        selectProps={{ placeholder: "Certificate Type" }}
                                        {...field}
                                        onChange={(value: string) => field.onChange(value)}
                                        label={"Certificate Type"}
                                        required={true}
                                    >
                                        <option
                                            value={undefined}
                                        >
                                            {"Certificate Type"}
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
                            {errors.Certificate && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"Certificate is required"}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2 ">
                            <Controller
                                name="FieldOfStudy"
                                control={control}
                                rules={{
                                    required: 'FieldOfStudy is required',
                                    maxLength: {
                                        value: 30,
                                        message: 'FieldOfStudy should be at max 20 characters long',
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'FieldOfStudy should be at min 5 characters long',
                                    },
                                }}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "FieldOfStudy",
                                            name: "FieldOfStudy",
                                            type: "text",
                                            placeholder: "Field Of Study",
                                        }}
                                        inputStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        label={"Field Of Study"}
                                        required={true}
                                    />
                                )}
                            />
                            {errors.FieldOfStudy && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.FieldOfStudy.message}`}
                                </p>
                            )}
                        </div>

                    </div>


                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap  my-7 ">

                        <div className="w-1/2 ">
                            <Controller
                                name="FromDate"
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field }) => (
                                    <DateInput
                                        Datestyle={`${inputstyle} mr-5`}
                                        Dateprops={{ placeholder: "From Date" }}
                                        label={'From Date'}
                                        lableStyle={lableStyle}
                                        {...field}
                                        onChange={(value: string) => {
                                            field.onChange(value);
                                        }}
                                    />

                                )}
                            />
                            {errors.FromDate && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"From Date is required"}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2 ">
                            <Controller
                                name="ExpectedDate"
                                control={control}
                                rules={{
                                    required: {
                                        message: "Awarded On Or Expected Date is required",
                                        value: true,
                                    },
                                    validate: validateDateRange
                                }}

                                render={({ field }) => (
                                    <DateInput
                                        Datestyle={`${inputstyle} mr-5`}
                                        Dateprops={{ placeholder: "Awarded On Or Expected Date" }}
                                        label={'Awarded On Or Expected Date'}
                                        lableStyle={lableStyle}
                                        {...field}
                                        onChange={(value: string) => {
                                            field.onChange(value);
                                        }}
                                    />

                                )}
                            />
                            {errors.ExpectedDate && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.ExpectedDate.message}`}
                                </p>
                            )}
                        </div>
                    </div>
                </div>





                <div className=" flex">
                    <button className=" bg-stone-500 text-secondary w-40  rounded-md h-10 m-auto  text-center" type="submit">
                        Save
                    </button>
                </div>
            </form >
        </div >


    );
}

export default Index;