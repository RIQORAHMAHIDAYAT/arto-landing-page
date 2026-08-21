import { ThemeProvider } from '@/context/ThemeContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Navbar } from '@/components/landing/Navbar'
import { Hero } from '@/components/landing/Hero'
import { MetricsStrip } from '@/components/landing/MetricsStrip'
import { PillarsSection } from '@/components/landing/PillarsSection'
import { DynamicLimitShowcase } from '@/components/landing/DynamicLimitShowcase'
import { HowItWorksSection } from '@/components/landing/HowItWorksSection'
import { PlatformShowcase } from '@/components/landing/PlatformShowcase'
import { FaqSection } from '@/components/landing/FaqSection'
import { Footer } from '@/components/landing/Footer'

function AppShell() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Lewati ke konten utama
      </a>

      <Navbar />

      <main id="konten">
        <Hero />
        <MetricsStrip />
        <PillarsSection />
        <DynamicLimitShowcase />
        <HowItWorksSection />
        <PlatformShowcase />
        <FaqSection />
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  )
}
