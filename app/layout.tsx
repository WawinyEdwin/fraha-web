import { Toaster } from '@/components/ui/toaster';
import './globals.css'
import type { Metadata } from 'next'
import { Alegreya_Sans, IBM_Plex_Sans, Inter, PT_Sans, Rosario, Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  subsets: [],
  weight: '400'
})

const inter = Inter({
  subsets: [],
  weight: "300",
});
export const metadata: Metadata = {
  title: 'fraha',
  description: 'streamline your salon and spa management with our powerful software, effortlessly manage appointments, clients, and more'
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
        <Toaster />
      </body>
    </html>
  );
}
