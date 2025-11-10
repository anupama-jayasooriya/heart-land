import type { Metadata } from 'next';
import { David_Libre } from 'next/font/google';
import './globals.css';

const davidLibre = David_Libre({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Heart Land',
  description: 'Discover authentic Sri Lankan goods in the UAE',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en">
  <body>{children}</body>
</html>
  );
}