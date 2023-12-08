import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";

export default async function TopicList() {
	const topics = await db.topic.findMany();

	const renderedTopics = topics.map((topic) => {
		return (
			<div key={topic.id}>
				<Link href={paths.topicShow(topic.slug)}>
					<Chip size="lg" color="warning" variant="shadow">
						{topic.slug}
					</Chip>
				</Link>
			</div>
		);
	});

	return (
		<div className="flex flex-wrap items-center gap-2">{renderedTopics}</div>
	);
}
