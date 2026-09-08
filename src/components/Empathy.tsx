import Section from "./Section";

const lines = [
  "You've been slaving it out. Work, patients, kids, the food you were raised to never waste.",
  "And somewhere in the middle of all that, your body just started falling apart.",
  "Athletic to pathetic. That's what it feels like.",
  "Maybe you've plan-hopped. Tried the rigid meal plans that ignored how you actually live. Paid for the coach who forgot your name by month three.",
  "Or maybe you already know how to train. You know your macros. You still can't explain why none of it stuck.",
  "That knee, that shoulder, that ache in your lower back, you've just learned to work around it, telling yourself it's not a priority.",
  "No matter how many times you say no, it ends up on your plate anyway.",
  "Your doctor told you to just lose it, like it was that simple, like carrying it wasn't already like carrying a backpack you never agreed to wear.",
  "You're not looking for another rigid plan or another three-month contract.",
  "You're looking for the last one.",
];

export default function Empathy() {
  return (
    <Section className="bg-surface/40">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-center mb-10">Athletic to Pathetic</h2>
        <div className="space-y-8">
          {lines.map((line) => (
            <p key={line} className="font-body text-lg sm:text-xl leading-relaxed text-fg text-center">
              {line}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
