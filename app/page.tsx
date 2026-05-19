import { TopBar } from "@/components/top-bar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { ProductsSection } from "@/components/products-section"
import { PricingSection } from "@/components/pricing-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <HeroSection />
      <HowItWorks />
      <ProductsSection />
      <PricingSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
