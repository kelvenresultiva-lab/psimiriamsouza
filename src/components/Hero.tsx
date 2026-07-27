import Image from "next/image";
import { Check, Flower2 } from "lucide-react";
import { hero, heroMobile, whatsappLink } from "@/data/content";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* Mobile / tablet: foto de corpo inteiro com o texto sobreposto na faixa
          clara inferior. O fundo #F9F3EE é a cor para a qual a própria imagem
          esmaece, então a emenda entre foto e seção fica invisível. */}
      <div className="bg-[#F9F3EE] lg:hidden">
        <Image
          src={heroMobile.image.src}
          alt={heroMobile.image.alt}
          width={941}
          height={1672}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />

        {/* -30% da largura sobe o texto até ~83% da altura da foto, já na área
            esmaecida; como a margem é proporcional à largura (assim como a
            altura da imagem), o alinhamento se mantém em qualquer tela. */}
        <Reveal
          direction="up"
          className="relative -mt-[50%] px-6 pb-14 text-center"
        >
          <p className="font-lato text-[13px] font-semibold uppercase tracking-[2.3px] text-muted">
            {heroMobile.eyebrow}
          </p>
          <h1 className="mt-3 font-playfair text-4xl font-semibold text-ink">
            {heroMobile.title}
          </h1>

          <div className="mx-auto mt-5 flex w-full max-w-[220px] items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gold-bright/40" />
            <Flower2 size={18} className="shrink-0 text-gold-bright" />
            <span className="h-px flex-1 bg-gold-bright/40" />
          </div>

          <p className="mx-auto mt-5 max-w-xs font-heebo text-sm font-medium uppercase tracking-[1.5px] text-ink/80">
            {heroMobile.tagline}
          </p>

          <div className="mt-7 flex justify-center">
            <Button href={whatsappLink()}>{heroMobile.ctaLabel}</Button>
          </div>
        </Reveal>
      </div>

      {/* Desktop: foto de fundo em tela cheia com texto sobreposto. */}
      <div className="relative hidden bg-white lg:block">
        <div className="absolute inset-0">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_30%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/20 to-transparent" />
        <div className="relative mx-auto flex max-w-[1140px] flex-col gap-6 px-6 pb-[380px] pt-28">
          <Reveal direction="up">
            <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h1 className="max-w-2xl font-mosseta leading-[1.15] text-ink">
              <span className="block text-5xl">{hero.greeting}</span>
              <span className="mt-2 block text-[56px] text-gold-bright">{hero.name}</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="max-w-md font-heebo text-base font-normal leading-relaxed text-ink">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <ul className="flex flex-col gap-3">
              {hero.checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22c55e]">
                    <Check size={13} strokeWidth={3} className="text-white" />
                  </span>
                  <span className="font-heebo text-[15px] font-medium text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={400} className="flex flex-wrap gap-4">
            <Button href={whatsappLink()} variant="outline">
              {hero.ctaLabel}
            </Button>
            <Button href={hero.ctaSecondaryHref}>{hero.ctaSecondaryLabel}</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
