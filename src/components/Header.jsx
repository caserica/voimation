import { useEffect, useRef, useState } from 'react'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down & past 50px
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true)
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', controlHeader, { passive: true })
    return () => window.removeEventListener('scroll', controlHeader)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className="w-full bg-white/80 backdrop-blur-sm fixed z-50 transition-all duration-300 ease-in-out"
      style={{
        top: isVisible ? '0' : '-100px'
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20" style={{ position: 'relative' }}>
          {/* Logo - Fixed Left Position */}
          <div className="flex items-center" style={{ position: 'absolute', left: '24px', zIndex: 10 }}>
            <img 
              src="/logo.png"
              alt="Logo" 
              style={{
                width: '170px',
                height: '37.29px',
                objectFit: 'contain',
                imageRendering: 'crisp-edges'
              }}
            />
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex items-center px-6 py-2 shadow-sm mx-auto" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid #e5e7eb'
          }}>
            <a href="#hero" className="text-gray-900 hover:text-gray-700 transition-colors px-4 py-2 font-medium">
              Home
            </a>
            <a href="#contact" className="text-gray-500 hover:text-gray-900 transition-colors px-4 py-2">
              About
            </a>
            <a href="#pricing" className="text-gray-500 hover:text-gray-900 transition-colors px-4 py-2">
              How it Works
            </a>
            <a href="#contact" className="text-gray-500 hover:text-gray-900 transition-colors px-4 py-2">
              Contact
            </a>
          </nav>

          {/* Contact Button - Fixed Right Position - Hidden on mobile */}
          <div className="hidden md:flex items-center" style={{ position: 'absolute', right: '24px', zIndex: 10 }}>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center" style={{ position: 'absolute', right: '24px', zIndex: 10 }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
            <nav className="flex flex-col space-y-2">
              <a 
                href="#hero" 
                onClick={(e) => handleNavClick(e, 'hero')}
                className="text-gray-900 hover:text-gray-700 transition-colors px-4 py-3 font-medium rounded-lg hover:bg-gray-50"
              >
                Home
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-gray-500 hover:text-gray-900 transition-colors px-4 py-3 rounded-lg hover:bg-gray-50"
              >
                About
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleNavClick(e, 'pricing')}
                className="text-gray-500 hover:text-gray-900 transition-colors px-4 py-3 rounded-lg hover:bg-gray-50"
              >
                How it Works
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-gray-500 hover:text-gray-900 transition-colors px-4 py-3 rounded-lg hover:bg-gray-50"
              >
                Contact
              </a>
              <button 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors mt-2"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header