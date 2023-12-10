import CommentShow from "@/components/comments/CommentShow";
import { fectchCommentsByPostId } from "@/db/queries/comments";

interface CommentListProps {
	postId: string;
}

export default async function CommentList({ postId }: CommentListProps) {
	const comments = await fectchCommentsByPostId(postId);

	const topLevelComments = comments.filter(
		(comment) => comment.parentId === null
	);
	const renderedComments = topLevelComments.map((comment) => {
		return (
			<CommentShow key={comment.id} commentId={comment.id} postId={postId} />
		);
	});

	return (
		<div className="space-y-3">
			<h1 className="text-lg font-bold">
				{comments.length
					? `All ${comments.length} comments`
					: "No comments yet..."}
			</h1>
			{renderedComments}
		</div>
	);
}
