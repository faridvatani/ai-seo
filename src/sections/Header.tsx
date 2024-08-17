import { Logo, MenuIcon } from "@/assets";
import Link from "next/link";

const navItems = [
  { href: "#", title: "Features" },
  { href: "#", title: "Developers" },
  { href: "#", title: "Pricing" },
  { href: "#", title: "Changelog" },
];

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <div className="inline-flex items-center justify-center size-10 border border-white/15 rounded-lg">
              <Logo className="size-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {navItems.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-white transition"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative py-2 px-3 text-sm font-medium rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0">
                <div className="absolute border border-white/20 inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="absolute border border-white/40 inset-0 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,0.7)_inset] rounded-lg"></div>
              </div>
              <span>Join waitlist</span>
            </button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
