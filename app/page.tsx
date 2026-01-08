import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import PriceList from '@/components/PriceList'
import Regions from '@/components/Regions'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ODPADY24.sk',
    description: 'Profesionálne čistenie kanalizácií, krtkovanie, monitoring potrubí a čistenie rín. Pôsobíme v strednom a západnom Slovensku. Rýchly zásah, moderné technológie, transparentné ceny.',
    url: 'https://odpady24.sk',
    telephone: ['+421948850491', '+421903596876'],
    priceRange: '€',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+421948850491',
        contactType: 'customer service',
        areaServed: ['SK'],
        availableLanguage: ['sk'],
        description: 'Západné Slovensko - Bratislava, Nitra, Trnava, Senec, Pezinok'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+421903596876',
        contactType: 'customer service',
        areaServed: ['SK'],
        availableLanguage: ['sk'],
        description: 'Stredné Slovensko - Banská Bystrica, Zvolen, Krupina, Šahy, Detva, Levice, Žiar nad Hronom'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Slovensko',
      addressLocality: 'Banská Bystrica, Bratislava, Nitra, Trnava, Zvolen, Krupina, Šahy, Detva, Levice, Žiar nad Hronom, Senec, Pezinok',
      addressCountry: 'SK'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Banská Bystrica'
      },
      {
        '@type': 'City',
        name: 'Zvolen'
      },
      {
        '@type': 'City',
        name: 'Krupina'
      },
      {
        '@type': 'City',
        name: 'Šahy'
      },
      {
        '@type': 'City',
        name: 'Detva'
      },
      {
        '@type': 'City',
        name: 'Levice'
      },
      {
        '@type': 'City',
        name: 'Žiar nad Hronom'
      },
      {
        '@type': 'City',
        name: 'Bratislava'
      },
      {
        '@type': 'City',
        name: 'Nitra'
      },
      {
        '@type': 'City',
        name: 'Trnava'
      },
      {
        '@type': 'City',
        name: 'Senec'
      },
      {
        '@type': 'City',
        name: 'Pezinok'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Služby čistenia kanalizácií',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Čistenie rín a odkvapových rúr',
            description: 'Profesionálne čistenie odkvapov a drenáže',
            offers: {
              '@type': 'Offer',
              price: '80',
              priceCurrency: 'EUR'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Krtkovanie',
            description: 'Rýchle odstránenie upchatia',
            offers: {
              '@type': 'Offer',
              price: '90',
              priceCurrency: 'EUR'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Čistenie kanalizácií vysokotlakovým strojom',
            description: 'Účinné čistenie potrubia vysokotlakovou technológiou',
            offers: {
              '@type': 'Offer',
              price: '120',
              priceCurrency: 'EUR'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Monitoring potrubí',
            description: 'Presná diagnostika kamerou',
            offers: {
              '@type': 'Offer',
              price: '120',
              priceCurrency: 'EUR'
            }
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Header />
        <Hero />
        <Services />
        <Benefits />
        <PriceList />
        <Regions />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

