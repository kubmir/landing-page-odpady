'use client'

import { getConsentStatus } from '@/components/CookieConsent'

function isConfiguredAwId(id?: string): boolean {
  return Boolean(id?.startsWith('AW-') && id !== 'AW-XXXXXXXXXX')
}

/** Label from env: part after `/` in Google’s `send_to`, or full `AW-…/label` (AW prefix ignored; uses NEXT_PUBLIC_G_ADS_MEASUREMENT_ID). */
function labelFromEnv(envName: string): string | undefined {
  const raw = process.env[envName]?.trim()
  if (!raw) return undefined
  if (raw.includes('/')) return raw.split('/').pop()?.trim()
  return raw
}

function buildSendTo(awId: string | undefined, label: string | undefined): string | undefined {
  if (!isConfiguredAwId(awId) || !label) return undefined
  return `${awId}/${label}`
}

function fireConversion(sendTo: string | undefined, extra?: Record<string, unknown>): void {
  if (!sendTo || typeof window === 'undefined') return
  if (getConsentStatus() !== 'accepted') return
  const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== 'function') return
  gtag('event', 'conversion', { send_to: sendTo, ...extra })
}

const awId = () => process.env.NEXT_PUBLIC_G_ADS_MEASUREMENT_ID

/** After successful contact form — `NEXT_PUBLIC_G_ADS_CONVERSION_CONTACT_FORM_LABEL`. */
export function sendGoogleAdsContactFormConversion(): void {
  const sendTo = buildSendTo(awId(), labelFromEnv('NEXT_PUBLIC_G_ADS_CONVERSION_CONTACT_FORM_LABEL'))
  fireConversion(sendTo, { value: 1.0, currency: 'EUR' })
}

/** On `tel:` click — `NEXT_PUBLIC_G_ADS_CONVERSION_PHONE_LABEL`; native link navigation unchanged. */
export function sendGoogleAdsPhoneConversion(): void {
  const sendTo = buildSendTo(awId(), labelFromEnv('NEXT_PUBLIC_G_ADS_CONVERSION_PHONE_LABEL'))
  fireConversion(sendTo, { value: 1.0, currency: 'EUR' })
}
