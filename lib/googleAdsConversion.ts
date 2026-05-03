'use client'

import { getConsentStatus } from '@/components/CookieConsent'

export type GoogleAdsConversionKind = 'phone' | 'contact_form'

function isAdsConversionDebug(): boolean {
  const flag = process.env.NEXT_PUBLIC_G_ADS_CONVERSION_DEBUG
  if (flag === 'false') return false
  if (flag === 'true') return true
  return process.env.NODE_ENV === 'development'
}

function debugLog(payload: Record<string, unknown>): void {
  if (!isAdsConversionDebug()) return
  console.info('[odpady24 Google Ads conversion new]', payload)
}

function isConfiguredAwId(id?: string): boolean {
  return Boolean(id?.startsWith('AW-') && id !== 'AW-XXXXXXXXXX')
}

/**
 * Labels for `send_to`. Must use literal `process.env.NEXT_PUBLIC_*` keys — Next.js only
 * inlines those at build time; `process.env[dynamicString]` stays empty in the client bundle.
 */
function labelFromKind(kind: GoogleAdsConversionKind): string | undefined {
  const raw =
    kind === 'phone'
      ? process.env.NEXT_PUBLIC_G_ADS_CONVERSION_PHONE_LABEL
      : process.env.NEXT_PUBLIC_G_ADS_CONVERSION_CONTACT_FORM_LABEL
  const t = raw?.trim()
  if (!t) return undefined
  if (t.includes('/')) return t.split('/').pop()?.trim()
  return t
}

const LABEL_ENV_DEBUG_NAME: Record<GoogleAdsConversionKind, string> = {
  phone: 'NEXT_PUBLIC_G_ADS_CONVERSION_PHONE_LABEL',
  contact_form: 'NEXT_PUBLIC_G_ADS_CONVERSION_CONTACT_FORM_LABEL',
}

function buildSendTo(awId: string | undefined, label: string | undefined): string | undefined {
  if (!isConfiguredAwId(awId) || !label) return undefined
  return `${awId}/${label}`
}

const awId = () => process.env.NEXT_PUBLIC_G_ADS_MEASUREMENT_ID

function fireConversion(
  kind: GoogleAdsConversionKind,
  sendTo: string | undefined,
  extra?: Record<string, unknown>,
): void {
  const consent = typeof window !== 'undefined' ? getConsentStatus() : 'pending'
  const aw = awId()
  const envKey = LABEL_ENV_DEBUG_NAME[kind]

  if (typeof window === 'undefined') {
    debugLog({ kind, outcome: 'skipped', reason: 'no_window', envKey, sendTo: sendTo ?? null, consent })
    return
  }

  if (!sendTo) {
    const label = labelFromKind(kind)
    debugLog({
      kind,
      outcome: 'skipped',
      reason: 'invalid_send_to',
      envKey,
      detail: {
        awIdPresent: Boolean(aw?.trim()),
        awIdConfigured: isConfiguredAwId(aw),
        labelPresent: Boolean(label?.trim()),
        labelResolved: label ?? null,
      },
    })
    return
  }

  if (consent !== 'accepted') {
    debugLog({
      kind,
      outcome: 'skipped',
      reason: 'consent_not_accepted',
      envKey,
      sendTo,
      consent,
    })
    return
  }

  const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== 'function') {
    debugLog({
      kind,
      outcome: 'skipped',
      reason: 'gtag_missing',
      envKey,
      sendTo,
      consent,
      hint: 'Ensure GoogleAnalytics loads AW id (NEXT_PUBLIC_G_ADS_MEASUREMENT_ID) and gtag.js ran.',
    })
    return
  }

  const payload = { send_to: sendTo, ...extra }
  gtag('event', 'conversion', payload)
  debugLog({ kind, outcome: 'fired', envKey, payload })
}

/** After successful contact form — `NEXT_PUBLIC_G_ADS_CONVERSION_CONTACT_FORM_LABEL`. */
export function sendGoogleAdsContactFormConversion(): void {
  const sendTo = buildSendTo(awId(), labelFromKind('contact_form'))
  fireConversion('contact_form', sendTo, { value: 1.0, currency: 'EUR' })
}

/** On `tel:` click — `NEXT_PUBLIC_G_ADS_CONVERSION_PHONE_LABEL`; native link navigation unchanged. */
export function sendGoogleAdsPhoneConversion(): void {
  const sendTo = buildSendTo(awId(), labelFromKind('phone'))
  fireConversion('phone', sendTo, { value: 1.0, currency: 'EUR' })
}
