import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Michael Abayneh - Full Stack Developer',
  description: 'Professional portfolio of Michael Abayneh, a full stack web developer from Woldia University specializing in modern web technologies.',
  keywords: 'Michael Abayneh, Full Stack Developer, Web Developer, React, Next.js, Node.js, Portfolio',
  authors: [{ name: 'Michael Abayneh' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}