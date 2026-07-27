import { reasons } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Reasons() {
  return (
    <section className="bg-white pt-20 pb-10 lg:pt-28 lg:pb-14">
      <div className="mx-auto max-w-[1140px] px-6">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
            {reasons.eyebrow}
          </p>
          <h2 className="mt-4 font-playfair text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {reasons.title}
          </h2>
          <p className="mt-4 font-heebo text-base font-light leading-relaxed text-muted">
            {reasons.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 items-start gap-x-4 gap-y-10 sm:mt-20 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4">
          {reasons.items.map((item, index) => {
            const numberFirst = index % 2 === 0;
            const number = (
              <span
                key="number"
                className="block font-heebo text-6xl font-semibold leading-none text-white [text-shadow:0px_0px_1px_#000000] sm:text-7xl lg:text-[96px]"
              >
                {item.number}
              </span>
            );
            const text = (
              <div key="text">
                <h3 className="font-playfair text-base font-semibold text-ink sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 font-heebo text-xs font-light leading-relaxed text-muted sm:text-sm">
                  {item.description}
                </p>
              </div>
            );

            return (
              <Reveal
                direction="up"
                delay={index * 100}
                key={item.number}
                className="flex flex-col items-center gap-3 text-center sm:gap-4"
              >
                {numberFirst ? [number, text] : [text, number]}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
