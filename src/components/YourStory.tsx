import Image from "next/image";
import Section from "./Section";
import CtaButton from "./CtaButton";

export default function YourStory() {
  return (
    <Section id="story" className="bg-surface/40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl tracking-wide mb-10">
          From a 20kg Overweight Optometrist With Lower Back Pain, to Coach
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch justify-center mb-10">
          <div className="relative w-full sm:w-3/5 aspect-[16/9] rounded-xl overflow-hidden border border-edge">
            <Image src="/optometrist.jpg" alt="Darsh working as an optometrist" fill className="object-cover" sizes="(min-width: 640px) 60vw, 100vw" />
          </div>
          <div className="relative w-full sm:w-2/5 aspect-square rounded-xl overflow-hidden border border-edge">
            <Image src="/darsh-profile.jpg" alt="Darsh today" fill className="object-cover" sizes="(min-width: 640px) 40vw, 100vw" />
          </div>
        </div>

        <div className="font-body text-fg/90 leading-relaxed space-y-6">
          <p>
            I spent almost a decade in a field that shaped the coach I am today, 9-5, 20kg heavier than I
            wanted to be, stiff enough that hiking would leave my back in pain.
          </p>
          <p>
            Then one photo changed everything. I rebuilt my training, my nutrition, and my habits from the
            ground up, no rigid plans, no quick fixes that never actually work.
          </p>
          <p>
            Now I coach people in that exact same place, stuck in a demanding job, carrying pain
            that&rsquo;s holding them back from things they love, ready to prove to themselves that change
            is still possible.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </Section>
  );
}
