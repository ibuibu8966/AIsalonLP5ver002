import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import WhyNowSection from './components/WhyNowSection'
import WhatCanYouDoSection from './components/WhatCanYouDoSection'
import TransformationSection from './components/TransformationSection'
import FeaturesSection from './components/FeaturesSection'
import InstructorsSection from './components/InstructorsSection'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <div className="section-divider" />
      <WhyNowSection />
      <div className="section-divider" />
      <WhatCanYouDoSection />
      <div className="section-divider" />
      <TransformationSection />
      <div className="section-divider" />
      <FeaturesSection />
      <div className="section-divider" />
      <InstructorsSection />
      <div className="section-divider" />
      <PricingSection />
      <div className="section-divider" />
      <CTASection />
      <div className="section-divider" />
      <FAQSection />
      <div className="section-divider" />
      <FinalCTASection />
      <Footer />
    </main>
  )
}