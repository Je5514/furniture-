import Link from "next/link";

export default function HeroContent() {
  return (
    <>
      {/* Main Heading */}
      <div className="absolute left-1/2 top-[9%] z-10 w-full -translate-x-1/2 px-4 text-center">
        <h1 className="text-[clamp(38px,6.3vw,108px)] font-normal leading-[1.05] tracking-[-0.045em] text-black">
          Quiet objects for rooms
          <br />
          that <span className="text-[#6d9468]">listen.</span>
        </h1>
      </div>

      {/* Description */}
      <div className="absolute -bottom-[-25%] left-[2%] z-20 w-[310px] max-w-[45%] md:w-[370px]">
        <p className="mb-5 text-sm leading-[1.7] text-[#4d5a48] md:text-base">
          A small collection of seating, stone and oak — drawn slowly, made
          by hand in a workshop outside Lisbon.
        </p>

        <Link
          href="#collection"
          className="inline-flex items-center rounded-full bg-[#6d9468] px-6 py-2.5 text-sm text-white transition-colors hover:bg-[#4f754d]"
        >
          Show Now
        </Link>
      </div>
    </>
  );
}