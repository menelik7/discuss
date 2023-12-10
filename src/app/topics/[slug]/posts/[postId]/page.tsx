import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/db";
import PostShow from "@/components/posts/PostShow";
import CommentList from "@/components/comments/CommentList";
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

	const post = await db.post.findUnique({
		where: { id: postId },
	});

	if (!post) {
		notFound();
	}

	return (
		<div className="space-y-3">
			<Link
				className="hover:underline hover:underline-offset-4 decoration-solid"
				href={paths.topicShow(slug)}
			>
				{"< "}Back to {slug}
			</Link>
			<PostShow postId={postId} />
			<CommentCreateForm postId={postId} />
			<CommentList postId={postId} />
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
