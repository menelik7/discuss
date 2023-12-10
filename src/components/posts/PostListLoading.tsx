import { Skeleton } from "@nextui-org/react";

export default function PostListLoading() {
	return (
		<div className="col-span-3">
			<div className="space-y-2">
				<div className="border rounded p-2">
					<Skeleton className="h-6 w-80 mb-2" />
					<div className="flex flex-row gap-8">
						<Skeleton className="h-3 w-28" />
						<Skeleton className="h-3 w-14" />
					</div>
				</div>

				<div className="border rounded p-2">
					<Skeleton className="h-6 w-80 mb-2" />
					<div className="flex flex-row gap-8">
						<Skeleton className="h-3 w-28" />
						<Skeleton className="h-3 w-14" />
					</div>
				</div>

				<div className="border rounded p-2">
					<Skeleton className="h-6 w-80 mb-2" />
					<div className="flex flex-row gap-8">
						<Skeleton className="h-3 w-28" />
						<Skeleton className="h-3 w-14" />
					</div>
				</div>
			</div>
		</div>
	);
}
