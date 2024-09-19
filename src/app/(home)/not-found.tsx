import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: '404 Error',
};

export default function NotFound() {
	return (
		<html>
			<body>
				<div className="flex items-center justify-center flex-col gap-10 min-h-screen">
					<div className="flex items-center justify-center flex-row gap-5">
						<h1>404 Error</h1>
						<h1>|</h1>
						<h1>Page nNot Found</h1>
					</div>
					<div>Button</div>
				</div>
			</body>
		</html>
	);
}
