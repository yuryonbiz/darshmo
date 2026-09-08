import Section from "./Section";

const forPoints = [
  "You've got a demanding, inflexible schedule (patients, meetings, kids, or all three) and you've stopped putting yourself anywhere on the list.",
  "Whether you've never tracked a macro in your life or you already know your way around a gym, you're realizing that information alone was never the missing piece. You need someone in your corner making sure it actually happens.",
  "You've quietly given up hope that your body could look or feel a certain way again, and you're ready to be proven wrong.",
];

const notForPoints = [
  "You want a generic plan that ignores your actual week: the ones where you'll have three hours, and the ones where you'll have thirty minutes.",
  "You think the missing piece is more information rather than someone actually walking through it with you.",
  "You can't commit to at least 3 training sessions a week: this only works with consistent effort, not occasional check-ins.",
];

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5 text-accent">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5 text-muted">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function WhoForNotFor() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-14">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wide mb-6">Who This Is Not For</h2>
          <ul className="space-y-4">
            {notForPoints.map((p) => (
              <li key={p} className="flex gap-3 font-body text-muted leading-relaxed">
                <Cross />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wide mb-6">Who This Is For</h2>
          <ul className="space-y-4">
            {forPoints.map((p) => (
              <li key={p} className="flex gap-3 font-body text-fg/90 leading-relaxed">
                <Check />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
