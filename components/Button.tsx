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
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 active:bg-blue-100'
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

