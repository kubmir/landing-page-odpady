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
  const baseStyles = 'inline-block px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 cursor-pointer text-center min-h-[48px] flex items-center justify-center'
  const variants = {
    primary: 'bg-brand-orange text-white hover:bg-[#D04A1A] active:bg-[#B83E16] shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-brand-light-blue border-2 border-brand-light-blue hover:bg-brand-light-blue/10 active:bg-brand-light-blue/20'
  }
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${disabledStyles}`}>
        {children}
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
      {children}
    </button>
  )
}

