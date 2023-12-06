import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
	return (
		<div>
			<div className="flex items-center gap-2">
				<form action={actions.signIn}>
					<Button type="submit">Sign in</Button>
				</form>
				<form action={actions.signOut}>
					<Button type="submit">Sign out</Button>
				</form>
			</div>

			<Profile />
		</div>
	);
}
