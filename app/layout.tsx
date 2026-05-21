import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-mono'
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: 'AETHER | Digital Art Universe',
  description: 'Immerse yourself in the AETHER — a futuristic Gen Z digital-art platform where creativity meets the cosmos. Discover, create, and remix art in our playful internet-art ecosystem.',
  generator: 'v0.app',
  keywords: ['digital art', 'gen z', 'creative platform', 'art community', 'y2k', 'cyber art'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-cream">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
