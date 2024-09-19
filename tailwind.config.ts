import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			gridTemplateColumns: {
				fit: 'repeat(auto-fit, 1fr)',
				'20-90': '12.5% 87.5%',
			},
			height: {
				0.25: '0.0625rem',
				0.5: '0.125rem',
				144: '36rem',
				193: '48rem',
			},
			boxShadow: {
				secondary: '0 2px 4px 0 secondary, 0 3px 10px 0 secondary',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: '#6d28d9',
							foreground: '#FFFFFF',
							50: '#f5f3ff',
							100: '#ede9fe',
							200: '#ddd6fe',
							300: '#c4b5fd',
							400: '#a78bfa',
							500: '#8b5cf6',
							600: '#7c3aed',
							700: '#6d28d9',
							800: '#F6FFF1',
							900: '#4c1d95',
						},
						secondary: {
							DEFAULT: '#94D928',
							foreground: '#FFFFFF',
							50: '#FDFFF3',
							100: '#FAFEE9',
							200: '#F7FED6',
							300: '#EEFDB5',
							400: '#DEFA8B',
							500: '#C7F65C',
							600: '#ABED3A',
							700: '#94D928',
							800: '#7CB621',
							900: '#66951D',
						},
					},
				},
				dark: {
					colors: {
						primary: {
							DEFAULT: '#8b5cf6',
							foreground: '#000000',
							50: '#f5f3ff',
							100: '#ede9fe',
							200: '#ddd6fe',
							300: '#c4b5fd',
							400: '#a78bfa',
							500: '#8b5cf6',
							600: '#7c3aed',
							700: '#6d28d9',
							800: '#5b21b6',
							900: '#4c1d95',
						},
						secondary: {
							DEFAULT: '#C7F65C',
							foreground: '#000000',
							50: '#FDFFF3',
							100: '#FAFEE9',
							200: '#F7FED6',
							300: '#EEFDB5',
							400: '#DEFA8B',
							500: '#C7F65C',
							600: '#ABED3A',
							700: '#94D928',
							800: '#7CB621',
							900: '#66951D',
						},
					},
				},
			},
		}),
	],
};
export default config;
