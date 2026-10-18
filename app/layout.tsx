import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sailesh Dash | Quality Engineering & QA Automation',
  description: 'Portfolio of Sailesh Dash, Senior QA Consultant and QA Automation Engineer specializing in Playwright, JavaScript, API testing, and quality engineering.',
  openGraph: {
    title: 'Sailesh Dash | Quality Engineering',
    description: 'Engineering quality. Automating confidence. Delivering excellence.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#080a13', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
