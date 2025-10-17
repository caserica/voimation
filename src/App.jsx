import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import PricingPage from './components/PricingPage'
import Services from './components/Services'

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Pricing />
    <Contact />
  </>
)

function App() {
  return (
    <Router basename="/voimation">
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
