import { Outfit } from 'next/font/google';

export const outFit = Outfit({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-outfit',
});
