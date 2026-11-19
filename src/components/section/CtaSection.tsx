import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

export default function CtaSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1404px] px-5 pt-8 md:px-8">
        <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[20px] md:h-[562px]">
          <Image
            src="/footer.png"
            alt="Teal living room with an arched shelf, plants and an armchair"
            fill
            sizes="(min-width: 1404px) 1340px, 100vw"
            className="object-cover"
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 flex w-full flex-col items-center px-5 text-center -mt-24 md:-mt-40">
            <h2 className="max-w-[420px] text-4xl font-normal leading-[1.15] text-white md:text-5xl lg:text-[52px]">
              Furniture that fits your lifestyles
            </h2>
            <div className="mt-6 flex w-full justify-center">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}