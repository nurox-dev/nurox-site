import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
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
      <main className={cn('min-h-screen font-sans antialiased', inter.variable)}>
        <Component {...pageProps} />
        <Toaster />
        <vapi-widget assistant-id="bc883f44-6a00-4140-916c-377c07f8b92d" public-key="72526477-7779-4056-a04c-e98ea84809a5"></vapi-widget>
        <Script
            src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"
            strategy="afterInteractive"
        />
      </main>
    </>
  );
}

export default MyApp;
