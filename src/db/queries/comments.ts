import type { Comment } from "@prisma/client";
import { cache } from "react";
import { db } from "@/db";

export type CommentWithAuthor = Comment & {
	user: { name: string | null; image: string | null };
};

export const fectchCommentsByPostId = cache(
	(postId: string): Promise<CommentWithAuthor[]> => {
		return db.comment.findMany({
			where: { postId },
			include: {
				user: {
					select: {
						name: true,
						image: true,
					},
				},
			},
		});
	}
);
