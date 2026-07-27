"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { header, nav, site, whatsappLink } from "@/data/content";
import Button from "@/components/Button";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mosseta text-2xl text-ink" style={{ letterSpacing: "1.1px" }}>
          {site.name}
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="font-lato text-[15px] font-semibold text-ink transition-colors hover:text-gold-bright">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href={whatsappLink()}>{header.ctaLabel}</Button>
        </div>
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-white px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-lato text-[15px] font-semibold text-ink hover:text-gold-bright">
                {item.label}
              </a>
            ))}
            <Button href={whatsappLink()} className="mt-2 justify-center">
              {header.ctaLabel}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}