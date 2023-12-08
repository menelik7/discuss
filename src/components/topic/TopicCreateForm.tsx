"use client";

import { useFormState } from "react-dom";
import {
	Input,
	Button,
	Textarea,
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "../common/FormButton";

export default function TopicCreateForm() {
	const [formState, action] = useFormState(actions.createTopic, {
		errors: {},
	});

	return (
		<Popover placement="left-start">
			<PopoverTrigger className="align-center">
				<Button color="primary">Create a Topic</Button>
			</PopoverTrigger>
			<PopoverContent>
				<form action={action}>
					<div className="flex flex-col gap-4 p-4 w-80">
						<h3 className="text-lg">Create a Topic</h3>
						<Input
							name="topic"
							label="Topic"
							labelPlacement="outside"
							placeholder="Topic"
							isInvalid={!!formState.errors.topic}
							errorMessage={formState.errors.topic?.join(", ")}
						/>

						<Textarea
							name="description"
							label="Description"
							labelPlacement="outside"
							placeholder="Describe your topic"
							isInvalid={!!formState.errors.description}
							errorMessage={formState.errors.description?.join(", ")}
						/>

						{formState.errors._form ? (
							<div className="text-xs text-[#F31260]">
								{formState.errors._form?.join(", ")}
							</div>
						) : null}
						<FormButton>Submit</FormButton>
					</div>
				</form>
			</PopoverContent>
		</Popover>
	);
}
