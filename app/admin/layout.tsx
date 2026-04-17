import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'CertifyEM - Admin Dashboard',
  description: 'Organization admin dashboard for managing certificates, trainees, and usage.',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}