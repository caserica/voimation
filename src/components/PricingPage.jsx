const PricingPage = () => {
  return (
    <div className="min-h-screen py-16 sm:py-20" style={{backgroundColor: '#f5f8ff'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Transparent Pricing That Grows With You
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            No hidden fees. No surprises. Just powerful AI automation that scales with your practice.
          </p>
        </div>

        {/* One-Time Setup Fee */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm inline-block max-w-md mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">One-Time Setup Fee</h3>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">$3,450 USD</div>
            <p className="text-gray-600 text-sm sm:text-base">Includes AI training, system integration, and go-live support</p>
          </div>
        </div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Beginner Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Beginner</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Perfect for small practices starting their automation journey</p>
            
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">$285</div>
            <p className="text-gray-600 mb-2">per month</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">1,500 minutes included<br />$0.19 per minute after limit</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Basic appointment scheduling
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                24/7 patient support
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Email integration
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Basic analytics dashboard
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Phone support during business hours
              </li>
            </ul>
            
            <p className="text-sm text-gray-600 mb-4">One-Time Setup: $3,450</p>
            <a 
              href="https://calendly.com/voimation/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
            >
              Start Automating
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">Most Popular</span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Pro</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Ideal for growing clinics with moderate call volumes</p>
            
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">$595</div>
            <p className="text-gray-600 mb-2">per month</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">3,500 minutes included<br />$0.17 per minute after limit</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Advanced appointment scheduling
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Lead qualification & routing
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Payment reminder automation
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Custom integration support
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Priority phone & email support
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Advanced analytics & reporting
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Custom voice training
              </li>
            </ul>
            
            <p className="text-sm text-gray-600 mb-4">One-Time Setup: $3,450</p>
            <a 
              href="https://calendly.com/voimation/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
            >
              Start Automating
            </a>
          </div>

          {/* Scale Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Scale</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Built for established practices with high patient volumes</p>
            
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">$950</div>
            <p className="text-gray-600 mb-2">per month</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">6,000 minutes included<br />$0.15 per minute after limit</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Multi-location support
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Advanced lead qualification
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Custom workflow automation
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                API access & integrations
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Dedicated account manager
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                24/7 priority support
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Custom reporting & insights
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                White-label options
              </li>
            </ul>
            
            <p className="text-sm text-gray-600 mb-4">One-Time Setup: $3,450</p>
            <a 
              href="https://calendly.com/voimation/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
            >
              Start Automating
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Tailored solutions for large healthcare organizations</p>
            
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Custom</div>
            <p className="text-gray-600 mb-2">per month</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">Custom minutes included<br />$0.15 per minute after limit</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Custom minute allocations
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Enterprise-grade security
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Multi-tenant architecture
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Advanced compliance features
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Custom AI training & tuning
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Dedicated infrastructure
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                SLA guarantees
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                Custom integration development
              </li>
              <li className="flex items-center text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                On-site training & support
              </li>
            </ul>
            
            <p className="text-sm text-gray-600 mb-4">One-Time Setup: $3,450</p>
            <a 
              href="https://calendly.com/voimation/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
            >
              Start Automating
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Pricing Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">What's included in the setup fee?</h3>
              <p className="text-gray-600 text-sm">
                The $3,450 setup fee covers AI voice training for your clinic, system integration with your existing tools, staff training, and dedicated go-live support to ensure smooth deployment.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">How do overage minutes work?</h3>
              <p className="text-gray-600 text-sm">
                If you exceed your plan's included minutes, you'll be charged per additional minute at the rates shown. We'll notify you as you approach your limit so you can upgrade if needed.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Can I change plans later?</h3>
              <p className="text-gray-600 text-sm">
                Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle, and we'll help you find the right plan as your practice grows.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Is there a contract commitment?</h3>
              <p className="text-gray-600 text-sm">
                We offer both month-to-month and annual billing options. Annual plans receive a 10% discount and priority support. No long-term contracts required.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Stop Losing Patients?</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Join hundreds of healthcare providers who have transformed their patient communication with Voimation's AI automation.
            </p>
            <a 
              href="https://calendly.com/voimation/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-colors"
            >
              Schedule Your Demo Today
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage