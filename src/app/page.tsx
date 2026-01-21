import Navbar from "@/components/landing/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import FeaturesSection from "@/components/landing/FeaturesSection"
import ProductShowcase from "@/components/landing/ProductShowcase"
import HowItWorks from "@/components/landing/HowItWorks"
import CTASection from "@/components/landing/CTASection"
import FAQSection from "@/components/landing/FAQSection"
import Footer from "@/components/landing/Footer"

export const dynamic = "force-static"

export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-col min-h-dvh bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <HowItWorks />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
}
