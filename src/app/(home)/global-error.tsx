'use client';

import type { Metadata } from 'next';

//  Possible?>
// export const generateMetadata = (error: Error): Metadata => {
//     return {
//         title: `${error.name} Error`
//     }
// }

export const metadata: Metadata = {
	title: 'Error',
};

export default function GlobalError() {
	return (
		<div className="flex items-center justify-center flex-row gap-5 min-h-screen">
			<h1>Global Error</h1>
			<h1>|</h1>
			<h1>Page nNot Found</h1>
		</div>
	);
}
