import { Montserrat } from 'next/font/google'
import './globals.css'

const urbanist = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Adneta - Demo',
  description: 'Made by Adneta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.variable}`}>
      <body>{children}</body>
    </html>
  )
}
