'use client';

import { usePathname } from 'next/navigation';
import { NavbarContent, NavbarItem, Link } from '@nextui-org/react';

export default function NavbarItemsHeader({
	menuItems,
}: {
	menuItems: {
		text: string;
		href: string;
	}[];
}) {
	const pathname = usePathname();

	return (
		<NavbarContent className="hidden sm:flex gap-4" justify="center">
			{menuItems.map((item, index) => (
				<NavbarItem key={`${item.text}-${index}-content`}>
					<Link
						color={
							pathname === item.href ? 'primary' : 'foreground'
						}
						href={item.href}
					>
						{item.text}
					</Link>
				</NavbarItem>
			))}
		</NavbarContent>
	);
}
