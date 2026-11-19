"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/products";

export default function ProductsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    updateButtons();
    el?.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el?.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.offsetWidth + gap : 300;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1404px] px-5 py-16 md:px-8 md:py-24">
        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-normal text-black md:text-5xl lg:text-[52px]">
              Designed to <span className="text-[#6b8f63]">Inspire</span>
            </h2>
            <p className="mt-4 text-sm text-[#3b4630]">
              Every piece tells a story of modern design, comfort and quality.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous products"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#3b4630] text-white transition disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next products"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#3b4630] text-white transition disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] lg:gap-[50px] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <article
              key={product.id}
              data-card
              className="w-[260px] flex-none snap-start sm:w-[300px] lg:w-[calc((100%-150px)/3.25)]"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-neutral-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 28vw, 300px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 text-lg font-normal text-black">
                {product.name}
              </h3>
              <p className="text-2xl font-normal text-[#3b4630]">
                ${product.price.toFixed(2)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}