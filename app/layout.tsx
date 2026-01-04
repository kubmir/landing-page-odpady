import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ODPADY24.sk - Rýchle riešenie problémov s kanalizáciou',
  description: 'Profesionálne čistenie kanalizácií, krtkovanie, monitoring potrubí a čistenie rín. Pôsobíme v Banskej Bystrici, Zvolene, Krupine a Šahoch. Rýchly zásah, moderné technológie, transparentné ceny.',
  keywords: 'čistenie kanalizácií, krtkovanie, monitoring potrubí, čistenie rín, odkvapové rúry, Banská Bystrica, Zvolen, Krupina, Šahy, vysokotlakové čistenie, TV monitoring, upchatie kanalizácie',
  authors: [{ name: 'ODPADY24.sk' }],
  creator: 'ODPADY24.sk',
  publisher: 'ODPADY24.sk',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://odpady24.sk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ODPADY24.sk - Rýchle riešenie problémov s kanalizáciou',
    description: 'Profesionálne čistenie kanalizácií, krtkovanie, monitoring potrubí a čistenie rín. Rýchly zásah, moderné technológie, transparentné ceny.',
    url: 'https://odpady24.sk',
    siteName: 'ODPADY24.sk',
    locale: 'sk_SK',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ODPADY24.sk - Čistíme potrubia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ODPADY24.sk - Rýchle riešenie problémov s kanalizáciou',
    description: 'Profesionálne čistenie kanalizácií, krtkovanie, monitoring potrubí a čistenie rín.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  )
}

