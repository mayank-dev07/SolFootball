import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pricing',
};

export default function Pricing() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-black">
			This is the pricing page
		</main>
	);
}
