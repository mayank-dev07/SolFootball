import WalletButton from '@/components/WalletButton';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Signup',
};

export default function Signup() {
	// If already athenticated redirect to dashboard

	return (
		<div className="min-h-screen flex items-center justify-center gap-10">
			<WalletButton />

			<Link href={'/login'}>Already signed up?</Link>
		</div>
	);
}
