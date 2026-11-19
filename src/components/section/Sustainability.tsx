import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const items = [
  { title: "Plastic free packaging", href: "#" },
  { title: "Zero Waste Logistics", href: "#" },
  { title: "End-of-Life Responsibility", href: "#" },
];

export default function SustainabilitySection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1404px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl font-normal leading-[1.15] text-black md:text-5xl lg:text-[52px]">
              <span className="text-[#6b8f63]">Sustainability</span> at every
              step
            </h2>

            <p className="mt-6 max-w-[440px] text-sm leading-[1.7] text-[#3b4630]">
              We care about quality and the planet. Our Furniture is made from
              responsibly beautiful furniture sourced materials.
            </p>

            {/* List */}
            <ul className="mt-14 max-w-[830px]">
              {items.map((item) => (
                <li key={item.title} className="border-b border-[#efecd5]">
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between py-5 text-xl text-black transition-colors hover:text-[#6b8f63] md:py-6 md:text-2xl"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight
                      className="h-5 w-5 text-neutral-700 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#6b8f63]"
                      strokeWidth={1.5}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[520/465] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/sofa2.png"
              alt="Teal velvet sofas and armchairs around a gold and black coffee table"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}