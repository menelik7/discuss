import Link from "next/link";
import { Suspense } from "react";
import { db } from "@/db";
import PostShow from "@/components/posts/PostShow";
import PostShowLoading from "@/components/posts/PostShowLoading";
import CommentList from "@/components/comments/CommentList";
import CommentShowLoading from "@/components/comments/CommentShowLoading";
import CommentCreateForm from "@/components/comments/CommentCreateForm";
import paths from "@/paths";

interface PostShowPageProps {
	params: {
		slug: string;
		postId: string;
	};
}

export default async function PostShowPage({ params }: PostShowPageProps) {
	const { slug, postId } = params;

	return (
		<div className="space-y-3">
			<Link
				className="hover:underline hover:underline-offset-4 decoration-solid"
				href={paths.topicShow(slug)}
			>
				{"< "}Back to {slug}
			</Link>
			<Suspense fallback={<PostShowLoading />}>
				<PostShow postId={postId} />
			</Suspense>

			<CommentCreateForm postId={postId} />
			<Suspense fallback={<CommentShowLoading />}>
				<CommentList postId={postId} />
			</Suspense>
		</div>
	);
}

export async function generateStaticParams() {
	const topics = await db.topic.findMany({
		include: { posts: { select: { id: true } } },
	});

	return topics.flatMap((topic) => {
		return topic.posts.map((post) => {
			return {
				postId: post.id,
				slug: topic.slug,
			};
		});
	});
}
