import { Skeleton } from "@nextui-org/react";

export default function CommentShowLoading() {
	return (
		<div className="space-y-3">
			<Skeleton className="h-4 w-24" />
			<div className="p-4 border mt-2 mb-1">
				<div className="flex gap-3">
					<Skeleton className="w-10 h-10 rounded-full" />

					<div className="p-4 space-y-2">
						<Skeleton className="h-2 w-16" />
						<Skeleton className="h-6 w-32" />
						<Skeleton className="h-2 w-8" />
					</div>
				</div>
				<div className="pl-4">
					<div className="p-4 border mt-2 mb-1">
						<div className="flex gap-3">
							<Skeleton className="w-10 h-10 rounded-full" />

							<div className="p-4 space-y-2">
								<Skeleton className="h-2 w-16" />
								<Skeleton className="h-6 w-32" />
								<Skeleton className="h-2 w-8" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
