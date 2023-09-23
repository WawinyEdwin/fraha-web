import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

const inter = Ubuntu({
  subsets: [],
  weight: '300'
})

export const metadata: Metadata = {
  title: 'Bry',
  description: 'Manage your salon effectively',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen p-10">{children}</main>
      </body>
    </html>
  );
}
