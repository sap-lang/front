import dynamic from 'next/dynamic'
import { Header } from "./components/Header"
import { NewsSection } from "./components/NewsSection"
import { CodeSection } from "./components/CodeSection"
import { SponserSection } from "./components/SponserSection"
import { CTASection } from "./components/CTASection"
import { Footer } from "./components/Footer"
import { UseCasesSection } from './components/UseCasesSection'

const HeroSection = dynamic(() => import('./components/HeroSection').then((mod) => mod.HeroSection), { ssr: false })

export default function Page() {
  return (
    <div className="transition-all min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 text-white">
      <Header />
      <div className="pt-16">
      <HeroSection />
      <CodeSection />
      <NewsSection />
      <UseCasesSection />
      <SponserSection />
      <CTASection />
      <Footer />
      </div>
    </div>
  )
}

