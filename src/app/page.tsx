import { Divider } from "@nextui-org/react";
import TopicCreateForm from "@/components/topic/TopicCreateForm";
import TopicList from "@/components/topic/TopicList";

export default function Home() {
	return (
		<div className="grid grid-cols-4 gap-4 p-4">
			<div className="col-span-3">
				<h1 className="text-xl m-2">Top Posts</h1>
			</div>
			<div className="flex flex-col justify-center border shadow py-3 px-2">
				<TopicCreateForm />
				<Divider className="my-3" />
				<h3 className="text-lg text-center mb-2">Topics</h3>
				<TopicList />
			</div>
		</div>
	);
}
