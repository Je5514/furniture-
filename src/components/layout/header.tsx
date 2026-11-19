import Link from "next/link";
import { ShoppingCart, UserRound } from "lucide-react";
import { navigationLinks } from "../../data/header";

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto flex h-[72px] max-w-[1404px] items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-[21px] font-medium tracking-tight text-[#344333]"
        >
          FurnMaren
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] text-[#465244] transition-colors hover:text-[#72976b]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 text-[#465244]">
          <button aria-label="Shopping cart">
            <ShoppingCart size={21} strokeWidth={1.5} />
          </button>

          <button aria-label="User account">
            <UserRound size={21} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
}