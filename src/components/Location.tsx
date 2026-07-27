import { Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Location() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    site.address.embedQuery
  )}&t=m&z=15&output=embed&iwloc=near`;

  const contactItems = [
    {
      icon: Phone,
      title: "Contato Telefônico",
      value: site.phoneDisplay,
      href: whatsappLink(),
    },
    {
      icon: MapPin,
      title: "Endereço de Atendimento",
      value: `${site.address.street} - ${site.address.cityLine}`,
      href: site.address.mapsUrl,
    },
    {
      icon: Mail,
      title: "E-mail de Contato",
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ];

  return (
    <section>
      <iframe
        src={mapSrc}
        title={site.address.street}
        loading="lazy"
        className="h-[500px] w-full border-0 grayscale"
      />

      <Reveal
        direction="up"
        className="relative z-10 -mt-[66px] grid grid-cols-1 bg-[#121212] sm:grid-cols-3"
      >
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-2 border-line/20 px-6 py-10 text-center sm:border-l sm:first:border-l-0"
            >
              <Icon size={30} strokeWidth={1.5} className="text-gold-bright" />
              <h4 className="mt-3 font-playfair text-lg font-semibold text-gold-bright">
                {item.title}
              </h4>
              <p className="font-heebo text-base text-white">{item.value}</p>
            </a>
          );
        })}
      </Reveal>
    </section>
  );
}
