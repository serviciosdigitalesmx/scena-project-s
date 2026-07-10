import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import About from '@/sections/About'
import FeaturedProducts from '@/sections/FeaturedProducts'
import CTA from '@/sections/CTA'
import Footer from '@/sections/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <FeaturedProducts />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
