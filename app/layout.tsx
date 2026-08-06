import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { AuthProvider } from '@/lib/auth-context'
import { PurchaseProvider } from '@/contexts/PurchaseContext'
import { UserProvider } from '@/contexts/UserContext'
import { Navigation } from '@/components/navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'LT90 - Premium Collective',
  description: 'LT90: Premium collective. Exclusive limited drops.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'LT90 - Premium Collective',
    description: 'Exclusive limited drops from the premium collective.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="antialiased bg-black">
        <AuthProvider>

  <UserProvider>

    <PurchaseProvider>

      <Navigation />

      {children}

    </PurchaseProvider>

  </UserProvider>

</AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
