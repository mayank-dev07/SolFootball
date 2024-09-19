'use client';

import { useState, createContext } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import AppWalletProvider from '@/components/providers/AppWalletProvider';

const DarkModeContext = createContext({
	darkMode: true,
	toggleDarkMode: () => {},
});
export default DarkModeContext;

export function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [darkMode, setDarkMode] = useState(true);
	const toggleDarkMode = () => {
		setDarkMode((prevTheme) => (prevTheme ? false : true));
	};

	return (
		<NextUIProvider className={darkMode ? 'dark' : 'light'}>
			<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
				<AppWalletProvider>{children}</AppWalletProvider>
			</DarkModeContext.Provider>
		</NextUIProvider>
	);
}
