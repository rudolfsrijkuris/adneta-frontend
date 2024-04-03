import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
})

export const metadata = {
  title: 'Adneta Login Page',
  description: 'Made by Adneta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urbanist.variable}`}>
      <body>{children}</body>
    </html>
  )
}
