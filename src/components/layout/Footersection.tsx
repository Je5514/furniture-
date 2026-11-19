import Link from "next/link";
import { footerColumns } from "../../data/footer";
import { Suspense } from "react";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1404px] px-5 pb-10 pt-8 md:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Brand + address */}
          <div>
            <Link href="/" className="text-xl text-[#3b4630]">
              FurnMaren
            </Link>
            <address className="mt-8 text-sm not-italic leading-relaxed text-[#3b4630]">
              Rua das Janelas Verdes 12
              <br />
              1200-690 Kerala, India
            </address>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 lg:gap-x-[70px]">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-sm font-light uppercase tracking-wide text-[#3b4630]">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#3b4630] transition-colors hover:text-[#6b8f63]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#efecd5]">
        <div className="mx-auto max-w-[1404px] px-5 py-6 md:px-8">
          <p className="text-sm text-[#3b4630]">
            ©{" "}
            <Suspense fallback="2026">
              <CurrentYear />
            </Suspense>{" "}
            FurnMaren Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
