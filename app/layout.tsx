import './globals.css'
import type { Metadata } from 'next'
import { Alegreya_Sans, IBM_Plex_Sans, Inter, PT_Sans, Rosario, Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  subsets: [],
  weight: '400'
})

const inter = Inter({
  subsets: [],
  weight: "400",
});
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
        <main className="min-h-screen p-10 pt-4">{children}</main>
      </body>
    </html>
  );
}
