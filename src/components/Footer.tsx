import { AtSign } from "lucide-react";
import { footer, nav, site, whatsappLink } from "@/data/content";
import Button from "@/components/Button";
export default function Footer() {
  return (
    <footer id="contato" className="bg-dark py-16 text-white/70">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 px-6 sm:grid-cols-3">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="font-mosseta text-2xl text-white">{site.name}</h3>
          <p className="mt-2 font-lato text-sm uppercase tracking-[1px] text-gold">
            {site.role}
          </p>
          <p className="mt-4 font-heebo text-sm font-light leading-relaxed">
            {footer.about}
          </p>
          {site.instagramAccounts.map((account) => (
            <a
              key={account.url}
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 font-heebo text-sm hover:text-gold-bright"
            >
              <AtSign size={16} className="text-gold-bright" />
              {account.handle}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h4 className="font-playfair text-lg font-semibold text-white">
            {footer.quickLinksTitle}
          </h4>
          <ul className="mt-4 flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="font-lato text-sm font-light hover:text-gold-bright">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h4 className="font-playfair text-lg font-semibold text-white">
            {footer.hoursTitle}
          </h4>
          <p className="mt-4 font-heebo text-sm font-light leading-relaxed">
            {site.hours}
          </p>
          <p className="mt-1 font-heebo text-xs font-light leading-relaxed text-white/50">
            {site.hoursNote}
          </p>
          <p className="mt-3 font-heebo text-sm font-light leading-relaxed text-gold">
            {site.modality}
          </p>
          <Button href={whatsappLink()} className="mt-6">
            {footer.ctaLabel}
          </Button>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1140px] border-t border-white/10 px-6 pt-6">
        <p className="text-center font-lato text-xs text-white/40 sm:text-left">
          {footer.rightsText}
        </p>
      </div>
    </footer>
  );
}