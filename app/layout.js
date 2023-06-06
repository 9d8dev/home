import './globals.css';
import { Syne } from 'next/font/google';

const syne = Syne({ subsets: ['latin'] });

export const metadata = {
	title: '9D8 Development Studio | Bridger Tower and Cameron Youngblood',
	description:
		'A development studio in Utah that specializes in web and software development. Using Next.js, Svelte, React, Ruby on Rails, PHP, and Laravel.',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://9d8.dev',
		title: '9D8 Development Studio | Bridger Tower and Cameron Youngblood',
		description:
			'A development studio in Utah that specializes in web and software development. Using Next.js, Svelte, React, Ruby on Rails, PHP, and Laravel.',
		site_name: '9D8 Development Studio',
		images: [
			{
				url: './og.jpg',
				width: 480,
				height: 480,
				alt: '9D8 Development Studio OG Image'
			}
		]
	}
};

export default function RootLayout({ children }) {
	return (
		<html className="bg-[#222] text-white" lang="en">
			<body className={syne.className}>{children}</body>
		</html>
	);
}
