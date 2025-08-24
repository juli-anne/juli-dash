import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from '@/app/providers';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'juli-dash',
  description: 'personal app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen flex">
            <aside className="w-56 shrink-0 border-r">
              <nav className="p-4 space-y-2">
                <a className="block hover:underline" href="/launcher">
                  Launcher
                </a>
                <a className="block hover:underline" href="/notes">
                  Notes
                </a>
                <a className="block hover:underline" href="/debts">
                  Debts
                </a>
                <a className="block hover:underline" href="/finance">
                  Finance
                </a>
                <a className="block hover:underline" href="/gas">
                  Gas
                </a>
                <a className="block hover:underline" href="/settings">
                  Settings
                </a>
              </nav>
            </aside>
            <main className="flex-1 p-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
