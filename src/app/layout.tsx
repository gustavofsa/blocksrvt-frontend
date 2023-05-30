import { ReactNode } from 'react'
import './globals.css'
import { Open_Sans as OpenSans } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const openSans = OpenSans({ subsets: ['latin'] })

export const metadata = {
  title: 'Blocks Revit',
  description: 'Blocks Revit frontend challenge',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${openSans.className} flex min-h-screen flex-col bg-gray-100 font-sans text-gray-950`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
