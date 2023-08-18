import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Select from '../components/Select'
import Input from './Input'
const FilterCandidates = () => {
    const {
        control,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        
        console.log(data)
    };

    const genderoptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'noPrefrence', label: 'No Prefrence' },


    ];
  return (
    <div>
        <div className=' w-[900px] max-w-md lg:max-w-sm border-gray-300 border-[3px] p-4 border-l-primary  border-l-[6px]  shadow-xl  rounded-md '> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-7'>
                    <Controller
                                name="Job Roles"
                                control={control}

                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${'border-l-primary outline  border-l-[6px] rounded-md'} mr-5`}
                                        lableStyle={" text-primary"}
                                        selectProps={{ placeholder: "Job Roles" }}
                                        {...field}
                                        onChange={(value) => field.onChange(value)}
                                        label={"Job Roles"}

                                    >
                                        <option

                                            value={undefined}
                                        >
                                            {""}
                                        </option>
                                        {genderoptions.map((i) => (
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
                            <Controller
                                name="City"
                                control={control}

                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${'border-l-primary  outline  border-l-[6px] rounded-md'} mr-5`}
                                        lableStyle={" text-primary"}
                                        selectProps={{ placeholder: "City" }}
                                        {...field}
                                        onChange={(value) => field.onChange(value)}
                                        label={"City"}

                                    >
                                        <option

                                            value={undefined}
                                        >
                                            {""}
                                        </option>
                                        {genderoptions.map((i) => (
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
                            <Controller
                                name="Gender"
                                control={control}

                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${'border-l-primary outline   border-l-[6px] rounded-md'} mr-5`}
                                        lableStyle={" text-primary"}
                                        selectProps={{ placeholder: "Gender" }}
                                        {...field}
                                        onChange={(value) => field.onChange(value)}
                                        label={"Gender"}

                                    >
                                        <option

                                            value={undefined}
                                        >
                                            {""}
                                        </option>
                                        {genderoptions.map((i) => (
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

                    <Controller 
                                name="Current job Status"
                                control={control}

                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${'border-l-primary outline   border-l-[6px] rounded-md'} mr-5`}
                                        lableStyle={" text-primary"}
                                        selectProps={{ placeholder: "Current job Status" }}
                                        {...field}
                                        onChange={(value) => field.onChange(value)}
                                        label={"Current job Status"}

                                    >
                                        <option

                                            value={undefined}
                                        >
                                            {""}
                                        </option>
                                        {genderoptions.map((i) => (
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
                            <Controller
                                name="Education Level"
                                control={control}

                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${'border-l-primary outline   border-l-[6px] rounded-md'} mr-5`}
                                        lableStyle={" text-primary"}
                                        selectProps={{ placeholder: "Education Level" }}
                                        {...field}
                                        onChange={(value) => field.onChange(value)}
                                        label={"Education Level"}

                                    >
                                        <option

                                            value={undefined}
                                        >
                                            {""}
                                        </option>
                                        {genderoptions.map((i) => (
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
                            <Controller
                                name="Language"
                                control={control}

                                render={({ field }) => (
                                    <Select
                                        selectStyle={`${'border-l-primary outline   border-l-[6px] rounded-md'} mr-5`}
                                        lableStyle={" text-primary"}
                                        selectProps={{ placeholder: "Language" }}
                                        {...field}
                                        onChange={(value) => field.onChange(value)}
                                        label={"Language"}

                                    >
                                        <option

                                            value={undefined}
                                        >
                                            {""}
                                        </option>
                                        {genderoptions.map((i) => (
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
                           
                            <Controller
                                name="Experience"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "Experience",
                                            name: "Experience",
                                            type: "number",
                                            placeholder: "Experience",
                                        }}
                                        inputStyle={` border-l-primary outline   border-l-[6px] rounded-md mr-5`}
                                        lableStyle={'text-primary'}
                                        label={"Experience"}
                                       
                                    />
                                )}
                            />
                            <Controller
                                name="Age"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        inputProps={{
                                            ...field,
                                            id: "Age",
                                            name: "Age",
                                            type: "number",
                                            placeholder: "Age",
                                        }}
                                        inputStyle={`border-l-primary outline   border-l-[6px] rounded-md mr-5`}
                                        lableStyle={'text-primary'}
                                        label={"Age"}
                                       
                                    />
                                )}
                            />
                             <button className=" bg-primary text-secondary w-40 hover:bg-white hover:border-primary hover:border-2 hover:text-primary transition duration-300  rounded-md h-10 m-auto  text-center" type="submit">
                                 Search
                            </button>
                            </div>
       
            </form>
        </div>
    </div>
  )
}

export default FilterCandidates