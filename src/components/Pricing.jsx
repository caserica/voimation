import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div>
            <div className="flex items-center mb-6">
              <div className="flex -space-x-2 mr-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-red-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-600">Trusted by 100+ clients</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Clinics using Voimation see patient retention increase ~5% monthly
            </h2>
            
            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              Don't let missed calls turn into lost patients. Start automating today.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                View Pricing
              </h3>
              
              <a 
                href="https://calendly.com/voimation/30min?month=2025-10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-colors w-full text-center"
              >
                Schedule Meeting
              </a>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Every missed call is a <span className="text-blue-500">lost patient</span>
            </h2>
            
            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              Stop losing patients today. Get started with Voimation's AI automation.
            </p>
            
            <Link 
              to="/pricing"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing