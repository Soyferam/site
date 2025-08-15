import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import NewsSection from '@/components/NewsSection'
import ServicesSection from '@/components/ServicesSection'
import ProductsSection from '@/components/ProductsSection'
import StatsPartnersSection from '@/components/StatsPartnersSection'
import TeamSection from '@/components/TeamSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NewsSection />
      <ServicesSection />
      <ProductsSection />
      <StatsPartnersSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
