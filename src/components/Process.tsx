import Image from "next/image";
import { process, whatsappLink } from "@/data/content";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import Reveal from "@/components/Reveal";

export default function Process() {
  return (
    <section id="processo" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal direction="up" className="flex flex-col gap-6">
          <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
            {process.eyebrow}
          </p>
          <h2 className="font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {process.title}
          </h2>

          {process.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="font-heebo text-base font-light leading-relaxed text-ink"
            >
              {paragraph}
            </p>
          ))}

          <div className="flex flex-col gap-5">
            {process.progressBars.map((bar) => (
              <ProgressBar key={bar.label} label={bar.label} value={bar.value} />
            ))}
          </div>

          <div>
            <Button href={whatsappLink()}>{process.ctaLabel}</Button>
          </div>
        </Reveal>

        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <Reveal
            direction="right"
            className="relative aspect-[4/5] w-full overflow-hidden"
          >
            <Image
              src={process.image.src}
              alt={process.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal
            direction="right"
            delay={200}
            className="absolute -top-6 left-0 z-10 sm:-left-6"
          >
            <div className="rounded-[15px] border border-line/60 bg-white px-8 py-5 text-center shadow-[0_20px_45px_-15px_rgba(20,20,20,0.35)]">
              <span className="block font-playfair text-3xl font-semibold text-gold-bright">
                {process.stat.value}
              </span>
              <span className="mx-auto mt-2 block h-px w-8 bg-gold-bright/40" />
              <span className="mt-2 block font-lato text-xs font-bold uppercase tracking-[1.5px] text-ink">
                {process.stat.label}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
