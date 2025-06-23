// components/ui/DatePicker.tsx
import React, { useState } from "react";

interface Props {
	onChange: (value: string) => void;
}

export default function DatePicker({ onChange }: Props) {
	const [date, setDate] = useState<string>("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setDate(value);
		onChange(value);
	};

	return (
		<div>
			<label htmlFor="datepicker" className="block mb-2">
				Date de récupération
			</label>
			<input
				id="datepicker"
				type="datetime-local"
				value={date}
				onChange={handleChange}
				className="border p-2 rounded w-full"
			/>
		</div>
	);
}
