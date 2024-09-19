import type { Metadata } from 'next';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'About',
};

export default function About() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-black">
			<div>This is the about page</div>
			<Link href="/">
				<Button color="primary">Home</Button>
			</Link>
			<Link href="/pricing">
				<Button color="secondary">Home</Button>
			</Link>
		</div>
	);
}
