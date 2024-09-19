import '@/app/globals.css';
import { Providers } from '@/app/providers';
import HeaderdApp from '@/components/HeaderdApp';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: 'SolFootball dApp',
		template: 'SolFootball dApp - %s',
	},
	description:
		'Manage, Play and earn rewards with your favourite football team!',
	applicationName: 'SolFootball dApp',
};

export default function dAppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					{/* <HeaderdApp /> */}
					{children}
				</Providers>
			</body>
		</html>
	);
}
