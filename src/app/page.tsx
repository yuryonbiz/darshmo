import Image from "next/image";
import { TrustBadges } from "@/components/CtaButton";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Empathy from "@/components/Empathy";
import WhoForNotFor from "@/components/WhoForNotFor";
import Testimonials from "@/components/Testimonials";
import PullUpProgression from "@/components/PullUpProgression";
import ResultsGallery from "@/components/ResultsGallery";
import ComparisonTable from "@/components/ComparisonTable";
import YourStory from "@/components/YourStory";
import SocialProofBlock from "@/components/SocialProofBlock";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="noise-bg">
      <Header />
      <Hero />
      <Empathy />
      <WhoForNotFor />
      <Testimonials />
      <PullUpProgression />
      <ResultsGallery />
      <ComparisonTable />
      <YourStory />
      <SocialProofBlock />
      <Faq />

      <div className="py-14 flex flex-col items-center gap-10">
        <TrustBadges />
        <Image
          src="/darshmode-logo-transparent.png"
          alt="MODE"
          width={928}
          height={240}
          className="h-9 w-auto object-contain opacity-80"
        />
      </div>
    </main>
  );
}
