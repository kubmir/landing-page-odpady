import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  type?: 'button' | 'submit'
  href?: string
  disabled?: boolean
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  type = 'button',
  href,
  disabled = false
}: ButtonProps) {
  const baseStyles = 'inline-block px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 cursor-pointer text-center min-h-[48px] flex items-center justify-center relative overflow-hidden group'
  const variants = {
    primary: 'bg-brand-orange text-white hover:bg-[#D04A1A] active:bg-[#B83E16] shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-white text-brand-light-blue border-2 border-brand-light-blue hover:bg-brand-light-blue/10 active:bg-brand-light-blue/20 hover:border-brand-light-blue shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
  }
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${disabledStyles}`}>
        {buttonContent}
      </a>
    )
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabledStyles}`}
    >
      {buttonContent}
    </button>
  )
}

