import DarkLightSwitcher from './DarkLightSwitcher';

export default function HeaderdApp() {
	return (
		<div className="absolute w-full h-full py-8 px-20 z-10">
			<div className="flex flex-row items-center justify-end gap-2 top-0 right-0">
				<DarkLightSwitcher />
			</div>
		</div>
	);
}
