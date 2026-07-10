import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SCENA | Mangueras y Conexiones Industriales',
  description:
    'Mangueras hidráulicas, conexiones industriales y componentes para operaciones críticas. Empresa 100% mexicana con cobertura nacional y atención 24/7.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
