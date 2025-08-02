import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
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
      <Script 
        src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js" 
        strategy="afterInteractive"
      />
      <div className={cn('flex flex-col min-h-screen font-sans antialiased', inter.variable)}>
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
        <Toaster />
        <vapi-widget
          public-key="72526477-7779-4056-a04c-e98ea84809a5"
          assistant-id="bc883f44-6a00-4140-916c-377c07f8b92d"
          mode="voice"
          theme="dark"
          base-bg-color="#000000"
          accent-color="#1bc618"
          cta-button-color="#000000"
          cta-button-text-color="#ffffff"
          border-radius="large"
          size="compact"
          position="bottom-right"
          title="TALK WITH AI"
          start-button-text="Start"
          end-button-text="End Call"
          chat-first-message="Hey, How can I help you today?"
          chat-placeholder="Type your message..."
          voice-show-transcript="true"
          consent-required="true"
          consent-title="Terms and conditions"
          consent-content="By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service."
          consent-storage-key="vapi_widget_consent"
        ></vapi-widget>
      </div>
    </>
  );
}

export default MyApp;
