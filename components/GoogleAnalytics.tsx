'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { getConsentStatus, ConsentStatus } from './CookieConsent'

interface GoogleAnalyticsProps {
  measurementId: string
  adsMeasurementId?: string
}

function isConfiguredAdsId(id?: string): boolean {
  return Boolean(id && id.startsWith('AW-') && id !== 'AW-XXXXXXXXXX')
}

export default function GoogleAnalytics({
  measurementId,
  adsMeasurementId,
}: GoogleAnalyticsProps) {
  useEffect(() => {
    // Check initial consent status and update consent mode
    const consent = getConsentStatus()
    if (consent !== 'pending') {
      updateConsentMode(consent === 'accepted')
    }

    // Listen for consent changes
    const handleConsentChange = (event: CustomEvent<ConsentStatus>) => {
      updateConsentMode(event.detail === 'accepted')
    }

    window.addEventListener('cookieConsentChange', handleConsentChange as EventListener)

    return () => {
      window.removeEventListener('cookieConsentChange', handleConsentChange as EventListener)
    }
  }, [])

  const updateConsentMode = (granted: boolean) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': granted ? 'granted' : 'denied',
        'ad_storage': granted ? 'granted' : 'denied',
        'ad_user_data': granted ? 'granted' : 'denied',
        'ad_personalization': granted ? 'granted' : 'denied',
      })
    }

    // Clear GA cookies if consent is revoked
    if (!granted) {
      clearGACookies()
    }
  }

  const clearGACookies = () => {
    const cookies = document.cookie.split(';')
    for (const cookie of cookies) {
      const cookieName = cookie.split('=')[0].trim()
      if (cookieName.startsWith('_ga') || cookieName.startsWith('_gid') || cookieName.startsWith('_gat')) {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`
      }
    }
  }

  return (
    <>
      {/* Google Consent Mode v2 - Default settings (MUST load before gtag.js) */}
      <Script
        id="google-consent-mode"
        strategy="beforeInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Set default consent to denied (GDPR compliant default)
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 500
          });
          
          // Check for stored consent and update immediately if accepted
          (function() {
            try {
              var consent = localStorage.getItem('odpady24_cookie_consent');
              if (consent === 'accepted') {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'granted',
                  'ad_user_data': 'granted',
                  'ad_personalization': 'granted'
                });
              }
            } catch(e) {}
          })();
        `}
      </Script>

      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
          ${
            isConfiguredAdsId(adsMeasurementId)
              ? `gtag('config', '${adsMeasurementId}');`
              : ''
          }
        `}
      </Script>
    </>
  )
}
