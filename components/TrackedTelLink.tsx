'use client'

import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { sendGoogleAdsPhoneConversion } from '@/lib/googleAdsConversion'

type TrackedTelLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export default function TrackedTelLink({ onClick, ...props }: TrackedTelLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href') ?? ''
    if (href.startsWith('tel:')) {
      sendGoogleAdsPhoneConversion()
    }
    onClick?.(e)
  }

  return <a {...props} onClick={handleClick} />
}
