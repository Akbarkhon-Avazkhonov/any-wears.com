import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LayoutContent } from './layout-content'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Any-wears | Style Without Borders',
  description: 'Curated clothing, footwear, and jewelry for the bold, the bright, and the beautiful. From street to suite, we have your any-wear.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.jpg',
        type: 'image/jpeg',
      },
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

export const viewport: Viewport = {
  themeColor: '#FF00FF',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LayoutContent>
          {children}
        </LayoutContent>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
