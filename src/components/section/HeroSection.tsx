import Image from "next/image";
import Hero from "./HeroContent";
import FeatureMarquee from "./Marquee";

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto max-w-[1404px] px-5 md:px-8">
        {/* Hero Background */}
        <div className="relative mt-2 h-[620px] md:h-[760px]">

          {/* Green Background */}
          <div className="absolute inset-x-0 top-0 h-[88%] rounded-[20px] bg-[#eaf0e5]" />

          {/* Heading + Description */}
          <Hero />

          {/* Main Furniture Image */}
          <div className="hidden md:block absolute bottom-[12px] left-1/2 z-10 w-[70%] max-w-[650px] -translate-x-1/2 md:w-[58%]">
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
          <div className="absolute right-[2%] top-[48%] z-20 w-[34%] md:right-[3%] md:w-[25%]">
            <div className="group relative aspect-[1.5/1] overflow-hidden rounded-xl">
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