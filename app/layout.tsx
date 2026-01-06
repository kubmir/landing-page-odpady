import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ODPADY24.sk - Rýchle riešenie problémov s kanalizáciou',
  description: 'Profesionálne čistenie kanalizácií, krtkovanie, monitoring potrubí a čistenie rín. Pôsobíme na strednom a západnom Slovensku: Banská Bystrica, Bratislava, Nitra, Trnava, Zvolen, Krupina, Šahy, Detva, Levice, Žiar nad Hronom, Senec, Pezinok. Rýchly zásah, moderné technológie, transparentné ceny.',
  keywords: 'čistenie kanalizácií, krtkovanie, monitoring potrubí, čistenie rín, odkvapové rúry, vysokotlakové čistenie, TV monitoring, upchatie kanalizácie, čistenie odpadov, čistenie potrubia, čistenie odkvapov, havarijné čistenie kanalizácie',
  authors: [{ name: 'Biz x Dev s. r. o.' }],
  creator: 'Biz x Dev s. r. o.',
  publisher: 'ODPADY24.sk',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL('https://odpady24.sk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ODPADY24.sk - Rýchle riešenie problémov s kanalizáciou',
    description: 'Profesionálne čistenie kanalizácií, krtkovanie, monitoring potrubí a čistenie rín. Pôsobíme na strednom a západnom Slovensku. Rýchly zásah, moderné technológie, transparentné ceny.',
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
    description: 'Profesionálne čistenie kanalizácií, krtkovanie, monitoring potrubí a čistenie rín. Pôsobíme na strednom a západnom Slovensku.',
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
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

