const paths = {
	home() {
		return `/`;
	},

	topicShow(topicSlug: string) {
		return `/topics/${topicSlug}`;
	},

	postShow(topicSlug: string, postId: string) {
		return `/topics/${topicSlug}/posts/${postId}`;
	},

	myPostShow(userId: string) {
		return `/posts/${userId}`;
	},

	myCommentsShow(userId: string) {
		return `/comments/${userId}`;
	},
};

export default paths;
