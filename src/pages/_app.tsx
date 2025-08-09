import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import '../styles/globals.css';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

function MyApp({ Component, pageProps }: AppProps) {
  const primaryColor = "hsl(250 65% 55%)"; // From globals.css --primary
  const svgString = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(primaryColor)}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m8 3 4 8 5-5 5 15H2L8 3z'/></svg>`;
  const faviconDataUri = `data:image/svg+xml,${svgString}`;

  useEffect(() => {
    // Prevent multiple injections
    if (document.querySelector("vapi-widget")) return;

    const vapiWidget = document.createElement('vapi-widget');
    vapiWidget.setAttribute('public-key', '72526477-7779-4056-a04c-e98ea84809a5');
    vapiWidget.setAttribute('assistant-id', 'bc883f44-6a00-4140-916c-377c07f8b92d');
    vapiWidget.setAttribute('mode', 'voice');
    vapiWidget.setAttribute('theme', 'dark');
    vapiWidget.setAttribute('base-bg-color', '#000000');
    vapiWidget.setAttribute('accent-color', '#5023F0');
    vapiWidget.setAttribute('cta-button-color', '#000000');
    vapiWidget.setAttribute('cta-button-text-color', '#ffffff');
    vapiWidget.setAttribute('border-radius', 'large');
    vapiWidget.setAttribute('size', 'compact');
    vapiWidget.setAttribute('position', 'bottom-right');
    vapiWidget.setAttribute('title', 'TALK WITH AI');
    vapiWidget.setAttribute('start-button-text', 'Start');
    vapiWidget.setAttribute('end-button-text', 'End Call');
    vapiWidget.setAttribute('chat-first-message', 'Hey, How can I help you today?');
    vapiWidget.setAttribute('chat-placeholder', 'Type your message...');
    vapiWidget.setAttribute('voice-show-transcript', 'true');
    vapiWidget.setAttribute('consent-required', 'true');
    vapiWidget.setAttribute('consent-title', 'Terms and conditions');
    vapiWidget.setAttribute('consent-content', 'By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.');
    vapiWidget.setAttribute('consent-storage-key', 'vapi_widget_consent');

    document.body.appendChild(vapiWidget);
    
    return () => {
      const widget = document.querySelector('vapi-widget');
      if (widget && document.body.contains(widget)) {
        document.body.removeChild(widget);
      }
    }
  }, []);

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
      </div>
      <Script src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js" async type="text/javascript" />
    </>
  );
}

export default MyApp;