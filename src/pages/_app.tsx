import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import '../styles/globals.css';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

function VapiWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
    script.async = true;
    document.body.appendChild(script);

    const widget = document.createElement('vapi-widget');
    widget.setAttribute('public-key', '72526477-7779-4056-a04c-e98ea84809a5');
    widget.setAttribute('assistant-id', 'bc883f44-6a00-4140-916c-377c07f8b92d');
    widget.setAttribute('mode', 'voice');
    widget.setAttribute('theme', 'dark');
    widget.setAttribute('base-bg-color', '#000000');
    widget.setAttribute('accent-color', '#0ba231');
    widget.setAttribute('cta-button-color', '#000000');
    widget.setAttribute('cta-button-text-color', '#ffffff');
    widget.setAttribute('border-radius', 'large');
    widget.setAttribute('size', 'compact');
    widget.setAttribute('position', 'bottom-right');
    widget.setAttribute('title', 'TALK WITH AI');
    widget.setAttribute('start-button-text', 'Start');
    widget.setAttribute('end-button-text', 'End Call');
    widget.setAttribute('chat-first-message', 'Hey, How can I help you today?');
    widget.setAttribute('chat-placeholder', 'Type your message...');
    widget.setAttribute('voice-show-transcript', 'true');
    widget.setAttribute('consent-required', 'false');
    widget.setAttribute('data-ai-hint', 'vapi widget');
    document.body.appendChild(widget);

    return () => {
      document.body.removeChild(script);
      // Check if the widget is still a child of the body before removing it.
      if (widget.parentNode === document.body) {
        document.body.removeChild(widget);
      }
    };
  }, []);

  return null;
}


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
      <div className={cn('flex flex-col min-h-screen font-sans antialiased', inter.variable)}>
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
        <Toaster />
        <VapiWidget />
      </div>
    </>
  );
}

export default MyApp;
