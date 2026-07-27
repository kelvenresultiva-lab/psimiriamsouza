import { Star } from "lucide-react";
import { testimonials } from "@/data/content";
import Reveal from "@/components/Reveal";
import DragScroll from "@/components/DragScroll";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.2-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.4 0 10.4-2.1 14.1-5.5l-6.5-5.5c-2 1.4-4.6 2-7.6 2-5.2 0-9.6-3.4-11.3-8l-6.6 5.1C9.6 39.7 16.3 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.2 5.5l6.5 5.5C41.4 36 44 30.6 44 24c0-1.2-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1140px] px-6">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-4 font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {testimonials.title}
          </h2>
        </Reveal>
      </div>
      <Reveal direction="up" delay={100} className="mt-16">
        <DragScroll className="gap-6 px-6 sm:px-[max(1.5rem,calc((100%-1140px)/2))]">
          {testimonials.items.map((item, index) => (
            <div
              key={index}
              className="flex w-[78vw] max-w-[360px] shrink-0 flex-col gap-3 rounded-lg border border-line bg-white p-6 shadow-sm sm:w-[calc((100%-3rem)/3)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-[#FBBC04]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <GoogleIcon />
              </div>
              <p className="font-heebo text-sm font-normal leading-relaxed text-ink/80">
                {item.text}
              </p>
              <span className="font-lato text-sm font-medium text-ink">
                {item.name}
              </span>
            </div>
          ))}
        </DragScroll>
      </Reveal>
    </section>
  );
}