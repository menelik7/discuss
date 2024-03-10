"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { GoSearch } from "react-icons/go";
import { FormEvent } from "react";

export default function SearchInput() {
	const [text, setText] = useState("");
	const searchParams = useSearchParams();
	const { replace } = useRouter();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const params = new URLSearchParams(searchParams);

		if (text) {
			params.set("term", text);
		} else {
			params.delete("term");
		}
		replace(`/search?${params.toString()}`);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<Input
				name="term"
				value={text}
				onChange={(e) => setText(e.target.value)}
				defaultValue={searchParams.get("term") || ""}
				classNames={{
					base: "max-w-full sm:max-w-[10rem] h-10",
					mainWrapper: "h-full",
					input: "text-small",
					inputWrapper:
						"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
				}}
				startContent={<GoSearch />}
				placeholder="Type in your search..."
			/>
		</form>
	);
}
