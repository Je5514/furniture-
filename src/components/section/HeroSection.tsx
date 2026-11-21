import Image from "next/image";
import Hero from "./HeroContent";
import FeatureMarquee from "./Marquee";

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto max-w-[1404px] mb-8 px-5 md:px-8">
        {/* Hero card: stacked on mobile, absolute layout from md up */}
        <div className="relative mt-2 flex flex-col gap-7 rounded-[20px] bg-[#eaf0e5] px-5 pb-6 pt-10 md:block md:h-[760px] md:rounded-none md:bg-transparent md:p-0">

          {/* Green Background (desktop only) */}
          <div className="absolute inset-x-0 top-0 hidden h-[88%] rounded-[20px] bg-[#eaf0e5] md:block" />

          {/* Heading + Description */}
          <Hero />

          {/* Main Furniture Image */}
          <div className="hidden md:block z-10 mx-auto w-[88%] max-w-[420px] md:absolute md:bottom-[12px] md:left-1/2 md:w-[58%] md:max-w-[650px] md:-translate-x-1/2">
            <Image
              src="/hero.png"
              alt="Modern wooden dining table with four upholstered chairs"
              width={500}
              height={500}
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Bedroom Preview */}
          <div className="z-20 w-full md:absolute md:right-[3%] md:top-[48%] md:w-[25%]">
            <div className="group relative aspect-[16/9] overflow-hidden rounded-xl md:aspect-[1.5/1]">
              <Image
                src="/video.png"
                alt="Modern bedroom interior"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Play Icon */}
              <button
                aria-label="Play bedroom interior video"
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#465244] transition-transform hover:scale-110"
              >
                <span className="ml-1 text-2xl">▶</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Strip */}
      <FeatureMarquee />
    </section>
  );
}