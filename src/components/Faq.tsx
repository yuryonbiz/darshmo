import Section from "./Section";

const faqs = [
  {
    q: "Will this actually be personalized to me, or just a template with my name on it?",
    a: "Every plan is built around your schedule, your training history, and anything currently holding your body back. We stay in contact throughout, so it can be adjusted as life happens: travel, busy weeks, whatever comes up.",
  },
  {
    q: "How many days a week do I need to train?",
    a: "A minimum of 3 sessions a week: that's the floor for actually seeing change, and it's non-negotiable. A typical session is 45-60 minutes of training, often but not always paired with 15-20 minutes of low intensity cardio (like an incline walk). The exact split depends on your goal and what your day allows.",
  },
  {
    q: "How long until I actually see results?",
    a: "Real, meaningful change takes a minimum of 12 weeks of consistent effort. There's no contract locking you in, but if you're hoping for a transformation in 2-3 weeks, this isn't the right fit. This works for people willing to commit to the process, not a quick fix.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No long-term contract, just 30 days' notice if you ever need to stop, so we're never left mid-plan without warning.",
  },
  {
    q: "What if I've tried and failed at this before?",
    a: "Most people who reach out have. That's not a red flag; it usually just means the plan didn't fit how you actually live, not that something's wrong with you. This works differently: it adapts to your schedule, your food, and your body, instead of asking you to force yourself into someone else's routine.",
  },
  {
    q: "I have an old injury / bad knee / back pain. Can I still do this?",
    a: "Yes, and it's usually the starting point, not something worked around. Existing pain gets assessed and built into your plan from day one, rather than piling on intensity and hoping for the best.",
  },
  {
    q: "Do I need to follow a rigid meal plan?",
    a: "No. Nutrition is built around how you actually eat, including the meals and food culture you're not willing to give up, not a generic macro sheet that ignores your life.",
  },
  {
    q: "What actually happens on the discovery call?",
    a: "It's a conversation, not a sales pitch. We talk through where you're at, what's been holding you back, and whether this is genuinely the right fit for both of us. No pressure, no obligation.",
  },
];

export default function Faq() {
  return (
    <Section id="faq">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-edge border-t border-b border-edge">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer font-heading text-sm sm:text-base tracking-wide text-fg">
                {f.q}
                <span className="shrink-0 font-body text-lg text-muted group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 font-body text-muted leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
