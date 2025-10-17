import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create email subject and body
    const subject = `Contact Form Submission from ${formData.name}`
    const body = `Hello,

I am reaching out through your website contact form.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`

    // Create mailto URL
    const mailtoUrl = `mailto:support@voimation.info?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open user's default email client
    window.location.href = mailtoUrl
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-16 sm:py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/endbackground.png"
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative Elements - responsive positioning */}
      <div className="absolute top-16 sm:top-32 right-4 sm:right-16 opacity-60">
        <img 
          src="/endspiral.png"
          alt="Spiral" 
          className="w-16 h-16 sm:w-32 sm:h-32 object-contain"
        />
      </div>
      <div className="absolute top-40 sm:top-80 left-4 sm:left-16 opacity-60">
        <img 
          src="/endstar.png"
          alt="Star" 
          className="w-14 h-14 sm:w-28 sm:h-28 object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        {/* Contact Form */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Let's Get in Touch
          </h2>
        </div>

        <form className="space-y-6 flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="w-full flex justify-center px-4">
            <div className="w-full max-w-[696px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@email.com"
                required
                className="w-full h-[70px] px-4 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-600"
                style={{
                  height: '70px',
                  borderRadius: '10px',
                  border: '1px solid #d1d5db'
                }}
              />
            </div>
          </div>

          <div className="w-full flex justify-center px-4">
            <div className="w-full max-w-[696px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="full name"
                required
                className="w-full h-[70px] px-4 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-600"
                style={{
                  height: '70px',
                  borderRadius: '10px',
                  border: '1px solid #d1d5db'
                }}
              />
            </div>
          </div>

          <div className="w-full flex justify-center px-4">
            <div className="w-full max-w-[696px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="write your message..."
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-gray-600"
                style={{
                  height: '222px',
                  borderRadius: '10px',
                  border: '1px solid #d1d5db'
                }}
              ></textarea>
            </div>
          </div>

          <div className="w-full flex justify-center px-4">
            <div className="w-full max-w-[696px]">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-base sm:text-lg transition-colors"
                style={{
                  height: '62px',
                  borderRadius: '10px',
                  border: 'none'
                }}
              >
                Send Email
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Footer Section - integrated with background */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            
            {/* Left Side - Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/logo.png"
                  alt="Logo" 
                  style={{
                    width: '187px',
                    height: '41.02px',
                    objectFit: 'contain',
                    imageRendering: 'crisp-edges'
                  }}
                />
              </div>
              
              <p className="text-gray-600 text-sm mb-6 max-w-lg">
                AI-powered call automation that helps healthcare providers stay connected with patients 24/7. Never miss a patient again.
              </p>
              
              <a 
                href="https://calendly.com/voimation/30min?month=2025-10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors mb-6"
              >
                Start Automating Today
              </a>
              
              <p className="text-gray-500 text-xs">
                © 2024, All rights reserved by Voimation.info <br />
                support@voimation.info 
              </p>
            </div>

            {/* Right Side - Navigation and Legal in columns */}
            <div className="grid grid-cols-2 gap-6">
              {/* Navigation */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Navigation</h3>
                <div className="space-y-3 text-sm">
                  <a href="#home" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    Home
                  </a>
                  <a href="#services" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    Services
                  </a>
                  <a href="#pricing" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    Pricing
                  </a>
                  <a href="#contact" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
                <div className="space-y-3 text-sm">
                  <a href="#terms" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                  <a href="#privacy" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact