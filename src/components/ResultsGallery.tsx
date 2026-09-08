import Image from "next/image";
import Section from "./Section";
import CtaButton from "./CtaButton";

const rowA = [
  { name: "Kapil", file: "kapil.png" },
  { name: "Jitesh", file: "jitz.png" },
  { name: "Tim", file: "tim.png" },
  { name: "Yury", file: "yury.png" },
  { name: "Clint", file: "clint.png" },
  { name: "Veena", file: "veena.png" },
];

const rowB = [
  { name: "Meera", file: "meera.png" },
  { name: "Rochelle", file: "rochelle.png" },
  { name: "Sej", file: "sej.png" },
  { name: "Mariya", file: "mariya.png" },
  { name: "Krisha", file: "krisha.png" },
  { name: "Cody", file: "cody.png" },
];

function Row({ people }: { people: { name: string; file: string }[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-6 sm:overflow-visible">
      {people.map((p) => (
        <div key={p.name} className="relative shrink-0 w-40 sm:w-auto aspect-[4/5] snap-start rounded-xl overflow-hidden border border-edge bg-surface">
          <Image src={`/gallery/${p.file}`} alt="Transformation result" fill className="object-cover" sizes="(min-width: 640px) 16vw, 160px" />
        </div>
      ))}
    </div>
  );
}

export default function ResultsGallery() {
  return (
    <Section id="results" className="bg-surface/40">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-center mb-12">Real Results</h2>
        <div className="space-y-6 mb-14">
          <Row people={rowA} />
          <Row people={rowB} />
        </div>
        <CtaButton label="Book a Free Call" />
      </div>
    </Section>
  );
}
