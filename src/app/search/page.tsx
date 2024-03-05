import { redirect } from "next/navigation";
import { Suspense } from "react";
import PostList from "@/components/posts/PostList";
import PostListLoading from "@/components/posts/PostListLoading";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";

interface SearchPageProps {
	searchParams: {
		term: string;
	};
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const { term } = searchParams;
	console.log("Term: ", term);

	if (!term) {
		redirect("/");
	}

	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-lg font-bold">
				Search result for{" "}
				<span className="text-gray-400">&quot;{term}&quot;</span>
			</h3>
			<Suspense fallback={<PostListLoading />}>
				<PostList fetchData={() => fetchPostsBySearchTerm(term)} />
			</Suspense>
		</div>
	);
}
