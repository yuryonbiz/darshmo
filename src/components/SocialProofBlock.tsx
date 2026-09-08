import Section from "./Section";
import { SocialProofShot, type Shot } from "./SocialProofShot";

const screenshots: Shot[] = [
  {
    file: "umesh_1.png",
    width: 1307,
    height: 1254,
    rotate: "-rotate-2",
    highlight: { top: 47, left: 3, width: 70, height: 20 },
  },
  {
    file: "penn_1.png",
    width: 1308,
    height: 760,
    rotate: "rotate-2",
    highlight: { top: 21, left: 3, width: 72, height: 22 },
  },
  {
    file: "vish_2.jpg",
    width: 1303,
    height: 952,
    rotate: "-rotate-1",
    highlight: { top: 57, left: 5, width: 72, height: 31 },
  },
  {
    file: "damon_1.png",
    width: 1311,
    height: 1581,
    rotate: "rotate-1",
    highlight: { top: 14, left: 5, width: 71, height: 19 },
  },
  {
    file: "james_2.png",
    width: 1255,
    height: 1195,
    rotate: "-rotate-2",
    highlight: { top: 64, left: 1, width: 74, height: 19 },
  },
];

export default function SocialProofBlock() {
  return (
    <Section className="bg-surface/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-start justify-center gap-8">
          {screenshots.map((s) => (
            <SocialProofShot key={s.file} shot={s} size="w-64 sm:w-72 md:w-80" />
          ))}
        </div>
      </div>
    </Section>
  );
}
