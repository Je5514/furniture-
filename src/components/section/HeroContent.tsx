import Link from "next/link";

export default function HeroContent() {
  return (
    <>
      {/* Main Heading */}
      <div className="z-10 w-full text-center md:absolute md:left-1/2 md:top-[9%] md:-translate-x-1/2 md:px-4">
        <h1 className="text-balance text-[clamp(34px,10vw,56px)] font-normal leading-[1.08] tracking-[-0.045em] text-black md:text-[clamp(38px,6.3vw,108px)] md:leading-[1.05]">
          Quiet objects for rooms
          <br className="hidden md:block" /> that{" "}
          <span className="text-[#6d9468]">listen.</span>
        </h1>
      </div>

      {/* Description */}
      <div className="z-20 mx-auto w-full max-w-[340px] text-center md:absolute md:-bottom-[-25%] md:left-[2%] md:mx-0 md:w-[370px] md:max-w-[45%] md:text-left">
        <p className="mb-5 text-[15px] leading-[1.7] text-[#4d5a48] md:text-base">
          A small collection of seating, stone and oak — drawn slowly, made
          by hand in a workshop outside Lisbon.
        </p>

        <Link
          href="#collection"
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#6d9468] px-6 py-2.5 text-sm text-white transition-colors hover:bg-[#4f754d] md:min-h-0 md:w-auto"
        >
          Show Now
        </Link>
      </div>
    </>
  );
}