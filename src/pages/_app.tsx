import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import '../app/globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nurox | AI-Powered Business Automation</title>
        <meta
          name="description"
          content="Nurox powers your business with AI to automate processes and boost sales. Let our technology work behind the scenes so your success can shine."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <Component {...pageProps} />
        <Toaster />
      </main>
    </>
  );
}

export default MyApp;
