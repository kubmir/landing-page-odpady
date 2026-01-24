import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-dark-blue via-brand-dark-blue to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-light-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center px-4">
            {/* 404 Number */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-9xl sm:text-[12rem] md:text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-light-blue to-brand-orange animate-gradient bg-[length:200%_auto]">
                404
              </h1>
            </div>

            {/* Error Message */}
            <div className="mb-6 animate-fade-in-delay-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Stránka sa nenašla
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Ospravedlňujeme sa, ale stránka, ktorú hľadáte, neexistuje alebo bola presunutá.
              </p>
            </div>

            {/* Additional helpful text */}
            <div className="mb-10 animate-fade-in-delay-2">
              <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
                Možno ste zadali nesprávnu adresu alebo sa stránka presunula. Vráťte sa na hlavnú stránku alebo použite navigáciu vyššie.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
              <Button href="/" variant="primary">
                Návrat na hlavnú stránku
              </Button>
              <Button href="/#sluzby" variant="secondary">
                Naše služby
              </Button>
            </div>

            {/* Decorative icon */}
            <div className="mt-16 animate-fade-in-delay-4">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-light-blue/20 border-2 border-brand-light-blue/30">
                <svg 
                  className="w-12 h-12 text-brand-light-blue" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
