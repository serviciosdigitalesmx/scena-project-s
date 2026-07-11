import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import { Solutions } from '@/components/sections/Solutions'
import About from '@/sections/About'
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
        <Solutions />
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
