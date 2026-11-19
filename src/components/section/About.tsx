import Image from "next/image";
import { Wallet, Truck, Headset } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Affordable Quality",
    description:
      "Well made furniture that's built to last without the high price tag.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    description: "Get your furniture delivered on time, with care and quality.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description: "Our support team is here to guide you every step of the way.",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1404px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/sofa.png"
              alt="Green velvet armchair beside a wooden sideboard and a tall plant"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl font-normal leading-[1.15] text-black md:text-5xl lg:text-[52px]">
              We design for the{" "}
              <span className="text-[#6b8f63]">space between</span> the
              objects.
            </h2>

            <p className="mt-6 max-w-[600px] text-[16px] leading-[1.7] text-neutral-600">
              Maren began in 2021 as a conversation between two friends — an
              architect and a carpenter — about what a room could feel like when
              nothing in it shouted. Each piece in Volume 01 is drawn,
              prototyped and finished in a single workshop, then numbered by
              hand.
            </p>

            {/* Feature cards */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-lg border border-[#6b8f63]/60 bg-white p-4"
                >
                  <Icon className="h-5 w-5 text-neutral-800" strokeWidth={1.5} />
                  <h3 className="mt-5 text-[16px] font-medium text-black">
                    {title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-neutral-700">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}