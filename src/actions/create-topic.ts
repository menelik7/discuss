"use server";

import type { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

const createTopicSchema = z.object({
	topic: z
		.string()
		.min(3)
		.regex(/^[a-z-]/, {
			message: "Must be lowercase letters or dashes",
		})
		.refine(
			(s) => !s.includes(" "),
			"you can hyphenate but spaces are not allowed"
		),
	description: z.string().min(10),
});

interface CreateTopicFormState {
	errors: {
		topic?: string[];
		description?: string[];
		_form?: string[];
	};
}

export async function createTopic(
	formState: CreateTopicFormState,
	formData: FormData
): Promise<CreateTopicFormState> {
	const result = createTopicSchema.safeParse({
		topic: formData.get("topic"),
		description: formData.get("description"),
	});

	if (!result.success) {
		return { errors: result.error.flatten().fieldErrors };
	}

	const session = await auth();

	if (!session || !session.user) {
		return {
			errors: {
				_form: ["You must be signed in to perform this task."],
			},
		};
	}

	let topic: Topic;
	try {
		topic = await db.topic.create({
			data: {
				slug: result.data.topic,
				description: result.data.description,
			},
		});
	} catch (err: unknown) {
		if (err instanceof Error) {
			return {
				errors: {
					_form: [err.message],
				},
			};
		} else {
			return {
				errors: {
					_form: ["Something went wrong - please try again later."],
				},
			};
		}
	}

	revalidatePath("/");
	redirect(paths.topicShow(topic.slug));
}
