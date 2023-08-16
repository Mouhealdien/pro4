import React, { ChangeEvent, ReactNode } from 'react';

type Props = {
	selectProps: any
	children: ReactNode;
	onChange?: (value: string) => void;
	selectStyle?: string;
	label: string;
	lableStyle?: string;
	required?: boolean
};
const Select = ({ selectProps, selectStyle, children, label, lableStyle, onChange, required }: Props) => {
	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange(event.target.value);
		}
	};

	return (
		<div className='flex flex-col'>
			<label className={lableStyle}>
				{label}  {required ? <span className='  text-red-600 '>*</span> : ""}
			</label>
			<select
				onChange={handleSelectChange}
				className={selectStyle}
				{...selectProps}
			>
				{children}
			</select>
		</div>
	);
};

export default Select;
