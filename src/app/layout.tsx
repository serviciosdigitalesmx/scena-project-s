import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { SITE } from '@/lib/constants'

const ibmPlex = IBM_Plex_Mono({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-ibm-plex', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: 'SCENA | Soluciones 24/7 en mangueras y conexiones industriales — Minería, petroquímica y maquinaria',
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SCENA | Soluciones industriales 24/7',
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'es_MX',
    type: 'website',
    images: [{ url: '/catalog/manguera-hidraulica.webp', width: 1600, height: 900, alt: 'Mangueras hidráulicas industriales SCENA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCENA | Soluciones industriales 24/7',
    description: SITE.description,
    images: ['/catalog/manguera-hidraulica.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${ibmPlex.variable} ${inter.variable}`}>
      <body className="bg-navy text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
