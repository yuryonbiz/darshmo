"use client";

import { useEffect } from "react";

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
    <main className="min-h-screen flex flex-col items-center">
      {/* Logo */}
      <section className="w-full py-12 flex justify-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          DARSHMO
        </h1>
      </section>

      {/* YouTube Video */}
      <section className="w-full max-w-4xl px-4 mb-16">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/6CRVrEkCcn8?si=mdLYDfq77XZQ_S77&autoplay=1&mute=1"
            title="DARSHMO Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Book a Call */}
      <section className="w-full max-w-3xl px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Book a Call with Darsh</h2>
        <p className="text-neutral-300 text-lg leading-relaxed mb-10">
          Dive deeper into your fitness aspirations with a personal consultation.
          Schedule a call with Darsh to discuss your goals, challenges, and how we
          can tailor a path to your success. Your journey to transformation begins
          with a conversation. Book your call now and take the first step towards a
          new you.
        </p>
      </section>

      <section className="w-full max-w-4xl px-4 mb-16">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/darsh-jkyh/30min"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </section>
    </main>
  );
}
