import '@radix-ui/themes/styles.css';
import './theme-config.css';
import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'BUG TRACKER',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light">

        
        <NavBar />
        <main className='px-5'>{children}</main>
        
        </Theme>
      </body>
    </html>
  )
}
