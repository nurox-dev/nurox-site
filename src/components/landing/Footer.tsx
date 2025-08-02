
"use client";
import { Mountain, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { useEffect } from 'react';

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
    {children}
  </Link>
);

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
      // Use a try-catch block to prevent errors if elements are already gone
      try {
        if (script.parentNode) {
            script.parentNode.removeChild(script);
        }
        if (widget.parentNode) {
            widget.parentNode.removeChild(widget);
        }
      } catch (error) {
        console.log('Error removing Vapi widget:', error);
      }
    };
  }, []);

  return null;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/10 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Nurox.dev</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Nurox Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <SocialLink href="https://twitter.com/nurox_dev"><Twitter className="h-5 w-5" /></SocialLink>
            <SocialLink href="https://www.linkedin.com/company/nurox-dev/"><Linkedin className="h-5 w-5" /></SocialLink>
            <SocialLink href="https://github.com/nurox-dev"><Github className="h-5 w-5" /></SocialLink>
          </div>
        </div>
      </div>
       <VapiWidget />
    </footer>
  );
}
