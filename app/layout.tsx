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
  title: 'SCENA | Ingeniería para Sistemas de Conducción de Fluidos',
  description:
    'Firma mexicana de ingeniería industrial especializada en sistemas de conducción de fluidos para procesos críticos. Soluciones a especificación y alta confiabilidad.',
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
