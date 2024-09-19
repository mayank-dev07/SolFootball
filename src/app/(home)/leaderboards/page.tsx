import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Leaderboards',
};

export default function Leaderboards() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-black">
			This is the leaderboard page
		</main>
	);
}
