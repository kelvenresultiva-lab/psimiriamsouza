import Image from "next/image";
import { gallery } from "@/data/content";
import Reveal from "@/components/Reveal";
import DragScroll from "@/components/DragScroll";

export default function Gallery() {
  return (
    <section id={gallery.id} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1140px] px-6">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
            {gallery.eyebrow}
          </p>
          <h2 className="mt-4 font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {gallery.title}
          </h2>
        </Reveal>
      </div>

      <Reveal direction="up" delay={100} className="mt-12">
        <DragScroll className="gap-6 px-6 sm:px-[max(1.5rem,calc((100%-1140px)/2))]">
          {gallery.images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-square w-[78vw] max-w-[360px] shrink-0 overflow-hidden sm:w-[calc((100%-3rem)/3)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                draggable={false}
                sizes="(min-width: 640px) 33vw, 78vw"
                className="pointer-events-none object-cover"
              />
            </div>
          ))}
        </DragScroll>
      </Reveal>
    </section>
  );
}
