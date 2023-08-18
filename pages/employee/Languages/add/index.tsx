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
    const Levels = [
        { value: 'A1', label: 'A1' },
        { value: 'A2', label: 'A2' },
        { value: 'B1', label: 'B1' },
        { value: 'B2', label: 'B2' },



    ];
    return (
        <div className="bg-gray-200 px-10 text-base    ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-5 bg-white h-full   mx-10 md:mx-32 lg:mx-60 rounded-xl pt-4  pb-10 px-6 md:px-12  border-l-8   border-primary  shadow-md  shadow-slate-300">
                    <h1 className=" text-primary text-xl md:text-2xl lg:text-3xl  mt-6">
                        Languages
                    </h1>
                    <h2 className="text-sm md:text-md lg:text-lg text-slate-500  mt-2 mb-12">

                    </h2>
                    <hr className="mb-5"></hr>



                    <div className="flex   items-center  mx-2 md:mx-10 lg:mx-20  flex-wrap  my-7 ">
                        <div className="w-1/2">
                            <Controller
                                name="Language"
                                control={control}
                                rules={{
                                    required: 'Language is required',

                                }}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "Language",
                                            name: "Language",
                                            type: "text",
                                            placeholder: "Language",
                                        }}
                                        inputStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        label={"Language"}
                                        required={true}
                                    />
                                )}
                            />
                            {errors.Language && (
                                <p className="text-xs mb-3 text-red-700">
                                    {`${errors.Language.message}`}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2 ">
                            <Controller
                                name="rate"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${inputstyle} mr-5`}
                                        lableStyle={lableStyle}
                                        selectProps={{ placeholder: "rate" }}
                                        {...field}
                                        onChange={(value: string) => field.onChange(value)}
                                        label={"rate"}
                                        required={true}
                                    >
                                        <option

                                            value={undefined}
                                        >
                                            {"rate"}
                                        </option>
                                        {Levels.map((i) => (
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
                            {errors.rate && (
                                <p className="text-xs mb-3 text-red-700">
                                    {"rate is required"}
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