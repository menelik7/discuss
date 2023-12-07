"use client";

import Link from "next/link";
import {
	NavbarItem,
	Button,
	Avatar,
	Popover,
	PopoverTrigger,
	PopoverContent,
	CircularProgress,
} from "@nextui-org/react";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import * as actions from "@/actions";

const avatarButtons = [
	{
		text: "My posts",
		path: "/topics/javascript/posts/new",
	},
	{
		text: "My comments",
		path: "/topics/javascript/posts/1",
	},
];

export default function HeaderAuth() {
	const session = useSession();

	const renderedAvatarButtons = avatarButtons.map((avatarButton) => {
		return (
			<Link key={avatarButton.text} href={avatarButton.path}>
				<Button
					className="px-4 py-2 hover:bg-[#F4F4F5]"
					variant="light"
					radius="none"
					fullWidth
				>
					{avatarButton.text}
				</Button>
			</Link>
		);
	});

	let authContent: ReactNode;
	if (session.status === "loading") {
		authContent = (
			<CircularProgress size="lg" color="secondary" aria-label="Loading..." />
		);
	} else if (session?.data?.user) {
		const { user } = session?.data;
		authContent = (
			<Popover placement="bottom-end">
				<PopoverTrigger className="border-2 border-[#635BFF] rounded-full shadow-md">
					<div className="p-0.5">
						<Avatar src={user?.image || ""} className="cursor-pointer" />
					</div>
				</PopoverTrigger>
				<PopoverContent className="border border-[#635BFF] p-0 box-border">
					<div className="flex flex-col items-center w-full bg-[#635BFF] border-b border-[#635BFF] text-white rounded-t-xl p-4">
						<h3 className="text-xl">{user?.name}</h3>
						<p>{user?.email}</p>
					</div>
					<div className="flex flex-col w-full">
						{renderedAvatarButtons}
						<form action={actions.signOut}>
							<button
								type="submit"
								className="w-full px-4 py-2 rounded-b-[13px] hover:bg-[#F4F4F5]"
							>
								Sign out
							</button>
						</form>
					</div>
				</PopoverContent>
			</Popover>
		);
	} else {
		authContent = (
			<>
				<NavbarItem>
					<form action={actions.signIn}>
						<Button
							type="submit"
							variant="light"
							className="border-2 border-[#635BFF] text-[#635BFF]"
						>
							Sign in
						</Button>
					</form>
				</NavbarItem>
				<NavbarItem>
					<form action={actions.signIn}>
						<Button
							type="submit"
							className="border border-[#635BFF] bg-[#635BFF] text-white"
						>
							Sign up
						</Button>
					</form>
				</NavbarItem>
			</>
		);
	}

	return authContent;
}
