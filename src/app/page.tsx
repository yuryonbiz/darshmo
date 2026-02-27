"use client";

import { useEffect, useRef } from "react";

function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useScrollFade();
  return (
    <section id={id} ref={ref} className={`py-12 md:py-20 opacity-0 ${className}`}>
      {children}
    </section>
  );
}

const testimonials = [
  { quote: "Darsh completely changed how I think about training. I'm stronger and move pain-free for the first time in years.", name: "Alex R.", result: "Lost 15 lbs, pain-free movement" },
  { quote: "The programming is smart and the coaching is personal. I actually look forward to every session.", name: "Jordan M.", result: "First pull-up at 38" },
  { quote: "I came in with a stiff back and left with a deadlift PR. The mobility work is a game changer.", name: "Sam K.", result: "2x bodyweight deadlift" },
];

export default function Home() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <main className="noise-bg">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A] z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <img src="/logo-text.webp" alt="Darshmode" className="w-48 sm:w-64 md:w-80 mx-auto" />
        </div>
      </section>

      {/* Video */}
      <Section>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-[#9A9590] tracking-wide uppercase font-heading mb-4">See the Approach</p>
          <div className="border border-[#2A2A2A] rounded-xl overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/6CRVrEkCcn8?si=mdLYDfq77XZQ_S77&autoplay=0"
                title="Darshmo Training"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <a
            href="#book"
            className="inline-block mt-8 bg-[#E8572A] hover:bg-[#D14A22] text-[#F5F0EB] font-heading font-semibold text-lg px-10 py-4 rounded-lg transition-colors duration-150"
          >
            Book a Free Call
          </a>
        </div>
      </Section>

      {/* Book a Call */}
      <Section id="book">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight mb-4">Ready to Start?</h2>
          <p className="text-[#9A9590] font-body text-lg mb-12">Pick a time and let's talk about your goals.</p>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/darsh-jkyh/30min"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </Section>

      {/* Bottom Logo */}
      <div className="py-12 flex justify-center">
        <img src="/logo-text.webp" alt="Darshmode" className="w-48 sm:w-56 opacity-80" />
      </div>
    </main>
  );
}
