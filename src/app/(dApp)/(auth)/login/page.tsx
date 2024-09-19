import WalletButton from '@/components/WalletButton';
import { Metadata } from 'next';
// import Link from 'next/link';
import SolFootball from '/public/icons/solfootball.svg';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Login',
};

export default function Login() {
	// If already athenticated redirect to dashboard

	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-10">
			<div className="relative flex flex-col items-center justify-center gap-10 h-144 w-96 shadow-secondary rounded-2xl">
				<div className="absolute w-full h-full top-0 left-0 p-4">
					<div className="flex flex-row gap-2">
						<Image
							className="min-w-6"
							src={SolFootball}
							alt="SolFootball Icon"
						/>
						<h1 className="font-extrabold text-2xl">Login</h1>
					</div>
				</div>

				{/* MVP only wallet users */}
				<div className="flex flex-col items-center justify-center gap-3">
					{/* <h3>With a wallet</h3> */}
					<WalletButton />
				</div>

				{/* <div className="w-16 h-0.25 bg-white opacity-70" />

				<div className="flex flex-col items-center justify-center gap-3 pointer-events-none">
					<h3>With an email</h3>

					<form
						action=""
						method="post"
						className="flex flex-col items-center justify-center gap-3"
					>
						<input placeholder="email" type="text" />
						<input placeholder="password" type="text" />
					</form>
				</div> */}
			</div>

			{/* <Link
				href={'/signup'}
				className="hover:text-primary underline text-sm transition-all"
			>
				Create a new account?
			</Link> */}
		</div>
	);
}
