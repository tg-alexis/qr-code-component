import type { Metadata } from 'next';
import './globals.scss';
import { outFit } from '@/config/font.config';
import NextTopLoader from 'nextjs-toploader';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={outFit.className}>
				<link rel="icon" href={siteConfig.icon.src} sizes="any" />
				<NextTopLoader color="#014753" />
				{children}
			</body>
		</html>
	);
}
