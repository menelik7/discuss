import { Skeleton } from "@nextui-org/react";

export default function PostShowLoading() {
	return (
		<div className="my-4">
			<Skeleton className="h-6 w-24 my-2" />
			<div className="p-4 border rounded">
				<Skeleton className="h-8 w-48" />
			</div>
		</div>
	);
}
