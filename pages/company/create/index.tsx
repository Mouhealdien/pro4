'use client'

import Input from "../../../components/Input";

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Select from "../../../components/Select";
import { useState } from "react";
import RadioGroup from "../../../components/RadioGroup";
import TextArea from "../../../components/TextArea";
import ImageUploader from "../../../components/ImageUploader";
function Index() {


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
    const inputstyle = "pl-1  text-sm rounded-[10px] border border-stone-500 bg-background border-l-8   text-gray-400 h-8  md:h-10 lg:h-12"
    const lableStyle = "font-dosis text-xs md:text-sm lg:text-md xl:text-lg font-medium  "
    const selectStyle = "text-gray-700 font-dosis  text-xs md:text-sm lg:text-md xl:text-lg  font-normal"
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
                        Company profile

                    </h1>
                    <h2 className="text-sm md:text-md lg:text-lg text-slate-500  mt-2 mb-12">
                        Write below your company profile which will appear with each of your job posts. You will still have the option to hide it from any of your jobs.
                    </h2>
                    <hr className="mb-5"></hr>


                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap my-7 ">
                        <div className="w-1/2">
                            <Controller
                                name="CompanyName"
                                control={control}
                                rules={{
                                    required: 'title is required',
                                    maxLength: {
                                        value: 20,
                                        message: 'title should be at max 20 characters long',
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'title should be at min 5 characters long',
                                    },
                                }}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "CompanyName",
                                            name: "CompanyName",
                                            type: "text",
                                            placeholder: "Company Name",
                                        }}
                                        inputStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        label={"Company Name"}
                                        required={true}
                                    />
                                )}
                            />
                            {errors.CompanyName && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.CompanyName.message}`}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2">

                        </div>
                    </div>

                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap  my-7 ">
                        <div className="w-1/2 ">
                            <Controller
                                name="CompanyBio"
                                control={control}
                                rules={{

                                    minLength: {
                                        value: 100,
                                        message: 'Company Bio should be at least 50 characters long',
                                    },
                                }}
                                render={({ field }) => (
                                    <TextArea
                                        textareaProps={{
                                            ...field,
                                            id: 'CompanyBio',
                                            name: 'CompanyBio',
                                            placeholder: 'Write Company Bio',
                                        }}
                                        textareaStyle=" pl-1 text-sm   h-[15.875rem] rounded-[10px] border border-stone-500 mb-[3.06rem]  bg-background border-l-8   border-primary   text-gray-400"
                                        label={"Company Bio"}
                                        lableStyle={lableStyle}
                                    />
                                )}
                            />
                            {errors.CompanyBio && (
                                <p className="text-xs mb-3 text-red-700 ">
                                    {`${errors.CompanyBio.message}`}
                                </p>
                            )}
                        </div>


                    </div>




                </div>


                <div className="my-5 bg-white h-full   mx-10 md:mx-32 lg:mx-60 rounded-xl pt-4  pb-10 px-6 md:px-12  border-l-8   border-primary  shadow-md  shadow-slate-300">
                    <h1 className=" text-primary text-xl md:text-2xl lg:text-3xl  mt-6">
                        General info
                    </h1>
                    <h2 className="text-sm md:text-md lg:text-lg text-slate-500  mt-2 mb-12">
                        This information will be private except if you choose to show it for the employees when you add new Job.
                    </h2>
                    <hr className="mb-5"></hr>


                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap my-7 ">
                        <div className="w-1/2">
                            <Controller
                                name="City"
                                control={control}
                                rules={{ required: true }}
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
                        <div className="w-1/2">
                            <Controller
                                name="Address"
                                control={control}
                                rules={{
                                    required: 'Address is required',
                                    maxLength: {
                                        value: 40,
                                        message: 'Address should be at max 20 characters long',
                                    },
                                    minLength: {
                                        value: 4,
                                        message: 'Address should be at min 5 characters long',
                                    },
                                }}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "Address",
                                            name: "Address",
                                            type: "text",
                                            placeholder: "Address",
                                        }}
                                        inputStyle={`${inputstyle} `}
                                        lableStyle={lableStyle}
                                        label={"Address"}
                                        required={true}
                                    />
                                )}
                            />
                            {errors.Address && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.Address.message}`}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap my-7 ">
                        <div className="w-1/2">
                            <Controller
                                name="IndustriesOfCompany"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        selectProps={{ placeholder: "Industries Of Company" }}
                                        {...field}
                                        onChange={(value: string) => field.onChange(value)}
                                        label={"Industries Of Company"}
                                        required={true}
                                    >
                                        <option

                                            value={undefined}
                                        >
                                            {"Industries Of Company"}
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
                            {errors.IndustriesOfCompany && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"Industries Of Company is required"}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <Controller
                                name="CompanySize"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${inputstyle}`}
                                        lableStyle={lableStyle}
                                        selectProps={{ placeholder: "Company Size" }}
                                        {...field}
                                        onChange={(value: string) => field.onChange(value)}
                                        label={"Company Size"}
                                        required={true}
                                    >
                                        <option

                                            value={undefined}
                                        >
                                            {"Company Size"}
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
                            {errors.CompanySize && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"Company Size is required"}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap my-7 ">
                        <div className="w-1/2">
                            <Controller
                                name="YearFounded"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        selectProps={{ placeholder: "Year Founded" }}
                                        {...field}
                                        onChange={(value: string) => field.onChange(value)}
                                        label={"Year Founded"}
                                        required={true}
                                    >
                                        <option

                                            value={undefined}
                                        >
                                            {"Year Founded"}
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
                            {errors.YearFounded && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"Year Founded is required"}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2">
                            <Controller
                                name="Phone"
                                control={control}
                                rules={{
                                    required: 'phone is required',
                                    pattern: {
                                        value: /^\d{14}$/,
                                        message: 'Phone number should be a 14-digit number',
                                    },
                                    minLength: {
                                        value: 14,
                                        message: 'Phone number should be a 14-digit number',
                                    }
                                }}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "Phone",
                                            name: "Phone",
                                            type: "text",
                                            placeholder: "Phone",
                                        }}
                                        inputStyle={`${inputstyle}`}
                                        lableStyle={lableStyle}
                                        label={"Phone"}
                                        required={true}
                                    />
                                )}
                            />
                            {errors.Phone && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.Phone.message}`}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap my-7 ">

                        <div className="w-1/2">
                            <Controller
                                name="CompanyWebsite"
                                control={control}
                                rules={{

                                    pattern: {
                                        value: /^(www\.)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z0-9-]+(\/.*)?$/,
                                        message: 'Please enter a valid website URL',
                                    },
                                }}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "Company Website",
                                            name: "Company Website",
                                            type: "text",
                                            placeholder: "Company Website",
                                        }}
                                        inputStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        label={"Company Website"}

                                    />
                                )}
                            />
                            {errors.CompanyWebsite && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.CompanyWebsite.message}`}
                                </p>
                            )}
                        </div>
                    </div>



                </div>


                <div className=" flex">
                    <button className=" bg-stone-500 text-secondary w-40  rounded-md h-10 m-auto  text-center" type="submit">
                        Add New Job
                    </button>
                </div>
            </form>
        </div>


    );
}

export default Index;