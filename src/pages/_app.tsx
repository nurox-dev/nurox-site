import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

function MyApp({ Component, pageProps }: AppProps) {
  const primaryColor = "hsl(250 65% 55%)"; // From globals.css --primary
  const svgString = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(primaryColor)}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m8 3 4 8 5-5 5 15H2L8 3z'/></svg>`;
  const faviconDataUri = `data:image/svg+xml,${svgString}`;

  return (
    <>
      <Head>
        <title>Nurox | AI-Powered Business Automation</title>
        <meta
          name="description"
          content="Nurox powers your business with AI to automate processes and boost sales. Let our technology work behind the scenes so your success can shine."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={faviconDataUri} type="image/svg+xml" />
      </Head>
      <main className={cn('min-h-screen font-sans antialiased', inter.variable)}>
        <Component {...pageProps} />
        <Toaster />
      </main>
    </>
  );
}

export default MyApp;
