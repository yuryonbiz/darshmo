"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function SchedulePage() {
  const [ready, setReady] = useState(false);
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.onload = () => setReady(true);
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const el = calendlyRef.current;
    if (!el || !window.Calendly) return;
    window.Calendly.initInlineWidget({
      url: "https://calendly.com/darsh-jkyh/30min",
      parentElement: el,
    });
  }, [ready]);

  return (
    <main className="min-h-screen bg-bg text-fg">
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-16">
        <Link href="/" className="inline-block mb-8">
          <Image
            src="/darshmode-logo-transparent.png"
            alt="MODE"
            width={928}
            height={240}
            className="h-8 w-auto object-contain"
          />
        </Link>

        <h1 className="font-heading text-2xl sm:text-3xl tracking-wide mb-2">Thanks, that&rsquo;s noted.</h1>
        <p className="font-body text-muted mb-8">Pick a time below that works for you.</p>

        <div className="bg-white rounded-xl overflow-hidden">
          <div ref={calendlyRef} style={{ minWidth: "280px", height: "700px" }} />
        </div>
      </div>
    </main>
  );
}
