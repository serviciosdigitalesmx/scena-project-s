import type { Metadata } from 'next';
import { Liter, Quattrocento_Sans } from 'next/font/google';
import './globals.css';

const fontLiter = Liter({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-liter',
});

const fontQuattrocento = Quattrocento_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-quattrocento',
});

export const metadata: Metadata = {
  title: 'SCENA | Ingeniería, suministro y servicio para fluidos industriales',
  description:
    'Ingeniería para sistemas de conducción de fluidos industriales. Mangueras hidráulicas industriales, conexiones, ensambles certificados, pruebas hidrostáticas y suministro industrial B2B.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://scena.com.mx'),
  openGraph: {
    title: 'SCENA | Ingeniería, suministro y servicio para fluidos industriales',
    description:
      'Mangueras hidráulicas industriales, conexiones, ensambles certificados, pruebas hidrostáticas y soluciones para industria crítica.',
    images: ['/images/scena-logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fontLiter.variable} ${fontQuattrocento.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
