import { Button } from '@nextui-org/react';
import WalletButton from './WalletButton';

export default function MenudApp({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const MENUS = [];

	return (
		<div className="grid grid-cols-20-90 z-20 h-screen ">
			<div className="flex flex-col items-center justify-around self-stretch bg-black border-r-1 ">
				<div>
					<WalletButton />
				</div>

				<div className="flex flex-col overflow-y-scroll gap-16 max-h-500 border-2">
					<div>Menu 1</div>
					<div>Menu 2</div>
					<div>Menu 3</div>
					<div>Menu 4</div>
					<div>Menu 5</div>
				</div>
			</div>

			<div className="flex items-center justify-center ">
				<div className="relative h-screen w-full ">
					<div className="absolute h-full top-0 left-0 p-6 ">
						<Button
							color="primary"
							className="font-bold pointer-events-auto"
						>
							n
						</Button>
					</div>

					{children}
				</div>
			</div>
		</div>
	);
}
