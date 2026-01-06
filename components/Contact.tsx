'use client'

import React, { useState, useRef } from 'react'
import Button from './Button'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [formStartTime] = useState(Date.now())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    // Bot protection checks
    const honeypot = formData.get('website') as string
    const formTime = Date.now() - formStartTime
    const minFormTime = 3000 // Minimum 3 seconds to fill the form

    // Check honeypot field (should be empty)
    if (honeypot && honeypot.trim() !== '') {
      setErrorMessage('Bot detected. Please try again.')
      setIsSubmitting(false)
      return
    }

    // Check if form was filled too quickly (likely a bot)
    if (formTime < minFormTime) {
      setErrorMessage('Formulár bol vyplnený príliš rýchlo. Prosím, skúste znova.')
      setIsSubmitting(false)
      return
    }

    // Add timestamp to form data
    formData.append('form_time', formTime.toString())
    formData.append('timestamp', Date.now().toString())

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus('success')
        form.reset()
        // Reset form start time for potential resubmission
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Nastala chyba pri odosielaní správy. Prosím, skúste znova.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Nastala chyba pri odosielaní správy. Prosím, skúste znova.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="section bg-gradient-to-br from-brand-dark-blue via-[#152a3d] to-brand-dark-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light-blue rounded-full blur-3xl"></div>
      </div>
      <div className="container relative z-10">
        <ScrollReveal>
          <h2 className="section-title text-white">Kontaktujte nás</h2>
        </ScrollReveal>
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
                Máte problém s odtokom? Zavolajte nám alebo vyplňte online formulár – sme pripravení pomôcť!
              </p>
              <a 
                href="tel:0903596876" 
                className="text-xl sm:text-2xl font-bold hover:text-brand-light-blue inline-block mb-3 sm:mb-4 min-h-[48px] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                📞 0903 596 876
              </a>
              <p className="text-base sm:text-lg">Volajte nonstop</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            {submitStatus === 'success' && (
              <div className="bg-green-500 text-white p-4 rounded-lg mb-6 text-center animate-scale-in shadow-lg">
                <p className="font-semibold">✓ Správa bola úspešne odoslaná!</p>
                <p className="text-sm mt-1">Ďakujeme za váš záujem. Čoskoro vás budeme kontaktovať.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-brand-orange text-white p-4 rounded-lg mb-6 text-center animate-scale-in shadow-lg">
                <p className="font-semibold">✗ {errorMessage}</p>
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white text-gray-800 p-5 sm:p-6 md:p-8 rounded-xl shadow-2xl border border-white/20"
            >
            {/* Honeypot field - hidden from users but visible to bots */}
            <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
              <label htmlFor="website">Website (leave blank)</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
            </div>

            <div className="mb-5 sm:mb-6">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Meno a priezvisko *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:border-brand-light-blue/50 focus:shadow-lg"
              />
            </div>

            <div className="mb-5 sm:mb-6">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:border-brand-light-blue/50 focus:shadow-lg"
              />
            </div>

            <div className="mb-5 sm:mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Telefón
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                disabled={isSubmitting}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:border-brand-light-blue/50 focus:shadow-lg"
              />
            </div>

            <div className="mb-5 sm:mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Správa *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                disabled={isSubmitting}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:border-brand-light-blue/50 focus:shadow-lg"
              />
            </div>

            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? 'Odosielam...' : 'Odoslať správu'}
            </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

