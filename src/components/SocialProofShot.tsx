import Image from "next/image";

export type Shot = {
  file: string;
  width: number;
  height: number;
  rotate: string;
  highlight: { top: number; left: number; width: number; height: number };
};

export function SocialProofShot({ shot, size }: { shot: Shot; size: string }) {
  return (
    <div className={`relative ${size} rounded-xl overflow-hidden border border-edge shadow-lg ${shot.rotate}`}>
      <Image
        src={`/social-proof/${shot.file}`}
        alt="Client message screenshot"
        width={shot.width}
        height={shot.height}
        className="w-full h-auto block"
      />
      <div
        className="absolute rounded-md border border-amber-400/80 bg-amber-400/25 mix-blend-screen pointer-events-none"
        style={{
          top: `${shot.highlight.top}%`,
          left: `${shot.highlight.left}%`,
          width: `${shot.highlight.width}%`,
          height: `${shot.highlight.height}%`,
        }}
      />
    </div>
  );
}
