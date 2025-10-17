const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            
            {/* Left Side - Logo and Description */}
            <div className="mb-6 md:mb-0 flex-1">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Voimation</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 max-w-md">
                AI-powered call automation that helps healthcare providers stay connected with patients 24/7. Never miss a patient again.
              </p>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mb-4">
                Start Automating Today
              </button>
              
              <p className="text-gray-500 text-xs">
                © 2024, All rights reserved by Voimation.com
              </p>
            </div>

            {/* Middle - Navigation */}
            <nav className="mb-6 md:mb-0 md:mx-8">
              <h3 className="text-gray-900 font-semibold mb-4">Navigation</h3>
              <div className="space-y-2 text-sm">
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
            </nav>

            {/* Right Side - Legal */}
            <div className="flex flex-col">
              <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
              <div className="space-y-2 text-sm">
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
    </footer>
  )
}

export default Footer