"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { GoSearch } from "react-icons/go";
import * as actions from "@/actions";

export default function SearchInput() {
	const searchParams = useSearchParams();

	return (
		<form action={actions.search}>
			<Input
				name="term"
				defaultValue={searchParams.get("term") || ""}
				classNames={{
					base: "max-w-full sm:max-w-[10rem] h-10",
					mainWrapper: "h-full",
					input: "text-small",
					inputWrapper:
						"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
				}}
				startContent={<GoSearch />}
				placeholder="Type to search..."
			/>
		</form>
	);
}
