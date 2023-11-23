import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blue Lock | Characters stats',
  description: 'Characters stats',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
