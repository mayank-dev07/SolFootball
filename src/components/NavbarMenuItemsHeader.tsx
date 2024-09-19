'use client';

import { NavbarMenu, NavbarMenuItem, Link } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

export default function NavbarMenuItemsHeader({
	menuItems,
}: {
	menuItems: {
		text: string;
		href: string;
	}[];
}) {
	const pathname = usePathname();

	return (
		<NavbarMenu>
			{menuItems.map((item, index) => (
				<NavbarMenuItem key={`${item.text}-${index}-menu`}>
					<Link
						color={
							pathname === item.href ? 'primary' : 'foreground'
						}
						className="w-full"
						href={item.href}
						size="lg"
					>
						{item.text}
					</Link>
				</NavbarMenuItem>
			))}
		</NavbarMenu>
	);
}
