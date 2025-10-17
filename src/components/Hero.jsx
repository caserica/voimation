const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden -mt-16 pt-16">
      {/* Hero Background Image with Gradient Overlay - Full coverage for mobile */}
      <div className="absolute inset-0">
        <img 
          src="/hero.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover sm:w-4/5 sm:h-4/5 sm:mx-auto sm:mt-8"
          style={{ 
            objectPosition: 'center center',
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />
        {/* Gradient overlay to match the design */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 via-pink-200/40 to-blue-300/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          What We Automate for Your Clinic
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Comprehensive AI-powered solutions designed specifically for healthcare providers. Each service integrates seamlessly with your existing workflows.
        </p>

        <a 
          href="https://calendly.com/voimation/30min?month=2025-10" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-colors"
        >
          Book a Call
        </a>
      </div>
    </section>
  )
}

export default Hero